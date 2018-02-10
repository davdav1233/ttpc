/*========================================================================================
 ���� data.js ����
========================================================================================*/
/*----------------------------------------------------------------------------------------
 ���� �萔�ꗗ ����
----------------------------------------------------------------------------------------*/
var MATRIX_WIDTH = 10;               // �}�g���b�N�X�̉��u���b�N��
var DEADLINE_HEIGHT = 3;             // �f�b�h���C���ȏ�Ńu���b�N�̏���ێ����鍂��
var MATRIX_HEIGHT = 23;              // �}�g���b�N�X�̏c�u���b�N���B�f�b�h���C���ȏ���܂�
var SOFT_DROP_SPAN = 1;              // <�t���[��> �\�t�g�h���b�v�� 1 �}�X�i�ނ܂ł̎���
var NATURAL_DROP_SPAN = 36;          // <�t���[��> ���R������ 1 �}�X�i�ނ܂ł̎���
var LINE_CLEAR_DURATION = 15;        // <�t���[��> ���C���������o�̎���
var DISPLAY_FEATURES_DURATION = 45;  // <�t���[��> ���������Z�̕\������
var NEXT_MINOS = 5;                  // �l�N�X�g�\����
var ROTATE_RULES = 5;                // ��]���[����
var HORIZONTAL_CHARGE_DURATION = 7;  // <�t���[��> �L�[�������n�߂Ă��牡�ړ����s�[�g�J�n�܂ł̎���
var HORIZONTAL_REPEAT_SPAN = 1;      // <�t���[��> ���ړ��̎��Ԋ��o

var INITIAL_DIR = 0;                  // �o�����̃~�m�̌���
var INITIAL_X = 3;                    // �o�����̃~�m�� X ���W
var INITIAL_Y = DEADLINE_HEIGHT - 2;  // �o�����̃~�m�� Y ���W

