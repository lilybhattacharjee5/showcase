// ls party breakdown data
var ls1 = {'Indian National Congress': 398,
 'Independent': 36,
 'Communist Party': 17,
 'Socialist Party': 11,
 'Kisan Mazdoor Praja Party': 10,
 'Anglo-Indian (Nominated)': 7,
 'Peoples Democratic Front': 7,
 'Praja Socialist Party': 7,
 'Akali Dal': 4,
 'Ganatantra Parishad': 4,
 'Other': 18}

var ls2 = {'Indian National Congress': 406,
 'Communist Party': 29,
 'Independent': 25,
 'Praja Socialist Party': 17,
 'Socialist Party': 7,
 'Ganatantra Parishad': 6,
 'Janata Party': 6,
 'Jharkhand Party': 6,
 'Scheduled Castes Federation': 6,
 'Jan Sangh': 5,
 'Other': 12}

var ls3 = {'Indian National Congress': 394,
 'Communist Party': 30,
 'Swatantra Party': 25,
 'Independent': 20,
 'Jan Sangh': 14,
 'Praja Socialist Party': 13,
 'Dravida Munnetra Kazhagam': 8,
 'Socialist Party': 6,
 'Jharkhand Party': 3,
 'Republican Party of India': 3,
 'Other': 18};

var ls4 = {'Indian National Congress': 303,
 'Swatantra Party': 45,
 'Independent': 35,
 'Jan Sangh': 32,
 'Dravida Munnetra Kazhagam': 26,
 'Communist Party': 24,
 'Samyukta Socialist Party': 23,
 'Communist Party of India (Marxist)': 19,
 'Praja Socialist Party': 12,
 'Bangla Congress': 4,
 'Other': 23};

var ls5 = {'Indian National Congress': 372,
 'Communist Party': 25,
 'Dravida Munnetra Kazhagam': 25,
 'Communist Party of India (Marxist)': 24,
 'Jan Sangh': 23,
 'Independent': 15,
 'Indian National Congress (Organization)': 14,
 'Telangana Praja Samithi': 10,
 'Swatantra Party': 7,
 'Janata Party': 4,
 'Other': 22};

var ls6 = {'Janata Party': 302,
 'Indian National Congress': 164,
 'Communist Party of India (Marxist)': 22,
 'All India Anna Dravida Munnetra Kazhagam': 19,
 'Akali Dal': 9,
 'Communist Party': 7,
 'Independent': 7,
 'Unattached': 6,
 'Peasants and Workers Party of India': 5,
 'Revolutionary Socialist Party (India)': 4,
 'Other': 7};

var ls7 = {'Indian National Congress': 377,
 'Janata Party (Secular)': 43,
 'Communist Party of India (Marxist)': 39,
 'Janata Party': 17,
 'Dravida Munnetra Kazhagam': 16,
 'Communist Party of India': 14,
 'Bharatiya Janata Party': 13,
 'Indian National Congress (Socialist)': 10,
 'Unattached': 7,
 'Jammu & Kashmir National Conference': 5,
 'Other': 12};

var ls8 = {'Indian National Congress': 426,
 'Telugu Desam Party': 30,
 'Communist Party of India (Marxist)': 23,
 'Janata Party': 16,
 'All India Anna Dravida Munnetra Kazhagam': 12,
 'Independent': 9,
 'Asom Gana Parishad': 7,
 'Akali Dal': 7,
 'Communist Party of India': 6,
 'Indian National Congress (Socialist)': 5,
 'Other': 10};

var ls9 = {'Indian National Congress': 195,
 'Janata Dal': 142,
 'Bharatiya Janata Party': 89,
 'Communist Party of India (Marxist)': 34,
 'Communist Party of India': 12,
 'All India Anna Dravida Munnetra Kazhagam': 11,
 'Independent': 8,
 'Shiromani Akali Dal': 7,
 'Bahujan Samaj Party': 4,
 'Revolutionary Socialist Party (India)': 4,
 'Other': 16};

