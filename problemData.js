/*----------------------------------------------------------------------------------------
 ���� �I�u�W�F�N�g: ��� ����
----------------------------------------------------------------------------------------*/
var initialPCBlocks = [[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                       [24,24,24, 0, 0, 0, 0, 0,26,26],
                       [24,27,27, 0, 0, 0, 0,26,26,22],
                       [23,27,27, 0, 0, 0,25,25,22,22],
                       [23,23,23, 0, 0, 0, 0,25,25,22]];

var guides_IJT = [G(I, 1, 1, 16), G(I, 0, 4, 15), G(J, 0, 4, 18), G(T, 2, 4, 17)];
var guides_ITJ = [G(I, 1, 1, 16), G(I, 0, 4, 15), G(T, 2, 4, 16), G(J, 0, 4, 18)];
var guides_TIJ = [G(I, 1, 1, 16), G(T, 2, 4, 16), G(I, 0, 4, 16), G(J, 0, 4, 18)];
var guides_TJI = [G(I, 1, 1, 16), G(T, 2, 4, 16), G(J, 0, 4, 18), G(I, 0, 4, 18)];
var guides_JIT = [G(I, 1, 1, 16), G(J, 0, 4, 18), G(I, 0, 4, 16), G(T, 2, 4, 17)];
var guides_JTI = [G(I, 1, 1, 16), G(J, 0, 4, 18), G(T, 2, 4, 17), G(I, 0, 4, 18)];
var guides_IOJ = [G(I, 1, 1, 16), G(I, 0, 4, 15), G(O, 0, 3, 18), G(J, 2, 4, 17)];
var guides_OIJ = [G(I, 1, 1, 16), G(O, 0, 3, 18), G(I, 0, 4, 16), G(J, 2, 4, 17)];
var guides_OJI = [G(I, 1, 1, 16), G(O, 0, 3, 18), G(J, 2, 4, 17), G(I, 0, 4, 18)];
var guides_ISJ = [G(I, 1, 1, 16), G(I, 0, 4, 15), G(S, 0, 4, 17), G(J, 0, 4, 18)];
var guides_SJI = [G(I, 1, 1, 16), G(S, 0, 4, 17), G(J, 0, 4, 18), G(I, 0, 4, 18)];
var guides_SIJ = [G(I, 1, 1, 16), G(S, 0, 4, 17), G(I, 0, 4, 16), G(J, 0, 4, 18)];
var guides_IZL = [G(I, 1, 1, 16), G(I, 0, 4, 15), G(Z, 0, 4, 18), G(L, 2, 4, 17)];
var guides_ZIL = [G(I, 1, 1, 16), G(Z, 0, 4, 18), G(I, 0, 4, 16), G(L, 2, 4, 17)];
var guides_ZLI = [G(I, 1, 1, 16), G(Z, 0, 4, 18), G(L, 2, 4, 17), G(I, 0, 4, 18)];
var guides_JZS = [G(I, 1, 1, 16), G(J, 0, 4, 16), G(Z, 3, 4, 17), G(S, 0, 5, 18)];
var guides_LTI = [G(I, 1, 1, 16), G(L, 1, 4, 17), G(T, 2, 5, 15), G(I, 1, 2, 16)];
var guides_LIT = [G(I, 1, 1, 16), G(L, 1, 4, 17), G(I, 1, 2, 16), G(T, 2, 5, 17)];
var guides_TLI = [G(I, 1, 1, 16), G(T, 0, 4, 18), G(L, 2, 4, 17), G(I, 0, 4, 18)];
var guides_TIL = [G(I, 1, 1, 16), G(T, 0, 4, 18), G(I, 0, 4, 16), G(L, 2, 4, 17)];
var guides_ITL = [G(I, 1, 1, 16), G(I, 0, 4, 15), G(T, 0, 4, 18), G(L, 2, 4, 17)];
var guides_ITO = [G(I, 1, 1, 16), G(I, 0, 4, 15), G(T, 1, 3, 17), G(O, 0, 4, 18)];
var guides_TIO = [G(I, 1, 1, 16), G(T, 1, 3, 17), G(I, 0, 4, 16), G(O, 0, 4, 18)];
var guides_TOI = [G(I, 1, 1, 16), G(T, 1, 3, 17), G(O, 0, 4, 18), G(I, 0, 4, 18)];
var guides_ITS = [G(I, 1, 1, 16), G(I, 1, 2, 16), G(T, 1, 4, 16), G(S, 0, 5, 18)];
var guides_TIS = [G(I, 1, 1, 16), G(T, 1, 4, 16), G(I, 1, 2, 16), G(S, 0, 5, 18)];
var guides_TJL = [G(I, 1, 1, 16), G(T, 1, 3, 17), G(J, 1, 5, 17), G(L, 3, 4, 17)];
var guides_TLJ = [G(I, 1, 1, 16), G(T, 1, 3, 17), G(L, 3, 4, 17), G(J, 1, 5, 17)];
var guides_TZS = [G(I, 1, 1, 16), G(T, 1, 3, 17), G(Z, 0, 4, 17), G(S, 0, 5, 18)];
var guides_TSZ = [G(I, 1, 1, 16), G(T, 1, 3, 17), G(S, 0, 5, 17), G(Z, 0, 4, 18)];
var guides_ZJS = [G(I, 1, 1, 16), G(Z, 0, 4, 18), G(J, 1, 3, 17), G(S, 0, 5, 18)];
var guides_ZSJ = [G(I, 1, 1, 16), G(Z, 0, 4, 18), G(S, 0, 5, 17), G(J, 1, 3, 17)];
var guides_JST = [G(I, 1, 1, 16), G(J, 0, 4, 18), G(S, 1, 3, 17), G(T, 2, 5, 17)];
var guides_OJT = [G(I, 1, 1, 16), G(O, 0, 3, 18), G(J, 0, 4, 17), G(T, 2, 5, 17)];
var guides_TJS = [G(I, 1, 1, 16), G(T, 0, 4, 18), G(J, 1, 3, 17), G(S, 0, 5, 18)];
var guides_TSJ = [G(I, 1, 1, 16), G(T, 0, 4, 18), G(S, 0, 5, 17), G(J, 1, 3, 17)];
var guides_TOJ = [G(I, 0, 3, 18), G(T, 2, 5, 16), G(O, 0, 3, 18), G(J, 1, 2, 17)];
var guides_TJO = [G(I, 0, 3, 18), G(T, 2, 5, 16), G(J, 1, 2, 17), G(O, 0, 3, 18)];
var guides_OTJ = [G(I, 0, 3, 18), G(O, 0, 3, 18), G(T, 2, 5, 16), G(J, 1, 2, 17)];
var guides_JTO = [G(I, 0, 3, 18), G(J, 1, 2, 17), G(T, 2, 5, 16), G(O, 0, 3, 18)];
var guides_TLO = [G(I, 0, 3, 18), G(T, 2, 5, 16), G(L, 0, 3, 18), G(O, 0, 2, 18)];
var guides_LTO = [G(I, 0, 3, 18), G(L, 0, 3, 18), G(T, 2, 5, 17), G(O, 0, 2, 18)];
var guides_LOT = [G(I, 0, 3, 18), G(L, 0, 3, 18), G(O, 0, 2, 18), G(T, 2, 5, 17)];
var guides_STO = [G(I, 0, 3, 18), G(S, 0, 5, 17), G(T, 1, 2, 17), G(O, 0, 3, 18)];
var guides_TSO = [G(I, 0, 3, 18), G(T, 1, 2, 17), G(S, 0, 5, 17), G(O, 0, 3, 18)];
var guides_SZL = [G(I, 0, 3, 18), G(S, 0, 5, 17), G(Z, 0, 3, 18), G(L, 2, 3, 17)];
var guides_ZSL = [G(I, 0, 3, 18), G(Z, 0, 3, 18), G(S, 0, 5, 17), G(L, 2, 3, 17)];
var guides_SOJ = [G(I, 0, 3, 18), G(S, 0, 5, 17), G(O, 0, 2, 18), G(J, 2, 3, 17)];
var guides_OSJ = [G(I, 0, 3, 18), G(O, 0, 2, 18), G(S, 0, 5, 17), G(J, 2, 3, 17)];
var guides_LTZ = [G(I, 0, 3, 16), G(L, 2, 3, 17), G(T, 2, 5, 17), G(Z, 0, 3, 18)];
var guides_LZT = [G(I, 0, 3, 16), G(L, 2, 3, 17), G(Z, 0, 3, 18), G(T, 2, 5, 17)];
var guides_LTS = [G(I, 0, 3, 16), G(L, 2, 3, 17), G(T, 2, 3, 17), G(S, 0, 5, 18)];
var guides_LST = [G(I, 0, 3, 16), G(L, 2, 3, 17), G(S, 0, 5, 18), G(T, 2, 3, 17)];
var guides_JTZ = [G(I, 0, 3, 18), G(J, 0, 3, 18), G(T, 2, 5, 17), G(Z, 0, 3, 18)];
var guides_JZT = [G(I, 0, 3, 18), G(J, 0, 3, 18), G(Z, 0, 3, 18), G(T, 2, 5, 17)];
var guides_JTS = [G(I, 0, 3, 18), G(J, 0, 3, 18), G(T, 2, 3, 17), G(S, 0, 5, 18)];
var guides_LOS = [G(I, 0, 3, 16), G(L, 1, 2, 17), G(O, 0, 3, 17), G(S, 2, 5, 17)];
var guides_LIZ = [G(I, 0, 3, 16), G(L, 1, 2, 17), G(I, 0, 4, 16), G(Z, 0, 4, 18)];
var guides_LZI = [G(I, 0, 3, 16), G(L, 1, 2, 17), G(Z, 0, 4, 18), G(I, 0, 4, 18)];
var guides_OJS = [G(I, 0, 3, 16), G(O, 0, 2, 18), G(J, 2, 3, 16), G(S, 0, 5, 18)];
var guides_TSI = [G(I, 0, 3, 18), G(T, 1, 2, 17), G(S, 0, 4, 18), G(I, 0, 4, 18)];
var guides_STI = [G(I, 0, 3, 18), G(S, 0, 4, 18), G(T, 1, 2, 17), G(I, 0, 4, 18)];
var guides_ILO = [G(I, 0, 3, 18), G(I, 0, 3, 17), G(L, 2, 5, 17), G(O, 0, 2, 18)];
var guides_IOL = [G(I, 0, 3, 18), G(I, 0, 3, 17), G(O, 0, 2, 18), G(L, 2, 5, 17)];
var guides_LIO = [G(I, 0, 3, 16), G(L, 2, 5, 16), G(I, 0, 3, 18), G(O, 0, 2, 18)];
var guides_LSIO= [G(L, 2, 3, 17), G(S, 1, 2, 17), G(I, 0, 4, 16), G(O, 0, 4, 18)];

function shuffle(array) {
  var n = array.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return array;
}

function ProblemIds(type){

  var problemIds = [];

  switch(type){
  case   0:  /* I �c�u�� �i�K�C�h����j*/
    problemIds = [841,842,843,844,845,846,847,848,849,850,851,852,853,854];
    break;
  case   1:  /* I �c�u�� */
    problemIds = [3,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,23,25,27,29,31,33,34,35,36,37,38,39,40,41,42,43,44,45,49,53,54,55,56,57,58,61,62,63,64,65,69,73,74,75,76,77,78,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,103,104,105,106,107,108,109,110,113,114,117,118,119,120,123,125,126,127,128,129,130,131,132,133,134,135,136,137,139,140,143,151,153,159,161,162,163,164,165,167,169,171,173,174,175,176,177,179,180,181,182,183,184,185,187,189,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,213,214,215,216,217,218,220,221,223,224,225,227,231,233,234,235,236,237,240,243,245,247,249,251,253,254,255,256,257,258,259,260,263,271,273,279,281,283,285,287,293,301,303,305,313,321,322,323,324,325,326,327,328,329,330,333,334,336,337,338,340,341,342,343,344,345,347,349,353,354,357,361,362,363,364,365,369,373,374,375,376,377,378,381,382,383,384,385,387,389,391,393,394,395,396,397,399,400,401,403,405,407,413,421,425,427,441,442,443,444,445,446,447,448,449,450,453,454,456,457,460,461,462,465,467,468,469,474,481,482,483,484,485,489,493,494,495,496,497,498,501,502,503,504,505,507,509,511,513,514,515,516,517,518,519,520,521,523,525,533,541,545,547,561,562,563,564,565,566,567,568,569,570,572,573,574,576,577,578,579,580,581,582,585,586,587,588,589,590,594,598,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,633,634,635,636,637,638,640,641,642,643,644,645,646,647,648,649,650,653,654,656,657,658,660,661,662,663,664,665,666,667,668,669,670,673,674,676,677,680,681,682,683,684,685,686,687,688,689,690,692,693,694,696,697,698,699,700,701,702,703,704,705,706,708,709,710,712,713,716,717,718,719,720,721,723,724,725,726,727,728,729,730,733,734,737,738,739,740,741,743,744,745,747,751,753,754,755,756,757,760,761,762,763,764,765,767,769,773,774,777,781,782,785,787,788,789,794,801,802,805,806,807,808,809,810,814,818,821,822,823,824,825,826,828,829,830,832,833,836,837,838,839,840];
    shuffle(problemIds);
    break;
  case   2:  /* ���� I �~�m�P�i�ځi�K�C�h����j */
    problemIds = [855,856,857,858,859,860];
    break;
  case   3:  /* ���� I �~�m�P�i�� */
    problemIds = [147,154,170,172,190,192,212,219,239,267,274,290,291,294,295,296,300,310,311,315,317,318,319,320,331,332,335,339,352,355,356,359,390,392,410,411,414,415,416,420,426,428,430,433,434,435,436,438,439,451,452,455,458,475,478,510,512,530,531,535,537,538,539,540,546,548,550,553,554,555,556,558,559,571,575,591,592,595,597,599,600,632,639,651,652,655,659,671,672,675,678,691,695,707,711,714,759,772,775,776,779,795,798,811,812,815,817,819,820,827,831,834];
    shuffle(problemIds);
    break;
  case   4:  /* �S���Q�����i�K�C�h����j */
    problemIds = [861,862,863,864];
    break;
  case   5:  /* �S���Q���� */
    problemIds = [155,156,160,228,232,238,275,276,280,307,314,316,348,358,360,527,534,536,748,752,758,768,778,780];
    shuffle(problemIds);
    break;
  case   6:  /* I I L O�i�K�C�h����j */
    problemIds = [865];
    break;
  case   7:  /* I I L O */
    problemIds = [1,21,26,28,30,46,47,48,50,66,70,121,141,241,246,248,250,261,282,284,302,366,367,368,370,402,404,486,490,522];
    shuffle(problemIds);
    break;
  case   8:  /* ���� I �~�m3�i�ځi�K�C�h����j */
    problemIds = [866,867,868];
    break;
  case   9:  /* ���� I �~�m3�i�� */
    problemIds = [24,32,144,146,157,166,244,252,264,266,277,286,289,292,297,299,304,309,312,351,386,406,409,412,417,419,524,529,532,771];
    shuffle(problemIds);
    break;
  case   10:  /* LSIO �i�K�C�h����j*/
    problemIds = [869];
    break;
  case   11:  /* LSIO */
    problemIds = [289,290,291,292,302,306,309,310,311,312,315,319];
    break;
  case   12:  /* �����_��100�� */
    var tmp = shuffle([1,3,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,53,54,55,56,57,58,61,62,63,64,65,66,69,70,73,74,75,76,77,78,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,103,104,105,106,107,108,109,110,113,114,117,118,119,120,121,123,125,126,127,128,129,130,131,132,133,134,135,136,137,139,140,141,143,144,146,147,151,153,154,155,156,157,159,160,161,162,163,164,165,166,167,169,170,171,172,173,174,175,176,177,179,180,181,182,183,184,185,187,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,223,224,225,227,228,231,232,233,234,235,236,237,238,239,240,241,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,263,264,266,267,271,273,274,275,276,277,279,280,281,282,283,284,285,286,287,289,290,291,292,293,294,295,296,297,299,300,301,302,303,304,305,306,307,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,347,348,349,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,373,374,375,376,377,378,381,382,383,384,385,386,387,389,390,391,392,393,394,395,396,397,399,400,401,402,403,404,405,406,407,409,410,411,412,413,414,415,416,417,419,420,421,425,426,427,428,430,433,434,435,436,438,439,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,460,461,462,465,467,468,469,474,475,478,481,482,483,484,485,486,489,490,493,494,495,496,497,498,501,502,503,504,505,507,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,527,529,530,531,532,533,534,535,536,537,538,539,540,541,545,546,547,548,550,553,554,555,556,558,559,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,585,586,587,588,589,590,591,592,594,595,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,716,717,718,719,720,721,723,724,725,726,727,728,729,730,733,734,737,738,739,740,741,743,744,745,747,748,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,767,768,769,771,772,773,774,775,776,777,778,779,780,781,782,785,787,788,789,794,795,798,801,802,805,806,807,808,809,810,811,812,814,815,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,836,837,838,839,840]);
    problemIds = tmp.slice(0,100);
    shuffle(problemIds);
    break;
  case   13:  /* �S��� */
    problemIds = [1,3,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,53,54,55,56,57,58,61,62,63,64,65,66,69,70,73,74,75,76,77,78,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,103,104,105,106,107,108,109,110,113,114,117,118,119,120,121,123,125,126,127,128,129,130,131,132,133,134,135,136,137,139,140,141,143,144,146,147,151,153,154,155,156,157,159,160,161,162,163,164,165,166,167,169,170,171,172,173,174,175,176,177,179,180,181,182,183,184,185,187,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,223,224,225,227,228,231,232,233,234,235,236,237,238,239,240,241,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,263,264,266,267,271,273,274,275,276,277,279,280,281,282,283,284,285,286,287,289,290,291,292,293,294,295,296,297,299,300,301,302,303,304,305,306,307,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,347,348,349,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,373,374,375,376,377,378,381,382,383,384,385,386,387,389,390,391,392,393,394,395,396,397,399,400,401,402,403,404,405,406,407,409,410,411,412,413,414,415,416,417,419,420,421,425,426,427,428,430,433,434,435,436,438,439,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,460,461,462,465,467,468,469,474,475,478,481,482,483,484,485,486,489,490,493,494,495,496,497,498,501,502,503,504,505,507,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,527,529,530,531,532,533,534,535,536,537,538,539,540,541,545,546,547,548,550,553,554,555,556,558,559,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,585,586,587,588,589,590,591,592,594,595,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,716,717,718,719,720,721,723,724,725,726,727,728,729,730,733,734,737,738,739,740,741,743,744,745,747,748,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,767,768,769,771,772,773,774,775,776,777,778,779,780,781,782,785,787,788,789,794,795,798,801,802,805,806,807,808,809,810,811,812,814,815,817,818,819,820,821,822,823,824,825,826,827,828,829,830,831,832,833,834,836,837,838,839,840];
    shuffle(problemIds);
    break;

  default:
    problemIds = [];
    break;
  }

  return problemIds;
}