var DEFAULT_KEY_MOVE_LEFT    = 'Left';
var DEFAULT_KEY_MOVE_RIGHT   = 'Right';
var DEFAULT_KEY_SOFTDROP     = 'Down';
var DEFAULT_KEY_HARDDROP     = 'Up';
var DEFAULT_KEY_ROTATE_RIGHT = 'X';
var DEFAULT_KEY_ROTATE_LEFT  = 'Z';
var DEFAULT_KEY_HOLD         = 'Shift';
var DEFAULT_KEY_GUIDE        = 'R';
/*
// ���Ȃ����̃L�[�z�u
var DEFAULT_KEY_MOVE_LEFT    = 'S';
var DEFAULT_KEY_MOVE_RIGHT   = 'F';
var DEFAULT_KEY_SOFTDROP     = 'C';
var DEFAULT_KEY_HARDDROP     = 'D';
var DEFAULT_KEY_ROTATE_RIGHT = 'L';
var DEFAULT_KEY_ROTATE_LEFT  = 'J';
*/
/*----------------------------------------------------------------------------------------
 ���� �}�g���b�N�X�z��  [y][x] ����

 �ݒu�σu���b�N�̔z��ł��B�������̃u���b�N���͕ʂɊǗ����܂��B
----------------------------------------------------------------------------------------*/
var gMatrix = [];
for(var i = 0; i < MATRIX_HEIGHT; i++){
  gMatrix.push([]);
  for(var j = 0; j < MATRIX_WIDTH; j++){
    gMatrix[i].push(0);
  }
}
/*----------------------------------------------------------------------------------------
 ���� �I�u�W�F�N�g: �e��u���b�N ����
----------------------------------------------------------------------------------------*/
function Block(id){
  this.id = id;
  this.toVanish = (id == 2);           // �����\�񂳂�Ă���u���b�N?

  switch(id){
  case 0:  // ��
    this.passable = true;    // ���蔲���\?
    break;
  case 1:  // �D�F�u���b�N
    this.passable = false;
    break;
  case 2:  // �������o���̃u���b�N�BRemoveReservedLines �ň�ď��������
    this.passable = true;
    break;
  // �ݒu�ς̊e�u���b�N
  case 21: case 22: case 23: case 24: case 25: case 26: case 27:
    this.passable = false;
    break;
  // ���̑��̊e�u���b�N
  case 11: case 12: case 13: case 14: case 15: case 16: case 17:
  case 31: case 32: case 33: case 34: case 35: case 36: case 37:
  case 41: case 42: case 43: case 44: case 45: case 46: case 47:
  case 51: case 52: case 53: case 54: case 55: case 56: case 57:
  case 511: case 512: case 513: case 514: case 515: case 516: case 517:
  case 521: case 522: case 523: case 524: case 525: case 526: case 527:
  case 531: case 532: case 533: case 534: case 535: case 536: case 537:
  case 541: case 542: case 543: case 544: case 545: case 546: case 547:
  case 551: case 552: case 553: case 554: case 555: case 556: case 557:
  case 561: case 562: case 563: case 564: case 565: case 566: case 567:
  case 571: case 572: case 573: case 574: case 575: case 576: case 577:
    this.passable = false;
    break;
  // ���̑��̔ԍ�(���݂��Ȃ��u���b�N)�Ȃ�摜�̃L���b�V�������Ȃ�
  default:
    this.passable = false;
    return;
  }

  this.image = 'img/b' + id + '.png';  // �摜�B24 x 24 �s�N�Z��
  this.cache = new Image();
  this.cache.src = this.image;
}
/*----------------------------------------------------------------------------------------
 ���� �u���b�N�I�u�W�F�N�g�ւ̃A�N�Z�X ����
----------------------------------------------------------------------------------------*/
var gBlocks = [];
//for(var i = 0; i <= 57; i++) gBlocks.push(new Block(i));
for(var i = 0; i <= 577; i++) gBlocks.push(new Block(i));
function BlkEmpty(){return gBlocks[0] }
function BlkVanishing(){return gBlocks[2] }
/*----------------------------------------------------------------------------------------
 ���� �I�u�W�F�N�g: ��ʓI�ȉ�]���[�� (ROTation RULE - GENeral) ����
----------------------------------------------------------------------------------------*/
function RotRuleGen(){
  // [��]����(0=�E, 1=��)][��]�O�̃~�m�̌���(0=�o����, 1=�E, 2=�t, 3=��)][���[�� ID ]
  this.dx = [[[0, -1, -1,  0, -1],    // i �� r
              [0,  1,  1,  0,  1],    // r �� v
              [0,  1,  1,  0,  1],    // v �� l
              [0, -1, -1,  0, -1]],   // l �� i
             [[0,  1,  1,  0,  1],    // i �� l
              [0,  1,  1,  0,  1],    // r �� i
              [0, -1, -1,  0, -1],    // v �� r
              [0, -1, -1,  0, -1]]];  // l �� v
  this.dy = [[[0,  0, -1,  2,  2],    // i �� r
              [0,  0,  1, -2, -2],    // r �� v
              [0,  0, -1,  2,  2],    // v �� l
              [0,  0,  1, -2, -2]],   // l �� i
             [[0,  0, -1,  2,  2],    // i �� l
              [0,  0,  1, -2, -2],    // r �� i
              [0,  0, -1,  2,  2],    // v �� r
              [0,  0,  1, -2, -2]]];  // l �� v
  return this;
}
/*----------------------------------------------------------------------------------------
 ���� �I�u�W�F�N�g: I �~�m�̉�]���[�� (ROTation RULE - I) ����
----------------------------------------------------------------------------------------*/
function RotRuleI(){
  // [��]����(0=�E, 1=��)][��]�O�̃~�m�̌���(0=�o����, 1=�E, 2=�t, 3=��)][���[�� ID ]
  this.dx = [[[0, -2,  1, -2,  1],    // i �� r
              [0, -1,  2, -1,  2],    // r �� v
              [0,  2, -1,  2, -1],    // v �� l
              [0,  1, -2,  1, -2]],   // l �� i
             [[0, -1,  2, -1,  2],    // i �� l
              [0,  2, -1,  2, -1],    // r �� i
              [0,  1, -2,  1, -2],    // v �� r
              [0, -2,  1, -2,  1]]];  // l �� v
  this.dy = [[[0,  0,  0,  1, -2],    // i �� r
              [0,  0,  0, -2,  1],    // r �� v
              [0,  0,  0, -1,  2],    // v �� l
              [0,  0,  0,  2, -1]],   // l �� i
             [[0,  0,  0, -2,  1],    // i �� l
              [0,  0,  0, -1,  2],    // r �� i
              [0,  0,  0,  2, -1],    // v �� r
              [0,  0,  0,  1, -2]]];  // l �� v
  return this;
}
/*----------------------------------------------------------------------------------------
 ���� �e��]���[���ւ̃A�N�Z�X�ݒ� ����
----------------------------------------------------------------------------------------*/
var gRotationRuleGeneral = new RotRuleGen();
var gRotationRuleI = new RotRuleI();
/*----------------------------------------------------------------------------------------
 ���� �I�u�W�F�N�g: �e��~�m ����
----------------------------------------------------------------------------------------*/
function IMino(){
  this.id = 1;
  // [�~�m�̌���(0=�o����, 1=�E, 2=�t, 3=��)][ Y ���W][ X ���W]
  this.shape = [[[0, 0, 0, 0],
                 [1, 1, 1, 1], 
                 [0, 0, 0, 0], 
                 [0, 0, 0, 0]],

                [[0, 0, 1, 0], 
                 [0, 0, 1, 0], 
                 [0, 0, 1, 0], 
                 [0, 0, 1, 0]],

                [[0, 0, 0, 0], 
                 [0, 0, 0, 0],
                 [1, 1, 1, 1],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0], 
                 [0, 1, 0, 0], 
                 [0, 1, 0, 0], 
                 [0, 1, 0, 0]]];
  this.activeBlockId = 11;
  this.placedBlockId = 21;
  this.ghostBlockId  = 31;
  this.guideBlockId  = 41;
  this.ghostGuideBlockId = 51;
  this.rotationRule = gRotationRuleI;
  return this;
}
//----------------------------------------------------------------------------------------
function TMino(){
  this.id = 2;
  // [�~�m�̌���(0=�o����, 1=�E, 2=�t, 3=��)][ Y ���W][ X ���W]
  this.shape = [[[0, 1, 0, 0],
                 [1, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [1, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [1, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]]];
  this.activeBlockId = 12;
  this.placedBlockId = 22;
  this.ghostBlockId  = 32;
  this.guideBlockId  = 42;
  this.ghostGuideBlockId = 52;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function JMino(){
  this.id = 3;
  // [�~�m�̌���(0=�o����, 1=�E, 2=�t, 3=��)][ Y ���W][ X ���W]
  this.shape = [[[1, 0, 0, 0],
                 [1, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [1, 1, 1, 0],
                 [0, 0, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [1, 1, 0, 0],
                 [0, 0, 0, 0]]];
  this.activeBlockId = 13;
  this.placedBlockId = 23;
  this.ghostBlockId  = 33;
  this.guideBlockId  = 43;
  this.ghostGuideBlockId = 53;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function LMino(){
  this.id = 4;
  // [�~�m�̌���(0=�o����, 1=�E, 2=�t, 3=��)][ Y ���W][ X ���W]
  this.shape = [[[0, 0, 1, 0],
                 [1, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [1, 1, 1, 0],
                 [1, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[1, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]]];
  this.activeBlockId = 14;
  this.placedBlockId = 24;
  this.ghostBlockId  = 34;
  this.guideBlockId  = 44;
  this.ghostGuideBlockId = 54;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function ZMino(){
  this.id = 5;
  // [�~�m�̌���(0=�o����, 1=�E, 2=�t, 3=��)][ Y ���W][ X ���W]
  this.shape = [[[1, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 1, 0],
                 [0, 1, 1, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [1, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [1, 1, 0, 0],
                 [1, 0, 0, 0],
                 [0, 0, 0, 0]]];
  this.activeBlockId = 15;
  this.placedBlockId = 25;
  this.ghostBlockId  = 35;
  this.guideBlockId  = 45;
  this.ghostGuideBlockId = 55;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function SMino(){
  this.id = 6;
  // [�~�m�̌���(0=�o����, 1=�E, 2=�t, 3=��)][ Y ���W][ X ���W]
  this.shape = [[[0, 1, 1, 0],
                 [1, 1, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 0, 0],
                 [0, 1, 1, 0],
                 [0, 0, 1, 0],
                 [0, 0, 0, 0]],

                [[0, 0, 0, 0],
                 [0, 1, 1, 0],
                 [1, 1, 0, 0],
                 [0, 0, 0, 0]],

                [[1, 0, 0, 0],
                 [1, 1, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 0]]];
  this.activeBlockId = 16;
  this.placedBlockId = 26;
  this.ghostBlockId  = 36;
  this.guideBlockId  = 46;
  this.ghostGuideBlockId = 56;
  this.rotationRule = gRotationRuleGeneral;
  return this;
}
//----------------------------------------------------------------------------------------
function OMino(){
  this.id = 7;
  // [�~�m�̌���(0=�o����, 1=�E, 2=�t, 3=��)][ Y ���W][ X ���W]
  this.shape = [[[0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],

                [[0, 1, 1, 0],
                 [0, 1, 1, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]]];
  this.activeBlockId = 17;
  this.placedBlockId = 27;
  this.ghostBlockId  = 37;
  this.guideBlockId  = 47;
  this.ghostGuideBlockId = 57;
  this.rotationRule = gRotationRuleGeneral;  // �K�v�Ȃ��ł����֋X��
  return this;
}
/*----------------------------------------------------------------------------------------
 ���� T-SPIN ����ɗp����u���b�N�ʒu ����

 ttt.js �� TsType ������Ăяo����܂��B[dir][y][x]
 1 �ɂȂ��Ă���ꏊ(�e 4 �ӏ�)�̂��� 3 �ӏ��ȏオ�ʉߕs�Ȃ�� T-SPIN �Ɣ��肳��܂��B
----------------------------------------------------------------------------------------*/
var gTsTiles = [[[1, 0, 1, 0],
                 [0, 0, 0, 0],
                 [1, 0, 1, 0],
                 [0, 0, 0, 0]],
                [[1, 0, 1, 0],
                 [0, 0, 0, 0],
                 [1, 0, 1, 0],
                 [0, 0, 0, 0]],
                [[1, 0, 1, 0],
                 [0, 0, 0, 0],
                 [1, 0, 1, 0],
                 [0, 0, 0, 0]],
                [[1, 0, 1, 0],
                 [0, 0, 0, 0],
                 [1, 0, 1, 0],
                 [0, 0, 0, 0]]];
/*----------------------------------------------------------------------------------------
 ���� T-SPIN MINI ����ɗp����u���b�N�ʒu ����

 ttt.js �� TsType ������Ăяo����܂��B[dir][y][x]
//----------------------------------------------------------------------------------------
 T-SPIN ���������Ă���ꍇ�A���ꂪ�ʏ�� T-SPIN ���A���邢�� T-SPIN MINI ���𔻒肵�܂��B
 1 �ɂȂ��Ă���ꏊ(�e 2 �ӏ�)�� 2 �ӏ��Ƃ��ʉߕs�Ȃ�� T-SPIN �ɁA�����łȂ���� T-SPIN
 MINI �Ɣ��肳��܂��B��O�I�ɁA���O�ɑ� 5 ���̉�]�������ꍇ�� T-SPIN MINI �ɂȂ�Ȃ���
 ��܂�( TST ���̉�]��u T-SPIN FIN �v��)�B
----------------------------------------------------------------------------------------*/
var gTssTiles = [[[1, 0, 1, 0],
                  [0, 0, 0, 0],
                  [0, 0, 0, 0],
                  [0, 0, 0, 0]],
                 [[0, 0, 1, 0],
                  [0, 0, 0, 0],
                  [0, 0, 1, 0],
                  [0, 0, 0, 0]],
                 [[0, 0, 0, 0],
                  [0, 0, 0, 0],
                  [1, 0, 1, 0],
                  [0, 0, 0, 0]],
                 [[1, 0, 0, 0],
                  [0, 0, 0, 0],
                  [1, 0, 0, 0],
                  [0, 0, 0, 0]]];
/*----------------------------------------------------------------------------------------
 ���� �e�~�m�ւ̃A�N�Z�X�ݒ� ����
----------------------------------------------------------------------------------------*/
var I = new IMino();
var T = new TMino();
var J = new JMino();
var L = new LMino();
var Z = new ZMino();
var S = new SMino();
var O = new OMino();
var gMino = [null, I, T, J, L, Z, S, O];
/*----------------------------------------------------------------------------------------
 ���� �I�u�W�F�N�g: �K�C�h ����

 �~�m�͎����I�ɍ��������Ă�����̂��I�΂�܂��B
----------------------------------------------------------------------------------------*/
function Guide(mino, dir, x, y){
  this.mino = mino;
  this.dir = dir;
  this.x = x;
  this.y = y;  // �f�b�h���C���̕��͊܂߂Ȃ�
}
/*----------------------------------------------------------------------------------------
 ���� �K�C�h�I�u�W�F�N�g�����̊ȗ��\�L ����
----------------------------------------------------------------------------------------*/
function G(mino, dir, x, y){
  return new Guide(mino, dir, x, y);
}
/*----------------------------------------------------------------------------------------
 ���� �Z�N�V�������̎擾 ����

 <id>�Ԗڂ̃Z�N�V���������擾���܂��B������ҏW�����ꍇ�́A�Y�ꂸ�� index.html �ɂ����f��
 ���Ă��������B
----------------------------------------------------------------------------------------*/
function SectionTitle(id){
  switch(id){
  case  0: return '�P�@TETRiS (�e�g���X�B�S�����) �ŃE�H�[�~���O�A�b�v'; break;
  case  1: return '�Q�@T-SPIN (�s�X�s��) �̑O�ɁA�s�~�m�̉�]�g�������u��'; break;
  case  2: return '�R�@�s�^�̌��� TSD'; break;
  case  3: return '�S�@���񌊂� TSD'; break;
  case  4: return '�T�@���񌊂� TSD [�K�C�h�Ȃ�]'; break;
  case  5: return '�U�@�u���t�̋Z�@�v(�ςݍ��݌^)'; break;
  case  6: return '�V�@�u���t�̋Z�@�v(�ςݍ��݌^) [�K�C�h�Ȃ�]'; break;
  case  7: return '�W�@������Ƃ������Z�@TSM (�s�X�s���E�~�j)'; break;
  case  8: return '�X�@�ő勉�̍U���́I�@TST (�s�X�s���E�g���v��)'; break;
  case  9: return '10�@TST ��g�ݗ��Ă�'; break;
  case 10: return '11�@�L���ȊJ���e���v��(�e���v���[�g)'; break;
  case 11: return '12�@���'; break;
  case 12: return '13�@�@��'; break;
  case 13: return '14�@�i�E�k�̓����]( SRS�B�X�[�p�[���[�e�[�V�����V�X�e��)'; break;
  case 14: return '15�@�r�E�y�̓����]'; break;
  case 15: return '16�@�h�̓����]�ƐV�^ T-SPIN'; break;
  case 16: return '17�@SRS �̎��H'; break;
  case 17: return '18�@SRS �̎��H [�K�C�h�Ȃ�]'; break;
  case 18: return '19�@���ԃe�X�g'; break;
  case 19: return '20�@�ړ��̍œK��(�n�h�s�i�k)'; break;
  case 20: return '21�@�ړ��̍œK��(�r�y)'; break;
  case 21: return '22�@���낢��� T-SPIN �e�N�j�b�N���J���e���v���Q'; break;
  case 22: return '23�@�u���t�̋Z�@�v(���^)'; break;
  case 23: return '24�@�u�h�l�C�g�v'; break;
  case 24: return '25�@�u�h�l�C�g�v [�K�C�h�Ȃ�]'; break;
  case 25: return '26�@��ǂ݂s�X�s��'; break;
  case 26: return '27�@��ǂ݂s�X�s�� [�K�C�h�Ȃ�]'; break;
  case 27: return '28�@�����e�X�g'; break;
  case 28: return '29�@���ƃe�X�g(���)'; break;
  case 29: return '30�@���܂�'; break;
  }
  return "�H";
}