var ls10 = {'Indian National Congress': 252,
 'Bharatiya Janata Party': 121,
 'Janata Dal': 63,
 'Communist Party of India (Marxist)': 36,
 'Communist Party of India': 14,
 'All India Anna Dravida Munnetra Kazhagam': 12,
 'Jharkhand Mukti Morcha': 7,
 'Telugu Desam Party': 7,
 'Telugu Desam (V)': 6,
 'Revolutionary Socialist Party (India)': 5,
 'Other': 19};

var ls11 = {'Bharatiya Janata Party': 163,
 'Indian National Congress': 140,
 'Communist Party of India (Marxist)': 32,
 'Janata Dal': 30,
 'Tamil Maanila Congress': 20,
 'Socialist Party': 18,
 'Dravida Munnetra Kazhagam': 17,
 'Telugu Desam Party': 17,
 'Rashtriya Janata Dal': 15,
 'Shiv Sena': 15,
 'Other': 22};

var ls12 = {'Bharatiya Janata Party': 183,
 'Indian National Congress': 142,
 'Communist Party of India (Marxist)': 32,
 'Socialist Party': 20,
 'All India Anna Dravida Munnetra Kazhagam': 18,
 'Rashtriya Janata Dal': 17,
 'Samata Party': 12,
 'Telugu Desam Party': 12,
 'Biju Janata Dal': 9,
 'Communist Party of India': 9,
 'Other': 32};

var ls13 = {'Bharatiya Janata Party': 189,
 'Indian National Congress': 118,
 'Communist Party of India (Marxist)': 35,
 'Telugu Desam Party': 30,
 'Socialist Party': 29,
 'Bahujan Samaj Party': 15,
 'Shiv Sena': 15,
 'Dravida Munnetra Kazhagam': 12,
 'Samata Party': 12,
 'All India Anna Dravida Munnetra Kazhagam': 11,
 'Other': 31};

var ls14 = {'Indian National Congress': 159,
 'Bharatiya Janata Party': 144,
 'Communist Party of India (Marxist)': 44,
 'Socialist Party': 40,
 'Rashtriya Janata Dal': 25,
 'Bahujan Samaj Party': 24,
 'Dravida Munnetra Kazhagam': 16,
 'Shiv Sena': 14,
 'Nagaland Peoples Council': 12,
 'Biju Janata Dal': 11,
 'Other': 27};

var ls15 = {'Indian National Congress': 211,
 'Bharatiya Janata Party': 119,
 'Socialist Party': 23,
 'All India Trinamool Congress': 21,
 'Bahujan Samaj Party': 21,
 'Janata Dal (United)': 20,
 'Dravida Munnetra Kazhagam': 18,
 'Communist Party of India (Marxist)': 16,
 'Biju Janata Dal': 14,
 'Independent': 11,
 'Other': 28};

var ls16 = {'Bharatiya Janata Party': 289,
 'Indian National Congress': 50,
 'All India Trinamool Congress': 38,
 'All India Anna Dravida Munnetra Kazhagam': 37,
 'Biju Janata Dal': 21,
 'Shiv Sena': 18,
 'Telugu Desam Party': 16,
 'Telangana Rashtra Samithi': 13,
 'Communist Party of India (Marxist)': 9,
 'YSR Congress Party': 9,
 'Other': 29};

var ls17 = {'Bharatiya Janata Party': 301,
 'Indian National Congress': 52,
 'Dravida Munnetra Kazhagam': 24,
 'All India Trinamool Congress': 22,
 'Yuvajana Sramika Rythu Congress Party': 22,
 'Shiv Sena': 18,
 'Janata Dal (United)': 16,
 'Biju Janata Dal': 12,
 'Bahujan Samaj Party': 10,
 'Telangana Rashtra Samithi': 9,
 'Other': 27};
