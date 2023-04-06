// bar & line
// setup 
const data = {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'Emission Data by Country',
      data: [{id: "2017", metadata: {
        "Afghanistan": {"coal": 0.096731, "oil": 0.170436, "gas": 0.008429, "cement": 0.001256, "flaring": 0.0, "other": 0.0},
        "Albania": {"coal": 0.095372, "oil": 1.416589, "gas": 0.058495, "cement": 0.351291, "flaring": 0.010682, "other": 0.0},
        "Algeria": {"coal": 0.019328, "oil": 1.3445, "gas": 2.00192, "cement": 0.277278, "flaring": 0.402316, "other": 0.0},
        "Andorra": {
            "coal": 0.0,
            "oil": 6.302098,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Angola": {
            "coal": 0.0,
            "oil": 0.483036,
            "gas": 0.052027,
            "cement": 0.032966,
            "flaring": 0.236512,
            "other": 0.0
        },
        "Anguilla": {
            "coal": 0.0,
            "oil": 9.516883,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Antarctica": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Antigua and Barbuda": {
            "coal": 0.0,
            "oil": 5.388294,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Argentina": {
            "coal": 0.09714,
            "oil": 1.835349,
            "gas": 2.189145,
            "cement": 0.099015,
            "flaring": 0.021787,
            "other": 0.0
        },
        "Armenia": {
            "coal": 0.001286,
            "oil": 0.304689,
            "gas": 1.564582,
            "cement": 0.072046,
            "flaring": 0.0,
            "other": 0.0
        },
        "Aruba": {
            "coal": 0.0,
            "oil": 8.444238,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Australia": {
            "coal": 7.194136,
            "oil": 5.671368,
            "gas": 3.099259,
            "cement": 0.122774,
            "flaring": 0.604361,
            "other": 0.158558
        },
        "Austria": {
            "coal": 1.593994,
            "oil": 3.926838,
            "gas": 2.043153,
            "cement": 0.194418,
            "flaring": 0.015714,
            "other": 0.136409
        },
        "Azerbaijan": {
            "coal": 0.000364,
            "oil": 1.24091,
            "gas": 2.074367,
            "cement": 0.092232,
            "flaring": 0.02824,
            "other": 0.0
        },
        "Bahamas": {
            "coal": 0.009199,
            "oil": 5.24319,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Bahrain": {
            "coal": 0.0,
            "oil": 2.799243,
            "gas": 19.212413,
            "cement": 0.357213,
            "flaring": 0.169865,
            "other": 0.0
        },
        "Bangladesh": {
            "coal": 0.044203,
            "oil": 0.115626,
            "gas": 0.331684,
            "cement": 0.007386,
            "flaring": 7.5e-05,
            "other": 0.0
        },
        "Barbados": {
            "coal": 0.0,
            "oil": 3.819032,
            "gas": 0.157486,
            "cement": 0.252761,
            "flaring": 0.091867,
            "other": 0.0
        },
        "Belarus": {
            "coal": 0.399908,
            "oil": 1.786644,
            "gas": 3.569172,
            "cement": 0.229419,
            "flaring": 0.000629,
            "other": 0.118785
        },
        "Belgium": {
            "coal": 1.168967,
            "oil": 4.069848,
            "gas": 3.077016,
            "cement": 0.201275,
            "flaring": 0.008691,
            "other": 0.181338
        },
        "Belize": {
            "coal": 0.0,
            "oil": 1.633038,
            "gas": 0.009779,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Benin": {
            "coal": 0.017386,
            "oil": 0.544662,
            "gas": 0.006322,
            "cement": 0.018358,
            "flaring": 0.0,
            "other": 0.0
        },
        "Bermuda": {
            "coal": 0.0,
            "oil": 9.959826,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Bhutan": {
            "coal": 0.503962,
            "oil": 0.683256,
            "gas": 0.0,
            "cement": 0.451704,
            "flaring": 0.0,
            "other": 0.0
        },
        "Bolivia": {
            "coal": 0.002243,
            "oil": 1.115503,
            "gas": 0.806584,
            "cement": 0.124513,
            "flaring": 0.004345,
            "other": 0.0
        },
        "Bonaire, Saint Eustatius and Saba": {
            "coal": 0.0,
            "oil": 4.210457,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Bosnia and Herzegovina": {
            "coal": 4.784465,
            "oil": 1.421919,
            "gas": 0.133138,
            "cement": 0.101175,
            "flaring": 0.0,
            "other": 0.0
        },
        "Botswana": {
            "coal": 1.771102,
            "oil": 1.173107,
            "gas": 0.0,
            "cement": 0.00242,
            "flaring": 0.0,
            "other": 0.0
        },
        "Brazil": {
            "coal": 0.322879,
            "oil": 1.517591,
            "gas": 0.339022,
            "cement": 0.091512,
            "flaring": 0.083955,
            "other": 0.030656
        },
        "British Virgin Islands": {
            "coal": 0.0,
            "oil": 5.606919,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Brunei Darussalam": {
            "coal": 0.0,
            "oil": 4.479134,
            "gas": 15.855795,
            "cement": 0.0,
            "flaring": 1.300912,
            "other": 0.0
        },
        "Bulgaria": {
            "coal": 3.59125,
            "oil": 1.717848,
            "gas": 0.840747,
            "cement": 0.172547,
            "flaring": 0.122168,
            "other": 0.178516
        },
        "Burkina Faso": {
            "coal": 0.0,
            "oil": 0.192659,
            "gas": 0.0,
            "cement": 0.035163,
            "flaring": 0.0,
            "other": 0.0
        },
        "Burundi": {
            "coal": 0.001971,
            "oil": 0.044012,
            "gas": 0.0,
            "cement": 0.001563,
            "flaring": 0.0,
            "other": 0.0
        },
        "Cambodia": {
            "coal": 0.228209,
            "oil": 0.416377,
            "gas": 0.0,
            "cement": 0.145325,
            "flaring": 0.0,
            "other": 0.0
        },
        "Cameroon": {
            "coal": 0.0,
            "oil": 0.225609,
            "gas": 0.045963,
            "cement": 0.041302,
            "flaring": 0.080415,
            "other": 0.0
        },
        "Canada": {
            "coal": 1.988497,
            "oil": 7.123722,
            "gas": 5.870196,
            "cement": 0.18677,
            "flaring": 0.405826,
            "other": 0.060465
        },
        "Cape Verde": {
            "coal": 0.0,
            "oil": 1.024706,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Central African Republic": {
            "coal": 0.0,
            "oil": 0.043263,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Chad": {
            "coal": 0.0,
            "oil": 0.093022,
            "gas": 0.0,
            "cement": 0.00899,
            "flaring": 0.029106,
            "other": 0.0
        },
        "Chile": {
            "coal": 1.51013,
            "oil": 2.475329,
            "gas": 0.541341,
            "cement": 0.04714,
            "flaring": 0.003147,
            "other": 0.0
        },
        "China": {
            "coal": 5.079373,
            "oil": 1.014402,
            "gas": 0.344868,
            "cement": 0.537615,
            "flaring": 0.002074,
            "other": 0.120355
        },
        "Christmas Island": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Colombia": {
            "coal": 0.30373,
            "oil": 0.75008,
            "gas": 0.464672,
            "cement": 0.108227,
            "flaring": 0.021376,
            "other": 0.0
        },
        "Comoros": {
            "coal": 0.0,
            "oil": 0.351168,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Congo": {
            "coal": 0.0,
            "oil": 0.371756,
            "gas": 0.222778,
            "cement": 0.076589,
            "flaring": 0.402274,
            "other": 0.0
        },
        "Cook Islands": {
            "coal": 0.0,
            "oil": 4.633975,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Costa Rica": {
            "coal": 0.003669,
            "oil": 1.498223,
            "gas": 0.0,
            "cement": 0.139738,
            "flaring": 0.0,
            "other": 0.0
        },
        "Cote dIvoire": {
            "coal": 0.0,
            "oil": 0.30376,
            "gas": 0.173556,
            "cement": 0.0,
            "flaring": 0.005696,
            "other": 0.0
        },
        "Croatia": {
            "coal": 0.370012,
            "oil": 2.388201,
            "gas": 1.295695,
            "cement": 0.307039,
            "flaring": 0.074322,
            "other": 0.035605
        },
        "Cuba": {
            "coal": 0.001293,
            "oil": 1.98772,
            "gas": 0.178087,
            "cement": 0.056816,
            "flaring": 0.000652,
            "other": 0.0
        },
        "Curacao": {
            "coal": 0.0,
            "oil": 25.97616,
            "gas": 0.811088,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Cyprus": {
            "coal": 0.009676,
            "oil": 5.439979,
            "gas": 0.000346,
            "cement": 0.763641,
            "flaring": 0.0,
            "other": 0.01327
        },
        "Czech Republic": {
            "coal": 6.104261,
            "oil": 2.104534,
            "gas": 1.681995,
            "cement": 0.164107,
            "flaring": 0.012093,
            "other": 0.164196
        },
        "Democratic Republic of the Congo": {
            "coal": 0.0,
            "oil": 0.025214,
            "gas": 0.0,
            "cement": 0.004138,
            "flaring": 0.0,
            "other": 0.0
        },
        "Denmark": {
            "coal": 1.089858,
            "oil": 3.491075,
            "gas": 1.16473,
            "cement": 0.208067,
            "flaring": 0.042075,
            "other": 0.066344
        },
        "Djibouti": {
            "coal": 0.0,
            "oil": 0.317006,
            "gas": 0.0,
            "cement": 0.059601,
            "flaring": 0.0,
            "other": 0.0
        },
        "Dominica": {
            "coal": 0.0,
            "oil": 2.289902,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Dominican Republic": {
            "coal": 0.313891,
            "oil": 1.544676,
            "gas": 0.205819,
            "cement": 0.191307,
            "flaring": 0.0,
            "other": 0.0
        },
        "Ecuador": {
            "coal": 0.0,
            "oil": 2.05334,
            "gas": 0.092157,
            "cement": 0.134376,
            "flaring": 0.120299,
            "other": 0.0
        },
        "Egypt": {
            "coal": 0.063929,
            "oil": 1.169435,
            "gas": 1.065011,
            "cement": 0.213869,
            "flaring": 0.043137,
            "other": 0.0
        },
        "El Salvador": {
            "coal": 0.000584,
            "oil": 0.896351,
            "gas": 0.0,
            "cement": 0.055678,
            "flaring": 0.0,
            "other": 0.0
        },
        "Equatorial Guinea": {
            "coal": 0.0,
            "oil": 0.785489,
            "gas": 4.238104,
            "cement": 0.0,
            "flaring": 0.395972,
            "other": 0.0
        },
        "Eritrea": {
            "coal": 0.0,
            "oil": 0.183365,
            "gas": 0.0,
            "cement": 0.023955,
            "flaring": 0.0,
            "other": 0.0
        },
        "Estonia": {
            "coal": 10.532481,
            "oil": 2.710959,
            "gas": 0.700239,
            "cement": 0.23283,
            "flaring": 2.4e-05,
            "other": 0.063915
        },
        "Ethiopia": {
            "coal": 0.014257,
            "oil": 0.097189,
            "gas": 0.0,
            "cement": 0.032232,
            "flaring": 2.7e-05,
            "other": 0.0
        },
        "Faeroe Islands": {
            "coal": 0.0,
            "oil": 14.07828,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Fiji": {
            "coal": 0.0,
            "oil": 1.423309,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Finland": {
            "coal": 3.102142,
            "oil": 4.017097,
            "gas": 0.705554,
            "cement": 0.109594,
            "flaring": 0.026613,
            "other": 0.132076
        },
        "France": {
            "coal": 0.620315,
            "oil": 3.050226,
            "gas": 1.389643,
            "cement": 0.09808,
            "flaring": 0.043903,
            "other": 0.058762
        },
        "French Equatorial Africa": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "French Guiana": {
            "coal": 0.0,
            "oil": 2.624126,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "French Polynesia": {
            "coal": 0.0,
            "oil": 2.914334,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "French West Africa": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Gabon": {
            "coal": 0.0,
            "oil": 1.127357,
            "gas": 0.422545,
            "cement": 0.06699,
            "flaring": 1.320111,
            "other": 0.0
        },
        "Gambia": {
            "coal": 0.0,
            "oil": 0.249275,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Georgia": {
            "coal": 0.30696,
            "oil": 0.935452,
            "gas": 1.246298,
            "cement": 0.208213,
            "flaring": 0.0,
            "other": 0.0
        },
        "Germany": {
            "coal": 3.761154,
            "oil": 3.378917,
            "gas": 2.074596,
            "cement": 0.162278,
            "flaring": 0.027436,
            "other": 0.103908
        },
        "Ghana": {
            "coal": 0.0,
            "oil": 0.312665,
            "gas": 0.078075,
            "cement": 0.050516,
            "flaring": 0.020106,
            "other": 0.0
        },
        "Global": {
            "coal": 1.908857,
            "oil": 1.61091,
            "gas": 0.940144,
            "cement": 0.198416,
            "flaring": 0.051579,
            "other": 0.039776
        },
        "Greece": {
            "coal": 2.43348,
            "oil": 3.2767,
            "gas": 0.89187,
            "cement": 0.344663,
            "flaring": 0.000721,
            "other": 0.052516
        },
        "Greenland": {
            "coal": 0.0,
            "oil": 9.69107,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Grenada": {
            "coal": 0.0,
            "oil": 2.302859,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Guadeloupe": {
            "coal": 1.145937,
            "oil": 5.11579,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Guatemala": {
            "coal": 0.235814,
            "oil": 0.72048,
            "gas": 0.0,
            "cement": 0.080442,
            "flaring": 0.008008,
            "other": 0.0
        },
        "Guinea": {
            "coal": 0.0,
            "oil": 0.264605,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Guinea-Bissau": {
            "coal": 0.0,
            "oil": 0.161777,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Guyana": {
            "coal": 0.0,
            "oil": 2.832302,
            "gas": 0.0,
            "cement": 0.206651,
            "flaring": 0.0,
            "other": 0.0
        },
        "Haiti": {
            "coal": 0.0,
            "oil": 0.27826,
            "gas": 0.0,
            "cement": 0.007137,
            "flaring": 0.0,
            "other": 0.0
        },
        "Honduras": {
            "coal": 0.00038,
            "oil": 0.967903,
            "gas": 0.0,
            "cement": 0.094525,
            "flaring": 0.0,
            "other": 0.0
        },
        "Hong Kong": {
            "coal": 3.18546,
            "oil": 1.587083,
            "gas": 0.833317,
            "cement": 0.080808,
            "flaring": 0.0,
            "other": 0.0
        },
        "Hungary": {
            "coal": 1.026428,
            "oil": 1.784948,
            "gas": 2.092773,
            "cement": 0.080001,
            "flaring": 0.014562,
            "other": 0.05957
        },
        "Iceland": {
            "coal": 2.017334,
            "oil": 8.02785,
            "gas": 0.000139,
            "cement": 0.0,
            "flaring": 0.426266,
            "other": 0.009448
        },
        "India": {
            "coal": 1.152705,
            "oil": 0.466024,
            "gas": 0.087817,
            "cement": 0.089387,
            "flaring": 0.002085,
            "other": 0.0
        },
        "Indonesia": {
            "coal": 0.835895,
            "oil": 0.863786,
            "gas": 0.318862,
            "cement": 0.109511,
            "flaring": 0.016586,
            "other": 0.0
        },
        "International Transport": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Iran": {
            "coal": 0.055715,
            "oil": 2.71059,
            "gas": 4.727577,
            "cement": 0.223773,
            "flaring": 0.393116,
            "other": 0.0
        },
        "Iraq": {
            "coal": 0.0,
            "oil": 3.896932,
            "gas": 0.485221,
            "cement": 0.114595,
            "flaring": 0.846641,
            "other": 0.0
        },
        "Ireland": {
            "coal": 1.649198,
            "oil": 3.914479,
            "gas": 2.127395,
            "cement": 0.385512,
            "flaring": 0.000998,
            "other": 0.111696
        },
        "Israel": {
            "coal": 2.266644,
            "oil": 2.566952,
            "gas": 2.00867,
            "cement": 0.238579,
            "flaring": 0.000611,
            "other": 0.0
        },
        "Italy": {
            "coal": 0.700615,
            "oil": 2.479459,
            "gas": 2.479136,
            "cement": 0.128516,
            "flaring": 0.039185,
            "other": 0.051615
        },
        "Jamaica": {
            "coal": 0.076975,
            "oil": 2.499745,
            "gas": 0.071757,
            "cement": 0.128055,
            "flaring": 0.0,
            "other": 0.0
        },
        "Japan": {
            "coal": 3.619716,
            "oil": 3.543649,
            "gas": 1.939742,
            "cement": 0.208655,
            "flaring": 0.003443,
            "other": 0.066887
        },
        "Jordan": {
            "coal": 0.056671,
            "oil": 1.486348,
            "gas": 0.786215,
            "cement": 0.160008,
            "flaring": 0.0,
            "other": 0.0
        },
        "Kazakhstan": {
            "coal": 10.262832,
            "oil": 2.464462,
            "gas": 3.426252,
            "cement": 0.208424,
            "flaring": 0.973016,
            "other": 0.180423
        },
        "Kenya": {
            "coal": 0.025082,
            "oil": 0.273279,
            "gas": 0.0,
            "cement": 0.049321,
            "flaring": 0.0,
            "other": 0.0
        },
        "Kiribati": {
            "coal": 0.0,
            "oil": 0.547947,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Kosovo": {
            "coal": 3.235183,
            "oil": 1.250486,
            "gas": 0.0,
            "cement": 0.188313,
            "flaring": 0.0,
            "other": 0.0
        },
        "Kuwait": {
            "coal": 0.0,
            "oil": 12.353963,
            "gas": 10.255886,
            "cement": 0.287883,
            "flaring": 0.360462,
            "other": 0.0
        },
        "Kuwaiti Oil Fires": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Kyrgyzstan": {
            "coal": 0.553677,
            "oil": 0.782929,
            "gas": 0.094574,
            "cement": 0.095969,
            "flaring": 0.0,
            "other": 0.0
        },
        "Laos": {
            "coal": 2.139492,
            "oil": 0.458575,
            "gas": 0.0,
            "cement": 0.214748,
            "flaring": 0.0,
            "other": 0.0
        },
        "Latvia": {
            "coal": 0.085557,
            "oil": 2.187689,
            "gas": 1.176229,
            "cement": 0.223584,
            "flaring": 8e-06,
            "other": 0.017702
        },
        "Lebanon": {
            "coal": 0.102557,
            "oil": 4.084871,
            "gas": 0.0,
            "cement": 0.370625,
            "flaring": 0.0,
            "other": 0.0
        },
        "Leeward Islands": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Lesotho": {
            "coal": 0.855816,
            "oil": 0.302152,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Liberia": {
            "coal": 0.0,
            "oil": 0.23298,
            "gas": 0.0,
            "cement": 0.023024,
            "flaring": 0.0,
            "other": 0.0
        },
        "Libya": {
            "coal": 0.0,
            "oil": 4.106752,
            "gas": 2.845831,
            "cement": 0.273385,
            "flaring": 1.152023,
            "other": 0.0
        },
        "Liechtenstein": {
            "coal": 0.0,
            "oil": 2.699679,
            "gas": 1.411515,
            "cement": 0.0,
            "flaring": 1e-05,
            "other": 0.0
        },
        "Lithuania": {
            "coal": 0.275797,
            "oil": 2.673033,
            "gas": 1.473099,
            "cement": 0.155056,
            "flaring": 0.0772,
            "other": 0.018587
        },
        "Luxembourg": {
            "coal": 0.473888,
            "oil": 11.528339,
            "gas": 2.778724,
            "cement": 0.621683,
            "flaring": 7e-05,
            "other": 0.128843
        },
        "Macao": {
            "coal": 0.0,
            "oil": 2.491064,
            "gas": 0.526846,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Madagascar": {
            "coal": 0.055724,
            "oil": 0.098707,
            "gas": 0.0,
            "cement": 0.002961,
            "flaring": 0.0,
            "other": 0.0
        },
        "Malawi": {
            "coal": 0.011711,
            "oil": 0.059789,
            "gas": 0.0,
            "cement": 0.004572,
            "flaring": 0.0,
            "other": 0.0
        },
        "Malaysia": {
            "coal": 2.458378,
            "oil": 2.541684,
            "gas": 2.202502,
            "cement": 0.393465,
            "flaring": 0.166167,
            "other": 0.0
        },
        "Maldives": {
            "coal": 0.0,
            "oil": 3.203001,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Mali": {
            "coal": 0.0,
            "oil": 0.17038,
            "gas": 0.0,
            "cement": 0.013444,
            "flaring": 0.0,
            "other": 0.0
        },
        "Malta": {
            "coal": 2.5e-05,
            "oil": 2.040123,
            "gas": 1.15192,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.000608
        },
        "Marshall Islands": {
            "coal": 0.0,
            "oil": 3.10594,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Martinique": {
            "coal": 0.0,
            "oil": 6.037517,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Mauritania": {
            "coal": 0.0,
            "oil": 0.804139,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.017955,
            "other": 0.0
        },
        "Mauritius": {
            "coal": 1.378166,
            "oil": 2.125262,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Mayotte": {
            "coal": 0.0,
            "oil": 1.091959,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Mexico": {
            "coal": 0.395067,
            "oil": 2.001313,
            "gas": 1.16617,
            "cement": 0.169953,
            "flaring": 0.057988,
            "other": 0.0
        },
        "Micronesia (Federated States of)": {
            "coal": 0.0,
            "oil": 1.293996,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Moldova": {
            "coal": 0.126722,
            "oil": 0.802957,
            "gas": 0.5426,
            "cement": 0.16913,
            "flaring": 0.0,
            "other": 0.0
        },
        "Mongolia": {
            "coal": 9.712723,
            "oil": 1.21409,
            "gas": 0.0,
            "cement": 0.096752,
            "flaring": 0.001961,
            "other": 0.0
        },
        "Montenegro": {
            "coal": 1.900253,
            "oil": 1.42519,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Montserrat": {
            "coal": 0.0,
            "oil": 6.237923,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Morocco": {
            "coal": 0.475015,
            "oil": 1.036659,
            "gas": 0.066003,
            "cement": 0.152562,
            "flaring": 0.0,
            "other": 0.0
        },
        "Mozambique": {
            "coal": 0.000898,
            "oil": 0.153257,
            "gas": 0.05643,
            "cement": 0.031874,
            "flaring": 0.000785,
            "other": 0.0
        },
        "Myanmar": {
            "coal": 0.029711,
            "oil": 0.219048,
            "gas": 0.161869,
            "cement": 0.039994,
            "flaring": 0.001297,
            "other": 0.0
        },
        "Namibia": {
            "coal": 0.03719,
            "oil": 1.574358,
            "gas": 0.0,
            "cement": 0.171532,
            "flaring": 0.0,
            "other": 0.0
        },
        "Nauru": {
            "coal": 0.0,
            "oil": 4.704674,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Nepal": {
            "coal": 0.106344,
            "oil": 0.22569,
            "gas": 0.0,
            "cement": 0.081242,
            "flaring": 0.0,
            "other": 0.0
        },
        "Netherlands": {
            "coal": 2.094014,
            "oil": 3.076221,
            "gas": 4.110491,
            "cement": 0.017317,
            "flaring": 0.064964,
            "other": 0.080364
        },
        "New Caledonia": {
            "coal": 9.638409,
            "oil": 9.019902,
            "gas": 0.0,
            "cement": 0.139574,
            "flaring": 0.0,
            "other": 0.0
        },
        "New Zealand": {
            "coal": 0.983785,
            "oil": 4.290042,
            "gas": 1.794636,
            "cement": 0.0935,
            "flaring": 0.229472,
            "other": 0.127787
        },
        "Nicaragua": {
            "coal": 0.0,
            "oil": 0.796063,
            "gas": 0.0,
            "cement": 0.046662,
            "flaring": 0.0,
            "other": 0.0
        },
        "Niger": {
            "coal": 0.015533,
            "oil": 0.083743,
            "gas": 0.0,
            "cement": 0.000909,
            "flaring": 0.003392,
            "other": 0.0
        },
        "Nigeria": {
            "coal": 0.000701,
            "oil": 0.302272,
            "gas": 0.167525,
            "cement": 0.038049,
            "flaring": 0.074291,
            "other": 0.0
        },
        "Niue": {
            "coal": 0.0,
            "oil": 3.920813,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "North Korea": {
            "coal": 1.810422,
            "oil": 0.114884,
            "gas": 0.0,
            "cement": 0.102252,
            "flaring": 0.0,
            "other": 0.0
        },
        "North Macedonia": {
            "coal": 1.805995,
            "oil": 1.360135,
            "gas": 0.220328,
            "cement": 0.166547,
            "flaring": 0.0,
            "other": 0.0
        },
        "Norway": {
            "coal": 0.690265,
            "oil": 4.300647,
            "gas": 2.937815,
            "cement": 0.145147,
            "flaring": 0.209384,
            "other": 0.100049
        },
        "Occupied Palestinian Territory": {
            "coal": 0.0,
            "oil": 0.69524,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Oman": {
            "coal": 0.0,
            "oil": 2.854092,
            "gas": 10.853038,
            "cement": 0.376802,
            "flaring": 1.024368,
            "other": 0.0
        },
        "Pacific Islands (Palau)": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Pakistan": {
            "coal": 0.189384,
            "oil": 0.394923,
            "gas": 0.343343,
            "cement": 0.068176,
            "flaring": 0.003151,
            "other": 0.0
        },
        "Palau": {
            "coal": 0.0,
            "oil": 12.119527,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Panama": {
            "coal": 0.056373,
            "oil": 2.501889,
            "gas": 0.0,
            "cement": 0.181724,
            "flaring": 0.0,
            "other": 0.0
        },
        "Panama Canal Zone": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Papua New Guinea": {
            "coal": 0.0,
            "oil": 0.596946,
            "gas": 0.102506,
            "cement": 0.0,
            "flaring": 0.010342,
            "other": 0.0
        },
        "Paraguay": {
            "coal": 0.000577,
            "oil": 1.205498,
            "gas": 0.0,
            "cement": 0.063513,
            "flaring": 0.0,
            "other": 0.0
        },
        "Peru": {
            "coal": 0.088912,
            "oil": 1.01234,
            "gas": 0.457425,
            "cement": 0.13576,
            "flaring": 0.005598,
            "other": 0.0
        },
        "Philippines": {
            "coal": 0.577412,
            "oil": 0.522661,
            "gas": 0.070542,
            "cement": 0.093238,
            "flaring": 0.002326,
            "other": 0.0
        },
        "Poland": {
            "coal": 5.283756,
            "oil": 2.169276,
            "gas": 0.885733,
            "cement": 0.181572,
            "flaring": 0.121014,
            "other": 0.123514
        },
        "Portugal": {
            "coal": 1.203639,
            "oil": 2.517383,
            "gas": 1.193814,
            "cement": 0.245512,
            "flaring": 0.111001,
            "other": 0.084947
        },
        "Puerto Rico": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Qatar": {
            "coal": 0.0,
            "oil": 3.339931,
            "gas": 32.11306,
            "cement": 0.772772,
            "flaring": 0.717113,
            "other": 0.0
        },
        "Reunion": {
            "coal": 2.19061,
            "oil": 2.582568,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Romania": {
            "coal": 1.108657,
            "oil": 1.44273,
            "gas": 1.238251,
            "cement": 0.168043,
            "flaring": 0.039377,
            "other": 0.066272
        },
        "Russia": {
            "coal": 2.645015,
            "oil": 2.84283,
            "gas": 5.34357,
            "cement": 0.141023,
            "flaring": 0.288246,
            "other": 0.111781
        },
        "Rwanda": {
            "coal": 0.000599,
            "oil": 0.076394,
            "gas": 0.00689,
            "cement": 0.011593,
            "flaring": 0.0,
            "other": 0.0
        },
        "Ryukyu Islands": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Saint Helena": {
            "coal": 0.0,
            "oil": 2.000364,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Saint Kitts and Nevis": {
            "coal": 0.0,
            "oil": 5.060668,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Saint Lucia": {
            "coal": 0.0,
            "oil": 2.85405,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Saint Pierre and Miquelon": {
            "coal": 0.0,
            "oil": 11.071345,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Saint Vincent and the Grenadines": {
            "coal": 0.0,
            "oil": 2.04811,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Samoa": {
            "coal": 0.0,
            "oil": 1.182334,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Sao Tome and Principe": {
            "coal": 0.0,
            "oil": 0.616432,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Saudi Arabia": {
            "coal": 0.0,
            "oil": 10.752529,
            "gas": 7.241969,
            "cement": 0.701842,
            "flaring": 0.127286,
            "other": 0.0
        },
        "Senegal": {
            "coal": 0.094997,
            "oil": 0.478855,
            "gas": 0.002417,
            "cement": 0.132856,
            "flaring": 0.000749,
            "other": 0.0
        },
        "Serbia": {
            "coal": 4.155716,
            "oil": 1.188399,
            "gas": 0.648932,
            "cement": 0.10612,
            "flaring": 0.0,
            "other": 0.0
        },
        "Seychelles": {
            "coal": 0.0,
            "oil": 5.650156,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Sierra Leone": {
            "coal": 0.0,
            "oil": 0.137444,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Singapore": {
            "coal": 0.670575,
            "oil": 2.278683,
            "gas": 3.496523,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Sint Maarten (Dutch part)": {
            "coal": 0.0,
            "oil": 16.883986,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Slovakia": {
            "coal": 2.626085,
            "oil": 1.863442,
            "gas": 1.72625,
            "cement": 0.251324,
            "flaring": 0.004172,
            "other": 0.167793
        },
        "Slovenia": {
            "coal": 2.338318,
            "oil": 3.484087,
            "gas": 0.835533,
            "cement": 0.195499,
            "flaring": 0.06632,
            "other": 0.048448
        },
        "Solomon Islands": {
            "coal": 0.0,
            "oil": 0.444029,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Somalia": {
            "coal": 0.0,
            "oil": 0.042891,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "South Africa": {
            "coal": 6.530899,
            "oil": 0.999484,
            "gas": 0.129569,
            "cement": 0.096775,
            "flaring": 0.000525,
            "other": 0.0
        },
        "South Korea": {
            "coal": 6.555194,
            "oil": 3.482968,
            "gas": 1.958015,
            "cement": 0.511546,
            "flaring": 0.0,
            "other": 0.198867
        },
        "South Sudan": {
            "coal": 0.0,
            "oil": 0.136477,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Spain": {
            "coal": 1.150449,
            "oil": 3.060514,
            "gas": 1.343378,
            "cement": 0.202831,
            "flaring": 0.082069,
            "other": 0.065195
        },
        "Sri Lanka": {
            "coal": 0.26611,
            "oil": 0.754715,
            "gas": 0.0,
            "cement": 0.05002,
            "flaring": 0.0,
            "other": 0.0
        },
        "St. Kitts-Nevis-Anguilla": {
            "coal": 0.0,
            "oil": 0.0,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Sudan": {
            "coal": 0.0,
            "oil": 0.495478,
            "gas": 0.0,
            "cement": 0.03824,
            "flaring": 0.0177,
            "other": 0.0
        },
        "Suriname": {
            "coal": 0.0,
            "oil": 3.554503,
            "gas": 0.012472,
            "cement": 0.020133,
            "flaring": 0.006236,
            "other": 0.0
        },
        "Swaziland": {
            "coal": 0.140019,
            "oil": 0.716004,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Sweden": {
            "coal": 0.842477,
            "oil": 2.933163,
            "gas": 0.180611,
            "cement": 0.147572,
            "flaring": 0.079604,
            "other": 0.062291
        },
        "Switzerland": {
            "coal": 0.059897,
            "oil": 3.386255,
            "gas": 0.838451,
            "cement": 0.208221,
            "flaring": 0.003688,
            "other": 0.020769
        },
        "Syria": {
            "coal": 0.000193,
            "oil": 1.19937,
            "gas": 0.36151,
            "cement": 0.039004,
            "flaring": 0.117915,
            "other": 0.0
        },
        "Taiwan": {
            "coal": 6.871645,
            "oil": 2.934671,
            "gas": 1.962717,
            "cement": 0.226368,
            "flaring": 0.001883,
            "other": 0.038242
        },
        "Tajikistan": {
            "coal": 0.443759,
            "oil": 0.265599,
            "gas": 0.000411,
            "cement": 0.170664,
            "flaring": 0.0,
            "other": 0.0
        },
        "Tanzania": {
            "coal": 0.026568,
            "oil": 0.120794,
            "gas": 0.026373,
            "cement": 0.028924,
            "flaring": 0.0,
            "other": 0.0
        },
        "Thailand": {
            "coal": 0.885262,
            "oil": 1.760396,
            "gas": 1.162417,
            "cement": 0.315783,
            "flaring": 0.009874,
            "other": 0.0
        },
        "Timor-Leste": {
            "coal": 0.0,
            "oil": 0.442072,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.067784,
            "other": 0.0
        },
        "Togo": {
            "coal": 0.0,
            "oil": 0.177769,
            "gas": 0.0,
            "cement": 0.097284,
            "flaring": 0.0,
            "other": 0.0
        },
        "Tonga": {
            "coal": 0.0,
            "oil": 1.286041,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Trinidad and Tobago": {
            "coal": 0.0,
            "oil": 3.458982,
            "gas": 23.382817,
            "cement": 0.175671,
            "flaring": 0.250009,
            "other": 0.0
        },
        "Tunisia": {
            "coal": 0.0,
            "oil": 1.211833,
            "gas": 1.053026,
            "cement": 0.27144,
            "flaring": 0.044758,
            "other": 0.0
        },
        "Turkey": {
            "coal": 1.923962,
            "oil": 1.471138,
            "gas": 1.277743,
            "cement": 0.4808,
            "flaring": 0.001913,
            "other": 0.085295
        },
        "Turkmenistan": {
            "coal": 0.0,
            "oil": 3.350501,
            "gas": 8.185952,
            "cement": 0.23018,
            "flaring": 0.524593,
            "other": 0.0
        },
        "Turks and Caicos Islands": {
            "coal": 0.0,
            "oil": 8.828029,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Tuvalu": {
            "coal": 0.0,
            "oil": 0.676764,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "USA": {
            "coal": 3.9676,
            "oil": 7.018608,
            "gas": 4.428231,
            "cement": 0.12227,
            "flaring": 0.179645,
            "other": 0.084423
        },
        "Uganda": {
            "coal": 0.0,
            "oil": 0.124638,
            "gas": 0.0,
            "cement": 0.009359,
            "flaring": 0.0,
            "other": 0.0
        },
        "Ukraine": {
            "coal": 2.521122,
            "oil": 0.791409,
            "gas": 1.492592,
            "cement": 0.079346,
            "flaring": 0.051592,
            "other": 0.059478
        },
        "United Arab Emirates": {
            "coal": 0.890321,
            "oil": 6.88883,
            "gas": 14.986416,
            "cement": 0.670153,
            "flaring": 0.180184,
            "other": 0.0
        },
        "United Kingdom": {
            "coal": 0.592279,
            "oil": 2.646653,
            "gas": 2.447557,
            "cement": 0.066749,
            "flaring": 0.065107,
            "other": 0.045097
        },
        "Uruguay": {
            "coal": 0.001071,
            "oil": 1.670224,
            "gas": 0.035332,
            "cement": 0.094137,
            "flaring": 0.0,
            "other": 0.0
        },
        "Uzbekistan": {
            "coal": 0.209325,
            "oil": 0.347881,
            "gas": 2.687962,
            "cement": 0.114735,
            "flaring": 0.049972,
            "other": 0.0
        },
        "Vanuatu": {
            "coal": 0.0,
            "oil": 0.479715,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Venezuela": {
            "coal": 0.01019,
            "oil": 2.518056,
            "gas": 1.564779,
            "cement": 0.069798,
            "flaring": 0.430411,
            "other": 0.0
        },
        "Viet Nam": {
            "coal": 1.15089,
            "oil": 0.663274,
            "gas": 0.190114,
            "cement": 0.454471,
            "flaring": 0.019537,
            "other": 0.0
        },
        "Wallis and Futuna Islands": {
            "coal": 0.0,
            "oil": 2.148794,
            "gas": 0.0,
            "cement": 0.0,
            "flaring": 0.0,
            "other": 0.0
        },
        "Yemen": {
            "coal": 0.010247,
            "oil": 0.274851,
            "gas": 0.019641,
            "cement": 0.022327,
            "flaring": 0.025483,
            "other": 0.0
        },
        "Zambia": {
            "coal": 0.109991,
            "oil": 0.236089,
            "gas": 0.0,
            "cement": 0.049506,
            "flaring": 0.0,
            "other": 0.0
        },
        "Zimbabwe": {
            "coal": 0.400001,
            "oil": 0.218747,
            "gas": 0.0,
            "cement": 0.031785,
            "flaring": 0.0,
            "other": 0.0
        }
        }
},
{id: "2018", metadata: {
    "Afghanistan": {
        "coal": 0.104866,
        "oil": 0.18047,
        "gas": 0.00799,
        "cement": 0.00155,
        "flaring": 0.0,
        "other": 0.0
    },
    "Albania": {
        "coal": 0.164287,
        "oil": 1.157651,
        "gas": 0.052215,
        "cement": 0.353399,
        "flaring": 0.004816,
        "other": 0.0
    },
    "Algeria": {
        "coal": 0.031722,
        "oil": 1.309946,
        "gas": 2.120033,
        "cement": 0.295315,
        "flaring": 0.390946,
        "other": 0.0
    },
    "Andorra": {
        "coal": 0.0,
        "oil": 6.594057,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Angola": {
        "coal": 0.0,
        "oil": 0.475601,
        "gas": 0.051426,
        "cement": 0.033454,
        "flaring": 0.167915,
        "other": 0.0
    },
    "Anguilla": {
        "coal": 0.0,
        "oil": 9.412819,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Antarctica": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Antigua and Barbuda": {
        "coal": 0.0,
        "oil": 5.438456,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Argentina": {
        "coal": 0.098087,
        "oil": 1.67499,
        "gas": 2.164272,
        "cement": 0.098364,
        "flaring": 0.030594,
        "other": 0.0
    },
    "Armenia": {
        "coal": 0.001292,
        "oil": 0.291926,
        "gas": 1.64951,
        "cement": 0.111096,
        "flaring": 0.0,
        "other": 0.0
    },
    "Aruba": {
        "coal": 0.0,
        "oil": 8.229667,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Australia": {
        "coal": 6.780453,
        "oil": 5.753275,
        "gas": 3.180032,
        "cement": 0.117769,
        "flaring": 0.677588,
        "other": 0.156082
    },
    "Austria": {
        "coal": 1.390778,
        "oil": 3.855559,
        "gas": 1.92517,
        "cement": 0.206623,
        "flaring": 0.014394,
        "other": 0.136131
    },
    "Azerbaijan": {
        "coal": 0.000361,
        "oil": 1.165693,
        "gas": 2.096442,
        "cement": 0.106669,
        "flaring": 0.036474,
        "other": 0.0
    },
    "Bahamas": {
        "coal": 0.009117,
        "oil": 6.709788,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bahrain": {
        "coal": 0.0,
        "oil": 2.473312,
        "gas": 19.099192,
        "cement": 0.375716,
        "flaring": 0.095925,
        "other": 0.0
    },
    "Bangladesh": {
        "coal": 0.049964,
        "oil": 0.11965,
        "gas": 0.326112,
        "cement": 0.008139,
        "flaring": 0.000116,
        "other": 0.0
    },
    "Barbados": {
        "coal": 0.0,
        "oil": 4.085938,
        "gas": 0.197071,
        "cement": 0.252309,
        "flaring": 0.06569,
        "other": 0.0
    },
    "Belarus": {
        "coal": 0.408726,
        "oil": 1.874861,
        "gas": 3.790441,
        "cement": 0.223125,
        "flaring": 0.000648,
        "other": 0.106598
    },
    "Belgium": {
        "coal": 1.167562,
        "oil": 3.99298,
        "gas": 3.153067,
        "cement": 0.221371,
        "flaring": 0.01059,
        "other": 0.178088
    },
    "Belize": {
        "coal": 0.0,
        "oil": 1.572754,
        "gas": 0.00959,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Benin": {
        "coal": 0.0,
        "oil": 0.586697,
        "gas": 0.003069,
        "cement": 0.032853,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bermuda": {
        "coal": 0.0,
        "oil": 11.066178,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bhutan": {
        "coal": 0.556209,
        "oil": 0.74321,
        "gas": 0.0,
        "cement": 0.471197,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bolivia": {
        "coal": 0.001894,
        "oil": 1.110857,
        "gas": 0.8056,
        "cement": 0.127649,
        "flaring": 0.004414,
        "other": 0.0
    },
    "Bonaire, Saint Eustatius and Saba": {
        "coal": 0.0,
        "oil": 3.961874,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bosnia and Herzegovina": {
        "coal": 4.882366,
        "oil": 1.364476,
        "gas": 0.133645,
        "cement": 0.111924,
        "flaring": 0.0,
        "other": 0.0
    },
    "Botswana": {
        "coal": 1.886249,
        "oil": 1.174795,
        "gas": 0.0,
        "cement": 0.000158,
        "flaring": 0.0,
        "other": 0.0
    },
    "Brazil": {
        "coal": 0.313279,
        "oil": 1.430318,
        "gas": 0.320779,
        "cement": 0.092033,
        "flaring": 0.083291,
        "other": 0.030414
    },
    "British Virgin Islands": {
        "coal": 0.0,
        "oil": 5.314521,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Brunei Darussalam": {
        "coal": 0.0,
        "oil": 4.388911,
        "gas": 16.179891,
        "cement": 0.0,
        "flaring": 0.948541,
        "other": 0.0
    },
    "Bulgaria": {
        "coal": 3.103544,
        "oil": 1.764093,
        "gas": 0.812233,
        "cement": 0.171902,
        "flaring": 0.099959,
        "other": 0.17633
    },
    "Burkina Faso": {
        "coal": 0.0,
        "oil": 0.205006,
        "gas": 0.0,
        "cement": 0.037623,
        "flaring": 0.0,
        "other": 0.0
    },
    "Burundi": {
        "coal": 0.001585,
        "oil": 0.05454,
        "gas": 0.0,
        "cement": 0.003371,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cambodia": {
        "coal": 0.239614,
        "oil": 0.451334,
        "gas": 0.0,
        "cement": 0.206897,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cameroon": {
        "coal": 0.0,
        "oil": 0.202608,
        "gas": 0.05818,
        "cement": 0.043266,
        "flaring": 0.08012,
        "other": 0.0
    },
    "Canada": {
        "coal": 1.641559,
        "oil": 7.208382,
        "gas": 6.263775,
        "cement": 0.186708,
        "flaring": 0.419857,
        "other": 0.058445
    },
    "Cape Verde": {
        "coal": 0.0,
        "oil": 1.019912,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Central African Republic": {
        "coal": 0.0,
        "oil": 0.04315,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Chad": {
        "coal": 0.0,
        "oil": 0.093219,
        "gas": 0.0,
        "cement": 0.009933,
        "flaring": 0.025451,
        "other": 0.0
    },
    "Chile": {
        "coal": 1.446348,
        "oil": 2.490063,
        "gas": 0.533711,
        "cement": 0.041826,
        "flaring": 0.004745,
        "other": 0.0
    },
    "China": {
        "coal": 5.163049,
        "oil": 1.058857,
        "gas": 0.406027,
        "cement": 0.555191,
        "flaring": 0.002365,
        "other": 0.121052
    },
    "Christmas Island": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Colombia": {
        "coal": 0.278312,
        "oil": 0.789801,
        "gas": 0.47582,
        "cement": 0.107585,
        "flaring": 0.021207,
        "other": 0.0
    },
    "Comoros": {
        "coal": 0.0,
        "oil": 0.37758,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Congo": {
        "coal": 0.0,
        "oil": 0.368649,
        "gas": 0.246887,
        "cement": 0.049852,
        "flaring": 0.546918,
        "other": 0.0
    },
    "Cook Islands": {
        "coal": 0.0,
        "oil": 4.672115,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Costa Rica": {
        "coal": 0.0,
        "oil": 1.486466,
        "gas": 0.0,
        "cement": 0.146129,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cote dIvoire": {
        "coal": 0.0,
        "oil": 0.248138,
        "gas": 0.154116,
        "cement": 0.0,
        "flaring": 0.00382,
        "other": 0.0
    },
    "Croatia": {
        "coal": 0.348175,
        "oil": 2.303941,
        "gas": 1.211972,
        "cement": 0.291004,
        "flaring": 0.068414,
        "other": 0.036611
    },
    "Cuba": {
        "coal": 0.001294,
        "oil": 1.766661,
        "gas": 0.16428,
        "cement": 0.063175,
        "flaring": 0.002357,
        "other": 0.0
    },
    "Curacao": {
        "coal": 0.0,
        "oil": 20.985142,
        "gas": 0.555898,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cyprus": {
        "coal": 0.044182,
        "oil": 5.267536,
        "gas": 0.000183,
        "cement": 0.695883,
        "flaring": 0.0,
        "other": 0.01647
    },
    "Czech Republic": {
        "coal": 6.032838,
        "oil": 2.123696,
        "gas": 1.579714,
        "cement": 0.177277,
        "flaring": 0.009876,
        "other": 0.17077
    },
    "Democratic Republic of the Congo": {
        "coal": 0.0,
        "oil": 0.023722,
        "gas": 0.0,
        "cement": 0.004663,
        "flaring": 0.0,
        "other": 0.0
    },
    "Denmark": {
        "coal": 1.103162,
        "oil": 3.483738,
        "gas": 1.123461,
        "cement": 0.201111,
        "flaring": 0.040329,
        "other": 0.069852
    },
    "Djibouti": {
        "coal": 0.0,
        "oil": 0.298056,
        "gas": 0.0,
        "cement": 0.065975,
        "flaring": 0.0,
        "other": 0.0
    },
    "Dominica": {
        "coal": 0.0,
        "oil": 2.276323,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Dominican Republic": {
        "coal": 0.30529,
        "oil": 1.688794,
        "gas": 0.202846,
        "cement": 0.195543,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ecuador": {
        "coal": 0.0,
        "oil": 1.938409,
        "gas": 0.079888,
        "cement": 0.133481,
        "flaring": 0.095864,
        "other": 0.0
    },
    "Egypt": {
        "coal": 0.125382,
        "oil": 0.992247,
        "gas": 0.989951,
        "cement": 0.202449,
        "flaring": 0.0411,
        "other": 0.0
    },
    "El Salvador": {
        "coal": 0.000584,
        "oil": 0.953312,
        "gas": 0.0,
        "cement": 0.067328,
        "flaring": 0.0,
        "other": 0.0
    },
    "Equatorial Guinea": {
        "coal": 0.0,
        "oil": 0.722023,
        "gas": 2.866138,
        "cement": 0.0,
        "flaring": 0.411898,
        "other": 0.0
    },
    "Eritrea": {
        "coal": 0.0,
        "oil": 0.209501,
        "gas": 0.0,
        "cement": 0.031491,
        "flaring": 0.0,
        "other": 0.0
    },
    "Estonia": {
        "coal": 9.87993,
        "oil": 2.64972,
        "gas": 0.746268,
        "cement": 0.225211,
        "flaring": 2.6e-05,
        "other": 0.063948
    },
    "Ethiopia": {
        "coal": 0.010025,
        "oil": 0.099726,
        "gas": 0.0,
        "cement": 0.032428,
        "flaring": 7e-05,
        "other": 0.0
    },
    "Faeroe Islands": {
        "coal": 0.0,
        "oil": 14.237504,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Fiji": {
        "coal": 0.0,
        "oil": 1.475019,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Finland": {
        "coal": 3.249484,
        "oil": 4.007055,
        "gas": 0.799873,
        "cement": 0.10909,
        "flaring": 0.01646,
        "other": 0.121326
    },
    "France": {
        "coal": 0.543988,
        "oil": 2.945701,
        "gas": 1.318802,
        "cement": 0.101048,
        "flaring": 0.045199,
        "other": 0.062963
    },
    "French Equatorial Africa": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French Guiana": {
        "coal": 0.0,
        "oil": 2.540156,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French Polynesia": {
        "coal": 0.0,
        "oil": 2.942468,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French West Africa": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Gabon": {
        "coal": 0.0,
        "oil": 1.08649,
        "gas": 0.401166,
        "cement": 0.08662,
        "flaring": 1.159307,
        "other": 0.0
    },
    "Gambia": {
        "coal": 0.0,
        "oil": 0.242776,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Georgia": {
        "coal": 0.320524,
        "oil": 0.906208,
        "gas": 1.24033,
        "cement": 0.2004,
        "flaring": 0.0,
        "other": 0.0
    },
    "Germany": {
        "coal": 3.566771,
        "oil": 3.199455,
        "gas": 2.045299,
        "cement": 0.159571,
        "flaring": 0.024217,
        "other": 0.105272
    },
    "Ghana": {
        "coal": 0.0,
        "oil": 0.370628,
        "gas": 0.109455,
        "cement": 0.062635,
        "flaring": 0.011367,
        "other": 0.0
    },
    "Global": {
        "coal": 1.919213,
        "oil": 1.59635,
        "gas": 0.979965,
        "cement": 0.204225,
        "flaring": 0.053634,
        "other": 0.039366
    },
    "Greece": {
        "coal": 2.337101,
        "oil": 3.18252,
        "gas": 0.853147,
        "cement": 0.321582,
        "flaring": 0.001032,
        "other": 0.055314
    },
    "Greenland": {
        "coal": 0.0,
        "oil": 9.79816,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Grenada": {
        "coal": 0.0,
        "oil": 2.526108,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guadeloupe": {
        "coal": 1.141491,
        "oil": 5.095943,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guatemala": {
        "coal": 0.274145,
        "oil": 0.747431,
        "gas": 0.0,
        "cement": 0.080987,
        "flaring": 0.00667,
        "other": 0.0
    },
    "Guinea": {
        "coal": 0.0,
        "oil": 0.29359,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guinea-Bissau": {
        "coal": 0.0,
        "oil": 0.161791,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guyana": {
        "coal": 0.0,
        "oil": 2.952604,
        "gas": 0.0,
        "cement": 0.205814,
        "flaring": 0.0,
        "other": 0.0
    },
    "Haiti": {
        "coal": 0.0,
        "oil": 0.299104,
        "gas": 0.0,
        "cement": 0.007041,
        "flaring": 0.0,
        "other": 0.0
    },
    "Honduras": {
        "coal": 0.0,
        "oil": 0.921879,
        "gas": 0.0,
        "cement": 0.085107,
        "flaring": 0.0,
        "other": 0.0
    },
    "Hong Kong": {
        "coal": 3.262633,
        "oil": 1.537777,
        "gas": 0.810026,
        "cement": 0.083652,
        "flaring": 0.0,
        "other": 0.0
    },
    "Hungary": {
        "coal": 0.966311,
        "oil": 1.898428,
        "gas": 2.030007,
        "cement": 0.090196,
        "flaring": 0.015057,
        "other": 0.059484
    },
    "Iceland": {
        "coal": 2.025887,
        "oil": 7.886053,
        "gas": 9e-05,
        "cement": 0.0,
        "flaring": 0.443303,
        "other": 0.011561
    },
    "India": {
        "coal": 1.225417,
        "oil": 0.478589,
        "gas": 0.092185,
        "cement": 0.101508,
        "flaring": 0.001819,
        "other": 0.0
    },
    "Indonesia": {
        "coal": 0.98186,
        "oil": 0.833157,
        "gas": 0.315082,
        "cement": 0.115447,
        "flaring": 0.014777,
        "other": 0.0
    },
    "International Transport": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Iran": {
        "coal": 0.057474,
        "oil": 2.749319,
        "gas": 4.778185,
        "cement": 0.222983,
        "flaring": 0.378882,
        "other": 0.0
    },
    "Iraq": {
        "coal": 0.0,
        "oil": 3.56365,
        "gas": 0.751112,
        "cement": 0.120463,
        "flaring": 0.822903,
        "other": 0.0
    },
    "Ireland": {
        "coal": 1.314335,
        "oil": 4.034278,
        "gas": 2.192292,
        "cement": 0.396326,
        "flaring": 4.2e-05,
        "other": 0.132291
    },
    "Israel": {
        "coal": 2.143984,
        "oil": 2.657448,
        "gas": 2.114086,
        "cement": 0.209956,
        "flaring": 5.6e-05,
        "other": 0.0
    },
    "Italy": {
        "coal": 0.658418,
        "oil": 2.550184,
        "gas": 2.39943,
        "cement": 0.129543,
        "flaring": 0.038331,
        "other": 0.052752
    },
    "Jamaica": {
        "coal": 0.082093,
        "oil": 2.613946,
        "gas": 0.066456,
        "cement": 0.113361,
        "flaring": 0.0,
        "other": 0.0
    },
    "Japan": {
        "coal": 3.500543,
        "oil": 3.42567,
        "gas": 1.853009,
        "cement": 0.20738,
        "flaring": 0.003354,
        "other": 0.066352
    },
    "Jordan": {
        "coal": 0.075663,
        "oil": 1.402216,
        "gas": 0.752075,
        "cement": 0.156268,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kazakhstan": {
        "coal": 10.291659,
        "oil": 2.640337,
        "gas": 3.699082,
        "cement": 0.209879,
        "flaring": 0.904091,
        "other": 0.154344
    },
    "Kenya": {
        "coal": 0.036814,
        "oil": 0.280135,
        "gas": 0.0,
        "cement": 0.046775,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kiribati": {
        "coal": 0.0,
        "oil": 0.539436,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kosovo": {
        "coal": 3.312672,
        "oil": 1.257787,
        "gas": 0.0,
        "cement": 0.194989,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kuwait": {
        "coal": 0.0,
        "oil": 11.995994,
        "gas": 9.836817,
        "cement": 0.266971,
        "flaring": 0.379089,
        "other": 0.0
    },
    "Kuwaiti Oil Fires": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kyrgyzstan": {
        "coal": 0.649377,
        "oil": 0.910776,
        "gas": 0.103029,
        "cement": 0.121111,
        "flaring": 0.0,
        "other": 0.0
    },
    "Laos": {
        "coal": 2.169905,
        "oil": 0.465753,
        "gas": 0.0,
        "cement": 0.25781,
        "flaring": 0.0,
        "other": 0.0
    },
    "Latvia": {
        "coal": 0.101795,
        "oil": 2.253832,
        "gas": 1.396823,
        "cement": 0.284627,
        "flaring": 5e-06,
        "other": 0.023282
    },
    "Lebanon": {
        "coal": 0.105287,
        "oil": 3.946711,
        "gas": 0.0,
        "cement": 0.351223,
        "flaring": 0.0,
        "other": 0.0
    },
    "Leeward Islands": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Lesotho": {
        "coal": 0.765133,
        "oil": 0.313388,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Liberia": {
        "coal": 0.0,
        "oil": 0.196337,
        "gas": 0.0,
        "cement": 0.024885,
        "flaring": 0.0,
        "other": 0.0
    },
    "Libya": {
        "coal": 0.0,
        "oil": 4.003492,
        "gas": 2.70708,
        "cement": 0.269184,
        "flaring": 1.358856,
        "other": 0.0
    },
    "Liechtenstein": {
        "coal": 0.0,
        "oil": 2.443381,
        "gas": 1.300629,
        "cement": 0.0,
        "flaring": 1e-05,
        "other": 0.0
    },
    "Lithuania": {
        "coal": 0.298627,
        "oil": 2.80893,
        "gas": 1.373054,
        "cement": 0.177784,
        "flaring": 0.088173,
        "other": 0.013774
    },
    "Luxembourg": {
        "coal": 0.439529,
        "oil": 11.915452,
        "gas": 2.646612,
        "cement": 0.607804,
        "flaring": 6.7e-05,
        "other": 0.127445
    },
    "Macao": {
        "coal": 0.0,
        "oil": 1.63303,
        "gas": 0.274978,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Madagascar": {
        "coal": 0.046267,
        "oil": 0.093079,
        "gas": 0.0,
        "cement": 0.003031,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malawi": {
        "coal": 0.012767,
        "oil": 0.067823,
        "gas": 0.0,
        "cement": 0.004894,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malaysia": {
        "coal": 2.597201,
        "oil": 2.558412,
        "gas": 2.600707,
        "cement": 0.363362,
        "flaring": 0.123926,
        "other": 0.0
    },
    "Maldives": {
        "coal": 0.0,
        "oil": 3.553592,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mali": {
        "coal": 0.0,
        "oil": 0.170924,
        "gas": 0.0,
        "cement": 0.013413,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malta": {
        "coal": 2.4e-05,
        "oil": 1.76162,
        "gas": 1.384791,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.000415
    },
    "Marshall Islands": {
        "coal": 0.0,
        "oil": 3.186849,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Martinique": {
        "coal": 0.0,
        "oil": 6.044394,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mauritania": {
        "coal": 0.0,
        "oil": 0.858012,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mauritius": {
        "coal": 1.309601,
        "oil": 2.175125,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mayotte": {
        "coal": 0.0,
        "oil": 1.041943,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mexico": {
        "coal": 0.381516,
        "oil": 1.885479,
        "gas": 1.337801,
        "cement": 0.168238,
        "flaring": 0.059352,
        "other": 0.0
    },
    "Micronesia (Federated States of)": {
        "coal": 0.0,
        "oil": 1.288175,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Moldova": {
        "coal": 0.097961,
        "oil": 0.848991,
        "gas": 0.597093,
        "cement": 0.189161,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mongolia": {
        "coal": 12.940998,
        "oil": 1.249516,
        "gas": 0.0,
        "cement": 0.131,
        "flaring": 0.00079,
        "other": 0.0
    },
    "Montenegro": {
        "coal": 2.251359,
        "oil": 1.54926,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Montserrat": {
        "coal": 0.0,
        "oil": 6.724478,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Morocco": {
        "coal": 0.543296,
        "oil": 0.996229,
        "gas": 0.058848,
        "cement": 0.155438,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mozambique": {
        "coal": 0.002118,
        "oil": 0.151501,
        "gas": 0.054944,
        "cement": 0.031606,
        "flaring": 0.000445,
        "other": 0.0
    },
    "Myanmar": {
        "coal": 0.061716,
        "oil": 0.396663,
        "gas": 0.154115,
        "cement": 0.047098,
        "flaring": 0.000862,
        "other": 0.0
    },
    "Namibia": {
        "coal": 0.010661,
        "oil": 1.515447,
        "gas": 0.0,
        "cement": 0.201021,
        "flaring": 0.0,
        "other": 0.0
    },
    "Nauru": {
        "coal": 0.0,
        "oil": 4.609192,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Nepal": {
        "coal": 0.152181,
        "oil": 0.247679,
        "gas": 0.0,
        "cement": 0.120481,
        "flaring": 0.0,
        "other": 0.0
    },
    "Netherlands": {
        "coal": 1.882014,
        "oil": 3.10133,
        "gas": 4.04123,
        "cement": 0.012751,
        "flaring": 0.063705,
        "other": 0.075613
    },
    "New Caledonia": {
        "coal": 8.765573,
        "oil": 9.883762,
        "gas": 0.0,
        "cement": 0.115202,
        "flaring": 0.0,
        "other": 0.0
    },
    "New Zealand": {
        "coal": 1.084898,
        "oil": 4.243848,
        "gas": 1.632466,
        "cement": 0.086383,
        "flaring": 0.205055,
        "other": 0.126569
    },
    "Nicaragua": {
        "coal": 0.0,
        "oil": 0.750976,
        "gas": 0.0,
        "cement": 0.040112,
        "flaring": 0.0,
        "other": 0.0
    },
    "Niger": {
        "coal": 0.014444,
        "oil": 0.061345,
        "gas": 0.0,
        "cement": 0.000892,
        "flaring": 0.00272,
        "other": 0.0
    },
    "Nigeria": {
        "coal": 0.000646,
        "oil": 0.244233,
        "gas": 0.17309,
        "cement": 0.041017,
        "flaring": 0.071441,
        "other": 0.0
    },
    "Niue": {
        "coal": 0.0,
        "oil": 5.825119,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "North Korea": {
        "coal": 1.657494,
        "oil": 0.113472,
        "gas": 0.0,
        "cement": 0.086807,
        "flaring": 0.0,
        "other": 0.0
    },
    "North Macedonia": {
        "coal": 1.611377,
        "oil": 1.342525,
        "gas": 0.20294,
        "cement": 0.169984,
        "flaring": 0.0,
        "other": 0.0
    },
    "Norway": {
        "coal": 0.663891,
        "oil": 4.369315,
        "gas": 2.879533,
        "cement": 0.137416,
        "flaring": 0.203113,
        "other": 0.103345
    },
    "Occupied Palestinian Territory": {
        "coal": 0.0,
        "oil": 0.615299,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.000477,
        "other": 0.0
    },
    "Oman": {
        "coal": 0.0,
        "oil": 2.887404,
        "gas": 11.468149,
        "cement": 0.402309,
        "flaring": 1.011165,
        "other": 0.0
    },
    "Pacific Islands (Palau)": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Pakistan": {
        "coal": 0.213355,
        "oil": 0.301465,
        "gas": 0.344887,
        "cement": 0.07091,
        "flaring": 0.002616,
        "other": 0.0
    },
    "Palau": {
        "coal": 0.0,
        "oil": 11.896104,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Panama": {
        "coal": 0.139818,
        "oil": 2.169377,
        "gas": 0.120472,
        "cement": 0.155436,
        "flaring": 0.0,
        "other": 0.0
    },
    "Panama Canal Zone": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Papua New Guinea": {
        "coal": 0.0,
        "oil": 0.714009,
        "gas": 0.082869,
        "cement": 0.0,
        "flaring": 0.009463,
        "other": 0.0
    },
    "Paraguay": {
        "coal": 0.001707,
        "oil": 1.256111,
        "gas": 0.0,
        "cement": 0.062646,
        "flaring": 0.0,
        "other": 0.0
    },
    "Peru": {
        "coal": 0.077713,
        "oil": 1.031211,
        "gas": 0.464233,
        "cement": 0.134159,
        "flaring": 0.005614,
        "other": 0.0
    },
    "Philippines": {
        "coal": 0.597815,
        "oil": 0.528699,
        "gas": 0.077418,
        "cement": 0.10048,
        "flaring": 0.001893,
        "other": 0.0
    },
    "Poland": {
        "coal": 5.161461,
        "oil": 2.248373,
        "gas": 0.889982,
        "cement": 0.198729,
        "flaring": 0.125526,
        "other": 0.125559
    },
    "Portugal": {
        "coal": 1.009599,
        "oil": 2.479536,
        "gas": 1.100676,
        "cement": 0.218747,
        "flaring": 0.101833,
        "other": 0.090575
    },
    "Puerto Rico": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Qatar": {
        "coal": 0.0,
        "oil": 1.639491,
        "gas": 31.497296,
        "cement": 0.605933,
        "flaring": 0.67764,
        "other": 0.0
    },
    "Reunion": {
        "coal": 2.158386,
        "oil": 2.544578,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Romania": {
        "coal": 1.055481,
        "oil": 1.465321,
        "gas": 1.296068,
        "cement": 0.178756,
        "flaring": 0.043889,
        "other": 0.067033
    },
    "Russia": {
        "coal": 2.721498,
        "oil": 2.688019,
        "gas": 5.667024,
        "cement": 0.137936,
        "flaring": 0.339423,
        "other": 0.12084
    },
    "Rwanda": {
        "coal": 0.00117,
        "oil": 0.081865,
        "gas": 0.007602,
        "cement": 0.011604,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ryukyu Islands": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Helena": {
        "coal": 0.0,
        "oil": 2.008772,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Kitts and Nevis": {
        "coal": 0.0,
        "oil": 5.139926,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Lucia": {
        "coal": 0.0,
        "oil": 2.863015,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Pierre and Miquelon": {
        "coal": 0.0,
        "oil": 9.862719,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Vincent and the Grenadines": {
        "coal": 0.0,
        "oil": 2.296939,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Samoa": {
        "coal": 0.0,
        "oil": 1.135712,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sao Tome and Principe": {
        "coal": 0.0,
        "oil": 0.62412,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saudi Arabia": {
        "coal": 0.0,
        "oil": 9.694946,
        "gas": 7.345341,
        "cement": 0.717768,
        "flaring": 0.123856,
        "other": 0.0
    },
    "Senegal": {
        "coal": 0.145149,
        "oil": 0.44627,
        "gas": 0.001412,
        "cement": 0.134647,
        "flaring": 0.0,
        "other": 0.0
    },
    "Serbia": {
        "coal": 3.982492,
        "oil": 1.206084,
        "gas": 0.65652,
        "cement": 0.116895,
        "flaring": 0.0,
        "other": 0.0
    },
    "Seychelles": {
        "coal": 0.0,
        "oil": 5.828227,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sierra Leone": {
        "coal": 0.0,
        "oil": 0.131901,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Singapore": {
        "coal": 0.353483,
        "oil": 4.021264,
        "gas": 3.539871,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sint Maarten (Dutch part)": {
        "coal": 0.0,
        "oil": 16.30526,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Slovakia": {
        "coal": 2.608226,
        "oil": 1.878953,
        "gas": 1.718268,
        "cement": 0.247245,
        "flaring": 0.003622,
        "other": 0.172042
    },
    "Slovenia": {
        "coal": 2.275529,
        "oil": 3.478907,
        "gas": 0.816933,
        "cement": 0.21372,
        "flaring": 0.062183,
        "other": 0.05075
    },
    "Solomon Islands": {
        "coal": 0.0,
        "oil": 0.439069,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Somalia": {
        "coal": 0.0,
        "oil": 0.041369,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "South Africa": {
        "coal": 6.193131,
        "oil": 1.14201,
        "gas": 0.159046,
        "cement": 0.095328,
        "flaring": 0.000996,
        "other": 0.0
    },
    "South Korea": {
        "coal": 6.586068,
        "oil": 3.437376,
        "gas": 2.267409,
        "cement": 0.47801,
        "flaring": 0.0,
        "other": 0.199575
    },
    "South Sudan": {
        "coal": 0.0,
        "oil": 0.144159,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Spain": {
        "coal": 1.027229,
        "oil": 3.067432,
        "gas": 1.32293,
        "cement": 0.206604,
        "flaring": 0.081082,
        "other": 0.066052
    },
    "Sri Lanka": {
        "coal": 0.256155,
        "oil": 0.666445,
        "gas": 0.0,
        "cement": 0.050237,
        "flaring": 0.0,
        "other": 0.0
    },
    "St. Kitts-Nevis-Anguilla": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sudan": {
        "coal": 0.0,
        "oil": 0.467258,
        "gas": 0.0,
        "cement": 0.037039,
        "flaring": 0.016294,
        "other": 0.0
    },
    "Suriname": {
        "coal": 0.0,
        "oil": 3.110341,
        "gas": 0.018514,
        "cement": 0.019925,
        "flaring": 0.0,
        "other": 0.0
    },
    "Swaziland": {
        "coal": 0.138928,
        "oil": 0.751474,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sweden": {
        "coal": 0.791797,
        "oil": 2.870702,
        "gas": 0.186342,
        "cement": 0.158151,
        "flaring": 0.081186,
        "other": 0.054086
    },
    "Switzerland": {
        "coal": 0.056252,
        "oil": 3.261487,
        "gas": 0.785151,
        "cement": 0.204171,
        "flaring": 0.003276,
        "other": 0.020406
    },
    "Syria": {
        "coal": 0.00019,
        "oil": 1.102225,
        "gas": 0.353068,
        "cement": 0.03884,
        "flaring": 0.069282,
        "other": 0.0
    },
    "Taiwan": {
        "coal": 6.693304,
        "oil": 2.907881,
        "gas": 2.047654,
        "cement": 0.226669,
        "flaring": 0.002424,
        "other": 0.043201
    },
    "Tajikistan": {
        "coal": 0.459008,
        "oil": 0.320985,
        "gas": 0.012037,
        "cement": 0.205797,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tanzania": {
        "coal": 0.02869,
        "oil": 0.119614,
        "gas": 0.024528,
        "cement": 0.030077,
        "flaring": 0.0,
        "other": 0.0
    },
    "Thailand": {
        "coal": 0.851829,
        "oil": 1.647302,
        "gas": 1.142572,
        "cement": 0.315852,
        "flaring": 0.008622,
        "other": 0.0
    },
    "Timor-Leste": {
        "coal": 0.0,
        "oil": 0.394901,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.107436,
        "other": 0.0
    },
    "Togo": {
        "coal": 0.0,
        "oil": 0.165745,
        "gas": 0.010928,
        "cement": 0.097712,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tonga": {
        "coal": 0.0,
        "oil": 1.289282,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Trinidad and Tobago": {
        "coal": 0.0,
        "oil": 2.612779,
        "gas": 23.775558,
        "cement": 0.17082,
        "flaring": 0.241961,
        "other": 0.0
    },
    "Tunisia": {
        "coal": 0.0,
        "oil": 1.151425,
        "gas": 1.054398,
        "cement": 0.261901,
        "flaring": 0.046047,
        "other": 0.0
    },
    "Turkey": {
        "coal": 1.968848,
        "oil": 1.42094,
        "gas": 1.153031,
        "cement": 0.475955,
        "flaring": 0.002107,
        "other": 0.082036
    },
    "Turkmenistan": {
        "coal": 0.0,
        "oil": 3.320823,
        "gas": 8.055879,
        "cement": 0.239095,
        "flaring": 0.461902,
        "other": 0.0
    },
    "Turks and Caicos Islands": {
        "coal": 0.0,
        "oil": 8.743365,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tuvalu": {
        "coal": 0.0,
        "oil": 0.674459,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "USA": {
        "coal": 3.782144,
        "oil": 7.121344,
        "gas": 4.873608,
        "cement": 0.117332,
        "flaring": 0.219145,
        "other": 0.074349
    },
    "Uganda": {
        "coal": 0.0,
        "oil": 0.127707,
        "gas": 0.0,
        "cement": 0.007925,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ukraine": {
        "coal": 2.712088,
        "oil": 0.792284,
        "gas": 1.507232,
        "cement": 0.083667,
        "flaring": 0.053982,
        "other": 0.063134
    },
    "United Arab Emirates": {
        "coal": 0.796701,
        "oil": 6.788012,
        "gas": 14.613066,
        "cement": 0.622851,
        "flaring": 0.178767,
        "other": 0.0
    },
    "United Kingdom": {
        "coal": 0.50096,
        "oil": 2.605439,
        "gas": 2.430799,
        "cement": 0.065689,
        "flaring": 0.067382,
        "other": 0.045712
    },
    "Uruguay": {
        "coal": 0.001069,
        "oil": 1.789746,
        "gas": 0.033143,
        "cement": 0.093429,
        "flaring": 0.0,
        "other": 0.0
    },
    "Uzbekistan": {
        "coal": 0.29764,
        "oil": 0.36042,
        "gas": 2.768868,
        "cement": 0.116368,
        "flaring": 0.045782,
        "other": 0.0
    },
    "Vanuatu": {
        "coal": 0.0,
        "oil": 0.591568,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Venezuela": {
        "coal": 0.004177,
        "oil": 1.449721,
        "gas": 1.398248,
        "cement": 0.067426,
        "flaring": 0.52283,
        "other": 0.0
    },
    "Viet Nam": {
        "coal": 1.420792,
        "oil": 0.735006,
        "gas": 0.195487,
        "cement": 0.522971,
        "flaring": 0.014908,
        "other": 0.0
    },
    "Wallis and Futuna Islands": {
        "coal": 0.0,
        "oil": 2.170616,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Yemen": {
        "coal": 0.010115,
        "oil": 0.272148,
        "gas": 0.006426,
        "cement": 0.021325,
        "flaring": 0.030162,
        "other": 0.0
    },
    "Zambia": {
        "coal": 0.153866,
        "oil": 0.201936,
        "gas": 0.0,
        "cement": 0.059767,
        "flaring": 0.0,
        "other": 0.0
    },
    "Zimbabwe": {
        "coal": 0.476859,
        "oil": 0.269709,
        "gas": 0.0,
        "cement": 0.03707,
        "flaring": 0.0,
        "other": 0.0
    }
    }
},
{id: "2019", metadata: {
    "Afghanistan": {
        "coal": 0.104708,
        "oil": 0.181177,
        "gas": 0.006502,
        "cement": 0.001015,
        "flaring": 0.0,
        "other": 0.0
    },
    "Albania": {
        "coal": 0.112194,
        "oil": 1.197159,
        "gas": 0.045897,
        "cement": 0.364726,
        "flaring": 0.001557,
        "other": 0.0
    },
    "Algeria": {
        "coal": 0.025653,
        "oil": 1.385251,
        "gas": 2.136732,
        "cement": 0.258235,
        "flaring": 0.397461,
        "other": 0.0
    },
    "Andorra": {
        "coal": 0.0,
        "oil": 6.287204,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Angola": {
        "coal": 0.0,
        "oil": 0.429439,
        "gas": 0.075084,
        "cement": 0.034733,
        "flaring": 0.135106,
        "other": 0.0
    },
    "Anguilla": {
        "coal": 0.0,
        "oil": 10.005722,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Antarctica": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Antigua and Barbuda": {
        "coal": 0.0,
        "oil": 5.409468,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Argentina": {
        "coal": 0.047903,
        "oil": 1.672753,
        "gas": 2.136715,
        "cement": 0.092544,
        "flaring": 0.039571,
        "other": 0.0
    },
    "Armenia": {
        "coal": 0.003897,
        "oil": 0.370219,
        "gas": 1.732884,
        "cement": 0.120932,
        "flaring": 0.0,
        "other": 0.0
    },
    "Aruba": {
        "coal": 0.0,
        "oil": 8.571203,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Australia": {
        "coal": 6.486179,
        "oil": 5.642777,
        "gas": 3.22172,
        "cement": 0.119869,
        "flaring": 0.796589,
        "other": 0.152544
    },
    "Austria": {
        "coal": 1.464565,
        "oil": 3.838689,
        "gas": 2.003686,
        "cement": 0.199385,
        "flaring": 0.013317,
        "other": 0.130881
    },
    "Azerbaijan": {
        "coal": 0.000358,
        "oil": 1.182227,
        "gas": 2.357292,
        "cement": 0.107153,
        "flaring": 0.040921,
        "other": 0.0
    },
    "Bahamas": {
        "coal": 0.009057,
        "oil": 6.258263,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bahrain": {
        "coal": 0.0,
        "oil": 2.508568,
        "gas": 22.172503,
        "cement": 0.411394,
        "flaring": 0.214713,
        "other": 0.0
    },
    "Bangladesh": {
        "coal": 0.090647,
        "oil": 0.101383,
        "gas": 0.352671,
        "cement": 0.008905,
        "flaring": 0.000161,
        "other": 0.0
    },
    "Barbados": {
        "coal": 0.0,
        "oil": 3.713955,
        "gas": 0.170005,
        "cement": 0.251866,
        "flaring": 0.065387,
        "other": 0.0
    },
    "Belarus": {
        "coal": 0.423781,
        "oil": 1.86444,
        "gas": 3.786235,
        "cement": 0.235276,
        "flaring": 0.000655,
        "other": 0.102645
    },
    "Belgium": {
        "coal": 1.146097,
        "oil": 3.930573,
        "gas": 3.144868,
        "cement": 0.244932,
        "flaring": 0.010087,
        "other": 0.16182
    },
    "Belize": {
        "coal": 0.0,
        "oil": 1.817428,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Benin": {
        "coal": 0.022061,
        "oil": 0.519023,
        "gas": 0.008645,
        "cement": 0.03154,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bermuda": {
        "coal": 0.0,
        "oil": 9.129568,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bhutan": {
        "coal": 0.549033,
        "oil": 0.744775,
        "gas": 0.0,
        "cement": 0.591717,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bolivia": {
        "coal": 0.002178,
        "oil": 1.082962,
        "gas": 0.752878,
        "cement": 0.130588,
        "flaring": 0.004618,
        "other": 0.0
    },
    "Bonaire, Saint Eustatius and Saba": {
        "coal": 0.0,
        "oil": 4.298788,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bosnia and Herzegovina": {
        "coal": 4.562677,
        "oil": 1.393334,
        "gas": 0.127559,
        "cement": 0.108685,
        "flaring": 0.0,
        "other": 0.0
    },
    "Botswana": {
        "coal": 1.544295,
        "oil": 1.168854,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Brazil": {
        "coal": 0.292223,
        "oil": 1.427564,
        "gas": 0.316935,
        "cement": 0.093799,
        "flaring": 0.082655,
        "other": 0.030182
    },
    "British Virgin Islands": {
        "coal": 0.0,
        "oil": 5.506174,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Brunei Darussalam": {
        "coal": 0.828074,
        "oil": 8.163635,
        "gas": 13.63394,
        "cement": 0.0,
        "flaring": 1.315813,
        "other": 0.0
    },
    "Bulgaria": {
        "coal": 2.944635,
        "oil": 1.856303,
        "gas": 0.743668,
        "cement": 0.159815,
        "flaring": 0.117263,
        "other": 0.169888
    },
    "Burkina Faso": {
        "coal": 0.0,
        "oil": 0.2121,
        "gas": 0.0,
        "cement": 0.040688,
        "flaring": 0.0,
        "other": 0.0
    },
    "Burundi": {
        "coal": 0.004011,
        "oil": 0.053997,
        "gas": 0.0,
        "cement": 0.002447,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cambodia": {
        "coal": 0.272634,
        "oil": 0.510906,
        "gas": 0.0,
        "cement": 0.32856,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cameroon": {
        "coal": 0.0,
        "oil": 0.195974,
        "gas": 0.051445,
        "cement": 0.045088,
        "flaring": 0.076151,
        "other": 0.0
    },
    "Canada": {
        "coal": 1.554416,
        "oil": 7.177703,
        "gas": 6.181943,
        "cement": 0.18989,
        "flaring": 0.421818,
        "other": 0.057222
    },
    "Cape Verde": {
        "coal": 0.0,
        "oil": 1.060409,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Central African Republic": {
        "coal": 0.0,
        "oil": 0.043608,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Chad": {
        "coal": 0.0,
        "oil": 0.089289,
        "gas": 0.0,
        "cement": 0.010092,
        "flaring": 0.019817,
        "other": 0.0
    },
    "Chile": {
        "coal": 1.629087,
        "oil": 2.522247,
        "gas": 0.632967,
        "cement": 0.043348,
        "flaring": 0.002414,
        "other": 0.0
    },
    "China": {
        "coal": 5.305119,
        "oil": 1.09696,
        "gas": 0.443201,
        "cement": 0.581544,
        "flaring": 0.002677,
        "other": 0.124665
    },
    "Christmas Island": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Colombia": {
        "coal": 0.367137,
        "oil": 0.951753,
        "gas": 0.472357,
        "cement": 0.110321,
        "flaring": 0.019994,
        "other": 0.0
    },
    "Comoros": {
        "coal": 0.0,
        "oil": 0.393736,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Congo": {
        "coal": 0.0,
        "oil": 0.363403,
        "gas": 0.338432,
        "cement": 0.050778,
        "flaring": 0.565252,
        "other": 0.0
    },
    "Cook Islands": {
        "coal": 0.0,
        "oil": 4.925307,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Costa Rica": {
        "coal": 0.0,
        "oil": 1.439072,
        "gas": 0.0,
        "cement": 0.14487,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cote dIvoire": {
        "coal": 0.0,
        "oil": 0.236536,
        "gas": 0.162829,
        "cement": 0.0,
        "flaring": 0.003545,
        "other": 0.0
    },
    "Croatia": {
        "coal": 0.406207,
        "oil": 2.25715,
        "gas": 1.269931,
        "cement": 0.286727,
        "flaring": 0.069481,
        "other": 0.034602
    },
    "Cuba": {
        "coal": 0.000324,
        "oil": 1.798182,
        "gas": 0.161263,
        "cement": 0.055961,
        "flaring": 0.002724,
        "other": 0.0
    },
    "Curacao": {
        "coal": 0.0,
        "oil": 10.151056,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cyprus": {
        "coal": 0.055379,
        "oil": 5.257423,
        "gas": 0.000184,
        "cement": 0.642244,
        "flaring": 0.0,
        "other": 0.020488
    },
    "Czech Republic": {
        "coal": 5.452037,
        "oil": 2.134146,
        "gas": 1.647717,
        "cement": 0.187649,
        "flaring": 0.007714,
        "other": 0.157356
    },
    "Democratic Republic of the Congo": {
        "coal": 0.0,
        "oil": 0.023963,
        "gas": 0.0,
        "cement": 0.005017,
        "flaring": 0.0,
        "other": 0.0
    },
    "Denmark": {
        "coal": 0.619126,
        "oil": 3.398762,
        "gas": 1.038093,
        "cement": 0.194828,
        "flaring": 0.033596,
        "other": 0.056536
    },
    "Djibouti": {
        "coal": 0.0,
        "oil": 0.293395,
        "gas": 0.0,
        "cement": 0.072159,
        "flaring": 0.0,
        "other": 0.0
    },
    "Dominica": {
        "coal": 0.0,
        "oil": 2.359635,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Dominican Republic": {
        "coal": 0.300005,
        "oil": 1.879495,
        "gas": 0.22694,
        "cement": 0.199508,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ecuador": {
        "coal": 0.0,
        "oil": 2.009458,
        "gas": 0.069933,
        "cement": 0.142551,
        "flaring": 0.099614,
        "other": 0.0
    },
    "Egypt": {
        "coal": 0.095851,
        "oil": 0.960659,
        "gas": 1.141086,
        "cement": 0.18623,
        "flaring": 0.041315,
        "other": 0.0
    },
    "El Salvador": {
        "coal": 0.000583,
        "oil": 1.108532,
        "gas": 0.0,
        "cement": 0.072842,
        "flaring": 0.0,
        "other": 0.0
    },
    "Equatorial Guinea": {
        "coal": 0.0,
        "oil": 0.719574,
        "gas": 1.922795,
        "cement": 0.0,
        "flaring": 0.344034,
        "other": 0.0
    },
    "Eritrea": {
        "coal": 0.0,
        "oil": 0.2135,
        "gas": 0.0,
        "cement": 0.03101,
        "flaring": 0.0,
        "other": 0.0
    },
    "Estonia": {
        "coal": 5.859459,
        "oil": 2.498305,
        "gas": 0.689046,
        "cement": 0.222665,
        "flaring": 2.4e-05,
        "other": 0.059684
    },
    "Ethiopia": {
        "coal": 0.010565,
        "oil": 0.115478,
        "gas": 0.0,
        "cement": 0.034294,
        "flaring": 0.0,
        "other": 0.0
    },
    "Faeroe Islands": {
        "coal": 0.0,
        "oil": 14.321085,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Fiji": {
        "coal": 0.0,
        "oil": 1.479862,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Finland": {
        "coal": 2.762942,
        "oil": 3.908552,
        "gas": 0.780621,
        "cement": 0.105674,
        "flaring": 0.011798,
        "other": 0.106145
    },
    "France": {
        "coal": 0.454883,
        "oil": 2.914578,
        "gas": 1.340943,
        "cement": 0.102304,
        "flaring": 0.038896,
        "other": 0.061252
    },
    "French Equatorial Africa": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French Guiana": {
        "coal": 0.0,
        "oil": 2.534249,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French Polynesia": {
        "coal": 0.0,
        "oil": 2.921743,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French West Africa": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Gabon": {
        "coal": 0.0,
        "oil": 0.832518,
        "gas": 0.40973,
        "cement": 0.093298,
        "flaring": 1.221656,
        "other": 0.0
    },
    "Gambia": {
        "coal": 0.0,
        "oil": 0.239507,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Georgia": {
        "coal": 0.258465,
        "oil": 0.951269,
        "gas": 1.406013,
        "cement": 0.280227,
        "flaring": 0.0,
        "other": 0.0
    },
    "Germany": {
        "coal": 2.887455,
        "oil": 3.258166,
        "gas": 2.074357,
        "cement": 0.159795,
        "flaring": 0.024395,
        "other": 0.100533
    },
    "Ghana": {
        "coal": 0.0,
        "oil": 0.381327,
        "gas": 0.130209,
        "cement": 0.073633,
        "flaring": 0.008267,
        "other": 0.0
    },
    "Global": {
        "coal": 1.896468,
        "oil": 1.58992,
        "gas": 0.984878,
        "cement": 0.208309,
        "flaring": 0.056569,
        "other": 0.03949
    },
    "Greece": {
        "coal": 1.690381,
        "oil": 3.210075,
        "gas": 0.945541,
        "cement": 0.31778,
        "flaring": 0.000855,
        "other": 0.054025
    },
    "Greenland": {
        "coal": 0.0,
        "oil": 9.898558,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Grenada": {
        "coal": 0.0,
        "oil": 2.687005,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guadeloupe": {
        "coal": 1.1717,
        "oil": 5.230805,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guatemala": {
        "coal": 0.263667,
        "oil": 0.804068,
        "gas": 0.0,
        "cement": 0.080681,
        "flaring": 0.006796,
        "other": 0.0
    },
    "Guinea": {
        "coal": 0.0,
        "oil": 0.34431,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guinea-Bissau": {
        "coal": 0.0,
        "oil": 0.163633,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guyana": {
        "coal": 0.0,
        "oil": 3.215592,
        "gas": 0.0,
        "cement": 0.202403,
        "flaring": 0.0,
        "other": 0.0
    },
    "Haiti": {
        "coal": 0.0,
        "oil": 0.266582,
        "gas": 0.0,
        "cement": 0.006947,
        "flaring": 0.0,
        "other": 0.0
    },
    "Honduras": {
        "coal": 0.0,
        "oil": 1.049293,
        "gas": 0.0,
        "cement": 0.078565,
        "flaring": 0.0,
        "other": 0.0
    },
    "Hong Kong": {
        "coal": 3.118944,
        "oil": 1.550429,
        "gas": 0.838757,
        "cement": 0.081453,
        "flaring": 0.0,
        "other": 0.0
    },
    "Hungary": {
        "coal": 0.837731,
        "oil": 1.981575,
        "gas": 2.043535,
        "cement": 0.104675,
        "flaring": 0.015294,
        "other": 0.055634
    },
    "Iceland": {
        "coal": 1.895957,
        "oil": 7.462608,
        "gas": 0.00063,
        "cement": 0.0,
        "flaring": 0.4521,
        "other": 0.018302
    },
    "India": {
        "coal": 1.212956,
        "oil": 0.487315,
        "gas": 0.093034,
        "cement": 0.10387,
        "flaring": 0.001774,
        "other": 0.0
    },
    "Indonesia": {
        "coal": 1.169958,
        "oil": 0.824181,
        "gas": 0.326098,
        "cement": 0.111862,
        "flaring": 0.014035,
        "other": 0.0
    },
    "International Transport": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Iran": {
        "coal": 0.043089,
        "oil": 2.650078,
        "gas": 4.886201,
        "cement": 0.241355,
        "flaring": 0.299933,
        "other": 0.0
    },
    "Iraq": {
        "coal": 0.0,
        "oil": 2.742125,
        "gas": 0.824242,
        "cement": 0.126046,
        "flaring": 0.810296,
        "other": 0.0
    },
    "Ireland": {
        "coal": 0.927961,
        "oil": 3.991934,
        "gas": 2.213208,
        "cement": 0.386559,
        "flaring": 5.8e-05,
        "other": 0.103956
    },
    "Israel": {
        "coal": 2.092518,
        "oil": 2.46752,
        "gas": 2.08741,
        "cement": 0.165489,
        "flaring": 0.0,
        "other": 0.0
    },
    "Italy": {
        "coal": 0.513293,
        "oil": 2.479841,
        "gas": 2.457116,
        "cement": 0.132459,
        "flaring": 0.046148,
        "other": 0.050784
    },
    "Jamaica": {
        "coal": 0.095103,
        "oil": 2.398419,
        "gas": 0.168059,
        "cement": 0.11882,
        "flaring": 0.0,
        "other": 0.0
    },
    "Japan": {
        "coal": 3.436238,
        "oil": 3.305946,
        "gas": 1.782551,
        "cement": 0.201349,
        "flaring": 0.002933,
        "other": 0.063421
    },
    "Jordan": {
        "coal": 0.073289,
        "oil": 1.488041,
        "gas": 0.734603,
        "cement": 0.164859,
        "flaring": 7.6e-05,
        "other": 0.0
    },
    "Kazakhstan": {
        "coal": 9.392327,
        "oil": 2.61598,
        "gas": 2.689467,
        "cement": 0.202629,
        "flaring": 0.783724,
        "other": 0.182641
    },
    "Kenya": {
        "coal": 0.031863,
        "oil": 0.299138,
        "gas": 0.0,
        "cement": 0.045381,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kiribati": {
        "coal": 0.0,
        "oil": 0.530839,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kosovo": {
        "coal": 3.523773,
        "oil": 1.3244,
        "gas": 0.0,
        "cement": 0.18889,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kuwait": {
        "coal": 0.0,
        "oil": 12.49659,
        "gas": 10.417538,
        "cement": 0.27525,
        "flaring": 0.309442,
        "other": 0.0
    },
    "Kuwaiti Oil Fires": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kyrgyzstan": {
        "coal": 0.501192,
        "oil": 0.705145,
        "gas": 0.097921,
        "cement": 0.12376,
        "flaring": 0.0,
        "other": 0.0
    },
    "Laos": {
        "coal": 1.969665,
        "oil": 0.463331,
        "gas": 0.0,
        "cement": 0.284144,
        "flaring": 0.0,
        "other": 0.0
    },
    "Latvia": {
        "coal": 0.086722,
        "oil": 2.253323,
        "gas": 1.329665,
        "cement": 0.292952,
        "flaring": 5e-06,
        "other": 0.028177
    },
    "Lebanon": {
        "coal": 0.108363,
        "oil": 4.088639,
        "gas": 0.0,
        "cement": 0.369016,
        "flaring": 0.0,
        "other": 0.0
    },
    "Leeward Islands": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Lesotho": {
        "coal": 0.750677,
        "oil": 0.32266,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Liberia": {
        "coal": 0.0,
        "oil": 0.1955,
        "gas": 0.0,
        "cement": 0.026427,
        "flaring": 0.0,
        "other": 0.0
    },
    "Libya": {
        "coal": 0.0,
        "oil": 6.410938,
        "gas": 2.415675,
        "cement": 0.247747,
        "flaring": 1.466449,
        "other": 0.0
    },
    "Liechtenstein": {
        "coal": 0.0,
        "oil": 2.565594,
        "gas": 1.307004,
        "cement": 0.0,
        "flaring": 1e-05,
        "other": 0.0
    },
    "Lithuania": {
        "coal": 0.281089,
        "oil": 2.875572,
        "gas": 1.43243,
        "cement": 0.202892,
        "flaring": 0.082111,
        "other": 0.01285
    },
    "Luxembourg": {
        "coal": 0.442609,
        "oil": 11.929398,
        "gas": 2.593754,
        "cement": 0.636791,
        "flaring": 6.6e-05,
        "other": 0.126662
    },
    "Macao": {
        "coal": 0.0,
        "oil": 1.44097,
        "gas": 0.386467,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Madagascar": {
        "coal": 0.050878,
        "oil": 0.102023,
        "gas": 0.0,
        "cement": 0.003237,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malawi": {
        "coal": 0.011431,
        "oil": 0.068007,
        "gas": 0.0,
        "cement": 0.004991,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malaysia": {
        "coal": 2.593079,
        "oil": 2.412136,
        "gas": 2.752243,
        "cement": 0.329156,
        "flaring": 0.118348,
        "other": 0.0
    },
    "Maldives": {
        "coal": 0.0,
        "oil": 3.870924,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mali": {
        "coal": 0.0,
        "oil": 0.168526,
        "gas": 0.0,
        "cement": 0.01884,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malta": {
        "coal": 2.2e-05,
        "oil": 1.868084,
        "gas": 1.40611,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.000363
    },
    "Marshall Islands": {
        "coal": 0.0,
        "oil": 3.276695,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Martinique": {
        "coal": 0.0,
        "oil": 6.235374,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mauritania": {
        "coal": 0.0,
        "oil": 0.860869,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mauritius": {
        "coal": 1.204111,
        "oil": 2.283854,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mayotte": {
        "coal": 0.0,
        "oil": 1.02561,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mexico": {
        "coal": 0.361897,
        "oil": 1.933857,
        "gas": 1.255934,
        "cement": 0.155875,
        "flaring": 0.067393,
        "other": 0.0
    },
    "Micronesia (Federated States of)": {
        "coal": 0.0,
        "oil": 1.315867,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Moldova": {
        "coal": 0.117912,
        "oil": 0.885523,
        "gas": 0.557726,
        "cement": 0.204615,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mongolia": {
        "coal": 12.919646,
        "oil": 1.548498,
        "gas": 0.0,
        "cement": 0.150741,
        "flaring": 0.0,
        "other": 0.0
    },
    "Montenegro": {
        "coal": 2.307451,
        "oil": 1.621609,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Montserrat": {
        "coal": 0.0,
        "oil": 4.879911,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Morocco": {
        "coal": 0.695773,
        "oil": 1.001069,
        "gas": 0.055206,
        "cement": 0.137738,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mozambique": {
        "coal": 0.001573,
        "oil": 0.143847,
        "gas": 0.057103,
        "cement": 0.033394,
        "flaring": 6.4e-05,
        "other": 0.0
    },
    "Myanmar": {
        "coal": 0.074122,
        "oil": 0.371718,
        "gas": 0.150456,
        "cement": 0.0554,
        "flaring": 0.000812,
        "other": 0.0
    },
    "Namibia": {
        "coal": 0.020966,
        "oil": 1.445147,
        "gas": 0.0,
        "cement": 0.212532,
        "flaring": 0.0,
        "other": 0.0
    },
    "Nauru": {
        "coal": 0.0,
        "oil": 4.530168,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Nepal": {
        "coal": 0.118819,
        "oil": 0.216415,
        "gas": 0.0,
        "cement": 0.130502,
        "flaring": 0.0,
        "other": 0.0
    },
    "Netherlands": {
        "coal": 1.457556,
        "oil": 3.052419,
        "gas": 4.173986,
        "cement": 0.000365,
        "flaring": 0.061166,
        "other": 0.068105
    },
    "New Caledonia": {
        "coal": 8.70504,
        "oil": 9.128736,
        "gas": 0.0,
        "cement": 0.102967,
        "flaring": 0.0,
        "other": 0.0
    },
    "New Zealand": {
        "coal": 1.207043,
        "oil": 4.216917,
        "gas": 1.661642,
        "cement": 0.082867,
        "flaring": 0.18409,
        "other": 0.132979
    },
    "Nicaragua": {
        "coal": 0.0,
        "oil": 0.748313,
        "gas": 0.0,
        "cement": 0.034906,
        "flaring": 0.0,
        "other": 0.0
    },
    "Niger": {
        "coal": 0.013931,
        "oil": 0.084682,
        "gas": 0.0,
        "cement": 0.004298,
        "flaring": 0.002391,
        "other": 0.0
    },
    "Nigeria": {
        "coal": 0.000721,
        "oil": 0.337953,
        "gas": 0.172671,
        "cement": 0.043075,
        "flaring": 0.071755,
        "other": 0.0
    },
    "Niue": {
        "coal": 0.0,
        "oil": 5.72202,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "North Korea": {
        "coal": 1.842298,
        "oil": 0.123332,
        "gas": 0.0,
        "cement": 0.083033,
        "flaring": 0.0,
        "other": 0.0
    },
    "North Macedonia": {
        "coal": 1.915035,
        "oil": 1.462705,
        "gas": 0.23743,
        "cement": 0.166374,
        "flaring": 0.0,
        "other": 0.0
    },
    "Norway": {
        "coal": 0.663167,
        "oil": 4.103974,
        "gas": 2.813428,
        "cement": 0.134997,
        "flaring": 0.178936,
        "other": 0.105081
    },
    "Occupied Palestinian Territory": {
        "coal": 0.0,
        "oil": 0.664923,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.000157,
        "other": 0.0
    },
    "Oman": {
        "coal": 0.0,
        "oil": 2.811703,
        "gas": 11.464159,
        "cement": 0.39458,
        "flaring": 1.010811,
        "other": 0.0
    },
    "Pacific Islands (Palau)": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Pakistan": {
        "coal": 0.225294,
        "oil": 0.290553,
        "gas": 0.335776,
        "cement": 0.069133,
        "flaring": 0.002072,
        "other": 0.0
    },
    "Palau": {
        "coal": 0.0,
        "oil": 12.270596,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Panama": {
        "coal": 0.562689,
        "oil": 2.105323,
        "gas": 0.367912,
        "cement": 0.134646,
        "flaring": 0.0,
        "other": 0.0
    },
    "Panama Canal Zone": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Papua New Guinea": {
        "coal": 0.0,
        "oil": 0.733761,
        "gas": 0.085241,
        "cement": 0.0,
        "flaring": 0.006722,
        "other": 0.0
    },
    "Paraguay": {
        "coal": 0.000561,
        "oil": 1.200156,
        "gas": 0.0,
        "cement": 0.061814,
        "flaring": 0.0,
        "other": 0.0
    },
    "Peru": {
        "coal": 0.078359,
        "oil": 1.0593,
        "gas": 0.477634,
        "cement": 0.138497,
        "flaring": 0.003411,
        "other": 0.0
    },
    "Philippines": {
        "coal": 0.62991,
        "oil": 0.50195,
        "gas": 0.076677,
        "cement": 0.105766,
        "flaring": 0.001431,
        "other": 0.0
    },
    "Poland": {
        "coal": 4.622457,
        "oil": 2.2902,
        "gas": 0.921992,
        "cement": 0.199837,
        "flaring": 0.112842,
        "other": 0.126453
    },
    "Portugal": {
        "coal": 0.489787,
        "oil": 2.541583,
        "gas": 1.18154,
        "cement": 0.216241,
        "flaring": 0.110129,
        "other": 0.088434
    },
    "Puerto Rico": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Qatar": {
        "coal": 0.0,
        "oil": 3.71068,
        "gas": 31.144656,
        "cement": 0.559866,
        "flaring": 0.617509,
        "other": 0.0
    },
    "Reunion": {
        "coal": 2.19199,
        "oil": 2.584195,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Romania": {
        "coal": 0.937765,
        "oil": 1.521071,
        "gas": 1.18613,
        "cement": 0.196065,
        "flaring": 0.044132,
        "other": 0.060227
    },
    "Russia": {
        "coal": 2.678461,
        "oil": 2.73371,
        "gas": 5.515648,
        "cement": 0.139329,
        "flaring": 0.4299,
        "other": 0.114979
    },
    "Rwanda": {
        "coal": 0.00143,
        "oil": 0.119853,
        "gas": 0.007151,
        "cement": 0.012746,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ryukyu Islands": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Helena": {
        "coal": 0.0,
        "oil": 2.690655,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Kitts and Nevis": {
        "coal": 0.0,
        "oil": 5.298793,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Lucia": {
        "coal": 0.0,
        "oil": 2.892907,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Pierre and Miquelon": {
        "coal": 0.0,
        "oil": 11.131139,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Vincent and the Grenadines": {
        "coal": 0.0,
        "oil": 2.165072,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Samoa": {
        "coal": 0.0,
        "oil": 1.279517,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sao Tome and Principe": {
        "coal": 0.0,
        "oil": 0.614653,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saudi Arabia": {
        "coal": 0.0,
        "oil": 10.382984,
        "gas": 7.143536,
        "cement": 0.686726,
        "flaring": 0.110219,
        "other": 0.0
    },
    "Senegal": {
        "coal": 0.130486,
        "oil": 0.498136,
        "gas": 0.001831,
        "cement": 0.167098,
        "flaring": 0.0,
        "other": 0.0
    },
    "Serbia": {
        "coal": 3.999626,
        "oil": 1.246077,
        "gas": 0.616355,
        "cement": 0.129586,
        "flaring": 0.0,
        "other": 0.0
    },
    "Seychelles": {
        "coal": 0.0,
        "oil": 5.686988,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sierra Leone": {
        "coal": 0.0,
        "oil": 0.147984,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Singapore": {
        "coal": 0.33602,
        "oil": 1.202928,
        "gas": 3.560692,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sint Maarten (Dutch part)": {
        "coal": 0.0,
        "oil": 16.026803,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Slovakia": {
        "coal": 2.159631,
        "oil": 1.892091,
        "gas": 1.717967,
        "cement": 0.257479,
        "flaring": 0.003498,
        "other": 0.162341
    },
    "Slovenia": {
        "coal": 2.144189,
        "oil": 3.33975,
        "gas": 0.829677,
        "cement": 0.226049,
        "flaring": 0.058973,
        "other": 0.050108
    },
    "Solomon Islands": {
        "coal": 0.0,
        "oil": 0.434256,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Somalia": {
        "coal": 0.0,
        "oil": 0.039893,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "South Africa": {
        "coal": 6.788868,
        "oil": 0.998142,
        "gas": 0.156748,
        "cement": 0.093876,
        "flaring": 0.000718,
        "other": 0.0
    },
    "South Korea": {
        "coal": 6.208152,
        "oil": 3.39352,
        "gas": 2.192626,
        "cement": 0.481237,
        "flaring": 0.0,
        "other": 0.196559
    },
    "South Sudan": {
        "coal": 0.0,
        "oil": 0.158166,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Spain": {
        "coal": 0.501205,
        "oil": 2.996325,
        "gas": 1.511792,
        "cement": 0.192317,
        "flaring": 0.077335,
        "other": 0.064074
    },
    "Sri Lanka": {
        "coal": 0.272646,
        "oil": 0.683901,
        "gas": 0.0,
        "cement": 0.069802,
        "flaring": 0.0,
        "other": 0.0
    },
    "St. Kitts-Nevis-Anguilla": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sudan": {
        "coal": 0.0,
        "oil": 0.459694,
        "gas": 0.0,
        "cement": 0.035982,
        "flaring": 0.012096,
        "other": 0.0
    },
    "Suriname": {
        "coal": 0.0,
        "oil": 4.431167,
        "gas": 0.018336,
        "cement": 0.019706,
        "flaring": 0.0,
        "other": 0.0
    },
    "Swaziland": {
        "coal": 0.172296,
        "oil": 0.786298,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sweden": {
        "coal": 0.788095,
        "oil": 2.795639,
        "gas": 0.173119,
        "cement": 0.131418,
        "flaring": 0.05222,
        "other": 0.050823
    },
    "Switzerland": {
        "coal": 0.050329,
        "oil": 3.205528,
        "gas": 0.802149,
        "cement": 0.201993,
        "flaring": 0.003889,
        "other": 0.019557
    },
    "Syria": {
        "coal": 0.000182,
        "oil": 0.915897,
        "gas": 0.325778,
        "cement": 0.038231,
        "flaring": 0.087143,
        "other": 0.0
    },
    "Taiwan": {
        "coal": 6.500221,
        "oil": 2.753439,
        "gas": 1.974532,
        "cement": 0.231645,
        "flaring": 0.001388,
        "other": 0.041762
    },
    "Tajikistan": {
        "coal": 0.488952,
        "oil": 0.314326,
        "gas": 0.029824,
        "cement": 0.219931,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tanzania": {
        "coal": 0.031577,
        "oil": 0.112847,
        "gas": 0.031271,
        "cement": 0.042158,
        "flaring": 0.0,
        "other": 0.0
    },
    "Thailand": {
        "coal": 0.876244,
        "oil": 1.696994,
        "gas": 1.175913,
        "cement": 0.312789,
        "flaring": 0.008293,
        "other": 0.0
    },
    "Timor-Leste": {
        "coal": 0.0,
        "oil": 0.472151,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.062953,
        "other": 0.0
    },
    "Togo": {
        "coal": 0.0,
        "oil": 0.142238,
        "gas": 0.023114,
        "cement": 0.102148,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tonga": {
        "coal": 0.0,
        "oil": 1.536107,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Trinidad and Tobago": {
        "coal": 0.0,
        "oil": 2.46122,
        "gas": 23.95893,
        "cement": 0.172932,
        "flaring": 0.228897,
        "other": 0.0
    },
    "Tunisia": {
        "coal": 0.0,
        "oil": 1.117039,
        "gas": 1.042225,
        "cement": 0.267502,
        "flaring": 0.03847,
        "other": 0.0
    },
    "Turkey": {
        "coal": 1.976146,
        "oil": 1.375871,
        "gas": 0.995918,
        "cement": 0.387495,
        "flaring": 0.00219,
        "other": 0.07445
    },
    "Turkmenistan": {
        "coal": 0.0,
        "oil": 3.282977,
        "gas": 8.199113,
        "cement": 0.247244,
        "flaring": 0.410409,
        "other": 0.0
    },
    "Turks and Caicos Islands": {
        "coal": 0.0,
        "oil": 8.420056,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tuvalu": {
        "coal": 0.0,
        "oil": 0.668857,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "USA": {
        "coal": 3.202695,
        "oil": 7.055616,
        "gas": 5.007181,
        "cement": 0.122326,
        "flaring": 0.264367,
        "other": 0.078699
    },
    "Uganda": {
        "coal": 0.0,
        "oil": 0.12643,
        "gas": 0.0,
        "cement": 0.013545,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ukraine": {
        "coal": 2.579566,
        "oil": 0.870383,
        "gas": 1.3693,
        "cement": 0.08928,
        "flaring": 0.053269,
        "other": 0.060848
    },
    "United Arab Emirates": {
        "coal": 0.813979,
        "oil": 6.567223,
        "gas": 14.453508,
        "cement": 0.621808,
        "flaring": 0.17738,
        "other": 0.0
    },
    "United Kingdom": {
        "coal": 0.367074,
        "oil": 2.530682,
        "gas": 2.385805,
        "cement": 0.066616,
        "flaring": 0.06414,
        "other": 0.047808
    },
    "Uruguay": {
        "coal": 0.001069,
        "oil": 1.759035,
        "gas": 0.048119,
        "cement": 0.084766,
        "flaring": 0.0,
        "other": 0.0
    },
    "Uzbekistan": {
        "coal": 0.251096,
        "oil": 0.372311,
        "gas": 2.80161,
        "cement": 0.141889,
        "flaring": 0.035547,
        "other": 0.0
    },
    "Vanuatu": {
        "coal": 0.0,
        "oil": 0.529612,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Venezuela": {
        "coal": 0.005691,
        "oil": 1.199725,
        "gas": 1.189986,
        "cement": 0.061247,
        "flaring": 0.619152,
        "other": 0.0
    },
    "Viet Nam": {
        "coal": 1.998842,
        "oil": 0.796989,
        "gas": 0.197401,
        "cement": 0.551855,
        "flaring": 0.015329,
        "other": 0.0
    },
    "Wallis and Futuna Islands": {
        "coal": 0.0,
        "oil": 2.189517,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Yemen": {
        "coal": 0.011263,
        "oil": 0.320923,
        "gas": 0.00627,
        "cement": 0.021035,
        "flaring": 0.042575,
        "other": 0.0
    },
    "Zambia": {
        "coal": 0.127718,
        "oil": 0.241488,
        "gas": 0.0,
        "cement": 0.052283,
        "flaring": 0.0,
        "other": 0.0
    },
    "Zimbabwe": {
        "coal": 0.448616,
        "oil": 0.238148,
        "gas": 0.0,
        "cement": 0.037097,
        "flaring": 0.0,
        "other": 0.0
    }
    }
},
{id: "2020", metadata: {
    "Afghanistan": {
        "coal": 0.106488,
        "oil": 0.185254,
        "gas": 0.006447,
        "cement": 0.001557,
        "flaring": 0.0,
        "other": 0.0
    },
    "Albania": {
        "coal": 0.115611,
        "oil": 1.122339,
        "gas": 0.045757,
        "cement": 0.36562,
        "flaring": 6.6e-05,
        "other": 0.0
    },
    "Algeria": {
        "coal": 0.025282,
        "oil": 1.25519,
        "gas": 2.032334,
        "cement": 0.2538,
        "flaring": 0.403426,
        "other": 0.0
    },
    "Andorra": {
        "coal": 0.0,
        "oil": 5.777148,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Angola": {
        "coal": 0.0,
        "oil": 0.39198,
        "gas": 0.075982,
        "cement": 0.033616,
        "flaring": 0.104963,
        "other": 0.0
    },
    "Anguilla": {
        "coal": 0.0,
        "oil": 8.430535,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Antarctica": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Antigua and Barbuda": {
        "coal": 0.0,
        "oil": 4.591351,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Argentina": {
        "coal": 0.058674,
        "oil": 1.574577,
        "gas": 2.003119,
        "cement": 0.077904,
        "flaring": 0.04411,
        "other": 0.0
    },
    "Armenia": {
        "coal": 0.003863,
        "oil": 0.327806,
        "gas": 1.838826,
        "cement": 0.121579,
        "flaring": 0.0,
        "other": 0.0
    },
    "Aruba": {
        "coal": 0.0,
        "oil": 7.308293,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Australia": {
        "coal": 6.082697,
        "oil": 5.277601,
        "gas": 3.290666,
        "cement": 0.109862,
        "flaring": 0.672876,
        "other": 0.145626
    },
    "Austria": {
        "coal": 1.279033,
        "oil": 3.447875,
        "gas": 1.894629,
        "cement": 0.204442,
        "flaring": 0.012265,
        "other": 0.12617
    },
    "Azerbaijan": {
        "coal": 0.000357,
        "oil": 1.054768,
        "gas": 2.460449,
        "cement": 0.106609,
        "flaring": 0.024701,
        "other": 0.0
    },
    "Bahamas": {
        "coal": 0.012293,
        "oil": 5.318157,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bahrain": {
        "coal": 0.0,
        "oil": 2.344683,
        "gas": 22.389554,
        "cement": 0.416049,
        "flaring": 0.300501,
        "other": 0.0
    },
    "Bangladesh": {
        "coal": 0.101231,
        "oil": 0.09511,
        "gas": 0.337185,
        "cement": 0.008804,
        "flaring": 0.000167,
        "other": 0.0
    },
    "Barbados": {
        "coal": 0.0,
        "oil": 3.165187,
        "gas": 0.157655,
        "cement": 0.251405,
        "flaring": 0.065267,
        "other": 0.0
    },
    "Belarus": {
        "coal": 0.392108,
        "oil": 1.858074,
        "gas": 3.491142,
        "cement": 0.238993,
        "flaring": 0.000647,
        "other": 0.100998
    },
    "Belgium": {
        "coal": 0.921254,
        "oil": 3.416304,
        "gas": 3.101308,
        "cement": 0.227845,
        "flaring": 0.008775,
        "other": 0.140655
    },
    "Belize": {
        "coal": 0.0,
        "oil": 1.552782,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.003666,
        "other": 0.0
    },
    "Benin": {
        "coal": 0.019449,
        "oil": 0.515422,
        "gas": 0.008995,
        "cement": 0.03066,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bermuda": {
        "coal": 0.0,
        "oil": 7.768184,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bhutan": {
        "coal": 0.572572,
        "oil": 0.780912,
        "gas": 0.0,
        "cement": 0.587851,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bolivia": {
        "coal": 0.000754,
        "oil": 1.040544,
        "gas": 0.610233,
        "cement": 0.105939,
        "flaring": 0.007552,
        "other": 0.0
    },
    "Bonaire, Saint Eustatius and Saba": {
        "coal": 0.0,
        "oil": 3.588496,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bosnia and Herzegovina": {
        "coal": 4.749921,
        "oil": 1.319667,
        "gas": 0.128474,
        "cement": 0.11007,
        "flaring": 0.0,
        "other": 0.0
    },
    "Botswana": {
        "coal": 1.361848,
        "oil": 1.095969,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Brazil": {
        "coal": 0.263798,
        "oil": 1.318454,
        "gas": 0.276863,
        "cement": 0.103438,
        "flaring": 0.082107,
        "other": 0.029982
    },
    "British Virgin Islands": {
        "coal": 0.0,
        "oil": 4.655555,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Brunei Darussalam": {
        "coal": 0.86202,
        "oil": 8.544315,
        "gas": 13.837468,
        "cement": 0.0,
        "flaring": 0.647003,
        "other": 0.0
    },
    "Bulgaria": {
        "coal": 2.378158,
        "oil": 1.739669,
        "gas": 0.768244,
        "cement": 0.152726,
        "flaring": 0.098038,
        "other": 0.159939
    },
    "Burkina Faso": {
        "coal": 0.0,
        "oil": 0.210778,
        "gas": 0.0,
        "cement": 0.039609,
        "flaring": 0.0,
        "other": 0.0
    },
    "Burundi": {
        "coal": 0.003803,
        "oil": 0.047592,
        "gas": 0.0,
        "cement": 0.002378,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cambodia": {
        "coal": 0.282892,
        "oil": 0.533,
        "gas": 0.0,
        "cement": 0.324771,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cameroon": {
        "coal": 0.0,
        "oil": 0.179877,
        "gas": 0.052351,
        "cement": 0.043882,
        "flaring": 0.063902,
        "other": 0.0
    },
    "Canada": {
        "coal": 1.267792,
        "oil": 6.291544,
        "gas": 5.904646,
        "cement": 0.174847,
        "flaring": 0.423793,
        "other": 0.054087
    },
    "Cape Verde": {
        "coal": 0.0,
        "oil": 1.07284,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Central African Republic": {
        "coal": 0.0,
        "oil": 0.040097,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Chad": {
        "coal": 0.0,
        "oil": 0.081588,
        "gas": 0.0,
        "cement": 0.009778,
        "flaring": 0.016908,
        "other": 0.0
    },
    "Chile": {
        "coal": 1.34979,
        "oil": 2.351882,
        "gas": 0.597774,
        "cement": 0.042762,
        "flaring": 0.001442,
        "other": 0.0
    },
    "China": {
        "coal": 5.337608,
        "oil": 1.14232,
        "gas": 0.482747,
        "cement": 0.602298,
        "flaring": 0.003592,
        "other": 0.120384
    },
    "Christmas Island": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Colombia": {
        "coal": 0.303833,
        "oil": 0.787472,
        "gas": 0.474573,
        "cement": 0.098985,
        "flaring": 0.014393,
        "other": 0.0
    },
    "Comoros": {
        "coal": 0.0,
        "oil": 0.350406,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Congo": {
        "coal": 0.0,
        "oil": 0.335117,
        "gas": 0.346005,
        "cement": 0.049607,
        "flaring": 0.589795,
        "other": 0.0
    },
    "Cook Islands": {
        "coal": 0.0,
        "oil": 5.222977,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Costa Rica": {
        "coal": 0.0,
        "oil": 1.238534,
        "gas": 0.0,
        "cement": 0.14378,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cote dIvoire": {
        "coal": 0.0,
        "oil": 0.235649,
        "gas": 0.169955,
        "cement": 0.0,
        "flaring": 0.003315,
        "other": 0.0
    },
    "Croatia": {
        "coal": 0.347544,
        "oil": 2.019383,
        "gas": 1.347157,
        "cement": 0.296067,
        "flaring": 0.070342,
        "other": 0.037414
    },
    "Cuba": {
        "coal": 0.000442,
        "oil": 1.537217,
        "gas": 0.15001,
        "cement": 0.05604,
        "flaring": 0.002394,
        "other": 0.0
    },
    "Curacao": {
        "coal": 0.0,
        "oil": 8.841855,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cyprus": {
        "coal": 0.05499,
        "oil": 5.090074,
        "gas": 0.000178,
        "cement": 0.712962,
        "flaring": 0.0,
        "other": 0.016026
    },
    "Czech Republic": {
        "coal": 4.733362,
        "oil": 2.006404,
        "gas": 1.655196,
        "cement": 0.179569,
        "flaring": 0.004991,
        "other": 0.142754
    },
    "Democratic Republic of the Congo": {
        "coal": 0.0,
        "oil": 0.021882,
        "gas": 0.0,
        "cement": 0.004858,
        "flaring": 0.0,
        "other": 0.0
    },
    "Denmark": {
        "coal": 0.539483,
        "oil": 3.191264,
        "gas": 0.822584,
        "cement": 0.210613,
        "flaring": 0.021673,
        "other": 0.069133
    },
    "Djibouti": {
        "coal": 0.0,
        "oil": 0.262172,
        "gas": 0.0,
        "cement": 0.071089,
        "flaring": 0.0,
        "other": 0.0
    },
    "Dominica": {
        "coal": 0.0,
        "oil": 1.998795,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Dominican Republic": {
        "coal": 0.404752,
        "oil": 1.587534,
        "gas": 0.208582,
        "cement": 0.197372,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ecuador": {
        "coal": 0.0,
        "oil": 1.649169,
        "gas": 0.058576,
        "cement": 0.140567,
        "flaring": 0.110769,
        "other": 0.0
    },
    "Egypt": {
        "coal": 0.035862,
        "oil": 0.840884,
        "gas": 1.107604,
        "cement": 0.168749,
        "flaring": 0.041284,
        "other": 0.0
    },
    "El Salvador": {
        "coal": 0.000539,
        "oil": 0.959856,
        "gas": 0.0,
        "cement": 0.072698,
        "flaring": 0.0,
        "other": 0.0
    },
    "Equatorial Guinea": {
        "coal": 0.0,
        "oil": 0.660337,
        "gas": 1.956264,
        "cement": 0.0,
        "flaring": 0.509316,
        "other": 0.0
    },
    "Eritrea": {
        "coal": 0.0,
        "oil": 0.189726,
        "gas": 0.0,
        "cement": 0.030512,
        "flaring": 0.0,
        "other": 0.0
    },
    "Estonia": {
        "coal": 4.013374,
        "oil": 2.340689,
        "gas": 0.608951,
        "cement": 0.015135,
        "flaring": 2.1e-05,
        "other": 0.049588
    },
    "Ethiopia": {
        "coal": 0.010037,
        "oil": 0.101977,
        "gas": 0.0,
        "cement": 0.033396,
        "flaring": 0.0,
        "other": 0.0
    },
    "Faeroe Islands": {
        "coal": 0.0,
        "oil": 13.205626,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Fiji": {
        "coal": 0.0,
        "oil": 1.554512,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Finland": {
        "coal": 2.14699,
        "oil": 3.642148,
        "gas": 0.788731,
        "cement": 0.103024,
        "flaring": 0.013806,
        "other": 0.104496
    },
    "France": {
        "coal": 0.369525,
        "oil": 2.550423,
        "gas": 1.241329,
        "cement": 0.092963,
        "flaring": 0.033048,
        "other": 0.055629
    },
    "French Equatorial Africa": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French Guiana": {
        "coal": 0.0,
        "oil": 2.238665,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French Polynesia": {
        "coal": 0.0,
        "oil": 3.061156,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French West Africa": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Gabon": {
        "coal": 0.0,
        "oil": 0.768704,
        "gas": 0.419437,
        "cement": 0.091271,
        "flaring": 1.203744,
        "other": 0.0
    },
    "Gambia": {
        "coal": 0.0,
        "oil": 0.238482,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Georgia": {
        "coal": 0.266031,
        "oil": 0.890791,
        "gas": 1.400091,
        "cement": 0.280592,
        "flaring": 0.001273,
        "other": 0.0
    },
    "Germany": {
        "coal": 2.368416,
        "oil": 3.016765,
        "gas": 2.011642,
        "cement": 0.160298,
        "flaring": 0.02178,
        "other": 0.094072
    },
    "Ghana": {
        "coal": 0.0,
        "oil": 0.381506,
        "gas": 0.136483,
        "cement": 0.072127,
        "flaring": 0.020639,
        "other": 0.0
    },
    "Global": {
        "coal": 1.80776,
        "oil": 1.427353,
        "gas": 0.963695,
        "cement": 0.208844,
        "flaring": 0.051981,
        "other": 0.037789
    },
    "Greece": {
        "coal": 0.963556,
        "oil": 2.955721,
        "gas": 1.050424,
        "cement": 0.283268,
        "flaring": 0.000492,
        "other": 0.036593
    },
    "Greenland": {
        "coal": 0.0,
        "oil": 8.932951,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Grenada": {
        "coal": 0.0,
        "oil": 2.312416,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guadeloupe": {
        "coal": 1.059747,
        "oil": 4.731013,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guatemala": {
        "coal": 0.240423,
        "oil": 0.686973,
        "gas": 0.0,
        "cement": 0.079489,
        "flaring": 0.006526,
        "other": 0.0
    },
    "Guinea": {
        "coal": 0.0,
        "oil": 0.343257,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guinea-Bissau": {
        "coal": 0.0,
        "oil": 0.163398,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guyana": {
        "coal": 0.0,
        "oil": 3.137406,
        "gas": 0.0,
        "cement": 0.202797,
        "flaring": 0.662503,
        "other": 0.0
    },
    "Haiti": {
        "coal": 0.0,
        "oil": 0.224662,
        "gas": 0.0,
        "cement": 0.006858,
        "flaring": 0.0,
        "other": 0.0
    },
    "Honduras": {
        "coal": 0.0,
        "oil": 0.895275,
        "gas": 0.0,
        "cement": 0.0773,
        "flaring": 0.0,
        "other": 0.0
    },
    "Hong Kong": {
        "coal": 1.660352,
        "oil": 1.128397,
        "gas": 1.329956,
        "cement": 0.0814,
        "flaring": 0.0,
        "other": 0.0
    },
    "Hungary": {
        "coal": 0.763083,
        "oil": 1.781729,
        "gas": 2.142995,
        "cement": 0.095255,
        "flaring": 0.016623,
        "other": 0.049722
    },
    "Iceland": {
        "coal": 1.820641,
        "oil": 6.76371,
        "gas": 0.000547,
        "cement": 0.0,
        "flaring": 0.476923,
        "other": 0.016873
    },
    "India": {
        "coal": 1.137264,
        "oil": 0.43226,
        "gas": 0.091404,
        "cement": 0.088019,
        "flaring": 0.002009,
        "other": 0.0
    },
    "Indonesia": {
        "coal": 1.105422,
        "oil": 0.745165,
        "gas": 0.275735,
        "cement": 0.103743,
        "flaring": 0.012966,
        "other": 0.0
    },
    "International Transport": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Iran": {
        "coal": 0.042848,
        "oil": 2.562442,
        "gas": 5.198539,
        "cement": 0.273285,
        "flaring": 0.285543,
        "other": 0.0
    },
    "Iraq": {
        "coal": 0.0,
        "oil": 2.422963,
        "gas": 0.763479,
        "cement": 0.123104,
        "flaring": 0.767506,
        "other": 0.0
    },
    "Ireland": {
        "coal": 0.759739,
        "oil": 3.666845,
        "gas": 2.214222,
        "cement": 0.357784,
        "flaring": 6.8e-05,
        "other": 0.108571
    },
    "Israel": {
        "coal": 1.792894,
        "oil": 2.17364,
        "gas": 2.152067,
        "cement": 0.162663,
        "flaring": 0.0,
        "other": 0.0
    },
    "Italy": {
        "coal": 0.37428,
        "oil": 2.139199,
        "gas": 2.366376,
        "cement": 0.118641,
        "flaring": 0.035504,
        "other": 0.046263
    },
    "Jamaica": {
        "coal": 0.129329,
        "oil": 2.041974,
        "gas": 0.155693,
        "cement": 0.134861,
        "flaring": 0.0,
        "other": 0.0
    },
    "Japan": {
        "coal": 3.188692,
        "oil": 3.096795,
        "gas": 1.777359,
        "cement": 0.195539,
        "flaring": 0.002751,
        "other": 0.060362
    },
    "Jordan": {
        "coal": 0.05646,
        "oil": 1.346317,
        "gas": 0.718054,
        "cement": 0.161388,
        "flaring": 3.8e-05,
        "other": 0.0
    },
    "Kazakhstan": {
        "coal": 9.537287,
        "oil": 2.111182,
        "gas": 1.697027,
        "cement": 0.234369,
        "flaring": 0.887491,
        "other": 0.201543
    },
    "Kenya": {
        "coal": 0.030467,
        "oil": 0.265877,
        "gas": 0.0,
        "cement": 0.05521,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kiribati": {
        "coal": 0.0,
        "oil": 0.550413,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kosovo": {
        "coal": 3.658821,
        "oil": 1.251109,
        "gas": 0.0,
        "cement": 0.190799,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kuwait": {
        "coal": 0.0,
        "oil": 12.187947,
        "gas": 10.095835,
        "cement": 0.280342,
        "flaring": 0.318584,
        "other": 0.0
    },
    "Kuwaiti Oil Fires": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kyrgyzstan": {
        "coal": 0.486429,
        "oil": 0.611259,
        "gas": 0.101726,
        "cement": 0.12181,
        "flaring": 0.0,
        "other": 0.0
    },
    "Laos": {
        "coal": 2.037298,
        "oil": 0.481836,
        "gas": 0.0,
        "cement": 0.279976,
        "flaring": 0.0,
        "other": 0.0
    },
    "Latvia": {
        "coal": 0.051935,
        "oil": 2.19821,
        "gas": 1.108575,
        "cement": 0.290362,
        "flaring": 6e-06,
        "other": 0.037745
    },
    "Lebanon": {
        "coal": 0.087067,
        "oil": 3.858163,
        "gas": 0.0,
        "cement": 0.376769,
        "flaring": 0.0,
        "other": 0.0
    },
    "Leeward Islands": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Lesotho": {
        "coal": 0.666222,
        "oil": 0.304474,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Liberia": {
        "coal": 0.0,
        "oil": 0.195699,
        "gas": 0.0,
        "cement": 0.025896,
        "flaring": 0.0,
        "other": 0.0
    },
    "Libya": {
        "coal": 0.0,
        "oil": 5.56184,
        "gas": 2.296229,
        "cement": 0.244587,
        "flaring": 0.698915,
        "other": 0.0
    },
    "Liechtenstein": {
        "coal": 0.0,
        "oil": 2.411888,
        "gas": 1.251954,
        "cement": 0.0,
        "flaring": 6e-06,
        "other": 0.0
    },
    "Lithuania": {
        "coal": 0.220404,
        "oil": 2.84417,
        "gas": 1.50416,
        "cement": 0.197387,
        "flaring": 0.064395,
        "other": 0.01057
    },
    "Luxembourg": {
        "coal": 0.376735,
        "oil": 9.42457,
        "gas": 2.330852,
        "cement": 0.633154,
        "flaring": 5.9e-05,
        "other": 0.078105
    },
    "Macao": {
        "coal": 0.0,
        "oil": 1.492421,
        "gas": 0.388142,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Madagascar": {
        "coal": 0.048388,
        "oil": 0.090192,
        "gas": 0.0,
        "cement": 0.003158,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malawi": {
        "coal": 0.010886,
        "oil": 0.0602,
        "gas": 0.0,
        "cement": 0.004859,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malaysia": {
        "coal": 2.848153,
        "oil": 2.124009,
        "gas": 2.304511,
        "cement": 0.402669,
        "flaring": 0.136364,
        "other": 0.0
    },
    "Maldives": {
        "coal": 0.0,
        "oil": 4.006578,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mali": {
        "coal": 0.0,
        "oil": 0.166833,
        "gas": 0.0,
        "cement": 0.018257,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malta": {
        "coal": 0.0,
        "oil": 1.674806,
        "gas": 1.42864,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.00037
    },
    "Marshall Islands": {
        "coal": 0.0,
        "oil": 3.563031,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Martinique": {
        "coal": 0.0,
        "oil": 5.670077,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mauritania": {
        "coal": 0.0,
        "oil": 0.856995,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mauritius": {
        "coal": 1.17356,
        "oil": 2.069052,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mayotte": {
        "coal": 0.0,
        "oil": 0.894282,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mexico": {
        "coal": 0.15882,
        "oil": 1.513339,
        "gas": 1.186719,
        "cement": 0.163894,
        "flaring": 0.086049,
        "other": 0.0
    },
    "Micronesia (Federated States of)": {
        "coal": 0.0,
        "oil": 1.379782,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Moldova": {
        "coal": 0.117121,
        "oil": 0.785608,
        "gas": 0.592979,
        "cement": 0.20625,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mongolia": {
        "coal": 13.306289,
        "oil": 1.603476,
        "gas": 0.0,
        "cement": 0.147909,
        "flaring": 5.1e-05,
        "other": 0.0
    },
    "Montenegro": {
        "coal": 2.37699,
        "oil": 1.51979,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Montserrat": {
        "coal": 0.0,
        "oil": 4.171108,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Morocco": {
        "coal": 0.691254,
        "oil": 0.893866,
        "gas": 0.042621,
        "cement": 0.136295,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mozambique": {
        "coal": 0.001491,
        "oil": 0.126738,
        "gas": 0.053235,
        "cement": 0.032438,
        "flaring": 1e-05,
        "other": 0.0
    },
    "Myanmar": {
        "coal": 0.077251,
        "oil": 0.389505,
        "gas": 0.152879,
        "cement": 0.055003,
        "flaring": 0.000891,
        "other": 0.0
    },
    "Namibia": {
        "coal": 0.018523,
        "oil": 1.357539,
        "gas": 0.0,
        "cement": 0.208907,
        "flaring": 0.0,
        "other": 0.0
    },
    "Nauru": {
        "coal": 0.0,
        "oil": 4.710166,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Nepal": {
        "coal": 0.122534,
        "oil": 0.224391,
        "gas": 0.0,
        "cement": 0.128207,
        "flaring": 0.0,
        "other": 0.0
    },
    "Netherlands": {
        "coal": 0.974772,
        "oil": 2.762084,
        "gas": 4.053271,
        "cement": 0.0,
        "flaring": 0.053426,
        "other": 0.063131
    },
    "New Caledonia": {
        "coal": 9.105133,
        "oil": 9.600004,
        "gas": 0.0,
        "cement": 0.102597,
        "flaring": 0.0,
        "other": 0.0
    },
    "New Zealand": {
        "coal": 1.137228,
        "oil": 3.778624,
        "gas": 1.550426,
        "cement": 0.074915,
        "flaring": 0.15426,
        "other": 0.112657
    },
    "Nicaragua": {
        "coal": 0.0,
        "oil": 0.640086,
        "gas": 0.0,
        "cement": 0.034431,
        "flaring": 0.0,
        "other": 0.0
    },
    "Niger": {
        "coal": 0.012153,
        "oil": 0.083216,
        "gas": 0.0,
        "cement": 0.00414,
        "flaring": 0.002874,
        "other": 0.0
    },
    "Nigeria": {
        "coal": 0.000638,
        "oil": 0.336915,
        "gas": 0.180351,
        "cement": 0.042036,
        "flaring": 0.064926,
        "other": 0.0
    },
    "Niue": {
        "coal": 0.0,
        "oil": 5.97381,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "North Korea": {
        "coal": 1.925678,
        "oil": 0.129612,
        "gas": 0.0,
        "cement": 0.083941,
        "flaring": 0.0,
        "other": 0.0
    },
    "North Macedonia": {
        "coal": 1.316388,
        "oil": 1.395252,
        "gas": 0.271563,
        "cement": 0.166619,
        "flaring": 0.0,
        "other": 0.0
    },
    "Norway": {
        "coal": 0.669611,
        "oil": 3.937962,
        "gas": 2.661232,
        "cement": 0.134762,
        "flaring": 0.15428,
        "other": 0.099631
    },
    "Occupied Palestinian Territory": {
        "coal": 0.0,
        "oil": 0.601108,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Oman": {
        "coal": 0.0,
        "oil": 2.493781,
        "gas": 12.041041,
        "cement": 0.399736,
        "flaring": 1.02402,
        "other": 0.0
    },
    "Pacific Islands (Palau)": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Pakistan": {
        "coal": 0.251809,
        "oil": 0.288963,
        "gas": 0.305565,
        "cement": 0.077664,
        "flaring": 0.001998,
        "other": 0.0
    },
    "Palau": {
        "coal": 0.0,
        "oil": 12.910238,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Panama": {
        "coal": 0.513271,
        "oil": 1.799388,
        "gas": 0.268954,
        "cement": 0.132707,
        "flaring": 0.0,
        "other": 0.0
    },
    "Panama Canal Zone": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Papua New Guinea": {
        "coal": 0.0,
        "oil": 0.757969,
        "gas": 0.085386,
        "cement": 0.0,
        "flaring": 0.010536,
        "other": 0.0
    },
    "Paraguay": {
        "coal": 0.000194,
        "oil": 1.152541,
        "gas": 0.0,
        "cement": 0.060986,
        "flaring": 0.0,
        "other": 0.0
    },
    "Peru": {
        "coal": 0.068139,
        "oil": 0.807803,
        "gas": 0.408776,
        "cement": 0.136502,
        "flaring": 0.004677,
        "other": 0.0
    },
    "Philippines": {
        "coal": 0.616145,
        "oil": 0.418905,
        "gas": 0.068764,
        "cement": 0.10406,
        "flaring": 0.001329,
        "other": 0.0
    },
    "Poland": {
        "coal": 4.273786,
        "oil": 2.225741,
        "gas": 0.956695,
        "cement": 0.200129,
        "flaring": 0.109946,
        "other": 0.132115
    },
    "Portugal": {
        "coal": 0.236056,
        "oil": 2.254302,
        "gas": 1.164543,
        "cement": 0.224278,
        "flaring": 0.098344,
        "other": 0.081431
    },
    "Puerto Rico": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Qatar": {
        "coal": 0.0,
        "oil": 2.949179,
        "gas": 29.435718,
        "cement": 0.569368,
        "flaring": 0.686234,
        "other": 0.0
    },
    "Reunion": {
        "coal": 1.965938,
        "oil": 2.317696,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Romania": {
        "coal": 0.732148,
        "oil": 1.50295,
        "gas": 1.291942,
        "cement": 0.200649,
        "flaring": 0.040833,
        "other": 0.04476
    },
    "Russia": {
        "coal": 2.518647,
        "oil": 2.615302,
        "gas": 5.361872,
        "cement": 0.141334,
        "flaring": 0.404634,
        "other": 0.11225
    },
    "Rwanda": {
        "coal": 0.00136,
        "oil": 0.105922,
        "gas": 0.006687,
        "cement": 0.012445,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ryukyu Islands": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Helena": {
        "coal": 0.0,
        "oil": 2.308731,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Kitts and Nevis": {
        "coal": 0.0,
        "oil": 4.530767,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Lucia": {
        "coal": 0.0,
        "oil": 2.460958,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Pierre and Miquelon": {
        "coal": 0.0,
        "oil": 9.534364,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Vincent and the Grenadines": {
        "coal": 0.0,
        "oil": 1.853702,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Samoa": {
        "coal": 0.0,
        "oil": 1.331423,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sao Tome and Principe": {
        "coal": 0.0,
        "oil": 0.568961,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saudi Arabia": {
        "coal": 0.0,
        "oil": 10.307343,
        "gas": 7.231387,
        "cement": 0.710971,
        "flaring": 0.118246,
        "other": 0.0
    },
    "Senegal": {
        "coal": 0.115237,
        "oil": 0.49554,
        "gas": 0.001909,
        "cement": 0.162672,
        "flaring": 0.0,
        "other": 0.0
    },
    "Serbia": {
        "coal": 4.135405,
        "oil": 1.172159,
        "gas": 0.616548,
        "cement": 0.130344,
        "flaring": 5.9e-05,
        "other": 0.0
    },
    "Seychelles": {
        "coal": 0.0,
        "oil": 5.101716,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sierra Leone": {
        "coal": 0.0,
        "oil": 0.147738,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Singapore": {
        "coal": 0.315491,
        "oil": 1.19698,
        "gas": 3.54847,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sint Maarten (Dutch part)": {
        "coal": 0.0,
        "oil": 13.482639,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Slovakia": {
        "coal": 1.824551,
        "oil": 1.761224,
        "gas": 1.702124,
        "cement": 0.264473,
        "flaring": 0.002413,
        "other": 0.143683
    },
    "Slovenia": {
        "coal": 2.074313,
        "oil": 2.842406,
        "gas": 0.826265,
        "cement": 0.22425,
        "flaring": 0.059073,
        "other": 0.049433
    },
    "Solomon Islands": {
        "coal": 0.0,
        "oil": 0.447581,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Somalia": {
        "coal": 0.0,
        "oil": 0.034968,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "South Africa": {
        "coal": 6.347073,
        "oil": 0.83334,
        "gas": 0.144281,
        "cement": 0.086238,
        "flaring": 0.000931,
        "other": 0.0
    },
    "South Korea": {
        "coal": 5.456362,
        "oil": 3.183892,
        "gas": 2.249691,
        "cement": 0.44104,
        "flaring": 6e-06,
        "other": 0.196404
    },
    "South Sudan": {
        "coal": 0.0,
        "oil": 0.141316,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Spain": {
        "coal": 0.301919,
        "oil": 2.539568,
        "gas": 1.358016,
        "cement": 0.172954,
        "flaring": 0.075127,
        "other": 0.056693
    },
    "Sri Lanka": {
        "coal": 0.291752,
        "oil": 0.638132,
        "gas": 0.0,
        "cement": 0.069591,
        "flaring": 0.0,
        "other": 0.0
    },
    "St. Kitts-Nevis-Anguilla": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sudan": {
        "coal": 0.0,
        "oil": 0.405619,
        "gas": 0.0,
        "cement": 0.035004,
        "flaring": 0.010216,
        "other": 0.0
    },
    "Suriname": {
        "coal": 0.0,
        "oil": 4.261121,
        "gas": 0.014874,
        "cement": 0.019486,
        "flaring": 0.0,
        "other": 0.0
    },
    "Swaziland": {
        "coal": 0.153415,
        "oil": 0.744419,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sweden": {
        "coal": 0.642557,
        "oil": 2.522632,
        "gas": 0.139503,
        "cement": 0.12268,
        "flaring": 0.042912,
        "other": 0.051291
    },
    "Switzerland": {
        "coal": 0.04797,
        "oil": 2.929779,
        "gas": 0.769703,
        "cement": 0.194388,
        "flaring": 0.003056,
        "other": 0.018815
    },
    "Syria": {
        "coal": 0.000139,
        "oil": 0.819003,
        "gas": 0.314726,
        "cement": 0.03699,
        "flaring": 0.088485,
        "other": 0.0
    },
    "Taiwan": {
        "coal": 6.055988,
        "oil": 2.639961,
        "gas": 2.108571,
        "cement": 0.24179,
        "flaring": 0.005664,
        "other": 0.041685
    },
    "Tajikistan": {
        "coal": 0.471728,
        "oil": 0.270855,
        "gas": 0.030799,
        "cement": 0.215179,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tanzania": {
        "coal": 0.029898,
        "oil": 0.099316,
        "gas": 0.029121,
        "cement": 0.040907,
        "flaring": 0.0,
        "other": 0.0
    },
    "Thailand": {
        "coal": 0.934656,
        "oil": 1.551684,
        "gas": 1.07902,
        "cement": 0.306756,
        "flaring": 0.008484,
        "other": 0.0
    },
    "Timor-Leste": {
        "coal": 0.0,
        "oil": 0.490819,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.062006,
        "other": 0.0
    },
    "Togo": {
        "coal": 0.0,
        "oil": 0.141871,
        "gas": 0.024154,
        "cement": 0.099735,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tonga": {
        "coal": 0.0,
        "oil": 1.616566,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Trinidad and Tobago": {
        "coal": 0.0,
        "oil": 2.284778,
        "gas": 20.846939,
        "cement": 0.173138,
        "flaring": 0.247683,
        "other": 0.0
    },
    "Tunisia": {
        "coal": 0.0,
        "oil": 0.972416,
        "gas": 0.994089,
        "cement": 0.265029,
        "flaring": 0.036095,
        "other": 0.0
    },
    "Turkey": {
        "coal": 1.88542,
        "oil": 1.370183,
        "gas": 1.096054,
        "cement": 0.485084,
        "flaring": 0.00232,
        "other": 0.07484
    },
    "Turkmenistan": {
        "coal": 0.0,
        "oil": 3.190759,
        "gas": 7.589088,
        "cement": 0.243604,
        "flaring": 0.501492,
        "other": 0.0
    },
    "Turks and Caicos Islands": {
        "coal": 0.0,
        "oil": 6.994867,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tuvalu": {
        "coal": 0.0,
        "oil": 0.698717,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "USA": {
        "coal": 2.616442,
        "oil": 6.100269,
        "gas": 4.92251,
        "cement": 0.121115,
        "flaring": 0.201476,
        "other": 0.075405
    },
    "Uganda": {
        "coal": 0.0,
        "oil": 0.110917,
        "gas": 0.0,
        "cement": 0.013101,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ukraine": {
        "coal": 2.326331,
        "oil": 0.795141,
        "gas": 1.384079,
        "cement": 0.09171,
        "flaring": 0.052471,
        "other": 0.063153
    },
    "United Arab Emirates": {
        "coal": 0.771883,
        "oil": 5.811253,
        "gas": 14.060411,
        "cement": 0.616745,
        "flaring": 0.175936,
        "other": 0.0
    },
    "United Kingdom": {
        "coal": 0.340137,
        "oil": 2.147063,
        "gas": 2.228173,
        "cement": 0.058153,
        "flaring": 0.051337,
        "other": 0.040419
    },
    "Uruguay": {
        "coal": 0.000375,
        "oil": 1.711625,
        "gas": 0.039498,
        "cement": 0.084749,
        "flaring": 0.0,
        "other": 0.0
    },
    "Uzbekistan": {
        "coal": 0.338472,
        "oil": 0.326481,
        "gas": 2.691333,
        "cement": 0.139563,
        "flaring": 0.030889,
        "other": 0.0
    },
    "Vanuatu": {
        "coal": 0.0,
        "oil": 0.545904,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Venezuela": {
        "coal": 0.002292,
        "oil": 1.03257,
        "gas": 1.020079,
        "cement": 0.062281,
        "flaring": 0.566745,
        "other": 0.0
    },
    "Viet Nam": {
        "coal": 1.989463,
        "oil": 0.675848,
        "gas": 0.175673,
        "cement": 0.548774,
        "flaring": 0.013286,
        "other": 0.0
    },
    "Wallis and Futuna Islands": {
        "coal": 0.0,
        "oil": 2.32255,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Yemen": {
        "coal": 0.008663,
        "oil": 0.289919,
        "gas": 0.006119,
        "cement": 0.020555,
        "flaring": 0.050785,
        "other": 0.0
    },
    "Zambia": {
        "coal": 0.12108,
        "oil": 0.212805,
        "gas": 0.0,
        "cement": 0.050771,
        "flaring": 0.0,
        "other": 0.0
    },
    "Zimbabwe": {
        "coal": 0.428954,
        "oil": 0.211664,
        "gas": 0.0,
        "cement": 0.036351,
        "flaring": 0.0,
        "other": 0.0
    }
    }
},
{id: "2021", metadata: {
    "Afghanistan": {
        "coal": 0.104828,
        "oil": 0.185029,
        "gas": 0.005956,
        "cement": 0.000306,
        "flaring": 0.0,
        "other": 0.0
    },
    "Albania": {
        "coal": 0.061096,
        "oil": 1.137164,
        "gas": 0.052631,
        "cement": 0.367175,
        "flaring": 0.0,
        "other": 0.0
    },
    "Algeria": {
        "coal": 0.024798,
        "oil": 1.268066,
        "gas": 2.100412,
        "cement": 0.249628,
        "flaring": 0.347072,
        "other": 0.0
    },
    "Andorra": {
        "coal": 0.0,
        "oil": 5.730292,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Angola": {
        "coal": 0.0,
        "oil": 0.402904,
        "gas": 0.085536,
        "cement": 0.032568,
        "flaring": 0.098133,
        "other": 0.0
    },
    "Anguilla": {
        "coal": 0.0,
        "oil": 9.188354,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Antarctica": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Antigua and Barbuda": {
        "coal": 0.0,
        "oil": 5.027895,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Argentina": {
        "coal": 0.106371,
        "oil": 1.773737,
        "gas": 2.083353,
        "cement": 0.10316,
        "flaring": 0.051346,
        "other": 0.0
    },
    "Armenia": {
        "coal": 0.004473,
        "oil": 0.355273,
        "gas": 1.956629,
        "cement": 0.122216,
        "flaring": 0.0,
        "other": 0.0
    },
    "Aruba": {
        "coal": 0.0,
        "oil": 8.054722,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Australia": {
        "coal": 5.823767,
        "oil": 5.368438,
        "gas": 2.979896,
        "cement": 0.108798,
        "flaring": 0.666359,
        "other": 0.144215
    },
    "Austria": {
        "coal": 1.375153,
        "oil": 3.526375,
        "gas": 1.999475,
        "cement": 0.204114,
        "flaring": 0.012245,
        "other": 0.125968
    },
    "Azerbaijan": {
        "coal": 0.000355,
        "oil": 1.077332,
        "gas": 2.523936,
        "cement": 0.106319,
        "flaring": 0.024515,
        "other": 0.0
    },
    "Bahamas": {
        "coal": 0.012448,
        "oil": 5.838075,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bahrain": {
        "coal": 0.0,
        "oil": 2.426313,
        "gas": 23.642933,
        "cement": 0.420088,
        "flaring": 0.174386,
        "other": 0.0
    },
    "Bangladesh": {
        "coal": 0.087702,
        "oil": 0.106622,
        "gas": 0.346862,
        "cement": 0.008703,
        "flaring": 0.000288,
        "other": 0.0
    },
    "Barbados": {
        "coal": 0.0,
        "oil": 3.480605,
        "gas": 0.205075,
        "cement": 0.250952,
        "flaring": 0.065149,
        "other": 0.0
    },
    "Belarus": {
        "coal": 0.342635,
        "oil": 1.773462,
        "gas": 3.76403,
        "cement": 0.240379,
        "flaring": 0.000651,
        "other": 0.101584
    },
    "Belgium": {
        "coal": 0.948716,
        "oil": 3.83822,
        "gas": 3.08121,
        "cement": 0.22687,
        "flaring": 0.008737,
        "other": 0.140053
    },
    "Belize": {
        "coal": 0.0,
        "oil": 1.711186,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.011984,
        "other": 0.0
    },
    "Benin": {
        "coal": 0.021878,
        "oil": 0.535575,
        "gas": 0.009465,
        "cement": 0.029825,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bermuda": {
        "coal": 0.0,
        "oil": 8.537196,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bhutan": {
        "coal": 0.576234,
        "oil": 0.797382,
        "gas": 0.0,
        "cement": 0.584086,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bolivia": {
        "coal": 0.001096,
        "oil": 1.101349,
        "gas": 0.705627,
        "cement": 0.117536,
        "flaring": 0.005078,
        "other": 0.0
    },
    "Bonaire, Saint Eustatius and Saba": {
        "coal": 0.0,
        "oil": 3.871365,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Bosnia and Herzegovina": {
        "coal": 2.535815,
        "oil": 1.350757,
        "gas": 0.149283,
        "cement": 0.111667,
        "flaring": 0.0,
        "other": 0.0
    },
    "Botswana": {
        "coal": 1.411529,
        "oil": 1.099621,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Brazil": {
        "coal": 0.318346,
        "oil": 1.385677,
        "gas": 0.35448,
        "cement": 0.111013,
        "flaring": 0.081675,
        "other": 0.029824
    },
    "British Virgin Islands": {
        "coal": 0.0,
        "oil": 5.093802,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Brunei Darussalam": {
        "coal": 0.865973,
        "oil": 8.708841,
        "gas": 13.046933,
        "cement": 0.0,
        "flaring": 0.910255,
        "other": 0.0
    },
    "Bulgaria": {
        "coal": 3.028459,
        "oil": 1.855755,
        "gas": 0.880323,
        "cement": 0.154796,
        "flaring": 0.099366,
        "other": 0.162107
    },
    "Burkina Faso": {
        "coal": 0.0,
        "oil": 0.219259,
        "gas": 0.0,
        "cement": 0.038573,
        "flaring": 0.0,
        "other": 0.0
    },
    "Burundi": {
        "coal": 0.003981,
        "oil": 0.04891,
        "gas": 0.0,
        "cement": 0.002315,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cambodia": {
        "coal": 0.283217,
        "oil": 0.541405,
        "gas": 0.0,
        "cement": 0.321008,
        "flaring": 0.001429,
        "other": 0.0
    },
    "Cameroon": {
        "coal": 0.0,
        "oil": 0.185873,
        "gas": 0.059246,
        "cement": 0.04274,
        "flaring": 0.053969,
        "other": 0.0
    },
    "Canada": {
        "coal": 1.149576,
        "oil": 6.333628,
        "gas": 6.169093,
        "cement": 0.173626,
        "flaring": 0.420835,
        "other": 0.053709
    },
    "Cape Verde": {
        "coal": 0.0,
        "oil": 1.135678,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Central African Republic": {
        "coal": 0.0,
        "oil": 0.041651,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Chad": {
        "coal": 0.0,
        "oil": 0.083864,
        "gas": 0.0,
        "cement": 0.009473,
        "flaring": 0.019582,
        "other": 0.0
    },
    "Chile": {
        "coal": 1.343286,
        "oil": 2.401832,
        "gas": 0.595372,
        "cement": 0.042339,
        "flaring": 0.000596,
        "other": 0.0
    },
    "China": {
        "coal": 5.579649,
        "oil": 1.20159,
        "gas": 0.542724,
        "cement": 0.598194,
        "flaring": 0.00328,
        "other": 0.120303
    },
    "Christmas Island": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Colombia": {
        "coal": 0.233234,
        "oil": 0.969493,
        "gas": 0.451441,
        "cement": 0.113956,
        "flaring": 0.011953,
        "other": 0.0
    },
    "Comoros": {
        "coal": 0.0,
        "oil": 0.362904,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Congo": {
        "coal": 0.0,
        "oil": 0.347396,
        "gas": 0.392831,
        "cement": 0.048471,
        "flaring": 0.490366,
        "other": 0.0
    },
    "Cook Islands": {
        "coal": 0.0,
        "oil": 5.375721,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Costa Rica": {
        "coal": 0.0,
        "oil": 1.374266,
        "gas": 0.0,
        "cement": 0.142919,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cote dIvoire": {
        "coal": 0.0,
        "oil": 0.245609,
        "gas": 0.17939,
        "cement": 0.0,
        "flaring": 0.001034,
        "other": 0.0
    },
    "Croatia": {
        "coal": 0.415163,
        "oil": 2.229111,
        "gas": 1.308067,
        "cement": 0.298746,
        "flaring": 0.070979,
        "other": 0.037753
    },
    "Cuba": {
        "coal": 0.000451,
        "oil": 1.700125,
        "gas": 0.196253,
        "cement": 0.056261,
        "flaring": 0.006452,
        "other": 0.0
    },
    "Curacao": {
        "coal": 0.0,
        "oil": 9.686792,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Cyprus": {
        "coal": 0.161931,
        "oil": 5.221541,
        "gas": 0.000177,
        "cement": 0.709151,
        "flaring": 0.0,
        "other": 0.015941
    },
    "Czech Republic": {
        "coal": 4.92619,
        "oil": 2.210333,
        "gas": 1.777341,
        "cement": 0.179914,
        "flaring": 0.005001,
        "other": 0.143028
    },
    "Democratic Republic of the Congo": {
        "coal": 0.0,
        "oil": 0.022479,
        "gas": 0.0,
        "cement": 0.004704,
        "flaring": 0.0,
        "other": 0.0
    },
    "Denmark": {
        "coal": 0.747621,
        "oil": 3.188446,
        "gas": 0.816214,
        "cement": 0.209584,
        "flaring": 0.021568,
        "other": 0.068796
    },
    "Djibouti": {
        "coal": 0.0,
        "oil": 0.272875,
        "gas": 0.0,
        "cement": 0.070099,
        "flaring": 0.0,
        "other": 0.0
    },
    "Dominica": {
        "coal": 0.0,
        "oil": 2.189268,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Dominican Republic": {
        "coal": 0.406918,
        "oil": 1.730294,
        "gas": 0.26892,
        "cement": 0.195274,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ecuador": {
        "coal": 0.0,
        "oil": 1.994683,
        "gas": 0.057668,
        "cement": 0.138915,
        "flaring": 0.130475,
        "other": 0.0
    },
    "Egypt": {
        "coal": 0.057004,
        "oil": 0.88788,
        "gas": 1.156058,
        "cement": 0.147861,
        "flaring": 0.035831,
        "other": 0.0
    },
    "El Salvador": {
        "coal": 0.000713,
        "oil": 1.067824,
        "gas": 0.0,
        "cement": 0.072451,
        "flaring": 0.0,
        "other": 0.0
    },
    "Equatorial Guinea": {
        "coal": 0.0,
        "oil": 0.684107,
        "gas": 2.219633,
        "cement": 0.0,
        "flaring": 0.292893,
        "other": 0.0
    },
    "Eritrea": {
        "coal": 0.0,
        "oil": 0.196696,
        "gas": 0.0,
        "cement": 0.029969,
        "flaring": 0.0,
        "other": 0.0
    },
    "Estonia": {
        "coal": 4.682493,
        "oil": 2.428487,
        "gas": 0.688327,
        "cement": 0.015144,
        "flaring": 2.1e-05,
        "other": 0.049616
    },
    "Ethiopia": {
        "coal": 0.010513,
        "oil": 0.104873,
        "gas": 0.0,
        "cement": 0.032537,
        "flaring": 0.0,
        "other": 0.0
    },
    "Faeroe Islands": {
        "coal": 0.0,
        "oil": 13.203997,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Fiji": {
        "coal": 0.0,
        "oil": 1.590295,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Finland": {
        "coal": 2.22024,
        "oil": 3.581235,
        "gas": 0.770695,
        "cement": 0.102902,
        "flaring": 0.013685,
        "other": 0.10358
    },
    "France": {
        "coal": 0.4475,
        "oil": 2.785402,
        "gas": 1.326183,
        "cement": 0.092889,
        "flaring": 0.033295,
        "other": 0.056044
    },
    "French Equatorial Africa": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French Guiana": {
        "coal": 0.0,
        "oil": 2.189895,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French Polynesia": {
        "coal": 0.0,
        "oil": 3.124014,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "French West Africa": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Gabon": {
        "coal": 0.0,
        "oil": 0.798612,
        "gas": 0.477242,
        "cement": 0.089376,
        "flaring": 1.07477,
        "other": 0.0
    },
    "Gambia": {
        "coal": 0.0,
        "oil": 0.248379,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Georgia": {
        "coal": 0.140289,
        "oil": 0.900633,
        "gas": 1.606986,
        "cement": 0.281184,
        "flaring": 0.00062,
        "other": 0.0
    },
    "Germany": {
        "coal": 2.760161,
        "oil": 2.975721,
        "gas": 2.079931,
        "cement": 0.158664,
        "flaring": 0.02167,
        "other": 0.093593
    },
    "Ghana": {
        "coal": 0.0,
        "oil": 0.399414,
        "gas": 0.144707,
        "cement": 0.070694,
        "flaring": 0.034312,
        "other": 0.0
    },
    "Global": {
        "coal": 1.893923,
        "oil": 1.496614,
        "gas": 1.001585,
        "cement": 0.211472,
        "flaring": 0.052663,
        "other": 0.037443
    },
    "Greece": {
        "coal": 0.935858,
        "oil": 2.96915,
        "gas": 1.163427,
        "cement": 0.285082,
        "flaring": 0.000495,
        "other": 0.036827
    },
    "Greenland": {
        "coal": 0.0,
        "oil": 9.079509,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Grenada": {
        "coal": 0.0,
        "oil": 2.56167,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guadeloupe": {
        "coal": 1.058653,
        "oil": 4.726128,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guatemala": {
        "coal": 0.314538,
        "oil": 0.756146,
        "gas": 0.0,
        "cement": 0.07838,
        "flaring": 0.005329,
        "other": 0.0
    },
    "Guinea": {
        "coal": 0.0,
        "oil": 0.357805,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guinea-Bissau": {
        "coal": 0.0,
        "oil": 0.170736,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Guyana": {
        "coal": 0.0,
        "oil": 3.329849,
        "gas": 0.0,
        "cement": 0.200941,
        "flaring": 0.307084,
        "other": 0.0
    },
    "Haiti": {
        "coal": 0.0,
        "oil": 0.244452,
        "gas": 0.0,
        "cement": 0.006773,
        "flaring": 0.0,
        "other": 0.0
    },
    "Honduras": {
        "coal": 0.0,
        "oil": 0.984147,
        "gas": 0.0,
        "cement": 0.076122,
        "flaring": 0.0,
        "other": 0.0
    },
    "Hong Kong": {
        "coal": 1.845824,
        "oil": 0.998571,
        "gas": 1.299107,
        "cement": 0.08147,
        "flaring": 0.0,
        "other": 0.0
    },
    "Hungary": {
        "coal": 0.658229,
        "oil": 1.892456,
        "gas": 2.277324,
        "cement": 0.095655,
        "flaring": 0.016692,
        "other": 0.049931
    },
    "Iceland": {
        "coal": 1.802619,
        "oil": 6.821205,
        "gas": 0.000541,
        "cement": 0.0,
        "flaring": 0.472201,
        "other": 0.016706
    },
    "India": {
        "coal": 1.280448,
        "oil": 0.442003,
        "gas": 0.09481,
        "cement": 0.105858,
        "flaring": 0.001969,
        "other": 0.0
    },
    "Indonesia": {
        "coal": 1.107397,
        "oil": 0.768025,
        "gas": 0.270637,
        "cement": 0.10461,
        "flaring": 0.011504,
        "other": 0.0
    },
    "International Transport": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Iran": {
        "coal": 0.042423,
        "oil": 2.535864,
        "gas": 5.311369,
        "cement": 0.256188,
        "flaring": 0.371554,
        "other": 0.0
    },
    "Iraq": {
        "coal": 0.0,
        "oil": 2.683748,
        "gas": 0.690132,
        "cement": 0.120342,
        "flaring": 0.768708,
        "other": 0.0
    },
    "Ireland": {
        "coal": 1.261978,
        "oil": 3.697733,
        "gas": 2.105999,
        "cement": 0.354884,
        "flaring": 6.7e-05,
        "other": 0.107691
    },
    "Israel": {
        "coal": 1.57791,
        "oil": 2.203413,
        "gas": 2.185248,
        "cement": 0.160057,
        "flaring": 0.000133,
        "other": 0.0
    },
    "Italy": {
        "coal": 0.405125,
        "oil": 2.393763,
        "gas": 2.548195,
        "cement": 0.119162,
        "flaring": 0.03566,
        "other": 0.046466
    },
    "Jamaica": {
        "coal": 0.131081,
        "oil": 2.243742,
        "gas": 0.202368,
        "cement": 0.142247,
        "flaring": 0.0,
        "other": 0.0
    },
    "Japan": {
        "coal": 3.360982,
        "oil": 3.17271,
        "gas": 1.777711,
        "cement": 0.190903,
        "flaring": 0.002765,
        "other": 0.060669
    },
    "Jordan": {
        "coal": 0.048664,
        "oil": 1.352621,
        "gas": 0.736172,
        "cement": 0.15821,
        "flaring": 8.8e-05,
        "other": 0.0
    },
    "Kazakhstan": {
        "coal": 9.419363,
        "oil": 2.227889,
        "gas": 1.457571,
        "cement": 0.231717,
        "flaring": 0.877448,
        "other": 0.199262
    },
    "Kenya": {
        "coal": 0.032122,
        "oil": 0.275241,
        "gas": 0.0,
        "cement": 0.067605,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kiribati": {
        "coal": 0.0,
        "oil": 0.555062,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kosovo": {
        "coal": 1.935442,
        "oil": 1.268866,
        "gas": 0.0,
        "cement": 0.191797,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kuwait": {
        "coal": 0.0,
        "oil": 12.643539,
        "gas": 11.721402,
        "cement": 0.287619,
        "flaring": 0.319538,
        "other": 0.0
    },
    "Kuwaiti Oil Fires": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Kyrgyzstan": {
        "coal": 0.551421,
        "oil": 0.648636,
        "gas": 0.105982,
        "cement": 0.119891,
        "flaring": 0.0,
        "other": 0.0
    },
    "Laos": {
        "coal": 2.03418,
        "oil": 0.488123,
        "gas": 0.0,
        "cement": 0.275992,
        "flaring": 0.0,
        "other": 0.0
    },
    "Latvia": {
        "coal": 0.073149,
        "oil": 2.260398,
        "gas": 1.21184,
        "cement": 0.293946,
        "flaring": 6e-06,
        "other": 0.038211
    },
    "Lebanon": {
        "coal": 0.077514,
        "oil": 4.0038,
        "gas": 0.0,
        "cement": 0.381504,
        "flaring": 0.0,
        "other": 0.0
    },
    "Leeward Islands": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Lesotho": {
        "coal": 0.693505,
        "oil": 0.306806,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Liberia": {
        "coal": 0.0,
        "oil": 0.204781,
        "gas": 0.0,
        "cement": 0.025368,
        "flaring": 0.0,
        "other": 0.0
    },
    "Libya": {
        "coal": 0.0,
        "oil": 6.581704,
        "gas": 2.567193,
        "cement": 0.241634,
        "flaring": 1.674357,
        "other": 0.0
    },
    "Liechtenstein": {
        "coal": 0.0,
        "oil": 2.443113,
        "gas": 1.423536,
        "cement": 0.0,
        "flaring": 6e-06,
        "other": 0.0
    },
    "Lithuania": {
        "coal": 0.262508,
        "oil": 3.006061,
        "gas": 1.436983,
        "cement": 0.199768,
        "flaring": 0.065172,
        "other": 0.010698
    },
    "Luxembourg": {
        "coal": 0.327207,
        "oil": 9.581352,
        "gas": 2.457908,
        "cement": 0.624318,
        "flaring": 5.8e-05,
        "other": 0.077015
    },
    "Macao": {
        "coal": 0.0,
        "oil": 1.51066,
        "gas": 0.363442,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Madagascar": {
        "coal": 0.050775,
        "oil": 0.092927,
        "gas": 0.0,
        "cement": 0.003082,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malawi": {
        "coal": 0.011401,
        "oil": 0.061905,
        "gas": 0.0,
        "cement": 0.004734,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malaysia": {
        "coal": 2.555403,
        "oil": 2.117796,
        "gas": 2.44245,
        "cement": 0.398683,
        "flaring": 0.112102,
        "other": 0.0
    },
    "Maldives": {
        "coal": 0.0,
        "oil": 4.06203,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mali": {
        "coal": 0.0,
        "oil": 0.172667,
        "gas": 0.0,
        "cement": 0.01769,
        "flaring": 0.0,
        "other": 0.0
    },
    "Malta": {
        "coal": 0.0,
        "oil": 1.671925,
        "gas": 1.600917,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.000362
    },
    "Marshall Islands": {
        "coal": 0.0,
        "oil": 3.780319,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Martinique": {
        "coal": 0.0,
        "oil": 5.6946,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mauritania": {
        "coal": 0.0,
        "oil": 0.892337,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mauritius": {
        "coal": 1.26051,
        "oil": 2.182113,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mayotte": {
        "coal": 0.0,
        "oil": 0.864775,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mexico": {
        "coal": 0.1528,
        "oil": 1.544653,
        "gas": 1.24346,
        "cement": 0.176309,
        "flaring": 0.096579,
        "other": 0.0
    },
    "Micronesia (Federated States of)": {
        "coal": 0.0,
        "oil": 1.405118,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Moldova": {
        "coal": 0.135924,
        "oil": 0.85345,
        "gas": 0.632462,
        "cement": 0.207822,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mongolia": {
        "coal": 13.262538,
        "oil": 1.621541,
        "gas": 0.0,
        "cement": 0.145547,
        "flaring": 0.0,
        "other": 0.0
    },
    "Montenegro": {
        "coal": 1.253209,
        "oil": 1.536249,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Montserrat": {
        "coal": 0.0,
        "oil": 4.681398,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Morocco": {
        "coal": 0.751007,
        "oil": 0.975242,
        "gas": 0.042446,
        "cement": 0.134869,
        "flaring": 0.0,
        "other": 0.0
    },
    "Mozambique": {
        "coal": 0.001558,
        "oil": 0.130027,
        "gas": 0.059981,
        "cement": 0.031529,
        "flaring": 0.0,
        "other": 0.0
    },
    "Myanmar": {
        "coal": 0.077701,
        "oil": 0.397494,
        "gas": 0.144323,
        "cement": 0.054619,
        "flaring": 0.000734,
        "other": 0.0
    },
    "Namibia": {
        "coal": 0.019199,
        "oil": 1.362075,
        "gas": 0.0,
        "cement": 0.205518,
        "flaring": 0.0,
        "other": 0.0
    },
    "Nauru": {
        "coal": 0.0,
        "oil": 4.764679,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Nepal": {
        "coal": 0.121277,
        "oil": 0.225331,
        "gas": 0.0,
        "cement": 0.125277,
        "flaring": 0.0,
        "other": 0.0
    },
    "Netherlands": {
        "coal": 1.314206,
        "oil": 2.738996,
        "gas": 3.890066,
        "cement": 0.000362,
        "flaring": 0.052863,
        "other": 0.062465
    },
    "New Caledonia": {
        "coal": 9.177665,
        "oil": 9.817779,
        "gas": 0.0,
        "cement": 0.102099,
        "flaring": 0.0,
        "other": 0.0
    },
    "New Zealand": {
        "coal": 1.316243,
        "oil": 3.635653,
        "gas": 1.297904,
        "cement": 0.073914,
        "flaring": 0.152197,
        "other": 0.111151
    },
    "Nicaragua": {
        "coal": 0.0,
        "oil": 0.704639,
        "gas": 0.0,
        "cement": 0.033955,
        "flaring": 0.0,
        "other": 0.0
    },
    "Niger": {
        "coal": 0.013543,
        "oil": 0.085654,
        "gas": 0.0,
        "cement": 0.00399,
        "flaring": 0.003689,
        "other": 0.0
    },
    "Nigeria": {
        "coal": 0.00072,
        "oil": 0.351327,
        "gas": 0.190456,
        "cement": 0.041037,
        "flaring": 0.058381,
        "other": 0.0
    },
    "Niue": {
        "coal": 0.0,
        "oil": 6.154972,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "North Korea": {
        "coal": 1.942642,
        "oil": 0.132663,
        "gas": 0.0,
        "cement": 0.095506,
        "flaring": 0.0,
        "other": 0.0
    },
    "North Macedonia": {
        "coal": 1.13805,
        "oil": 1.608522,
        "gas": 0.343675,
        "cement": 0.167232,
        "flaring": 0.0,
        "other": 0.0
    },
    "Norway": {
        "coal": 0.773197,
        "oil": 3.975181,
        "gas": 2.345509,
        "cement": 0.129789,
        "flaring": 0.281113,
        "other": 0.068484
    },
    "Occupied Palestinian Territory": {
        "coal": 0.0,
        "oil": 0.602376,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Oman": {
        "coal": 0.0,
        "oil": 2.697747,
        "gas": 13.787812,
        "cement": 0.401763,
        "flaring": 1.029214,
        "other": 0.0
    },
    "Pacific Islands (Palau)": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Pakistan": {
        "coal": 0.259101,
        "oil": 0.324041,
        "gas": 0.326313,
        "cement": 0.080469,
        "flaring": 0.001909,
        "other": 0.0
    },
    "Palau": {
        "coal": 0.0,
        "oil": 13.229228,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Panama": {
        "coal": 0.6721,
        "oil": 1.982355,
        "gas": 0.209475,
        "cement": 0.130972,
        "flaring": 0.0,
        "other": 0.0
    },
    "Panama Canal Zone": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Papua New Guinea": {
        "coal": 0.0,
        "oil": 0.763302,
        "gas": 0.079542,
        "cement": 0.0,
        "flaring": 0.012435,
        "other": 0.0
    },
    "Paraguay": {
        "coal": 0.000282,
        "oil": 1.218865,
        "gas": 0.0,
        "cement": 0.060212,
        "flaring": 0.0,
        "other": 0.0
    },
    "Peru": {
        "coal": 0.073547,
        "oil": 1.00294,
        "gas": 0.4544,
        "cement": 0.134839,
        "flaring": 0.003597,
        "other": 0.0
    },
    "Philippines": {
        "coal": 0.657815,
        "oil": 0.447164,
        "gas": 0.057877,
        "cement": 0.102516,
        "flaring": 0.00143,
        "other": 0.0
    },
    "Poland": {
        "coal": 4.68579,
        "oil": 2.39401,
        "gas": 1.059067,
        "cement": 0.195685,
        "flaring": 0.110292,
        "other": 0.132531
    },
    "Portugal": {
        "coal": 0.107059,
        "oil": 2.321238,
        "gas": 1.132036,
        "cement": 0.224454,
        "flaring": 0.098422,
        "other": 0.081495
    },
    "Puerto Rico": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Qatar": {
        "coal": 0.0,
        "oil": 3.226295,
        "gas": 31.072901,
        "cement": 0.58465,
        "flaring": 0.703512,
        "other": 0.0
    },
    "Reunion": {
        "coal": 1.949034,
        "oil": 2.297768,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Romania": {
        "coal": 0.851123,
        "oil": 1.645286,
        "gas": 1.319795,
        "cement": 0.201827,
        "flaring": 0.041073,
        "other": 0.045023
    },
    "Russia": {
        "coal": 2.620399,
        "oil": 2.777896,
        "gas": 6.030566,
        "cement": 0.151071,
        "flaring": 0.406069,
        "other": 0.112648
    },
    "Rwanda": {
        "coal": 0.001428,
        "oil": 0.109183,
        "gas": 0.00757,
        "cement": 0.012153,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ryukyu Islands": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Helena": {
        "coal": 0.0,
        "oil": 2.550917,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Kitts and Nevis": {
        "coal": 0.0,
        "oil": 4.995041,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Lucia": {
        "coal": 0.0,
        "oil": 2.704837,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Pierre and Miquelon": {
        "coal": 0.0,
        "oil": 10.544484,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saint Vincent and the Grenadines": {
        "coal": 0.0,
        "oil": 2.047981,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Samoa": {
        "coal": 0.0,
        "oil": 1.344282,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sao Tome and Principe": {
        "coal": 0.0,
        "oil": 0.591547,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Saudi Arabia": {
        "coal": 0.0,
        "oil": 10.28421,
        "gas": 7.512159,
        "cement": 0.797994,
        "flaring": 0.108627,
        "other": 0.0
    },
    "Senegal": {
        "coal": 0.12978,
        "oil": 0.515504,
        "gas": 0.002011,
        "cement": 0.158425,
        "flaring": 0.0,
        "other": 0.0
    },
    "Serbia": {
        "coal": 2.194432,
        "oil": 1.192537,
        "gas": 0.712093,
        "cement": 0.131438,
        "flaring": 0.0,
        "other": 0.0
    },
    "Seychelles": {
        "coal": 0.0,
        "oil": 5.337406,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sierra Leone": {
        "coal": 0.0,
        "oil": 0.154312,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Singapore": {
        "coal": 0.563631,
        "oil": 1.166976,
        "gas": 3.740957,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sint Maarten (Dutch part)": {
        "coal": 0.0,
        "oil": 14.711011,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Slovakia": {
        "coal": 2.30909,
        "oil": 1.852993,
        "gas": 1.908065,
        "cement": 0.264913,
        "flaring": 0.002417,
        "other": 0.143922
    },
    "Slovenia": {
        "coal": 1.705311,
        "oil": 3.013811,
        "gas": 0.869544,
        "cement": 0.224063,
        "flaring": 0.059024,
        "other": 0.049391
    },
    "Solomon Islands": {
        "coal": 0.0,
        "oil": 0.449141,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Somalia": {
        "coal": 0.0,
        "oil": 0.035766,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "South Africa": {
        "coal": 6.234256,
        "oil": 0.880674,
        "gas": 0.138634,
        "cement": 0.085381,
        "flaring": 0.000882,
        "other": 0.0
    },
    "South Korea": {
        "coal": 5.477669,
        "oil": 3.308581,
        "gas": 2.446255,
        "cement": 0.457341,
        "flaring": 0.000118,
        "other": 0.196459
    },
    "South Sudan": {
        "coal": 0.0,
        "oil": 0.147192,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Spain": {
        "coal": 0.39117,
        "oil": 2.803142,
        "gas": 1.413211,
        "cement": 0.181289,
        "flaring": 0.074932,
        "other": 0.056546
    },
    "Sri Lanka": {
        "coal": 0.279086,
        "oil": 0.605924,
        "gas": 0.0,
        "cement": 0.069405,
        "flaring": 0.0,
        "other": 0.0
    },
    "St. Kitts-Nevis-Anguilla": {
        "coal": 0.0,
        "oil": 0.0,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sudan": {
        "coal": 0.0,
        "oil": 0.416732,
        "gas": 0.0,
        "cement": 0.034071,
        "flaring": 0.009983,
        "other": 0.0
    },
    "Suriname": {
        "coal": 0.0,
        "oil": 4.520192,
        "gas": 0.017238,
        "cement": 0.019298,
        "flaring": 0.0,
        "other": 0.0
    },
    "Swaziland": {
        "coal": 0.160061,
        "oil": 0.751829,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Sweden": {
        "coal": 0.530563,
        "oil": 2.537716,
        "gas": 0.141789,
        "cement": 0.12153,
        "flaring": 0.04251,
        "other": 0.05081
    },
    "Switzerland": {
        "coal": 0.047549,
        "oil": 2.924785,
        "gas": 0.831828,
        "cement": 0.193208,
        "flaring": 0.003037,
        "other": 0.0187
    },
    "Syria": {
        "coal": 0.000119,
        "oil": 0.81765,
        "gas": 0.320633,
        "cement": 0.036033,
        "flaring": 0.091758,
        "other": 0.0
    },
    "Taiwan": {
        "coal": 6.491521,
        "oil": 2.762183,
        "gas": 2.308715,
        "cement": 0.245175,
        "flaring": 0.005655,
        "other": 0.041618
    },
    "Tajikistan": {
        "coal": 0.531791,
        "oil": 0.285824,
        "gas": 0.031909,
        "cement": 0.210614,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tanzania": {
        "coal": 0.031188,
        "oil": 0.101726,
        "gas": 0.032757,
        "cement": 0.039695,
        "flaring": 0.0,
        "other": 0.0
    },
    "Thailand": {
        "coal": 0.986674,
        "oil": 1.518872,
        "gas": 1.080827,
        "cement": 0.295402,
        "flaring": 0.00777,
        "other": 0.0
    },
    "Timor-Leste": {
        "coal": 0.0,
        "oil": 0.496403,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.061023,
        "other": 0.0
    },
    "Togo": {
        "coal": 0.0,
        "oil": 0.147997,
        "gas": 0.025517,
        "cement": 0.097401,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tonga": {
        "coal": 0.0,
        "oil": 1.649345,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Trinidad and Tobago": {
        "coal": 0.0,
        "oil": 2.016713,
        "gas": 21.305957,
        "cement": 0.172285,
        "flaring": 0.182644,
        "other": 0.0
    },
    "Tunisia": {
        "coal": 0.0,
        "oil": 1.155178,
        "gas": 1.115694,
        "cement": 0.262842,
        "flaring": 0.041749,
        "other": 0.0
    },
    "Turkey": {
        "coal": 1.917565,
        "oil": 1.39616,
        "gas": 1.349392,
        "cement": 0.523674,
        "flaring": 0.002303,
        "other": 0.074275
    },
    "Turkmenistan": {
        "coal": 0.0,
        "oil": 3.236365,
        "gas": 9.265475,
        "cement": 0.240093,
        "flaring": 0.346794,
        "other": 0.0
    },
    "Turks and Caicos Islands": {
        "coal": 0.0,
        "oil": 7.562677,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Tuvalu": {
        "coal": 0.0,
        "oil": 0.7094,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "USA": {
        "coal": 2.974205,
        "oil": 6.628469,
        "gas": 4.857715,
        "cement": 0.122265,
        "flaring": 0.200845,
        "other": 0.075169
    },
    "Uganda": {
        "coal": 0.0,
        "oil": 0.113376,
        "gas": 0.0,
        "cement": 0.012687,
        "flaring": 0.0,
        "other": 0.0
    },
    "Ukraine": {
        "coal": 2.339223,
        "oil": 0.837403,
        "gas": 1.242234,
        "cement": 0.10157,
        "flaring": 0.052927,
        "other": 0.063701
    },
    "United Arab Emirates": {
        "coal": 0.714923,
        "oil": 6.389958,
        "gas": 13.90118,
        "cement": 0.611617,
        "flaring": 0.174473,
        "other": 0.0
    },
    "United Kingdom": {
        "coal": 0.352101,
        "oil": 2.290553,
        "gas": 2.3612,
        "cement": 0.057961,
        "flaring": 0.051632,
        "other": 0.040652
    },
    "Uruguay": {
        "coal": 0.000552,
        "oil": 1.834908,
        "gas": 0.046259,
        "cement": 0.084819,
        "flaring": 0.0,
        "other": 0.0
    },
    "Uzbekistan": {
        "coal": 0.237196,
        "oil": 0.346405,
        "gas": 2.822092,
        "cement": 0.137291,
        "flaring": 0.025863,
        "other": 0.0
    },
    "Vanuatu": {
        "coal": 0.0,
        "oil": 0.547911,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Venezuela": {
        "coal": 0.001283,
        "oil": 1.071702,
        "gas": 1.146074,
        "cement": 0.062923,
        "flaring": 0.545925,
        "other": 0.0
    },
    "Viet Nam": {
        "coal": 2.016234,
        "oil": 0.621885,
        "gas": 0.140346,
        "cement": 0.555266,
        "flaring": 0.011096,
        "other": 0.0
    },
    "Wallis and Futuna Islands": {
        "coal": 0.0,
        "oil": 2.392571,
        "gas": 0.0,
        "cement": 0.0,
        "flaring": 0.0,
        "other": 0.0
    },
    "Yemen": {
        "coal": 0.007456,
        "oil": 0.290844,
        "gas": 0.006264,
        "cement": 0.02012,
        "flaring": 0.053605,
        "other": 0.0
    },
    "Zambia": {
        "coal": 0.126514,
        "oil": 0.21833,
        "gas": 0.0,
        "cement": 0.049349,
        "flaring": 0.0,
        "other": 0.0
    },
    "Zimbabwe": {
        "coal": 0.451784,
        "oil": 0.218894,
        "gas": 0.0,
        "cement": 0.035615,
        "flaring": 0.0,
        "other": 0.0
    }
    }
}
],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
  };

// bar chart
// config 
const config = {
    type: 'bar',
    data: data,
    options: {
      parsing: {
        xAxisKey: 'id',
        yAxisKey: 'metadata.Afghanistan.coal'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
            display: true
            }
        }
    }
};
  
// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// line chart
const config2 = {
    type: 'line',
    data: data,
    options: {
        parsing: {
            xAxisKey: 'id',
            yAxisKey: 'metadata.Afghanistan.coal'
        },
        scales: {
            y: {
            beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
                },
            title: {
                display: true,
                text: "Select Emission Type and Country from the dropdowns",
                color: 'darkblue',
                font: {
                    size: 24,
                    weight: 'bolder' 
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
    }
};

// render init block
const lineChart = new Chart(
    document.getElementById('lineChart'),
    config2
);

function changeCountry(){
    const type = document.getElementById('type').value;
    const country = document.getElementById('country').value;
    console.log(type);
    console.log(country);
    
    const output = `metadata.${country}.${type}`;
    console.log(output)

    myChart.config.options.parsing.yAxisKey = output;
    myChart.update();
    lineChart.config.options.parsing.yAxisKey = output;
    lineChart.update();
}



// bar2 & pie 
// setup 
const data_pie = {
    labels: ['coal', 'oil', 'gas', 'cement', 'flaring', 'other'],
    datasets: [{
      label: 'Emission Amounts',
      data: [
        {id: 'coal', metadata: {
                "2017": {"Afghanistan": 0.096731, "Albania": 0.095372, "Algeria": 0.019328, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.09714, "Armenia": 0.001286, "Aruba": 0.0, "Australia": 7.194136, "Austria": 1.593994, "Azerbaijan": 0.000364, "Bahamas": 0.009199, "Bahrain": 0.0, "Bangladesh": 0.044203, "Barbados": 0.0, "Belarus": 0.399908, "Belgium": 1.168967, "Belize": 0.0, "Benin": 0.017386, "Bermuda": 0.0, "Bhutan": 0.503962, "Bolivia": 0.002243, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 4.784465, "Botswana": 1.771102, "Brazil": 0.322879, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 3.59125, "Burkina Faso": 0.0, "Burundi": 0.001971, "Cambodia": 0.228209, "Cameroon": 0.0, "Canada": 1.988497, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.51013, "China": 5.079373, "Christmas Island": 0.0, "Colombia": 0.30373, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.003669, "Cote dIvoire": 0.0, "Croatia": 0.370012, "Cuba": 0.001293, "Curacao": 0.0, "Cyprus": 0.009676, "Czech Republic": 6.104261, "Democratic Republic of the Congo": 0.0, "Denmark": 1.089858, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.313891, "Ecuador": 0.0, "Egypt": 0.063929, "El Salvador": 0.000584, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 10.532481, "Ethiopia": 0.014257, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 3.102142, "France": 0.620315, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.30696, "Germany": 3.761154, "Ghana": 0.0, "Global": 1.908857, "Greece": 2.43348, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.145937, "Guatemala": 0.235814, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.00038, "Hong Kong": 3.18546, "Hungary": 1.026428, "Iceland": 2.017334, "India": 1.152705, "Indonesia": 0.835895, "International Transport": 0.0, "Iran": 0.055715, "Iraq": 0.0, "Ireland": 1.649198, "Israel": 2.266644, "Italy": 0.700615, "Jamaica": 0.076975, "Japan": 3.619716, "Jordan": 0.056671, "Kazakhstan": 10.262832, "Kenya": 0.025082, "Kiribati": 0.0, "Kosovo": 3.235183, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.553677, "Laos": 2.139492, "Latvia": 0.085557, "Lebanon": 0.102557, "Leeward Islands": 0.0, "Lesotho": 0.855816, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.275797, "Luxembourg": 0.473888, "Macao": 0.0, "Madagascar": 0.055724, "Malawi": 0.011711, "Malaysia": 2.458378, "Maldives": 0.0, "Mali": 0.0, "Malta": 2.5e-05, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.378166, "Mayotte": 0.0, "Mexico": 0.395067, "Micronesia (Federated States of)": 0.0, "Moldova": 0.126722, "Mongolia": 9.712723, "Montenegro": 1.900253, "Montserrat": 0.0, "Morocco": 0.475015, "Mozambique": 0.000898, "Myanmar": 0.029711, "Namibia": 0.03719, "Nauru": 0.0, "Nepal": 0.106344, "Netherlands": 2.094014, "New Caledonia": 9.638409, "New Zealand": 0.983785, "Nicaragua": 0.0, "Niger": 0.015533, "Nigeria": 0.000701, "Niue": 0.0, "North Korea": 1.810422, "North Macedonia": 1.805995, "Norway": 0.690265, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.189384, "Palau": 0.0, "Panama": 0.056373, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.000577, "Peru": 0.088912, "Philippines": 0.577412, "Poland": 5.283756, "Portugal": 1.203639, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 2.19061, "Romania": 1.108657, "Russia": 2.645015, "Rwanda": 0.000599, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.094997, "Serbia": 4.155716, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.670575, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 2.626085, "Slovenia": 2.338318, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.530899, "South Korea": 6.555194, "South Sudan": 0.0, "Spain": 1.150449, "Sri Lanka": 0.26611, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.140019, "Sweden": 0.842477, "Switzerland": 0.059897, "Syria": 0.000193, "Taiwan": 6.871645, "Tajikistan": 0.443759, "Tanzania": 0.026568, "Thailand": 0.885262, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.923962, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 3.9676, "Uganda": 0.0, "Ukraine": 2.521122, "United Arab Emirates": 0.890321, "United Kingdom": 0.592279, "Uruguay": 0.001071, "Uzbekistan": 0.209325, "Vanuatu": 0.0, "Venezuela": 0.01019, "Viet Nam": 1.15089, "Wallis and Futuna Islands": 0.0, "Yemen": 0.010247, "Zambia": 0.109991, "Zimbabwe": 0.400001}, 
                "2018": {"Afghanistan": 0.104866, "Albania": 0.164287, "Algeria": 0.031722, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.098087, "Armenia": 0.001292, "Aruba": 0.0, "Australia": 6.780453, "Austria": 1.390778, "Azerbaijan": 0.000361, "Bahamas": 0.009117, "Bahrain": 0.0, "Bangladesh": 0.049964, "Barbados": 0.0, "Belarus": 0.408726, "Belgium": 1.167562, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.556209, "Bolivia": 0.001894, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 4.882366, "Botswana": 1.886249, "Brazil": 0.313279, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 3.103544, "Burkina Faso": 0.0, "Burundi": 0.001585, "Cambodia": 0.239614, "Cameroon": 0.0, "Canada": 1.641559, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.446348, "China": 5.163049, "Christmas Island": 0.0, "Colombia": 0.278312, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.348175, "Cuba": 0.001294, "Curacao": 0.0, "Cyprus": 0.044182, "Czech Republic": 6.032838, "Democratic Republic of the Congo": 0.0, "Denmark": 1.103162, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.30529, "Ecuador": 0.0, "Egypt": 0.125382, "El Salvador": 0.000584, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 9.87993, "Ethiopia": 0.010025, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 3.249484, "France": 0.543988, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.320524, "Germany": 3.566771, "Ghana": 0.0, "Global": 1.919213, "Greece": 2.337101, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.141491, "Guatemala": 0.274145, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 3.262633, "Hungary": 0.966311, "Iceland": 2.025887, "India": 1.225417, "Indonesia": 0.98186, "International Transport": 0.0, "Iran": 0.057474, "Iraq": 0.0, "Ireland": 1.314335, "Israel": 2.143984, "Italy": 0.658418, "Jamaica": 0.082093, "Japan": 3.500543, "Jordan": 0.075663, "Kazakhstan": 10.291659, "Kenya": 0.036814, "Kiribati": 0.0, "Kosovo": 3.312672, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.649377, "Laos": 2.169905, "Latvia": 0.101795, "Lebanon": 0.105287, "Leeward Islands": 0.0, "Lesotho": 0.765133, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.298627, "Luxembourg": 0.439529, "Macao": 0.0, "Madagascar": 0.046267, "Malawi": 0.012767, "Malaysia": 2.597201, "Maldives": 0.0, "Mali": 0.0, "Malta": 2.4e-05, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.309601, "Mayotte": 0.0, "Mexico": 0.381516, "Micronesia (Federated States of)": 0.0, "Moldova": 0.097961, "Mongolia": 12.940998, "Montenegro": 2.251359, "Montserrat": 0.0, "Morocco": 0.543296, "Mozambique": 0.002118, "Myanmar": 0.061716, "Namibia": 0.010661, "Nauru": 0.0, "Nepal": 0.152181, "Netherlands": 1.882014, "New Caledonia": 8.765573, "New Zealand": 1.084898, "Nicaragua": 0.0, "Niger": 0.014444, "Nigeria": 0.000646, "Niue": 0.0, "North Korea": 1.657494, "North Macedonia": 1.611377, "Norway": 0.663891, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.213355, "Palau": 0.0, "Panama": 0.139818, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.001707, "Peru": 0.077713, "Philippines": 0.597815, "Poland": 5.161461, "Portugal": 1.009599, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 2.158386, "Romania": 1.055481, "Russia": 2.721498, "Rwanda": 0.00117, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.145149, "Serbia": 3.982492, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.353483, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 2.608226, "Slovenia": 2.275529, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.193131, "South Korea": 6.586068, "South Sudan": 0.0, "Spain": 1.027229, "Sri Lanka": 0.256155, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.138928, "Sweden": 0.791797, "Switzerland": 0.056252, "Syria": 0.00019, "Taiwan": 6.693304, "Tajikistan": 0.459008, "Tanzania": 0.02869, "Thailand": 0.851829, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.968848, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 3.782144, "Uganda": 0.0, "Ukraine": 2.712088, "United Arab Emirates": 0.796701, "United Kingdom": 0.50096, "Uruguay": 0.001069, "Uzbekistan": 0.29764, "Vanuatu": 0.0, "Venezuela": 0.004177, "Viet Nam": 1.420792, "Wallis and Futuna Islands": 0.0, "Yemen": 0.010115, "Zambia": 0.153866, "Zimbabwe": 0.476859}, 
                "2019": {"Afghanistan": 0.104708, "Albania": 0.112194, "Algeria": 0.025653, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.047903, "Armenia": 0.003897, "Aruba": 0.0, "Australia": 6.486179, "Austria": 1.464565, "Azerbaijan": 0.000358, "Bahamas": 0.009057, "Bahrain": 0.0, "Bangladesh": 0.090647, "Barbados": 0.0, "Belarus": 0.423781, "Belgium": 1.146097, "Belize": 0.0, "Benin": 0.022061, "Bermuda": 0.0, "Bhutan": 0.549033, "Bolivia": 0.002178, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 4.562677, "Botswana": 1.544295, "Brazil": 0.292223, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.828074, "Bulgaria": 2.944635, "Burkina Faso": 0.0, "Burundi": 0.004011, "Cambodia": 0.272634, "Cameroon": 0.0, "Canada": 1.554416, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.629087, "China": 5.305119, "Christmas Island": 0.0, "Colombia": 0.367137, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.406207, "Cuba": 0.000324, "Curacao": 0.0, "Cyprus": 0.055379, "Czech Republic": 5.452037, "Democratic Republic of the Congo": 0.0, "Denmark": 0.619126, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.300005, "Ecuador": 0.0, "Egypt": 0.095851, "El Salvador": 0.000583, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 5.859459, "Ethiopia": 0.010565, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 2.762942, "France": 0.454883, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.258465, "Germany": 2.887455, "Ghana": 0.0, "Global": 1.896468, "Greece": 1.690381, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.1717, "Guatemala": 0.263667, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 3.118944, "Hungary": 0.837731, "Iceland": 1.895957, "India": 1.212956, "Indonesia": 1.169958, "International Transport": 0.0, "Iran": 0.043089, "Iraq": 0.0, "Ireland": 0.927961, "Israel": 2.092518, "Italy": 0.513293, "Jamaica": 0.095103, "Japan": 3.436238, "Jordan": 0.073289, "Kazakhstan": 9.392327, "Kenya": 0.031863, "Kiribati": 0.0, "Kosovo": 3.523773, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.501192, "Laos": 1.969665, "Latvia": 0.086722, "Lebanon": 0.108363, "Leeward Islands": 0.0, "Lesotho": 0.750677, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.281089, "Luxembourg": 0.442609, "Macao": 0.0, "Madagascar": 0.050878, "Malawi": 0.011431, "Malaysia": 2.593079, "Maldives": 0.0, "Mali": 0.0, "Malta": 2.2e-05, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.204111, "Mayotte": 0.0, "Mexico": 0.361897, "Micronesia (Federated States of)": 0.0, "Moldova": 0.117912, "Mongolia": 12.919646, "Montenegro": 2.307451, "Montserrat": 0.0, "Morocco": 0.695773, "Mozambique": 0.001573, "Myanmar": 0.074122, "Namibia": 0.020966, "Nauru": 0.0, "Nepal": 0.118819, "Netherlands": 1.457556, "New Caledonia": 8.70504, "New Zealand": 1.207043, "Nicaragua": 0.0, "Niger": 0.013931, "Nigeria": 0.000721, "Niue": 0.0, "North Korea": 1.842298, "North Macedonia": 1.915035, "Norway": 0.663167, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.225294, "Palau": 0.0, "Panama": 0.562689, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.000561, "Peru": 0.078359, "Philippines": 0.62991, "Poland": 4.622457, "Portugal": 0.489787, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 2.19199, "Romania": 0.937765, "Russia": 2.678461, "Rwanda": 0.00143, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.130486, "Serbia": 3.999626, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.33602, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 2.159631, "Slovenia": 2.144189, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.788868, "South Korea": 6.208152, "South Sudan": 0.0, "Spain": 0.501205, "Sri Lanka": 0.272646, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.172296, "Sweden": 0.788095, "Switzerland": 0.050329, "Syria": 0.000182, "Taiwan": 6.500221, "Tajikistan": 0.488952, "Tanzania": 0.031577, "Thailand": 0.876244, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.976146, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 3.202695, "Uganda": 0.0, "Ukraine": 2.579566, "United Arab Emirates": 0.813979, "United Kingdom": 0.367074, "Uruguay": 0.001069, "Uzbekistan": 0.251096, "Vanuatu": 0.0, "Venezuela": 0.005691, "Viet Nam": 1.998842, "Wallis and Futuna Islands": 0.0, "Yemen": 0.011263, "Zambia": 0.127718, "Zimbabwe": 0.448616},
                "2020": {"Afghanistan": 0.106488, "Albania": 0.115611, "Algeria": 0.025282, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.058674, "Armenia": 0.003863, "Aruba": 0.0, "Australia": 6.082697, "Austria": 1.279033, "Azerbaijan": 0.000357, "Bahamas": 0.012293, "Bahrain": 0.0, "Bangladesh": 0.101231, "Barbados": 0.0, "Belarus": 0.392108, "Belgium": 0.921254, "Belize": 0.0, "Benin": 0.019449, "Bermuda": 0.0, "Bhutan": 0.572572, "Bolivia": 0.000754, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 4.749921, "Botswana": 1.361848, "Brazil": 0.263798, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.86202, "Bulgaria": 2.378158, "Burkina Faso": 0.0, "Burundi": 0.003803, "Cambodia": 0.282892, "Cameroon": 0.0, "Canada": 1.267792, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.34979, "China": 5.337608, "Christmas Island": 0.0, "Colombia": 0.303833, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.347544, "Cuba": 0.000442, "Curacao": 0.0, "Cyprus": 0.05499, "Czech Republic": 4.733362, "Democratic Republic of the Congo": 0.0, "Denmark": 0.539483, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.404752, "Ecuador": 0.0, "Egypt": 0.035862, "El Salvador": 0.000539, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 4.013374, "Ethiopia": 0.010037, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 2.14699, "France": 0.369525, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.266031, "Germany": 2.368416, "Ghana": 0.0, "Global": 1.80776, "Greece": 0.963556, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.059747, "Guatemala": 0.240423, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 1.660352, "Hungary": 0.763083, "Iceland": 1.820641, "India": 1.137264, "Indonesia": 1.105422, "International Transport": 0.0, "Iran": 0.042848, "Iraq": 0.0, "Ireland": 0.759739, "Israel": 1.792894, "Italy": 0.37428, "Jamaica": 0.129329, "Japan": 3.188692, "Jordan": 0.05646, "Kazakhstan": 9.537287, "Kenya": 0.030467, "Kiribati": 0.0, "Kosovo": 3.658821, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.486429, "Laos": 2.037298, "Latvia": 0.051935, "Lebanon": 0.087067, "Leeward Islands": 0.0, "Lesotho": 0.666222, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.220404, "Luxembourg": 0.376735, "Macao": 0.0, "Madagascar": 0.048388, "Malawi": 0.010886, "Malaysia": 2.848153, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.17356, "Mayotte": 0.0, "Mexico": 0.15882, "Micronesia (Federated States of)": 0.0, "Moldova": 0.117121, "Mongolia": 13.306289, "Montenegro": 2.37699, "Montserrat": 0.0, "Morocco": 0.691254, "Mozambique": 0.001491, "Myanmar": 0.077251, "Namibia": 0.018523, "Nauru": 0.0, "Nepal": 0.122534, "Netherlands": 0.974772, "New Caledonia": 9.105133, "New Zealand": 1.137228, "Nicaragua": 0.0, "Niger": 0.012153, "Nigeria": 0.000638, "Niue": 0.0, "North Korea": 1.925678, "North Macedonia": 1.316388, "Norway": 0.669611, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.251809, "Palau": 0.0, "Panama": 0.513271, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.000194, "Peru": 0.068139, "Philippines": 0.616145, "Poland": 4.273786, "Portugal": 0.236056, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 1.965938, "Romania": 0.732148, "Russia": 2.518647, "Rwanda": 0.00136, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.115237, "Serbia": 4.135405, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.315491, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.824551, "Slovenia": 2.074313, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.347073, "South Korea": 5.456362, "South Sudan": 0.0, "Spain": 0.301919, "Sri Lanka": 0.291752, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.153415, "Sweden": 0.642557, "Switzerland": 0.04797, "Syria": 0.000139, "Taiwan": 6.055988, "Tajikistan": 0.471728, "Tanzania": 0.029898, "Thailand": 0.934656, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.88542, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 2.616442, "Uganda": 0.0, "Ukraine": 2.326331, "United Arab Emirates": 0.771883, "United Kingdom": 0.340137, "Uruguay": 0.000375, "Uzbekistan": 0.338472, "Vanuatu": 0.0, "Venezuela": 0.002292, "Viet Nam": 1.989463, "Wallis and Futuna Islands": 0.0, "Yemen": 0.008663, "Zambia": 0.12108, "Zimbabwe": 0.428954}, 
                "2021": {"Afghanistan": 0.104828, "Albania": 0.061096, "Algeria": 0.024798, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.106371, "Armenia": 0.004473, "Aruba": 0.0, "Australia": 5.823767, "Austria": 1.375153, "Azerbaijan": 0.000355, "Bahamas": 0.012448, "Bahrain": 0.0, "Bangladesh": 0.087702, "Barbados": 0.0, "Belarus": 0.342635, "Belgium": 0.948716, "Belize": 0.0, "Benin": 0.021878, "Bermuda": 0.0, "Bhutan": 0.576234, "Bolivia": 0.001096, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 2.535815, "Botswana": 1.411529, "Brazil": 0.318346, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.865973, "Bulgaria": 3.028459, "Burkina Faso": 0.0, "Burundi": 0.003981, "Cambodia": 0.283217, "Cameroon": 0.0, "Canada": 1.149576, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.343286, "China": 5.579649, "Christmas Island": 0.0, "Colombia": 0.233234, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.415163, "Cuba": 0.000451, "Curacao": 0.0, "Cyprus": 0.161931, "Czech Republic": 4.92619, "Democratic Republic of the Congo": 0.0, "Denmark": 0.747621, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.406918, "Ecuador": 0.0, "Egypt": 0.057004, "El Salvador": 0.000713, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 4.682493, "Ethiopia": 0.010513, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 2.22024, "France": 0.4475, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.140289, "Germany": 2.760161, "Ghana": 0.0, "Global": 1.893923, "Greece": 0.935858, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.058653, "Guatemala": 0.314538, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 1.845824, "Hungary": 0.658229, "Iceland": 1.802619, "India": 1.280448, "Indonesia": 1.107397, "International Transport": 0.0, "Iran": 0.042423, "Iraq": 0.0, "Ireland": 1.261978, "Israel": 1.57791, "Italy": 0.405125, "Jamaica": 0.131081, "Japan": 3.360982, "Jordan": 0.048664, "Kazakhstan": 9.419363, "Kenya": 0.032122, "Kiribati": 0.0, "Kosovo": 1.935442, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.551421, "Laos": 2.03418, "Latvia": 0.073149, "Lebanon": 0.077514, "Leeward Islands": 0.0, "Lesotho": 0.693505, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.262508, "Luxembourg": 0.327207, "Macao": 0.0, "Madagascar": 0.050775, "Malawi": 0.011401, "Malaysia": 2.555403, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.26051, "Mayotte": 0.0, "Mexico": 0.1528, "Micronesia (Federated States of)": 0.0, "Moldova": 0.135924, "Mongolia": 13.262538, "Montenegro": 1.253209, "Montserrat": 0.0, "Morocco": 0.751007, "Mozambique": 0.001558, "Myanmar": 0.077701, "Namibia": 0.019199, "Nauru": 0.0, "Nepal": 0.121277, "Netherlands": 1.314206, "New Caledonia": 9.177665, "New Zealand": 1.316243, "Nicaragua": 0.0, "Niger": 0.013543, "Nigeria": 0.00072, "Niue": 0.0, "North Korea": 1.942642, "North Macedonia": 1.13805, "Norway": 0.773197, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.259101, "Palau": 0.0, "Panama": 0.6721, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.000282, "Peru": 0.073547, "Philippines": 0.657815, "Poland": 4.68579, "Portugal": 0.107059, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 1.949034, "Romania": 0.851123, "Russia": 2.620399, "Rwanda": 0.001428, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.12978, "Serbia": 2.194432, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.563631, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 2.30909, "Slovenia": 1.705311, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.234256, "South Korea": 5.477669, "South Sudan": 0.0, "Spain": 0.39117, "Sri Lanka": 0.279086, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.160061, "Sweden": 0.530563, "Switzerland": 0.047549, "Syria": 0.000119, "Taiwan": 6.491521, "Tajikistan": 0.531791, "Tanzania": 0.031188, "Thailand": 0.986674, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.917565, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 2.974205, "Uganda": 0.0, "Ukraine": 2.339223, "United Arab Emirates": 0.714923, "United Kingdom": 0.352101, "Uruguay": 0.000552, "Uzbekistan": 0.237196, "Vanuatu": 0.0, "Venezuela": 0.001283, "Viet Nam": 2.016234, "Wallis and Futuna Islands": 0.0, "Yemen": 0.007456, "Zambia": 0.126514, "Zimbabwe": 0.451784}
                }}, 
        {id: 'oil', metadata: {
                "2017": {"Afghanistan": 0.170436, "Albania": 1.416589, "Algeria": 1.3445, "Andorra": 6.302098, "Angola": 0.483036, "Anguilla": 9.516883, "Antarctica": 0.0, "Antigua and Barbuda": 5.388294, "Argentina": 1.835349, "Armenia": 0.304689, "Aruba": 8.444238, "Australia": 5.671368, "Austria": 3.926838, "Azerbaijan": 1.24091, "Bahamas": 5.24319, "Bahrain": 2.799243, "Bangladesh": 0.115626, "Barbados": 3.819032, "Belarus": 1.786644, "Belgium": 4.069848, "Belize": 1.633038, "Benin": 0.544662, "Bermuda": 9.959826, "Bhutan": 0.683256, "Bolivia": 1.115503, "Bonaire, Saint Eustatius and Saba": 4.210457, "Bosnia and Herzegovina": 1.421919, "Botswana": 1.173107, "Brazil": 1.517591, "British Virgin Islands": 5.606919, "Brunei Darussalam": 4.479134, "Bulgaria": 1.717848, "Burkina Faso": 0.192659, "Burundi": 0.044012, "Cambodia": 0.416377, "Cameroon": 0.225609, "Canada": 7.123722, "Cape Verde": 1.024706, "Central African Republic": 0.043263, "Chad": 0.093022, "Chile": 2.475329, "China": 1.014402, "Christmas Island": 0.0, "Colombia": 0.75008, "Comoros": 0.351168, "Congo": 0.371756, "Cook Islands": 4.633975, "Costa Rica": 1.498223, "Cote dIvoire": 0.30376, "Croatia": 2.388201, "Cuba": 1.98772, "Curacao": 25.97616, "Cyprus": 5.439979, "Czech Republic": 2.104534, "Democratic Republic of the Congo": 0.025214, "Denmark": 3.491075, "Djibouti": 0.317006, "Dominica": 2.289902, "Dominican Republic": 1.544676, "Ecuador": 2.05334, "Egypt": 1.169435, "El Salvador": 0.896351, "Equatorial Guinea": 0.785489, "Eritrea": 0.183365, "Estonia": 2.710959, "Ethiopia": 0.097189, "Faeroe Islands": 14.07828, "Fiji": 1.423309, "Finland": 4.017097, "France": 3.050226, "French Equatorial Africa": 0.0, "French Guiana": 2.624126, "French Polynesia": 2.914334, "French West Africa": 0.0, "Gabon": 1.127357, "Gambia": 0.249275, "Georgia": 0.935452, "Germany": 3.378917, "Ghana": 0.312665, "Global": 1.61091, "Greece": 3.2767, "Greenland": 9.69107, "Grenada": 2.302859, "Guadeloupe": 5.11579, "Guatemala": 0.72048, "Guinea": 0.264605, "Guinea-Bissau": 0.161777, "Guyana": 2.832302, "Haiti": 0.27826, "Honduras": 0.967903, "Hong Kong": 1.587083, "Hungary": 1.784948, "Iceland": 8.02785, "India": 0.466024, "Indonesia": 0.863786, "International Transport": 0.0, "Iran": 2.71059, "Iraq": 3.896932, "Ireland": 3.914479, "Israel": 2.566952, "Italy": 2.479459, "Jamaica": 2.499745, "Japan": 3.543649, "Jordan": 1.486348, "Kazakhstan": 2.464462, "Kenya": 0.273279, "Kiribati": 0.547947, "Kosovo": 1.250486, "Kuwait": 12.353963, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.782929, "Laos": 0.458575, "Latvia": 2.187689, "Lebanon": 4.084871, "Leeward Islands": 0.0, "Lesotho": 0.302152, "Liberia": 0.23298, "Libya": 4.106752, "Liechtenstein": 2.699679, "Lithuania": 2.673033, "Luxembourg": 11.528339, "Macao": 2.491064, "Madagascar": 0.098707, "Malawi": 0.059789, "Malaysia": 2.541684, "Maldives": 3.203001, "Mali": 0.17038, "Malta": 2.040123, "Marshall Islands": 3.10594, "Martinique": 6.037517, "Mauritania": 0.804139, "Mauritius": 2.125262, "Mayotte": 1.091959, "Mexico": 2.001313, "Micronesia (Federated States of)": 1.293996, "Moldova": 0.802957, "Mongolia": 1.21409, "Montenegro": 1.42519, "Montserrat": 6.237923, "Morocco": 1.036659, "Mozambique": 0.153257, "Myanmar": 0.219048, "Namibia": 1.574358, "Nauru": 4.704674, "Nepal": 0.22569, "Netherlands": 3.076221, "New Caledonia": 9.019902, "New Zealand": 4.290042, "Nicaragua": 0.796063, "Niger": 0.083743, "Nigeria": 0.302272, "Niue": 3.920813, "North Korea": 0.114884, "North Macedonia": 1.360135, "Norway": 4.300647, "Occupied Palestinian Territory": 0.69524, "Oman": 2.854092, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.394923, "Palau": 12.119527, "Panama": 2.501889, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.596946, "Paraguay": 1.205498, "Peru": 1.01234, "Philippines": 0.522661, "Poland": 2.169276, "Portugal": 2.517383, "Puerto Rico": 0.0, "Qatar": 3.339931, "Reunion": 2.582568, "Romania": 1.44273, "Russia": 2.84283, "Rwanda": 0.076394, "Ryukyu Islands": 0.0, "Saint Helena": 2.000364, "Saint Kitts and Nevis": 5.060668, "Saint Lucia": 2.85405, "Saint Pierre and Miquelon": 11.071345, "Saint Vincent and the Grenadines": 2.04811, "Samoa": 1.182334, "Sao Tome and Principe": 0.616432, "Saudi Arabia": 10.752529, "Senegal": 0.478855, "Serbia": 1.188399, "Seychelles": 5.650156, "Sierra Leone": 0.137444, "Singapore": 2.278683, "Sint Maarten (Dutch part)": 16.883986, "Slovakia": 1.863442, "Slovenia": 3.484087, "Solomon Islands": 0.444029, "Somalia": 0.042891, "South Africa": 0.999484, "South Korea": 3.482968, "South Sudan": 0.136477, "Spain": 3.060514, "Sri Lanka": 0.754715, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.495478, "Suriname": 3.554503, "Swaziland": 0.716004, "Sweden": 2.933163, "Switzerland": 3.386255, "Syria": 1.19937, "Taiwan": 2.934671, "Tajikistan": 0.265599, "Tanzania": 0.120794, "Thailand": 1.760396, "Timor-Leste": 0.442072, "Togo": 0.177769, "Tonga": 1.286041, "Trinidad and Tobago": 3.458982, "Tunisia": 1.211833, "Turkey": 1.471138, "Turkmenistan": 3.350501, "Turks and Caicos Islands": 8.828029, "Tuvalu": 0.676764, "USA": 7.018608, "Uganda": 0.124638, "Ukraine": 0.791409, "United Arab Emirates": 6.88883, "United Kingdom": 2.646653, "Uruguay": 1.670224, "Uzbekistan": 0.347881, "Vanuatu": 0.479715, "Venezuela": 2.518056, "Viet Nam": 0.663274, "Wallis and Futuna Islands": 2.148794, "Yemen": 0.274851, "Zambia": 0.236089, "Zimbabwe": 0.218747}, 
                "2018": {"Afghanistan": 0.18047, "Albania": 1.157651, "Algeria": 1.309946, "Andorra": 6.594057, "Angola": 0.475601, "Anguilla": 9.412819, "Antarctica": 0.0, "Antigua and Barbuda": 5.438456, "Argentina": 1.67499, "Armenia": 0.291926, "Aruba": 8.229667, "Australia": 5.753275, "Austria": 3.855559, "Azerbaijan": 1.165693, "Bahamas": 6.709788, "Bahrain": 2.473312, "Bangladesh": 0.11965, "Barbados": 4.085938, "Belarus": 1.874861, "Belgium": 3.99298, "Belize": 1.572754, "Benin": 0.586697, "Bermuda": 11.066178, "Bhutan": 0.74321, "Bolivia": 1.110857, "Bonaire, Saint Eustatius and Saba": 3.961874, "Bosnia and Herzegovina": 1.364476, "Botswana": 1.174795, "Brazil": 1.430318, "British Virgin Islands": 5.314521, "Brunei Darussalam": 4.388911, "Bulgaria": 1.764093, "Burkina Faso": 0.205006, "Burundi": 0.05454, "Cambodia": 0.451334, "Cameroon": 0.202608, "Canada": 7.208382, "Cape Verde": 1.019912, "Central African Republic": 0.04315, "Chad": 0.093219, "Chile": 2.490063, "China": 1.058857, "Christmas Island": 0.0, "Colombia": 0.789801, "Comoros": 0.37758, "Congo": 0.368649, "Cook Islands": 4.672115, "Costa Rica": 1.486466, "Cote dIvoire": 0.248138, "Croatia": 2.303941, "Cuba": 1.766661, "Curacao": 20.985142, "Cyprus": 5.267536, "Czech Republic": 2.123696, "Democratic Republic of the Congo": 0.023722, "Denmark": 3.483738, "Djibouti": 0.298056, "Dominica": 2.276323, "Dominican Republic": 1.688794, "Ecuador": 1.938409, "Egypt": 0.992247, "El Salvador": 0.953312, "Equatorial Guinea": 0.722023, "Eritrea": 0.209501, "Estonia": 2.64972, "Ethiopia": 0.099726, "Faeroe Islands": 14.237504, "Fiji": 1.475019, "Finland": 4.007055, "France": 2.945701, "French Equatorial Africa": 0.0, "French Guiana": 2.540156, "French Polynesia": 2.942468, "French West Africa": 0.0, "Gabon": 1.08649, "Gambia": 0.242776, "Georgia": 0.906208, "Germany": 3.199455, "Ghana": 0.370628, "Global": 1.59635, "Greece": 3.18252, "Greenland": 9.79816, "Grenada": 2.526108, "Guadeloupe": 5.095943, "Guatemala": 0.747431, "Guinea": 0.29359, "Guinea-Bissau": 0.161791, "Guyana": 2.952604, "Haiti": 0.299104, "Honduras": 0.921879, "Hong Kong": 1.537777, "Hungary": 1.898428, "Iceland": 7.886053, "India": 0.478589, "Indonesia": 0.833157, "International Transport": 0.0, "Iran": 2.749319, "Iraq": 3.56365, "Ireland": 4.034278, "Israel": 2.657448, "Italy": 2.550184, "Jamaica": 2.613946, "Japan": 3.42567, "Jordan": 1.402216, "Kazakhstan": 2.640337, "Kenya": 0.280135, "Kiribati": 0.539436, "Kosovo": 1.257787, "Kuwait": 11.995994, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.910776, "Laos": 0.465753, "Latvia": 2.253832, "Lebanon": 3.946711, "Leeward Islands": 0.0, "Lesotho": 0.313388, "Liberia": 0.196337, "Libya": 4.003492, "Liechtenstein": 2.443381, "Lithuania": 2.80893, "Luxembourg": 11.915452, "Macao": 1.63303, "Madagascar": 0.093079, "Malawi": 0.067823, "Malaysia": 2.558412, "Maldives": 3.553592, "Mali": 0.170924, "Malta": 1.76162, "Marshall Islands": 3.186849, "Martinique": 6.044394, "Mauritania": 0.858012, "Mauritius": 2.175125, "Mayotte": 1.041943, "Mexico": 1.885479, "Micronesia (Federated States of)": 1.288175, "Moldova": 0.848991, "Mongolia": 1.249516, "Montenegro": 1.54926, "Montserrat": 6.724478, "Morocco": 0.996229, "Mozambique": 0.151501, "Myanmar": 0.396663, "Namibia": 1.515447, "Nauru": 4.609192, "Nepal": 0.247679, "Netherlands": 3.10133, "New Caledonia": 9.883762, "New Zealand": 4.243848, "Nicaragua": 0.750976, "Niger": 0.061345, "Nigeria": 0.244233, "Niue": 5.825119, "North Korea": 0.113472, "North Macedonia": 1.342525, "Norway": 4.369315, "Occupied Palestinian Territory": 0.615299, "Oman": 2.887404, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.301465, "Palau": 11.896104, "Panama": 2.169377, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.714009, "Paraguay": 1.256111, "Peru": 1.031211, "Philippines": 0.528699, "Poland": 2.248373, "Portugal": 2.479536, "Puerto Rico": 0.0, "Qatar": 1.639491, "Reunion": 2.544578, "Romania": 1.465321, "Russia": 2.688019, "Rwanda": 0.081865, "Ryukyu Islands": 0.0, "Saint Helena": 2.008772, "Saint Kitts and Nevis": 5.139926, "Saint Lucia": 2.863015, "Saint Pierre and Miquelon": 9.862719, "Saint Vincent and the Grenadines": 2.296939, "Samoa": 1.135712, "Sao Tome and Principe": 0.62412, "Saudi Arabia": 9.694946, "Senegal": 0.44627, "Serbia": 1.206084, "Seychelles": 5.828227, "Sierra Leone": 0.131901, "Singapore": 4.021264, "Sint Maarten (Dutch part)": 16.30526, "Slovakia": 1.878953, "Slovenia": 3.478907, "Solomon Islands": 0.439069, "Somalia": 0.041369, "South Africa": 1.14201, "South Korea": 3.437376, "South Sudan": 0.144159, "Spain": 3.067432, "Sri Lanka": 0.666445, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.467258, "Suriname": 3.110341, "Swaziland": 0.751474, "Sweden": 2.870702, "Switzerland": 3.261487, "Syria": 1.102225, "Taiwan": 2.907881, "Tajikistan": 0.320985, "Tanzania": 0.119614, "Thailand": 1.647302, "Timor-Leste": 0.394901, "Togo": 0.165745, "Tonga": 1.289282, "Trinidad and Tobago": 2.612779, "Tunisia": 1.151425, "Turkey": 1.42094, "Turkmenistan": 3.320823, "Turks and Caicos Islands": 8.743365, "Tuvalu": 0.674459, "USA": 7.121344, "Uganda": 0.127707, "Ukraine": 0.792284, "United Arab Emirates": 6.788012, "United Kingdom": 2.605439, "Uruguay": 1.789746, "Uzbekistan": 0.36042, "Vanuatu": 0.591568, "Venezuela": 1.449721, "Viet Nam": 0.735006, "Wallis and Futuna Islands": 2.170616, "Yemen": 0.272148, "Zambia": 0.201936, "Zimbabwe": 0.269709}, 
                "2019": {"Afghanistan": 0.181177, "Albania": 1.197159, "Algeria": 1.385251, "Andorra": 6.287204, "Angola": 0.429439, "Anguilla": 10.005722, "Antarctica": 0.0, "Antigua and Barbuda": 5.409468, "Argentina": 1.672753, "Armenia": 0.370219, "Aruba": 8.571203, "Australia": 5.642777, "Austria": 3.838689, "Azerbaijan": 1.182227, "Bahamas": 6.258263, "Bahrain": 2.508568, "Bangladesh": 0.101383, "Barbados": 3.713955, "Belarus": 1.86444, "Belgium": 3.930573, "Belize": 1.817428, "Benin": 0.519023, "Bermuda": 9.129568, "Bhutan": 0.744775, "Bolivia": 1.082962, "Bonaire, Saint Eustatius and Saba": 4.298788, "Bosnia and Herzegovina": 1.393334, "Botswana": 1.168854, "Brazil": 1.427564, "British Virgin Islands": 5.506174, "Brunei Darussalam": 8.163635, "Bulgaria": 1.856303, "Burkina Faso": 0.2121, "Burundi": 0.053997, "Cambodia": 0.510906, "Cameroon": 0.195974, "Canada": 7.177703, "Cape Verde": 1.060409, "Central African Republic": 0.043608, "Chad": 0.089289, "Chile": 2.522247, "China": 1.09696, "Christmas Island": 0.0, "Colombia": 0.951753, "Comoros": 0.393736, "Congo": 0.363403, "Cook Islands": 4.925307, "Costa Rica": 1.439072, "Cote dIvoire": 0.236536, "Croatia": 2.25715, "Cuba": 1.798182, "Curacao": 10.151056, "Cyprus": 5.257423, "Czech Republic": 2.134146, "Democratic Republic of the Congo": 0.023963, "Denmark": 3.398762, "Djibouti": 0.293395, "Dominica": 2.359635, "Dominican Republic": 1.879495, "Ecuador": 2.009458, "Egypt": 0.960659, "El Salvador": 1.108532, "Equatorial Guinea": 0.719574, "Eritrea": 0.2135, "Estonia": 2.498305, "Ethiopia": 0.115478, "Faeroe Islands": 14.321085, "Fiji": 1.479862, "Finland": 3.908552, "France": 2.914578, "French Equatorial Africa": 0.0, "French Guiana": 2.534249, "French Polynesia": 2.921743, "French West Africa": 0.0, "Gabon": 0.832518, "Gambia": 0.239507, "Georgia": 0.951269, "Germany": 3.258166, "Ghana": 0.381327, "Global": 1.58992, "Greece": 3.210075, "Greenland": 9.898558, "Grenada": 2.687005, "Guadeloupe": 5.230805, "Guatemala": 0.804068, "Guinea": 0.34431, "Guinea-Bissau": 0.163633, "Guyana": 3.215592, "Haiti": 0.266582, "Honduras": 1.049293, "Hong Kong": 1.550429, "Hungary": 1.981575, "Iceland": 7.462608, "India": 0.487315, "Indonesia": 0.824181, "International Transport": 0.0, "Iran": 2.650078, "Iraq": 2.742125, "Ireland": 3.991934, "Israel": 2.46752, "Italy": 2.479841, "Jamaica": 2.398419, "Japan": 3.305946, "Jordan": 1.488041, "Kazakhstan": 2.61598, "Kenya": 0.299138, "Kiribati": 0.530839, "Kosovo": 1.3244, "Kuwait": 12.49659, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.705145, "Laos": 0.463331, "Latvia": 2.253323, "Lebanon": 4.088639, "Leeward Islands": 0.0, "Lesotho": 0.32266, "Liberia": 0.1955, "Libya": 6.410938, "Liechtenstein": 2.565594, "Lithuania": 2.875572, "Luxembourg": 11.929398, "Macao": 1.44097, "Madagascar": 0.102023, "Malawi": 0.068007, "Malaysia": 2.412136, "Maldives": 3.870924, "Mali": 0.168526, "Malta": 1.868084, "Marshall Islands": 3.276695, "Martinique": 6.235374, "Mauritania": 0.860869, "Mauritius": 2.283854, "Mayotte": 1.02561, "Mexico": 1.933857, "Micronesia (Federated States of)": 1.315867, "Moldova": 0.885523, "Mongolia": 1.548498, "Montenegro": 1.621609, "Montserrat": 4.879911, "Morocco": 1.001069, "Mozambique": 0.143847, "Myanmar": 0.371718, "Namibia": 1.445147, "Nauru": 4.530168, "Nepal": 0.216415, "Netherlands": 3.052419, "New Caledonia": 9.128736, "New Zealand": 4.216917, "Nicaragua": 0.748313, "Niger": 0.084682, "Nigeria": 0.337953, "Niue": 5.72202, "North Korea": 0.123332, "North Macedonia": 1.462705, "Norway": 4.103974, "Occupied Palestinian Territory": 0.664923, "Oman": 2.811703, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.290553, "Palau": 12.270596, "Panama": 2.105323, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.733761, "Paraguay": 1.200156, "Peru": 1.0593, "Philippines": 0.50195, "Poland": 2.2902, "Portugal": 2.541583, "Puerto Rico": 0.0, "Qatar": 3.71068, "Reunion": 2.584195, "Romania": 1.521071, "Russia": 2.73371, "Rwanda": 0.119853, "Ryukyu Islands": 0.0, "Saint Helena": 2.690655, "Saint Kitts and Nevis": 5.298793, "Saint Lucia": 2.892907, "Saint Pierre and Miquelon": 11.131139, "Saint Vincent and the Grenadines": 2.165072, "Samoa": 1.279517, "Sao Tome and Principe": 0.614653, "Saudi Arabia": 10.382984, "Senegal": 0.498136, "Serbia": 1.246077, "Seychelles": 5.686988, "Sierra Leone": 0.147984, "Singapore": 1.202928, "Sint Maarten (Dutch part)": 16.026803, "Slovakia": 1.892091, "Slovenia": 3.33975, "Solomon Islands": 0.434256, "Somalia": 0.039893, "South Africa": 0.998142, "South Korea": 3.39352, "South Sudan": 0.158166, "Spain": 2.996325, "Sri Lanka": 0.683901, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.459694, "Suriname": 4.431167, "Swaziland": 0.786298, "Sweden": 2.795639, "Switzerland": 3.205528, "Syria": 0.915897, "Taiwan": 2.753439, "Tajikistan": 0.314326, "Tanzania": 0.112847, "Thailand": 1.696994, "Timor-Leste": 0.472151, "Togo": 0.142238, "Tonga": 1.536107, "Trinidad and Tobago": 2.46122, "Tunisia": 1.117039, "Turkey": 1.375871, "Turkmenistan": 3.282977, "Turks and Caicos Islands": 8.420056, "Tuvalu": 0.668857, "USA": 7.055616, "Uganda": 0.12643, "Ukraine": 0.870383, "United Arab Emirates": 6.567223, "United Kingdom": 2.530682, "Uruguay": 1.759035, "Uzbekistan": 0.372311, "Vanuatu": 0.529612, "Venezuela": 1.199725, "Viet Nam": 0.796989, "Wallis and Futuna Islands": 2.189517, "Yemen": 0.320923, "Zambia": 0.241488, "Zimbabwe": 0.238148},
                "2020": {"Afghanistan": 0.185254, "Albania": 1.122339, "Algeria": 1.25519, "Andorra": 5.777148, "Angola": 0.39198, "Anguilla": 8.430535, "Antarctica": 0.0, "Antigua and Barbuda": 4.591351, "Argentina": 1.574577, "Armenia": 0.327806, "Aruba": 7.308293, "Australia": 5.277601, "Austria": 3.447875, "Azerbaijan": 1.054768, "Bahamas": 5.318157, "Bahrain": 2.344683, "Bangladesh": 0.09511, "Barbados": 3.165187, "Belarus": 1.858074, "Belgium": 3.416304, "Belize": 1.552782, "Benin": 0.515422, "Bermuda": 7.768184, "Bhutan": 0.780912, "Bolivia": 1.040544, "Bonaire, Saint Eustatius and Saba": 3.588496, "Bosnia and Herzegovina": 1.319667, "Botswana": 1.095969, "Brazil": 1.318454, "British Virgin Islands": 4.655555, "Brunei Darussalam": 8.544315, "Bulgaria": 1.739669, "Burkina Faso": 0.210778, "Burundi": 0.047592, "Cambodia": 0.533, "Cameroon": 0.179877, "Canada": 6.291544, "Cape Verde": 1.07284, "Central African Republic": 0.040097, "Chad": 0.081588, "Chile": 2.351882, "China": 1.14232, "Christmas Island": 0.0, "Colombia": 0.787472, "Comoros": 0.350406, "Congo": 0.335117, "Cook Islands": 5.222977, "Costa Rica": 1.238534, "Cote dIvoire": 0.235649, "Croatia": 2.019383, "Cuba": 1.537217, "Curacao": 8.841855, "Cyprus": 5.090074, "Czech Republic": 2.006404, "Democratic Republic of the Congo": 0.021882, "Denmark": 3.191264, "Djibouti": 0.262172, "Dominica": 1.998795, "Dominican Republic": 1.587534, "Ecuador": 1.649169, "Egypt": 0.840884, "El Salvador": 0.959856, "Equatorial Guinea": 0.660337, "Eritrea": 0.189726, "Estonia": 2.340689, "Ethiopia": 0.101977, "Faeroe Islands": 13.205626, "Fiji": 1.554512, "Finland": 3.642148, "France": 2.550423, "French Equatorial Africa": 0.0, "French Guiana": 2.238665, "French Polynesia": 3.061156, "French West Africa": 0.0, "Gabon": 0.768704, "Gambia": 0.238482, "Georgia": 0.890791, "Germany": 3.016765, "Ghana": 0.381506, "Global": 1.427353, "Greece": 2.955721, "Greenland": 8.932951, "Grenada": 2.312416, "Guadeloupe": 4.731013, "Guatemala": 0.686973, "Guinea": 0.343257, "Guinea-Bissau": 0.163398, "Guyana": 3.137406, "Haiti": 0.224662, "Honduras": 0.895275, "Hong Kong": 1.128397, "Hungary": 1.781729, "Iceland": 6.76371, "India": 0.43226, "Indonesia": 0.745165, "International Transport": 0.0, "Iran": 2.562442, "Iraq": 2.422963, "Ireland": 3.666845, "Israel": 2.17364, "Italy": 2.139199, "Jamaica": 2.041974, "Japan": 3.096795, "Jordan": 1.346317, "Kazakhstan": 2.111182, "Kenya": 0.265877, "Kiribati": 0.550413, "Kosovo": 1.251109, "Kuwait": 12.187947, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.611259, "Laos": 0.481836, "Latvia": 2.19821, "Lebanon": 3.858163, "Leeward Islands": 0.0, "Lesotho": 0.304474, "Liberia": 0.195699, "Libya": 5.56184, "Liechtenstein": 2.411888, "Lithuania": 2.84417, "Luxembourg": 9.42457, "Macao": 1.492421, "Madagascar": 0.090192, "Malawi": 0.0602, "Malaysia": 2.124009, "Maldives": 4.006578, "Mali": 0.166833, "Malta": 1.674806, "Marshall Islands": 3.563031, "Martinique": 5.670077, "Mauritania": 0.856995, "Mauritius": 2.069052, "Mayotte": 0.894282, "Mexico": 1.513339, "Micronesia (Federated States of)": 1.379782, "Moldova": 0.785608, "Mongolia": 1.603476, "Montenegro": 1.51979, "Montserrat": 4.171108, "Morocco": 0.893866, "Mozambique": 0.126738, "Myanmar": 0.389505, "Namibia": 1.357539, "Nauru": 4.710166, "Nepal": 0.224391, "Netherlands": 2.762084, "New Caledonia": 9.600004, "New Zealand": 3.778624, "Nicaragua": 0.640086, "Niger": 0.083216, "Nigeria": 0.336915, "Niue": 5.97381, "North Korea": 0.129612, "North Macedonia": 1.395252, "Norway": 3.937962, "Occupied Palestinian Territory": 0.601108, "Oman": 2.493781, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.288963, "Palau": 12.910238, "Panama": 1.799388, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.757969, "Paraguay": 1.152541, "Peru": 0.807803, "Philippines": 0.418905, "Poland": 2.225741, "Portugal": 2.254302, "Puerto Rico": 0.0, "Qatar": 2.949179, "Reunion": 2.317696, "Romania": 1.50295, "Russia": 2.615302, "Rwanda": 0.105922, "Ryukyu Islands": 0.0, "Saint Helena": 2.308731, "Saint Kitts and Nevis": 4.530767, "Saint Lucia": 2.460958, "Saint Pierre and Miquelon": 9.534364, "Saint Vincent and the Grenadines": 1.853702, "Samoa": 1.331423, "Sao Tome and Principe": 0.568961, "Saudi Arabia": 10.307343, "Senegal": 0.49554, "Serbia": 1.172159, "Seychelles": 5.101716, "Sierra Leone": 0.147738, "Singapore": 1.19698, "Sint Maarten (Dutch part)": 13.482639, "Slovakia": 1.761224, "Slovenia": 2.842406, "Solomon Islands": 0.447581, "Somalia": 0.034968, "South Africa": 0.83334, "South Korea": 3.183892, "South Sudan": 0.141316, "Spain": 2.539568, "Sri Lanka": 0.638132, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.405619, "Suriname": 4.261121, "Swaziland": 0.744419, "Sweden": 2.522632, "Switzerland": 2.929779, "Syria": 0.819003, "Taiwan": 2.639961, "Tajikistan": 0.270855, "Tanzania": 0.099316, "Thailand": 1.551684, "Timor-Leste": 0.490819, "Togo": 0.141871, "Tonga": 1.616566, "Trinidad and Tobago": 2.284778, "Tunisia": 0.972416, "Turkey": 1.370183, "Turkmenistan": 3.190759, "Turks and Caicos Islands": 6.994867, "Tuvalu": 0.698717, "USA": 6.100269, "Uganda": 0.110917, "Ukraine": 0.795141, "United Arab Emirates": 5.811253, "United Kingdom": 2.147063, "Uruguay": 1.711625, "Uzbekistan": 0.326481, "Vanuatu": 0.545904, "Venezuela": 1.03257, "Viet Nam": 0.675848, "Wallis and Futuna Islands": 2.32255, "Yemen": 0.289919, "Zambia": 0.212805, "Zimbabwe": 0.211664}, 
                "2021": {"Afghanistan": 0.185029, "Albania": 1.137164, "Algeria": 1.268066, "Andorra": 5.730292, "Angola": 0.402904, "Anguilla": 9.188354, "Antarctica": 0.0, "Antigua and Barbuda": 5.027895, "Argentina": 1.773737, "Armenia": 0.355273, "Aruba": 8.054722, "Australia": 5.368438, "Austria": 3.526375, "Azerbaijan": 1.077332, "Bahamas": 5.838075, "Bahrain": 2.426313, "Bangladesh": 0.106622, "Barbados": 3.480605, "Belarus": 1.773462, "Belgium": 3.83822, "Belize": 1.711186, "Benin": 0.535575, "Bermuda": 8.537196, "Bhutan": 0.797382, "Bolivia": 1.101349, "Bonaire, Saint Eustatius and Saba": 3.871365, "Bosnia and Herzegovina": 1.350757, "Botswana": 1.099621, "Brazil": 1.385677, "British Virgin Islands": 5.093802, "Brunei Darussalam": 8.708841, "Bulgaria": 1.855755, "Burkina Faso": 0.219259, "Burundi": 0.04891, "Cambodia": 0.541405, "Cameroon": 0.185873, "Canada": 6.333628, "Cape Verde": 1.135678, "Central African Republic": 0.041651, "Chad": 0.083864, "Chile": 2.401832, "China": 1.20159, "Christmas Island": 0.0, "Colombia": 0.969493, "Comoros": 0.362904, "Congo": 0.347396, "Cook Islands": 5.375721, "Costa Rica": 1.374266, "Cote dIvoire": 0.245609, "Croatia": 2.229111, "Cuba": 1.700125, "Curacao": 9.686792, "Cyprus": 5.221541, "Czech Republic": 2.210333, "Democratic Republic of the Congo": 0.022479, "Denmark": 3.188446, "Djibouti": 0.272875, "Dominica": 2.189268, "Dominican Republic": 1.730294, "Ecuador": 1.994683, "Egypt": 0.88788, "El Salvador": 1.067824, "Equatorial Guinea": 0.684107, "Eritrea": 0.196696, "Estonia": 2.428487, "Ethiopia": 0.104873, "Faeroe Islands": 13.203997, "Fiji": 1.590295, "Finland": 3.581235, "France": 2.785402, "French Equatorial Africa": 0.0, "French Guiana": 2.189895, "French Polynesia": 3.124014, "French West Africa": 0.0, "Gabon": 0.798612, "Gambia": 0.248379, "Georgia": 0.900633, "Germany": 2.975721, "Ghana": 0.399414, "Global": 1.496614, "Greece": 2.96915, "Greenland": 9.079509, "Grenada": 2.56167, "Guadeloupe": 4.726128, "Guatemala": 0.756146, "Guinea": 0.357805, "Guinea-Bissau": 0.170736, "Guyana": 3.329849, "Haiti": 0.244452, "Honduras": 0.984147, "Hong Kong": 0.998571, "Hungary": 1.892456, "Iceland": 6.821205, "India": 0.442003, "Indonesia": 0.768025, "International Transport": 0.0, "Iran": 2.535864, "Iraq": 2.683748, "Ireland": 3.697733, "Israel": 2.203413, "Italy": 2.393763, "Jamaica": 2.243742, "Japan": 3.17271, "Jordan": 1.352621, "Kazakhstan": 2.227889, "Kenya": 0.275241, "Kiribati": 0.555062, "Kosovo": 1.268866, "Kuwait": 12.643539, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.648636, "Laos": 0.488123, "Latvia": 2.260398, "Lebanon": 4.0038, "Leeward Islands": 0.0, "Lesotho": 0.306806, "Liberia": 0.204781, "Libya": 6.581704, "Liechtenstein": 2.443113, "Lithuania": 3.006061, "Luxembourg": 9.581352, "Macao": 1.51066, "Madagascar": 0.092927, "Malawi": 0.061905, "Malaysia": 2.117796, "Maldives": 4.06203, "Mali": 0.172667, "Malta": 1.671925, "Marshall Islands": 3.780319, "Martinique": 5.6946, "Mauritania": 0.892337, "Mauritius": 2.182113, "Mayotte": 0.864775, "Mexico": 1.544653, "Micronesia (Federated States of)": 1.405118, "Moldova": 0.85345, "Mongolia": 1.621541, "Montenegro": 1.536249, "Montserrat": 4.681398, "Morocco": 0.975242, "Mozambique": 0.130027, "Myanmar": 0.397494, "Namibia": 1.362075, "Nauru": 4.764679, "Nepal": 0.225331, "Netherlands": 2.738996, "New Caledonia": 9.817779, "New Zealand": 3.635653, "Nicaragua": 0.704639, "Niger": 0.085654, "Nigeria": 0.351327, "Niue": 6.154972, "North Korea": 0.132663, "North Macedonia": 1.608522, "Norway": 3.975181, "Occupied Palestinian Territory": 0.602376, "Oman": 2.697747, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.324041, "Palau": 13.229228, "Panama": 1.982355, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.763302, "Paraguay": 1.218865, "Peru": 1.00294, "Philippines": 0.447164, "Poland": 2.39401, "Portugal": 2.321238, "Puerto Rico": 0.0, "Qatar": 3.226295, "Reunion": 2.297768, "Romania": 1.645286, "Russia": 2.777896, "Rwanda": 0.109183, "Ryukyu Islands": 0.0, "Saint Helena": 2.550917, "Saint Kitts and Nevis": 4.995041, "Saint Lucia": 2.704837, "Saint Pierre and Miquelon": 10.544484, "Saint Vincent and the Grenadines": 2.047981, "Samoa": 1.344282, "Sao Tome and Principe": 0.591547, "Saudi Arabia": 10.28421, "Senegal": 0.515504, "Serbia": 1.192537, "Seychelles": 5.337406, "Sierra Leone": 0.154312, "Singapore": 1.166976, "Sint Maarten (Dutch part)": 14.711011, "Slovakia": 1.852993, "Slovenia": 3.013811, "Solomon Islands": 0.449141, "Somalia": 0.035766, "South Africa": 0.880674, "South Korea": 3.308581, "South Sudan": 0.147192, "Spain": 2.803142, "Sri Lanka": 0.605924, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.416732, "Suriname": 4.520192, "Swaziland": 0.751829, "Sweden": 2.537716, "Switzerland": 2.924785, "Syria": 0.81765, "Taiwan": 2.762183, "Tajikistan": 0.285824, "Tanzania": 0.101726, "Thailand": 1.518872, "Timor-Leste": 0.496403, "Togo": 0.147997, "Tonga": 1.649345, "Trinidad and Tobago": 2.016713, "Tunisia": 1.155178, "Turkey": 1.39616, "Turkmenistan": 3.236365, "Turks and Caicos Islands": 7.562677, "Tuvalu": 0.7094, "USA": 6.628469, "Uganda": 0.113376, "Ukraine": 0.837403, "United Arab Emirates": 6.389958, "United Kingdom": 2.290553, "Uruguay": 1.834908, "Uzbekistan": 0.346405, "Vanuatu": 0.547911, "Venezuela": 1.071702, "Viet Nam": 0.621885, "Wallis and Futuna Islands": 2.392571, "Yemen": 0.290844, "Zambia": 0.21833, "Zimbabwe": 0.218894}
            }}, 
        {id: 'gas', metadata: {
                "2017": {"Afghanistan": 0.008429, "Albania": 0.058495, "Algeria": 2.00192, "Andorra": 0.0, "Angola": 0.052027, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.189145, "Armenia": 1.564582, "Aruba": 0.0, "Australia": 3.099259, "Austria": 2.043153, "Azerbaijan": 2.074367, "Bahamas": 0.0, "Bahrain": 19.212413, "Bangladesh": 0.331684, "Barbados": 0.157486, "Belarus": 3.569172, "Belgium": 3.077016, "Belize": 0.009779, "Benin": 0.006322, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.806584, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.133138, "Botswana": 0.0, "Brazil": 0.339022, "British Virgin Islands": 0.0, "Brunei Darussalam": 15.855795, "Bulgaria": 0.840747, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.045963, "Canada": 5.870196, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.541341, "China": 0.344868, "Christmas Island": 0.0, "Colombia": 0.464672, "Comoros": 0.0, "Congo": 0.222778, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.173556, "Croatia": 1.295695, "Cuba": 0.178087, "Curacao": 0.811088, "Cyprus": 0.000346, "Czech Republic": 1.681995, "Democratic Republic of the Congo": 0.0, "Denmark": 1.16473, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.205819, "Ecuador": 0.092157, "Egypt": 1.065011, "El Salvador": 0.0, "Equatorial Guinea": 4.238104, "Eritrea": 0.0, "Estonia": 0.700239, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.705554, "France": 1.389643, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.422545, "Gambia": 0.0, "Georgia": 1.246298, "Germany": 2.074596, "Ghana": 0.078075, "Global": 0.940144, "Greece": 0.89187, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.833317, "Hungary": 2.092773, "Iceland": 0.000139, "India": 0.087817, "Indonesia": 0.318862, "International Transport": 0.0, "Iran": 4.727577, "Iraq": 0.485221, "Ireland": 2.127395, "Israel": 2.00867, "Italy": 2.479136, "Jamaica": 0.071757, "Japan": 1.939742, "Jordan": 0.786215, "Kazakhstan": 3.426252, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 10.255886, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.094574, "Laos": 0.0, "Latvia": 1.176229, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.845831, "Liechtenstein": 1.411515, "Lithuania": 1.473099, "Luxembourg": 2.778724, "Macao": 0.526846, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.202502, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.15192, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.16617, "Micronesia (Federated States of)": 0.0, "Moldova": 0.5426, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.066003, "Mozambique": 0.05643, "Myanmar": 0.161869, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 4.110491, "New Caledonia": 0.0, "New Zealand": 1.794636, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.167525, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.220328, "Norway": 2.937815, "Occupied Palestinian Territory": 0.0, "Oman": 10.853038, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.343343, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.102506, "Paraguay": 0.0, "Peru": 0.457425, "Philippines": 0.070542, "Poland": 0.885733, "Portugal": 1.193814, "Puerto Rico": 0.0, "Qatar": 32.11306, "Reunion": 0.0, "Romania": 1.238251, "Russia": 5.34357, "Rwanda": 0.00689, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.241969, "Senegal": 0.002417, "Serbia": 0.648932, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.496523, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.72625, "Slovenia": 0.835533, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.129569, "South Korea": 1.958015, "South Sudan": 0.0, "Spain": 1.343378, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.012472, "Swaziland": 0.0, "Sweden": 0.180611, "Switzerland": 0.838451, "Syria": 0.36151, "Taiwan": 1.962717, "Tajikistan": 0.000411, "Tanzania": 0.026373, "Thailand": 1.162417, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 23.382817, "Tunisia": 1.053026, "Turkey": 1.277743, "Turkmenistan": 8.185952, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 4.428231, "Uganda": 0.0, "Ukraine": 1.492592, "United Arab Emirates": 14.986416, "United Kingdom": 2.447557, "Uruguay": 0.035332, "Uzbekistan": 2.687962, "Vanuatu": 0.0, "Venezuela": 1.564779, "Viet Nam": 0.190114, "Wallis and Futuna Islands": 0.0, "Yemen": 0.019641, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2018": {"Afghanistan": 0.00799, "Albania": 0.052215, "Algeria": 2.120033, "Andorra": 0.0, "Angola": 0.051426, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.164272, "Armenia": 1.64951, "Aruba": 0.0, "Australia": 3.180032, "Austria": 1.92517, "Azerbaijan": 2.096442, "Bahamas": 0.0, "Bahrain": 19.099192, "Bangladesh": 0.326112, "Barbados": 0.197071, "Belarus": 3.790441, "Belgium": 3.153067, "Belize": 0.00959, "Benin": 0.003069, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.8056, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.133645, "Botswana": 0.0, "Brazil": 0.320779, "British Virgin Islands": 0.0, "Brunei Darussalam": 16.179891, "Bulgaria": 0.812233, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.05818, "Canada": 6.263775, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.533711, "China": 0.406027, "Christmas Island": 0.0, "Colombia": 0.47582, "Comoros": 0.0, "Congo": 0.246887, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.154116, "Croatia": 1.211972, "Cuba": 0.16428, "Curacao": 0.555898, "Cyprus": 0.000183, "Czech Republic": 1.579714, "Democratic Republic of the Congo": 0.0, "Denmark": 1.123461, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.202846, "Ecuador": 0.079888, "Egypt": 0.989951, "El Salvador": 0.0, "Equatorial Guinea": 2.866138, "Eritrea": 0.0, "Estonia": 0.746268, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.799873, "France": 1.318802, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.401166, "Gambia": 0.0, "Georgia": 1.24033, "Germany": 2.045299, "Ghana": 0.109455, "Global": 0.979965, "Greece": 0.853147, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.810026, "Hungary": 2.030007, "Iceland": 9e-05, "India": 0.092185, "Indonesia": 0.315082, "International Transport": 0.0, "Iran": 4.778185, "Iraq": 0.751112, "Ireland": 2.192292, "Israel": 2.114086, "Italy": 2.39943, "Jamaica": 0.066456, "Japan": 1.853009, "Jordan": 0.752075, "Kazakhstan": 3.699082, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 9.836817, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.103029, "Laos": 0.0, "Latvia": 1.396823, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.70708, "Liechtenstein": 1.300629, "Lithuania": 1.373054, "Luxembourg": 2.646612, "Macao": 0.274978, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.600707, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.384791, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.337801, "Micronesia (Federated States of)": 0.0, "Moldova": 0.597093, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.058848, "Mozambique": 0.054944, "Myanmar": 0.154115, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 4.04123, "New Caledonia": 0.0, "New Zealand": 1.632466, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.17309, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.20294, "Norway": 2.879533, "Occupied Palestinian Territory": 0.0, "Oman": 11.468149, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.344887, "Palau": 0.0, "Panama": 0.120472, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.082869, "Paraguay": 0.0, "Peru": 0.464233, "Philippines": 0.077418, "Poland": 0.889982, "Portugal": 1.100676, "Puerto Rico": 0.0, "Qatar": 31.497296, "Reunion": 0.0, "Romania": 1.296068, "Russia": 5.667024, "Rwanda": 0.007602, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.345341, "Senegal": 0.001412, "Serbia": 0.65652, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.539871, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.718268, "Slovenia": 0.816933, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.159046, "South Korea": 2.267409, "South Sudan": 0.0, "Spain": 1.32293, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.018514, "Swaziland": 0.0, "Sweden": 0.186342, "Switzerland": 0.785151, "Syria": 0.353068, "Taiwan": 2.047654, "Tajikistan": 0.012037, "Tanzania": 0.024528, "Thailand": 1.142572, "Timor-Leste": 0.0, "Togo": 0.010928, "Tonga": 0.0, "Trinidad and Tobago": 23.775558, "Tunisia": 1.054398, "Turkey": 1.153031, "Turkmenistan": 8.055879, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 4.873608, "Uganda": 0.0, "Ukraine": 1.507232, "United Arab Emirates": 14.613066, "United Kingdom": 2.430799, "Uruguay": 0.033143, "Uzbekistan": 2.768868, "Vanuatu": 0.0, "Venezuela": 1.398248, "Viet Nam": 0.195487, "Wallis and Futuna Islands": 0.0, "Yemen": 0.006426, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2019": {"Afghanistan": 0.006502, "Albania": 0.045897, "Algeria": 2.136732, "Andorra": 0.0, "Angola": 0.075084, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.136715, "Armenia": 1.732884, "Aruba": 0.0, "Australia": 3.22172, "Austria": 2.003686, "Azerbaijan": 2.357292, "Bahamas": 0.0, "Bahrain": 22.172503, "Bangladesh": 0.352671, "Barbados": 0.170005, "Belarus": 3.786235, "Belgium": 3.144868, "Belize": 0.0, "Benin": 0.008645, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.752878, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.127559, "Botswana": 0.0, "Brazil": 0.316935, "British Virgin Islands": 0.0, "Brunei Darussalam": 13.63394, "Bulgaria": 0.743668, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.051445, "Canada": 6.181943, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.632967, "China": 0.443201, "Christmas Island": 0.0, "Colombia": 0.472357, "Comoros": 0.0, "Congo": 0.338432, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.162829, "Croatia": 1.269931, "Cuba": 0.161263, "Curacao": 0.0, "Cyprus": 0.000184, "Czech Republic": 1.647717, "Democratic Republic of the Congo": 0.0, "Denmark": 1.038093, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.22694, "Ecuador": 0.069933, "Egypt": 1.141086, "El Salvador": 0.0, "Equatorial Guinea": 1.922795, "Eritrea": 0.0, "Estonia": 0.689046, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.780621, "France": 1.340943, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.40973, "Gambia": 0.0, "Georgia": 1.406013, "Germany": 2.074357, "Ghana": 0.130209, "Global": 0.984878, "Greece": 0.945541, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.838757, "Hungary": 2.043535, "Iceland": 0.00063, "India": 0.093034, "Indonesia": 0.326098, "International Transport": 0.0, "Iran": 4.886201, "Iraq": 0.824242, "Ireland": 2.213208, "Israel": 2.08741, "Italy": 2.457116, "Jamaica": 0.168059, "Japan": 1.782551, "Jordan": 0.734603, "Kazakhstan": 2.689467, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 10.417538, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.097921, "Laos": 0.0, "Latvia": 1.329665, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.415675, "Liechtenstein": 1.307004, "Lithuania": 1.43243, "Luxembourg": 2.593754, "Macao": 0.386467, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.752243, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.40611, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.255934, "Micronesia (Federated States of)": 0.0, "Moldova": 0.557726, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.055206, "Mozambique": 0.057103, "Myanmar": 0.150456, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 4.173986, "New Caledonia": 0.0, "New Zealand": 1.661642, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.172671, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.23743, "Norway": 2.813428, "Occupied Palestinian Territory": 0.0, "Oman": 11.464159, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.335776, "Palau": 0.0, "Panama": 0.367912, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.085241, "Paraguay": 0.0, "Peru": 0.477634, "Philippines": 0.076677, "Poland": 0.921992, "Portugal": 1.18154, "Puerto Rico": 0.0, "Qatar": 31.144656, "Reunion": 0.0, "Romania": 1.18613, "Russia": 5.515648, "Rwanda": 0.007151, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.143536, "Senegal": 0.001831, "Serbia": 0.616355, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.560692, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.717967, "Slovenia": 0.829677, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.156748, "South Korea": 2.192626, "South Sudan": 0.0, "Spain": 1.511792, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.018336, "Swaziland": 0.0, "Sweden": 0.173119, "Switzerland": 0.802149, "Syria": 0.325778, "Taiwan": 1.974532, "Tajikistan": 0.029824, "Tanzania": 0.031271, "Thailand": 1.175913, "Timor-Leste": 0.0, "Togo": 0.023114, "Tonga": 0.0, "Trinidad and Tobago": 23.95893, "Tunisia": 1.042225, "Turkey": 0.995918, "Turkmenistan": 8.199113, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 5.007181, "Uganda": 0.0, "Ukraine": 1.3693, "United Arab Emirates": 14.453508, "United Kingdom": 2.385805, "Uruguay": 0.048119, "Uzbekistan": 2.80161, "Vanuatu": 0.0, "Venezuela": 1.189986, "Viet Nam": 0.197401, "Wallis and Futuna Islands": 0.0, "Yemen": 0.00627, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2020": {"Afghanistan": 0.006447, "Albania": 0.045757, "Algeria": 2.032334, "Andorra": 0.0, "Angola": 0.075982, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.003119, "Armenia": 1.838826, "Aruba": 0.0, "Australia": 3.290666, "Austria": 1.894629, "Azerbaijan": 2.460449, "Bahamas": 0.0, "Bahrain": 22.389554, "Bangladesh": 0.337185, "Barbados": 0.157655, "Belarus": 3.491142, "Belgium": 3.101308, "Belize": 0.0, "Benin": 0.008995, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.610233, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.128474, "Botswana": 0.0, "Brazil": 0.276863, "British Virgin Islands": 0.0, "Brunei Darussalam": 13.837468, "Bulgaria": 0.768244, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.052351, "Canada": 5.904646, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.597774, "China": 0.482747, "Christmas Island": 0.0, "Colombia": 0.474573, "Comoros": 0.0, "Congo": 0.346005, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.169955, "Croatia": 1.347157, "Cuba": 0.15001, "Curacao": 0.0, "Cyprus": 0.000178, "Czech Republic": 1.655196, "Democratic Republic of the Congo": 0.0, "Denmark": 0.822584, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.208582, "Ecuador": 0.058576, "Egypt": 1.107604, "El Salvador": 0.0, "Equatorial Guinea": 1.956264, "Eritrea": 0.0, "Estonia": 0.608951, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.788731, "France": 1.241329, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.419437, "Gambia": 0.0, "Georgia": 1.400091, "Germany": 2.011642, "Ghana": 0.136483, "Global": 0.963695, "Greece": 1.050424, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 1.329956, "Hungary": 2.142995, "Iceland": 0.000547, "India": 0.091404, "Indonesia": 0.275735, "International Transport": 0.0, "Iran": 5.198539, "Iraq": 0.763479, "Ireland": 2.214222, "Israel": 2.152067, "Italy": 2.366376, "Jamaica": 0.155693, "Japan": 1.777359, "Jordan": 0.718054, "Kazakhstan": 1.697027, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 10.095835, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.101726, "Laos": 0.0, "Latvia": 1.108575, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.296229, "Liechtenstein": 1.251954, "Lithuania": 1.50416, "Luxembourg": 2.330852, "Macao": 0.388142, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.304511, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.42864, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.186719, "Micronesia (Federated States of)": 0.0, "Moldova": 0.592979, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.042621, "Mozambique": 0.053235, "Myanmar": 0.152879, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 4.053271, "New Caledonia": 0.0, "New Zealand": 1.550426, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.180351, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.271563, "Norway": 2.661232, "Occupied Palestinian Territory": 0.0, "Oman": 12.041041, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.305565, "Palau": 0.0, "Panama": 0.268954, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.085386, "Paraguay": 0.0, "Peru": 0.408776, "Philippines": 0.068764, "Poland": 0.956695, "Portugal": 1.164543, "Puerto Rico": 0.0, "Qatar": 29.435718, "Reunion": 0.0, "Romania": 1.291942, "Russia": 5.361872, "Rwanda": 0.006687, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.231387, "Senegal": 0.001909, "Serbia": 0.616548, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.54847, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.702124, "Slovenia": 0.826265, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.144281, "South Korea": 2.249691, "South Sudan": 0.0, "Spain": 1.358016, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.014874, "Swaziland": 0.0, "Sweden": 0.139503, "Switzerland": 0.769703, "Syria": 0.314726, "Taiwan": 2.108571, "Tajikistan": 0.030799, "Tanzania": 0.029121, "Thailand": 1.07902, "Timor-Leste": 0.0, "Togo": 0.024154, "Tonga": 0.0, "Trinidad and Tobago": 20.846939, "Tunisia": 0.994089, "Turkey": 1.096054, "Turkmenistan": 7.589088, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 4.92251, "Uganda": 0.0, "Ukraine": 1.384079, "United Arab Emirates": 14.060411, "United Kingdom": 2.228173, "Uruguay": 0.039498, "Uzbekistan": 2.691333, "Vanuatu": 0.0, "Venezuela": 1.020079, "Viet Nam": 0.175673, "Wallis and Futuna Islands": 0.0, "Yemen": 0.006119, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2021": {"Afghanistan": 0.005956, "Albania": 0.052631, "Algeria": 2.100412, "Andorra": 0.0, "Angola": 0.085536, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.083353, "Armenia": 1.956629, "Aruba": 0.0, "Australia": 2.979896, "Austria": 1.999475, "Azerbaijan": 2.523936, "Bahamas": 0.0, "Bahrain": 23.642933, "Bangladesh": 0.346862, "Barbados": 0.205075, "Belarus": 3.76403, "Belgium": 3.08121, "Belize": 0.0, "Benin": 0.009465, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.705627, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.149283, "Botswana": 0.0, "Brazil": 0.35448, "British Virgin Islands": 0.0, "Brunei Darussalam": 13.046933, "Bulgaria": 0.880323, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.059246, "Canada": 6.169093, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.595372, "China": 0.542724, "Christmas Island": 0.0, "Colombia": 0.451441, "Comoros": 0.0, "Congo": 0.392831, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.17939, "Croatia": 1.308067, "Cuba": 0.196253, "Curacao": 0.0, "Cyprus": 0.000177, "Czech Republic": 1.777341, "Democratic Republic of the Congo": 0.0, "Denmark": 0.816214, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.26892, "Ecuador": 0.057668, "Egypt": 1.156058, "El Salvador": 0.0, "Equatorial Guinea": 2.219633, "Eritrea": 0.0, "Estonia": 0.688327, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.770695, "France": 1.326183, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.477242, "Gambia": 0.0, "Georgia": 1.606986, "Germany": 2.079931, "Ghana": 0.144707, "Global": 1.001585, "Greece": 1.163427, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 1.299107, "Hungary": 2.277324, "Iceland": 0.000541, "India": 0.09481, "Indonesia": 0.270637, "International Transport": 0.0, "Iran": 5.311369, "Iraq": 0.690132, "Ireland": 2.105999, "Israel": 2.185248, "Italy": 2.548195, "Jamaica": 0.202368, "Japan": 1.777711, "Jordan": 0.736172, "Kazakhstan": 1.457571, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 11.721402, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.105982, "Laos": 0.0, "Latvia": 1.21184, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.567193, "Liechtenstein": 1.423536, "Lithuania": 1.436983, "Luxembourg": 2.457908, "Macao": 0.363442, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.44245, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.600917, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.24346, "Micronesia (Federated States of)": 0.0, "Moldova": 0.632462, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.042446, "Mozambique": 0.059981, "Myanmar": 0.144323, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 3.890066, "New Caledonia": 0.0, "New Zealand": 1.297904, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.190456, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.343675, "Norway": 2.345509, "Occupied Palestinian Territory": 0.0, "Oman": 13.787812, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.326313, "Palau": 0.0, "Panama": 0.209475, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.079542, "Paraguay": 0.0, "Peru": 0.4544, "Philippines": 0.057877, "Poland": 1.059067, "Portugal": 1.132036, "Puerto Rico": 0.0, "Qatar": 31.072901, "Reunion": 0.0, "Romania": 1.319795, "Russia": 6.030566, "Rwanda": 0.00757, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.512159, "Senegal": 0.002011, "Serbia": 0.712093, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.740957, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.908065, "Slovenia": 0.869544, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.138634, "South Korea": 2.446255, "South Sudan": 0.0, "Spain": 1.413211, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.017238, "Swaziland": 0.0, "Sweden": 0.141789, "Switzerland": 0.831828, "Syria": 0.320633, "Taiwan": 2.308715, "Tajikistan": 0.031909, "Tanzania": 0.032757, "Thailand": 1.080827, "Timor-Leste": 0.0, "Togo": 0.025517, "Tonga": 0.0, "Trinidad and Tobago": 21.305957, "Tunisia": 1.115694, "Turkey": 1.349392, "Turkmenistan": 9.265475, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 4.857715, "Uganda": 0.0, "Ukraine": 1.242234, "United Arab Emirates": 13.90118, "United Kingdom": 2.3612, "Uruguay": 0.046259, "Uzbekistan": 2.822092, "Vanuatu": 0.0, "Venezuela": 1.146074, "Viet Nam": 0.140346, "Wallis and Futuna Islands": 0.0, "Yemen": 0.006264, "Zambia": 0.0, "Zimbabwe": 0.0}
            }}, 
        {id: 'cement', metadata: {
                "2017": {"Afghanistan": 0.001256, "Albania": 0.351291, "Algeria": 0.277278, "Andorra": 0.0, "Angola": 0.032966, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.099015, "Armenia": 0.072046, "Aruba": 0.0, "Australia": 0.122774, "Austria": 0.194418, "Azerbaijan": 0.092232, "Bahamas": 0.0, "Bahrain": 0.357213, "Bangladesh": 0.007386, "Barbados": 0.252761, "Belarus": 0.229419, "Belgium": 0.201275, "Belize": 0.0, "Benin": 0.018358, "Bermuda": 0.0, "Bhutan": 0.451704, "Bolivia": 0.124513, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.101175, "Botswana": 0.00242, "Brazil": 0.091512, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.172547, "Burkina Faso": 0.035163, "Burundi": 0.001563, "Cambodia": 0.145325, "Cameroon": 0.041302, "Canada": 0.18677, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.00899, "Chile": 0.04714, "China": 0.537615, "Christmas Island": 0.0, "Colombia": 0.108227, "Comoros": 0.0, "Congo": 0.076589, "Cook Islands": 0.0, "Costa Rica": 0.139738, "Cote dIvoire": 0.0, "Croatia": 0.307039, "Cuba": 0.056816, "Curacao": 0.0, "Cyprus": 0.763641, "Czech Republic": 0.164107, "Democratic Republic of the Congo": 0.004138, "Denmark": 0.208067, "Djibouti": 0.059601, "Dominica": 0.0, "Dominican Republic": 0.191307, "Ecuador": 0.134376, "Egypt": 0.213869, "El Salvador": 0.055678, "Equatorial Guinea": 0.0, "Eritrea": 0.023955, "Estonia": 0.23283, "Ethiopia": 0.032232, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.109594, "France": 0.09808, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.06699, "Gambia": 0.0, "Georgia": 0.208213, "Germany": 0.162278, "Ghana": 0.050516, "Global": 0.198416, "Greece": 0.344663, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.080442, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.206651, "Haiti": 0.007137, "Honduras": 0.094525, "Hong Kong": 0.080808, "Hungary": 0.080001, "Iceland": 0.0, "India": 0.089387, "Indonesia": 0.109511, "International Transport": 0.0, "Iran": 0.223773, "Iraq": 0.114595, "Ireland": 0.385512, "Israel": 0.238579, "Italy": 0.128516, "Jamaica": 0.128055, "Japan": 0.208655, "Jordan": 0.160008, "Kazakhstan": 0.208424, "Kenya": 0.049321, "Kiribati": 0.0, "Kosovo": 0.188313, "Kuwait": 0.287883, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.095969, "Laos": 0.214748, "Latvia": 0.223584, "Lebanon": 0.370625, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.023024, "Libya": 0.273385, "Liechtenstein": 0.0, "Lithuania": 0.155056, "Luxembourg": 0.621683, "Macao": 0.0, "Madagascar": 0.002961, "Malawi": 0.004572, "Malaysia": 0.393465, "Maldives": 0.0, "Mali": 0.013444, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.169953, "Micronesia (Federated States of)": 0.0, "Moldova": 0.16913, "Mongolia": 0.096752, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.152562, "Mozambique": 0.031874, "Myanmar": 0.039994, "Namibia": 0.171532, "Nauru": 0.0, "Nepal": 0.081242, "Netherlands": 0.017317, "New Caledonia": 0.139574, "New Zealand": 0.0935, "Nicaragua": 0.046662, "Niger": 0.000909, "Nigeria": 0.038049, "Niue": 0.0, "North Korea": 0.102252, "North Macedonia": 0.166547, "Norway": 0.145147, "Occupied Palestinian Territory": 0.0, "Oman": 0.376802, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.068176, "Palau": 0.0, "Panama": 0.181724, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.063513, "Peru": 0.13576, "Philippines": 0.093238, "Poland": 0.181572, "Portugal": 0.245512, "Puerto Rico": 0.0, "Qatar": 0.772772, "Reunion": 0.0, "Romania": 0.168043, "Russia": 0.141023, "Rwanda": 0.011593, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.701842, "Senegal": 0.132856, "Serbia": 0.10612, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.251324, "Slovenia": 0.195499, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.096775, "South Korea": 0.511546, "South Sudan": 0.0, "Spain": 0.202831, "Sri Lanka": 0.05002, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.03824, "Suriname": 0.020133, "Swaziland": 0.0, "Sweden": 0.147572, "Switzerland": 0.208221, "Syria": 0.039004, "Taiwan": 0.226368, "Tajikistan": 0.170664, "Tanzania": 0.028924, "Thailand": 0.315783, "Timor-Leste": 0.0, "Togo": 0.097284, "Tonga": 0.0, "Trinidad and Tobago": 0.175671, "Tunisia": 0.27144, "Turkey": 0.4808, "Turkmenistan": 0.23018, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.12227, "Uganda": 0.009359, "Ukraine": 0.079346, "United Arab Emirates": 0.670153, "United Kingdom": 0.066749, "Uruguay": 0.094137, "Uzbekistan": 0.114735, "Vanuatu": 0.0, "Venezuela": 0.069798, "Viet Nam": 0.454471, "Wallis and Futuna Islands": 0.0, "Yemen": 0.022327, "Zambia": 0.049506, "Zimbabwe": 0.031785}, 
                "2018": {"Afghanistan": 0.00155, "Albania": 0.353399, "Algeria": 0.295315, "Andorra": 0.0, "Angola": 0.033454, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.098364, "Armenia": 0.111096, "Aruba": 0.0, "Australia": 0.117769, "Austria": 0.206623, "Azerbaijan": 0.106669, "Bahamas": 0.0, "Bahrain": 0.375716, "Bangladesh": 0.008139, "Barbados": 0.252309, "Belarus": 0.223125, "Belgium": 0.221371, "Belize": 0.0, "Benin": 0.032853, "Bermuda": 0.0, "Bhutan": 0.471197, "Bolivia": 0.127649, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.111924, "Botswana": 0.000158, "Brazil": 0.092033, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.171902, "Burkina Faso": 0.037623, "Burundi": 0.003371, "Cambodia": 0.206897, "Cameroon": 0.043266, "Canada": 0.186708, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.009933, "Chile": 0.041826, "China": 0.555191, "Christmas Island": 0.0, "Colombia": 0.107585, "Comoros": 0.0, "Congo": 0.049852, "Cook Islands": 0.0, "Costa Rica": 0.146129, "Cote dIvoire": 0.0, "Croatia": 0.291004, "Cuba": 0.063175, "Curacao": 0.0, "Cyprus": 0.695883, "Czech Republic": 0.177277, "Democratic Republic of the Congo": 0.004663, "Denmark": 0.201111, "Djibouti": 0.065975, "Dominica": 0.0, "Dominican Republic": 0.195543, "Ecuador": 0.133481, "Egypt": 0.202449, "El Salvador": 0.067328, "Equatorial Guinea": 0.0, "Eritrea": 0.031491, "Estonia": 0.225211, "Ethiopia": 0.032428, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.10909, "France": 0.101048, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.08662, "Gambia": 0.0, "Georgia": 0.2004, "Germany": 0.159571, "Ghana": 0.062635, "Global": 0.204225, "Greece": 0.321582, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.080987, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.205814, "Haiti": 0.007041, "Honduras": 0.085107, "Hong Kong": 0.083652, "Hungary": 0.090196, "Iceland": 0.0, "India": 0.101508, "Indonesia": 0.115447, "International Transport": 0.0, "Iran": 0.222983, "Iraq": 0.120463, "Ireland": 0.396326, "Israel": 0.209956, "Italy": 0.129543, "Jamaica": 0.113361, "Japan": 0.20738, "Jordan": 0.156268, "Kazakhstan": 0.209879, "Kenya": 0.046775, "Kiribati": 0.0, "Kosovo": 0.194989, "Kuwait": 0.266971, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.121111, "Laos": 0.25781, "Latvia": 0.284627, "Lebanon": 0.351223, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.024885, "Libya": 0.269184, "Liechtenstein": 0.0, "Lithuania": 0.177784, "Luxembourg": 0.607804, "Macao": 0.0, "Madagascar": 0.003031, "Malawi": 0.004894, "Malaysia": 0.363362, "Maldives": 0.0, "Mali": 0.013413, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.168238, "Micronesia (Federated States of)": 0.0, "Moldova": 0.189161, "Mongolia": 0.131, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.155438, "Mozambique": 0.031606, "Myanmar": 0.047098, "Namibia": 0.201021, "Nauru": 0.0, "Nepal": 0.120481, "Netherlands": 0.012751, "New Caledonia": 0.115202, "New Zealand": 0.086383, "Nicaragua": 0.040112, "Niger": 0.000892, "Nigeria": 0.041017, "Niue": 0.0, "North Korea": 0.086807, "North Macedonia": 0.169984, "Norway": 0.137416, "Occupied Palestinian Territory": 0.0, "Oman": 0.402309, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.07091, "Palau": 0.0, "Panama": 0.155436, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.062646, "Peru": 0.134159, "Philippines": 0.10048, "Poland": 0.198729, "Portugal": 0.218747, "Puerto Rico": 0.0, "Qatar": 0.605933, "Reunion": 0.0, "Romania": 0.178756, "Russia": 0.137936, "Rwanda": 0.011604, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.717768, "Senegal": 0.134647, "Serbia": 0.116895, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.247245, "Slovenia": 0.21372, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.095328, "South Korea": 0.47801, "South Sudan": 0.0, "Spain": 0.206604, "Sri Lanka": 0.050237, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.037039, "Suriname": 0.019925, "Swaziland": 0.0, "Sweden": 0.158151, "Switzerland": 0.204171, "Syria": 0.03884, "Taiwan": 0.226669, "Tajikistan": 0.205797, "Tanzania": 0.030077, "Thailand": 0.315852, "Timor-Leste": 0.0, "Togo": 0.097712, "Tonga": 0.0, "Trinidad and Tobago": 0.17082, "Tunisia": 0.261901, "Turkey": 0.475955, "Turkmenistan": 0.239095, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.117332, "Uganda": 0.007925, "Ukraine": 0.083667, "United Arab Emirates": 0.622851, "United Kingdom": 0.065689, "Uruguay": 0.093429, "Uzbekistan": 0.116368, "Vanuatu": 0.0, "Venezuela": 0.067426, "Viet Nam": 0.522971, "Wallis and Futuna Islands": 0.0, "Yemen": 0.021325, "Zambia": 0.059767, "Zimbabwe": 0.03707}, 
                "2019": {"Afghanistan": 0.001015, "Albania": 0.364726, "Algeria": 0.258235, "Andorra": 0.0, "Angola": 0.034733, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.092544, "Armenia": 0.120932, "Aruba": 0.0, "Australia": 0.119869, "Austria": 0.199385, "Azerbaijan": 0.107153, "Bahamas": 0.0, "Bahrain": 0.411394, "Bangladesh": 0.008905, "Barbados": 0.251866, "Belarus": 0.235276, "Belgium": 0.244932, "Belize": 0.0, "Benin": 0.03154, "Bermuda": 0.0, "Bhutan": 0.591717, "Bolivia": 0.130588, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.108685, "Botswana": 0.0, "Brazil": 0.093799, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.159815, "Burkina Faso": 0.040688, "Burundi": 0.002447, "Cambodia": 0.32856, "Cameroon": 0.045088, "Canada": 0.18989, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.010092, "Chile": 0.043348, "China": 0.581544, "Christmas Island": 0.0, "Colombia": 0.110321, "Comoros": 0.0, "Congo": 0.050778, "Cook Islands": 0.0, "Costa Rica": 0.14487, "Cote dIvoire": 0.0, "Croatia": 0.286727, "Cuba": 0.055961, "Curacao": 0.0, "Cyprus": 0.642244, "Czech Republic": 0.187649, "Democratic Republic of the Congo": 0.005017, "Denmark": 0.194828, "Djibouti": 0.072159, "Dominica": 0.0, "Dominican Republic": 0.199508, "Ecuador": 0.142551, "Egypt": 0.18623, "El Salvador": 0.072842, "Equatorial Guinea": 0.0, "Eritrea": 0.03101, "Estonia": 0.222665, "Ethiopia": 0.034294, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.105674, "France": 0.102304, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.093298, "Gambia": 0.0, "Georgia": 0.280227, "Germany": 0.159795, "Ghana": 0.073633, "Global": 0.208309, "Greece": 0.31778, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.080681, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.202403, "Haiti": 0.006947, "Honduras": 0.078565, "Hong Kong": 0.081453, "Hungary": 0.104675, "Iceland": 0.0, "India": 0.10387, "Indonesia": 0.111862, "International Transport": 0.0, "Iran": 0.241355, "Iraq": 0.126046, "Ireland": 0.386559, "Israel": 0.165489, "Italy": 0.132459, "Jamaica": 0.11882, "Japan": 0.201349, "Jordan": 0.164859, "Kazakhstan": 0.202629, "Kenya": 0.045381, "Kiribati": 0.0, "Kosovo": 0.18889, "Kuwait": 0.27525, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.12376, "Laos": 0.284144, "Latvia": 0.292952, "Lebanon": 0.369016, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.026427, "Libya": 0.247747, "Liechtenstein": 0.0, "Lithuania": 0.202892, "Luxembourg": 0.636791, "Macao": 0.0, "Madagascar": 0.003237, "Malawi": 0.004991, "Malaysia": 0.329156, "Maldives": 0.0, "Mali": 0.01884, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.155875, "Micronesia (Federated States of)": 0.0, "Moldova": 0.204615, "Mongolia": 0.150741, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.137738, "Mozambique": 0.033394, "Myanmar": 0.0554, "Namibia": 0.212532, "Nauru": 0.0, "Nepal": 0.130502, "Netherlands": 0.000365, "New Caledonia": 0.102967, "New Zealand": 0.082867, "Nicaragua": 0.034906, "Niger": 0.004298, "Nigeria": 0.043075, "Niue": 0.0, "North Korea": 0.083033, "North Macedonia": 0.166374, "Norway": 0.134997, "Occupied Palestinian Territory": 0.0, "Oman": 0.39458, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.069133, "Palau": 0.0, "Panama": 0.134646, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.061814, "Peru": 0.138497, "Philippines": 0.105766, "Poland": 0.199837, "Portugal": 0.216241, "Puerto Rico": 0.0, "Qatar": 0.559866, "Reunion": 0.0, "Romania": 0.196065, "Russia": 0.139329, "Rwanda": 0.012746, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.686726, "Senegal": 0.167098, "Serbia": 0.129586, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.257479, "Slovenia": 0.226049, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.093876, "South Korea": 0.481237, "South Sudan": 0.0, "Spain": 0.192317, "Sri Lanka": 0.069802, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.035982, "Suriname": 0.019706, "Swaziland": 0.0, "Sweden": 0.131418, "Switzerland": 0.201993, "Syria": 0.038231, "Taiwan": 0.231645, "Tajikistan": 0.219931, "Tanzania": 0.042158, "Thailand": 0.312789, "Timor-Leste": 0.0, "Togo": 0.102148, "Tonga": 0.0, "Trinidad and Tobago": 0.172932, "Tunisia": 0.267502, "Turkey": 0.387495, "Turkmenistan": 0.247244, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.122326, "Uganda": 0.013545, "Ukraine": 0.08928, "United Arab Emirates": 0.621808, "United Kingdom": 0.066616, "Uruguay": 0.084766, "Uzbekistan": 0.141889, "Vanuatu": 0.0, "Venezuela": 0.061247, "Viet Nam": 0.551855, "Wallis and Futuna Islands": 0.0, "Yemen": 0.021035, "Zambia": 0.052283, "Zimbabwe": 0.037097}, 
                "2020": {"Afghanistan": 0.001557, "Albania": 0.36562, "Algeria": 0.2538, "Andorra": 0.0, "Angola": 0.033616, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.077904, "Armenia": 0.121579, "Aruba": 0.0, "Australia": 0.109862, "Austria": 0.204442, "Azerbaijan": 0.106609, "Bahamas": 0.0, "Bahrain": 0.416049, "Bangladesh": 0.008804, "Barbados": 0.251405, "Belarus": 0.238993, "Belgium": 0.227845, "Belize": 0.0, "Benin": 0.03066, "Bermuda": 0.0, "Bhutan": 0.587851, "Bolivia": 0.105939, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.11007, "Botswana": 0.0, "Brazil": 0.103438, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.152726, "Burkina Faso": 0.039609, "Burundi": 0.002378, "Cambodia": 0.324771, "Cameroon": 0.043882, "Canada": 0.174847, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.009778, "Chile": 0.042762, "China": 0.602298, "Christmas Island": 0.0, "Colombia": 0.098985, "Comoros": 0.0, "Congo": 0.049607, "Cook Islands": 0.0, "Costa Rica": 0.14378, "Cote dIvoire": 0.0, "Croatia": 0.296067, "Cuba": 0.05604, "Curacao": 0.0, "Cyprus": 0.712962, "Czech Republic": 0.179569, "Democratic Republic of the Congo": 0.004858, "Denmark": 0.210613, "Djibouti": 0.071089, "Dominica": 0.0, "Dominican Republic": 0.197372, "Ecuador": 0.140567, "Egypt": 0.168749, "El Salvador": 0.072698, "Equatorial Guinea": 0.0, "Eritrea": 0.030512, "Estonia": 0.015135, "Ethiopia": 0.033396, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.103024, "France": 0.092963, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.091271, "Gambia": 0.0, "Georgia": 0.280592, "Germany": 0.160298, "Ghana": 0.072127, "Global": 0.208844, "Greece": 0.283268, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.079489, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.202797, "Haiti": 0.006858, "Honduras": 0.0773, "Hong Kong": 0.0814, "Hungary": 0.095255, "Iceland": 0.0, "India": 0.088019, "Indonesia": 0.103743, "International Transport": 0.0, "Iran": 0.273285, "Iraq": 0.123104, "Ireland": 0.357784, "Israel": 0.162663, "Italy": 0.118641, "Jamaica": 0.134861, "Japan": 0.195539, "Jordan": 0.161388, "Kazakhstan": 0.234369, "Kenya": 0.05521, "Kiribati": 0.0, "Kosovo": 0.190799, "Kuwait": 0.280342, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.12181, "Laos": 0.279976, "Latvia": 0.290362, "Lebanon": 0.376769, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.025896, "Libya": 0.244587, "Liechtenstein": 0.0, "Lithuania": 0.197387, "Luxembourg": 0.633154, "Macao": 0.0, "Madagascar": 0.003158, "Malawi": 0.004859, "Malaysia": 0.402669, "Maldives": 0.0, "Mali": 0.018257, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.163894, "Micronesia (Federated States of)": 0.0, "Moldova": 0.20625, "Mongolia": 0.147909, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.136295, "Mozambique": 0.032438, "Myanmar": 0.055003, "Namibia": 0.208907, "Nauru": 0.0, "Nepal": 0.128207, "Netherlands": 0.0, "New Caledonia": 0.102597, "New Zealand": 0.074915, "Nicaragua": 0.034431, "Niger": 0.00414, "Nigeria": 0.042036, "Niue": 0.0, "North Korea": 0.083941, "North Macedonia": 0.166619, "Norway": 0.134762, "Occupied Palestinian Territory": 0.0, "Oman": 0.399736, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.077664, "Palau": 0.0, "Panama": 0.132707, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.060986, "Peru": 0.136502, "Philippines": 0.10406, "Poland": 0.200129, "Portugal": 0.224278, "Puerto Rico": 0.0, "Qatar": 0.569368, "Reunion": 0.0, "Romania": 0.200649, "Russia": 0.141334, "Rwanda": 0.012445, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.710971, "Senegal": 0.162672, "Serbia": 0.130344, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.264473, "Slovenia": 0.22425, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.086238, "South Korea": 0.44104, "South Sudan": 0.0, "Spain": 0.172954, "Sri Lanka": 0.069591, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.035004, "Suriname": 0.019486, "Swaziland": 0.0, "Sweden": 0.12268, "Switzerland": 0.194388, "Syria": 0.03699, "Taiwan": 0.24179, "Tajikistan": 0.215179, "Tanzania": 0.040907, "Thailand": 0.306756, "Timor-Leste": 0.0, "Togo": 0.099735, "Tonga": 0.0, "Trinidad and Tobago": 0.173138, "Tunisia": 0.265029, "Turkey": 0.485084, "Turkmenistan": 0.243604, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.121115, "Uganda": 0.013101, "Ukraine": 0.09171, "United Arab Emirates": 0.616745, "United Kingdom": 0.058153, "Uruguay": 0.084749, "Uzbekistan": 0.139563, "Vanuatu": 0.0, "Venezuela": 0.062281, "Viet Nam": 0.548774, "Wallis and Futuna Islands": 0.0, "Yemen": 0.020555, "Zambia": 0.050771, "Zimbabwe": 0.036351}, 
                "2021": {"Afghanistan": 0.000306, "Albania": 0.367175, "Algeria": 0.249628, "Andorra": 0.0, "Angola": 0.032568, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.10316, "Armenia": 0.122216, "Aruba": 0.0, "Australia": 0.108798, "Austria": 0.204114, "Azerbaijan": 0.106319, "Bahamas": 0.0, "Bahrain": 0.420088, "Bangladesh": 0.008703, "Barbados": 0.250952, "Belarus": 0.240379, "Belgium": 0.22687, "Belize": 0.0, "Benin": 0.029825, "Bermuda": 0.0, "Bhutan": 0.584086, "Bolivia": 0.117536, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.111667, "Botswana": 0.0, "Brazil": 0.111013, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.154796, "Burkina Faso": 0.038573, "Burundi": 0.002315, "Cambodia": 0.321008, "Cameroon": 0.04274, "Canada": 0.173626, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.009473, "Chile": 0.042339, "China": 0.598194, "Christmas Island": 0.0, "Colombia": 0.113956, "Comoros": 0.0, "Congo": 0.048471, "Cook Islands": 0.0, "Costa Rica": 0.142919, "Cote dIvoire": 0.0, "Croatia": 0.298746, "Cuba": 0.056261, "Curacao": 0.0, "Cyprus": 0.709151, "Czech Republic": 0.179914, "Democratic Republic of the Congo": 0.004704, "Denmark": 0.209584, "Djibouti": 0.070099, "Dominica": 0.0, "Dominican Republic": 0.195274, "Ecuador": 0.138915, "Egypt": 0.147861, "El Salvador": 0.072451, "Equatorial Guinea": 0.0, "Eritrea": 0.029969, "Estonia": 0.015144, "Ethiopia": 0.032537, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.102902, "France": 0.092889, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.089376, "Gambia": 0.0, "Georgia": 0.281184, "Germany": 0.158664, "Ghana": 0.070694, "Global": 0.211472, "Greece": 0.285082, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.07838, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.200941, "Haiti": 0.006773, "Honduras": 0.076122, "Hong Kong": 0.08147, "Hungary": 0.095655, "Iceland": 0.0, "India": 0.105858, "Indonesia": 0.10461, "International Transport": 0.0, "Iran": 0.256188, "Iraq": 0.120342, "Ireland": 0.354884, "Israel": 0.160057, "Italy": 0.119162, "Jamaica": 0.142247, "Japan": 0.190903, "Jordan": 0.15821, "Kazakhstan": 0.231717, "Kenya": 0.067605, "Kiribati": 0.0, "Kosovo": 0.191797, "Kuwait": 0.287619, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.119891, "Laos": 0.275992, "Latvia": 0.293946, "Lebanon": 0.381504, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.025368, "Libya": 0.241634, "Liechtenstein": 0.0, "Lithuania": 0.199768, "Luxembourg": 0.624318, "Macao": 0.0, "Madagascar": 0.003082, "Malawi": 0.004734, "Malaysia": 0.398683, "Maldives": 0.0, "Mali": 0.01769, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.176309, "Micronesia (Federated States of)": 0.0, "Moldova": 0.207822, "Mongolia": 0.145547, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.134869, "Mozambique": 0.031529, "Myanmar": 0.054619, "Namibia": 0.205518, "Nauru": 0.0, "Nepal": 0.125277, "Netherlands": 0.000362, "New Caledonia": 0.102099, "New Zealand": 0.073914, "Nicaragua": 0.033955, "Niger": 0.00399, "Nigeria": 0.041037, "Niue": 0.0, "North Korea": 0.095506, "North Macedonia": 0.167232, "Norway": 0.129789, "Occupied Palestinian Territory": 0.0, "Oman": 0.401763, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.080469, "Palau": 0.0, "Panama": 0.130972, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.060212, "Peru": 0.134839, "Philippines": 0.102516, "Poland": 0.195685, "Portugal": 0.224454, "Puerto Rico": 0.0, "Qatar": 0.58465, "Reunion": 0.0, "Romania": 0.201827, "Russia": 0.151071, "Rwanda": 0.012153, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.797994, "Senegal": 0.158425, "Serbia": 0.131438, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.264913, "Slovenia": 0.224063, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.085381, "South Korea": 0.457341, "South Sudan": 0.0, "Spain": 0.181289, "Sri Lanka": 0.069405, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.034071, "Suriname": 0.019298, "Swaziland": 0.0, "Sweden": 0.12153, "Switzerland": 0.193208, "Syria": 0.036033, "Taiwan": 0.245175, "Tajikistan": 0.210614, "Tanzania": 0.039695, "Thailand": 0.295402, "Timor-Leste": 0.0, "Togo": 0.097401, "Tonga": 0.0, "Trinidad and Tobago": 0.172285, "Tunisia": 0.262842, "Turkey": 0.523674, "Turkmenistan": 0.240093, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.122265, "Uganda": 0.012687, "Ukraine": 0.10157, "United Arab Emirates": 0.611617, "United Kingdom": 0.057961, "Uruguay": 0.084819, "Uzbekistan": 0.137291, "Vanuatu": 0.0, "Venezuela": 0.062923, "Viet Nam": 0.555266, "Wallis and Futuna Islands": 0.0, "Yemen": 0.02012, "Zambia": 0.049349, "Zimbabwe": 0.035615}
            }}, 
        {id: 'flaring', metadata: {
                "2017": {"Afghanistan": 0.0, "Albania": 0.010682, "Algeria": 0.402316, "Andorra": 0.0, "Angola": 0.236512, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.021787, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.604361, "Austria": 0.015714, "Azerbaijan": 0.02824, "Bahamas": 0.0, "Bahrain": 0.169865, "Bangladesh": 7.5e-05, "Barbados": 0.091867, "Belarus": 0.000629, "Belgium": 0.008691, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.004345, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.083955, "British Virgin Islands": 0.0, "Brunei Darussalam": 1.300912, "Bulgaria": 0.122168, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.080415, "Canada": 0.405826, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.029106, "Chile": 0.003147, "China": 0.002074, "Christmas Island": 0.0, "Colombia": 0.021376, "Comoros": 0.0, "Congo": 0.402274, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.005696, "Croatia": 0.074322, "Cuba": 0.000652, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.012093, "Democratic Republic of the Congo": 0.0, "Denmark": 0.042075, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.120299, "Egypt": 0.043137, "El Salvador": 0.0, "Equatorial Guinea": 0.395972, "Eritrea": 0.0, "Estonia": 2.4e-05, "Ethiopia": 2.7e-05, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.026613, "France": 0.043903, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.320111, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.027436, "Ghana": 0.020106, "Global": 0.051579, "Greece": 0.000721, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.008008, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.014562, "Iceland": 0.426266, "India": 0.002085, "Indonesia": 0.016586, "International Transport": 0.0, "Iran": 0.393116, "Iraq": 0.846641, "Ireland": 0.000998, "Israel": 0.000611, "Italy": 0.039185, "Jamaica": 0.0, "Japan": 0.003443, "Jordan": 0.0, "Kazakhstan": 0.973016, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.360462, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 8e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 1.152023, "Liechtenstein": 1e-05, "Lithuania": 0.0772, "Luxembourg": 7e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.166167, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.017955, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.057988, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.001961, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.000785, "Myanmar": 0.001297, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.064964, "New Caledonia": 0.0, "New Zealand": 0.229472, "Nicaragua": 0.0, "Niger": 0.003392, "Nigeria": 0.074291, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.209384, "Occupied Palestinian Territory": 0.0, "Oman": 1.024368, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.003151, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.010342, "Paraguay": 0.0, "Peru": 0.005598, "Philippines": 0.002326, "Poland": 0.121014, "Portugal": 0.111001, "Puerto Rico": 0.0, "Qatar": 0.717113, "Reunion": 0.0, "Romania": 0.039377, "Russia": 0.288246, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.127286, "Senegal": 0.000749, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.004172, "Slovenia": 0.06632, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000525, "South Korea": 0.0, "South Sudan": 0.0, "Spain": 0.082069, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0177, "Suriname": 0.006236, "Swaziland": 0.0, "Sweden": 0.079604, "Switzerland": 0.003688, "Syria": 0.117915, "Taiwan": 0.001883, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.009874, "Timor-Leste": 0.067784, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.250009, "Tunisia": 0.044758, "Turkey": 0.001913, "Turkmenistan": 0.524593, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.179645, "Uganda": 0.0, "Ukraine": 0.051592, "United Arab Emirates": 0.180184, "United Kingdom": 0.065107, "Uruguay": 0.0, "Uzbekistan": 0.049972, "Vanuatu": 0.0, "Venezuela": 0.430411, "Viet Nam": 0.019537, "Wallis and Futuna Islands": 0.0, "Yemen": 0.025483, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2018": {"Afghanistan": 0.0, "Albania": 0.004816, "Algeria": 0.390946, "Andorra": 0.0, "Angola": 0.167915, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.030594, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.677588, "Austria": 0.014394, "Azerbaijan": 0.036474, "Bahamas": 0.0, "Bahrain": 0.095925, "Bangladesh": 0.000116, "Barbados": 0.06569, "Belarus": 0.000648, "Belgium": 0.01059, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.004414, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.083291, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.948541, "Bulgaria": 0.099959, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.08012, "Canada": 0.419857, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.025451, "Chile": 0.004745, "China": 0.002365, "Christmas Island": 0.0, "Colombia": 0.021207, "Comoros": 0.0, "Congo": 0.546918, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.00382, "Croatia": 0.068414, "Cuba": 0.002357, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.009876, "Democratic Republic of the Congo": 0.0, "Denmark": 0.040329, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.095864, "Egypt": 0.0411, "El Salvador": 0.0, "Equatorial Guinea": 0.411898, "Eritrea": 0.0, "Estonia": 2.6e-05, "Ethiopia": 7e-05, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.01646, "France": 0.045199, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.159307, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.024217, "Ghana": 0.011367, "Global": 0.053634, "Greece": 0.001032, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.00667, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.015057, "Iceland": 0.443303, "India": 0.001819, "Indonesia": 0.014777, "International Transport": 0.0, "Iran": 0.378882, "Iraq": 0.822903, "Ireland": 4.2e-05, "Israel": 5.6e-05, "Italy": 0.038331, "Jamaica": 0.0, "Japan": 0.003354, "Jordan": 0.0, "Kazakhstan": 0.904091, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.379089, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 5e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 1.358856, "Liechtenstein": 1e-05, "Lithuania": 0.088173, "Luxembourg": 6.7e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.123926, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.059352, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.00079, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.000445, "Myanmar": 0.000862, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.063705, "New Caledonia": 0.0, "New Zealand": 0.205055, "Nicaragua": 0.0, "Niger": 0.00272, "Nigeria": 0.071441, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.203113, "Occupied Palestinian Territory": 0.000477, "Oman": 1.011165, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.002616, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.009463, "Paraguay": 0.0, "Peru": 0.005614, "Philippines": 0.001893, "Poland": 0.125526, "Portugal": 0.101833, "Puerto Rico": 0.0, "Qatar": 0.67764, "Reunion": 0.0, "Romania": 0.043889, "Russia": 0.339423, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.123856, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.003622, "Slovenia": 0.062183, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000996, "South Korea": 0.0, "South Sudan": 0.0, "Spain": 0.081082, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.016294, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.081186, "Switzerland": 0.003276, "Syria": 0.069282, "Taiwan": 0.002424, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.008622, "Timor-Leste": 0.107436, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.241961, "Tunisia": 0.046047, "Turkey": 0.002107, "Turkmenistan": 0.461902, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.219145, "Uganda": 0.0, "Ukraine": 0.053982, "United Arab Emirates": 0.178767, "United Kingdom": 0.067382, "Uruguay": 0.0, "Uzbekistan": 0.045782, "Vanuatu": 0.0, "Venezuela": 0.52283, "Viet Nam": 0.014908, "Wallis and Futuna Islands": 0.0, "Yemen": 0.030162, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2019": {"Afghanistan": 0.0, "Albania": 0.001557, "Algeria": 0.397461, "Andorra": 0.0, "Angola": 0.135106, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.039571, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.796589, "Austria": 0.013317, "Azerbaijan": 0.040921, "Bahamas": 0.0, "Bahrain": 0.214713, "Bangladesh": 0.000161, "Barbados": 0.065387, "Belarus": 0.000655, "Belgium": 0.010087, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.004618, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.082655, "British Virgin Islands": 0.0, "Brunei Darussalam": 1.315813, "Bulgaria": 0.117263, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.076151, "Canada": 0.421818, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.019817, "Chile": 0.002414, "China": 0.002677, "Christmas Island": 0.0, "Colombia": 0.019994, "Comoros": 0.0, "Congo": 0.565252, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.003545, "Croatia": 0.069481, "Cuba": 0.002724, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.007714, "Democratic Republic of the Congo": 0.0, "Denmark": 0.033596, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.099614, "Egypt": 0.041315, "El Salvador": 0.0, "Equatorial Guinea": 0.344034, "Eritrea": 0.0, "Estonia": 2.4e-05, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.011798, "France": 0.038896, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.221656, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.024395, "Ghana": 0.008267, "Global": 0.056569, "Greece": 0.000855, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.006796, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.015294, "Iceland": 0.4521, "India": 0.001774, "Indonesia": 0.014035, "International Transport": 0.0, "Iran": 0.299933, "Iraq": 0.810296, "Ireland": 5.8e-05, "Israel": 0.0, "Italy": 0.046148, "Jamaica": 0.0, "Japan": 0.002933, "Jordan": 7.6e-05, "Kazakhstan": 0.783724, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.309442, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 5e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 1.466449, "Liechtenstein": 1e-05, "Lithuania": 0.082111, "Luxembourg": 6.6e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.118348, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.067393, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 6.4e-05, "Myanmar": 0.000812, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.061166, "New Caledonia": 0.0, "New Zealand": 0.18409, "Nicaragua": 0.0, "Niger": 0.002391, "Nigeria": 0.071755, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.178936, "Occupied Palestinian Territory": 0.000157, "Oman": 1.010811, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.002072, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.006722, "Paraguay": 0.0, "Peru": 0.003411, "Philippines": 0.001431, "Poland": 0.112842, "Portugal": 0.110129, "Puerto Rico": 0.0, "Qatar": 0.617509, "Reunion": 0.0, "Romania": 0.044132, "Russia": 0.4299, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.110219, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.003498, "Slovenia": 0.058973, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000718, "South Korea": 0.0, "South Sudan": 0.0, "Spain": 0.077335, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.012096, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.05222, "Switzerland": 0.003889, "Syria": 0.087143, "Taiwan": 0.001388, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.008293, "Timor-Leste": 0.062953, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.228897, "Tunisia": 0.03847, "Turkey": 0.00219, "Turkmenistan": 0.410409, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.264367, "Uganda": 0.0, "Ukraine": 0.053269, "United Arab Emirates": 0.17738, "United Kingdom": 0.06414, "Uruguay": 0.0, "Uzbekistan": 0.035547, "Vanuatu": 0.0, "Venezuela": 0.619152, "Viet Nam": 0.015329, "Wallis and Futuna Islands": 0.0, "Yemen": 0.042575, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2020": {"Afghanistan": 0.0, "Albania": 6.6e-05, "Algeria": 0.403426, "Andorra": 0.0, "Angola": 0.104963, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.04411, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.672876, "Austria": 0.012265, "Azerbaijan": 0.024701, "Bahamas": 0.0, "Bahrain": 0.300501, "Bangladesh": 0.000167, "Barbados": 0.065267, "Belarus": 0.000647, "Belgium": 0.008775, "Belize": 0.003666, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.007552, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.082107, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.647003, "Bulgaria": 0.098038, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.063902, "Canada": 0.423793, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.016908, "Chile": 0.001442, "China": 0.003592, "Christmas Island": 0.0, "Colombia": 0.014393, "Comoros": 0.0, "Congo": 0.589795, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.003315, "Croatia": 0.070342, "Cuba": 0.002394, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.004991, "Democratic Republic of the Congo": 0.0, "Denmark": 0.021673, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.110769, "Egypt": 0.041284, "El Salvador": 0.0, "Equatorial Guinea": 0.509316, "Eritrea": 0.0, "Estonia": 2.1e-05, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.013806, "France": 0.033048, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.203744, "Gambia": 0.0, "Georgia": 0.001273, "Germany": 0.02178, "Ghana": 0.020639, "Global": 0.051981, "Greece": 0.000492, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.006526, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.662503, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.016623, "Iceland": 0.476923, "India": 0.002009, "Indonesia": 0.012966, "International Transport": 0.0, "Iran": 0.285543, "Iraq": 0.767506, "Ireland": 6.8e-05, "Israel": 0.0, "Italy": 0.035504, "Jamaica": 0.0, "Japan": 0.002751, "Jordan": 3.8e-05, "Kazakhstan": 0.887491, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.318584, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 6e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.698915, "Liechtenstein": 6e-06, "Lithuania": 0.064395, "Luxembourg": 5.9e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.136364, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.086049, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 5.1e-05, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 1e-05, "Myanmar": 0.000891, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.053426, "New Caledonia": 0.0, "New Zealand": 0.15426, "Nicaragua": 0.0, "Niger": 0.002874, "Nigeria": 0.064926, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.15428, "Occupied Palestinian Territory": 0.0, "Oman": 1.02402, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.001998, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.010536, "Paraguay": 0.0, "Peru": 0.004677, "Philippines": 0.001329, "Poland": 0.109946, "Portugal": 0.098344, "Puerto Rico": 0.0, "Qatar": 0.686234, "Reunion": 0.0, "Romania": 0.040833, "Russia": 0.404634, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.118246, "Senegal": 0.0, "Serbia": 5.9e-05, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.002413, "Slovenia": 0.059073, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000931, "South Korea": 6e-06, "South Sudan": 0.0, "Spain": 0.075127, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.010216, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.042912, "Switzerland": 0.003056, "Syria": 0.088485, "Taiwan": 0.005664, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.008484, "Timor-Leste": 0.062006, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.247683, "Tunisia": 0.036095, "Turkey": 0.00232, "Turkmenistan": 0.501492, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.201476, "Uganda": 0.0, "Ukraine": 0.052471, "United Arab Emirates": 0.175936, "United Kingdom": 0.051337, "Uruguay": 0.0, "Uzbekistan": 0.030889, "Vanuatu": 0.0, "Venezuela": 0.566745, "Viet Nam": 0.013286, "Wallis and Futuna Islands": 0.0, "Yemen": 0.050785, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2021": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.347072, "Andorra": 0.0, "Angola": 0.098133, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.051346, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.666359, "Austria": 0.012245, "Azerbaijan": 0.024515, "Bahamas": 0.0, "Bahrain": 0.174386, "Bangladesh": 0.000288, "Barbados": 0.065149, "Belarus": 0.000651, "Belgium": 0.008737, "Belize": 0.011984, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.005078, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.081675, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.910255, "Bulgaria": 0.099366, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.001429, "Cameroon": 0.053969, "Canada": 0.420835, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.019582, "Chile": 0.000596, "China": 0.00328, "Christmas Island": 0.0, "Colombia": 0.011953, "Comoros": 0.0, "Congo": 0.490366, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.001034, "Croatia": 0.070979, "Cuba": 0.006452, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.005001, "Democratic Republic of the Congo": 0.0, "Denmark": 0.021568, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.130475, "Egypt": 0.035831, "El Salvador": 0.0, "Equatorial Guinea": 0.292893, "Eritrea": 0.0, "Estonia": 2.1e-05, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.013685, "France": 0.033295, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.07477, "Gambia": 0.0, "Georgia": 0.00062, "Germany": 0.02167, "Ghana": 0.034312, "Global": 0.052663, "Greece": 0.000495, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.005329, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.307084, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.016692, "Iceland": 0.472201, "India": 0.001969, "Indonesia": 0.011504, "International Transport": 0.0, "Iran": 0.371554, "Iraq": 0.768708, "Ireland": 6.7e-05, "Israel": 0.000133, "Italy": 0.03566, "Jamaica": 0.0, "Japan": 0.002765, "Jordan": 8.8e-05, "Kazakhstan": 0.877448, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.319538, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 6e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 1.674357, "Liechtenstein": 6e-06, "Lithuania": 0.065172, "Luxembourg": 5.8e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.112102, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.096579, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.000734, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.052863, "New Caledonia": 0.0, "New Zealand": 0.152197, "Nicaragua": 0.0, "Niger": 0.003689, "Nigeria": 0.058381, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.281113, "Occupied Palestinian Territory": 0.0, "Oman": 1.029214, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.001909, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.012435, "Paraguay": 0.0, "Peru": 0.003597, "Philippines": 0.00143, "Poland": 0.110292, "Portugal": 0.098422, "Puerto Rico": 0.0, "Qatar": 0.703512, "Reunion": 0.0, "Romania": 0.041073, "Russia": 0.406069, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.108627, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.002417, "Slovenia": 0.059024, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000882, "South Korea": 0.000118, "South Sudan": 0.0, "Spain": 0.074932, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.009983, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.04251, "Switzerland": 0.003037, "Syria": 0.091758, "Taiwan": 0.005655, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.00777, "Timor-Leste": 0.061023, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.182644, "Tunisia": 0.041749, "Turkey": 0.002303, "Turkmenistan": 0.346794, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.200845, "Uganda": 0.0, "Ukraine": 0.052927, "United Arab Emirates": 0.174473, "United Kingdom": 0.051632, "Uruguay": 0.0, "Uzbekistan": 0.025863, "Vanuatu": 0.0, "Venezuela": 0.545925, "Viet Nam": 0.011096, "Wallis and Futuna Islands": 0.0, "Yemen": 0.053605, "Zambia": 0.0, "Zimbabwe": 0.0}
            }}, 
        {id: 'other', metadata: {
                "2017": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.158558, "Austria": 0.136409, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.118785, "Belgium": 0.181338, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.030656, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.178516, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.060465, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.120355, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.035605, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.01327, "Czech Republic": 0.164196, "Democratic Republic of the Congo": 0.0, "Denmark": 0.066344, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.063915, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.132076, "France": 0.058762, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.103908, "Ghana": 0.0, "Global": 0.039776, "Greece": 0.052516, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.05957, "Iceland": 0.009448, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.111696, "Israel": 0.0, "Italy": 0.051615, "Jamaica": 0.0, "Japan": 0.066887, "Jordan": 0.0, "Kazakhstan": 0.180423, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.017702, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.018587, "Luxembourg": 0.128843, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.000608, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.080364, "New Caledonia": 0.0, "New Zealand": 0.127787, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.100049, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.123514, "Portugal": 0.084947, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.066272, "Russia": 0.111781, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.167793, "Slovenia": 0.048448, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.198867, "South Sudan": 0.0, "Spain": 0.065195, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.062291, "Switzerland": 0.020769, "Syria": 0.0, "Taiwan": 0.038242, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.085295, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.084423, "Uganda": 0.0, "Ukraine": 0.059478, "United Arab Emirates": 0.0, "United Kingdom": 0.045097, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2018": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.156082, "Austria": 0.136131, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.106598, "Belgium": 0.178088, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.030414, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.17633, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.058445, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.121052, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.036611, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.01647, "Czech Republic": 0.17077, "Democratic Republic of the Congo": 0.0, "Denmark": 0.069852, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.063948, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.121326, "France": 0.062963, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.105272, "Ghana": 0.0, "Global": 0.039366, "Greece": 0.055314, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.059484, "Iceland": 0.011561, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.132291, "Israel": 0.0, "Italy": 0.052752, "Jamaica": 0.0, "Japan": 0.066352, "Jordan": 0.0, "Kazakhstan": 0.154344, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.023282, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.013774, "Luxembourg": 0.127445, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.000415, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.075613, "New Caledonia": 0.0, "New Zealand": 0.126569, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.103345, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.125559, "Portugal": 0.090575, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.067033, "Russia": 0.12084, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.172042, "Slovenia": 0.05075, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.199575, "South Sudan": 0.0, "Spain": 0.066052, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.054086, "Switzerland": 0.020406, "Syria": 0.0, "Taiwan": 0.043201, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.082036, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.074349, "Uganda": 0.0, "Ukraine": 0.063134, "United Arab Emirates": 0.0, "United Kingdom": 0.045712, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2019": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.152544, "Austria": 0.130881, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.102645, "Belgium": 0.16182, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.030182, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.169888, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.057222, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.124665, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.034602, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.020488, "Czech Republic": 0.157356, "Democratic Republic of the Congo": 0.0, "Denmark": 0.056536, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.059684, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.106145, "France": 0.061252, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.100533, "Ghana": 0.0, "Global": 0.03949, "Greece": 0.054025, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.055634, "Iceland": 0.018302, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.103956, "Israel": 0.0, "Italy": 0.050784, "Jamaica": 0.0, "Japan": 0.063421, "Jordan": 0.0, "Kazakhstan": 0.182641, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.028177, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.01285, "Luxembourg": 0.126662, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.000363, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.068105, "New Caledonia": 0.0, "New Zealand": 0.132979, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.105081, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.126453, "Portugal": 0.088434, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.060227, "Russia": 0.114979, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.162341, "Slovenia": 0.050108, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.196559, "South Sudan": 0.0, "Spain": 0.064074, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.050823, "Switzerland": 0.019557, "Syria": 0.0, "Taiwan": 0.041762, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.07445, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.078699, "Uganda": 0.0, "Ukraine": 0.060848, "United Arab Emirates": 0.0, "United Kingdom": 0.047808, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2020": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.145626, "Austria": 0.12617, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.100998, "Belgium": 0.140655, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.029982, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.159939, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.054087, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.120384, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.037414, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.016026, "Czech Republic": 0.142754, "Democratic Republic of the Congo": 0.0, "Denmark": 0.069133, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.049588, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.104496, "France": 0.055629, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.094072, "Ghana": 0.0, "Global": 0.037789, "Greece": 0.036593, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.049722, "Iceland": 0.016873, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.108571, "Israel": 0.0, "Italy": 0.046263, "Jamaica": 0.0, "Japan": 0.060362, "Jordan": 0.0, "Kazakhstan": 0.201543, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.037745, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.01057, "Luxembourg": 0.078105, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.00037, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.063131, "New Caledonia": 0.0, "New Zealand": 0.112657, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.099631, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.132115, "Portugal": 0.081431, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.04476, "Russia": 0.11225, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.143683, "Slovenia": 0.049433, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.196404, "South Sudan": 0.0, "Spain": 0.056693, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.051291, "Switzerland": 0.018815, "Syria": 0.0, "Taiwan": 0.041685, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.07484, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.075405, "Uganda": 0.0, "Ukraine": 0.063153, "United Arab Emirates": 0.0, "United Kingdom": 0.040419, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}, 
                "2021": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.144215, "Austria": 0.125968, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.101584, "Belgium": 0.140053, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.029824, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.162107, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.053709, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.120303, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.037753, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.015941, "Czech Republic": 0.143028, "Democratic Republic of the Congo": 0.0, "Denmark": 0.068796, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.049616, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.10358, "France": 0.056044, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.093593, "Ghana": 0.0, "Global": 0.037443, "Greece": 0.036827, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.049931, "Iceland": 0.016706, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.107691, "Israel": 0.0, "Italy": 0.046466, "Jamaica": 0.0, "Japan": 0.060669, "Jordan": 0.0, "Kazakhstan": 0.199262, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.038211, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.010698, "Luxembourg": 0.077015, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.000362, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.062465, "New Caledonia": 0.0, "New Zealand": 0.111151, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.068484, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.132531, "Portugal": 0.081495, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.045023, "Russia": 0.112648, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.143922, "Slovenia": 0.049391, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.196459, "South Sudan": 0.0, "Spain": 0.056546, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.05081, "Switzerland": 0.0187, "Syria": 0.0, "Taiwan": 0.041618, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.074275, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.075169, "Uganda": 0.0, "Ukraine": 0.063701, "United Arab Emirates": 0.0, "United Kingdom": 0.040652, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}
            }}
        ],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
};
console.log(data_pie);



// config 
const config4 = {
    type: 'bar',
    data: data_pie,
    options: {
      parsing: {
        xAxisKey: 'id',
        yAxisKey: 'metadata.2017.Afghanistan'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
};
//console.log(configpie)

// render init block
const barChart2 = new Chart(
    document.getElementById('barChart2'),
    config4
);
//console.log(config4)
// pie
const data_pie2 = {
  labels: ['coal', 'oil', 'gas', 'cement', 'flaring', 'other'],
  datasets: [{
    label: 'Emission Amounts',
    data: [
      {id: 'coal', metadata: {
              "2017": {"Afghanistan": 0.096731, "Albania": 0.095372, "Algeria": 0.019328, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.09714, "Armenia": 0.001286, "Aruba": 0.0, "Australia": 7.194136, "Austria": 1.593994, "Azerbaijan": 0.000364, "Bahamas": 0.009199, "Bahrain": 0.0, "Bangladesh": 0.044203, "Barbados": 0.0, "Belarus": 0.399908, "Belgium": 1.168967, "Belize": 0.0, "Benin": 0.017386, "Bermuda": 0.0, "Bhutan": 0.503962, "Bolivia": 0.002243, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 4.784465, "Botswana": 1.771102, "Brazil": 0.322879, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 3.59125, "Burkina Faso": 0.0, "Burundi": 0.001971, "Cambodia": 0.228209, "Cameroon": 0.0, "Canada": 1.988497, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.51013, "China": 5.079373, "Christmas Island": 0.0, "Colombia": 0.30373, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.003669, "Cote dIvoire": 0.0, "Croatia": 0.370012, "Cuba": 0.001293, "Curacao": 0.0, "Cyprus": 0.009676, "Czech Republic": 6.104261, "Democratic Republic of the Congo": 0.0, "Denmark": 1.089858, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.313891, "Ecuador": 0.0, "Egypt": 0.063929, "El Salvador": 0.000584, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 10.532481, "Ethiopia": 0.014257, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 3.102142, "France": 0.620315, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.30696, "Germany": 3.761154, "Ghana": 0.0, "Global": 1.908857, "Greece": 2.43348, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.145937, "Guatemala": 0.235814, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.00038, "Hong Kong": 3.18546, "Hungary": 1.026428, "Iceland": 2.017334, "India": 1.152705, "Indonesia": 0.835895, "International Transport": 0.0, "Iran": 0.055715, "Iraq": 0.0, "Ireland": 1.649198, "Israel": 2.266644, "Italy": 0.700615, "Jamaica": 0.076975, "Japan": 3.619716, "Jordan": 0.056671, "Kazakhstan": 10.262832, "Kenya": 0.025082, "Kiribati": 0.0, "Kosovo": 3.235183, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.553677, "Laos": 2.139492, "Latvia": 0.085557, "Lebanon": 0.102557, "Leeward Islands": 0.0, "Lesotho": 0.855816, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.275797, "Luxembourg": 0.473888, "Macao": 0.0, "Madagascar": 0.055724, "Malawi": 0.011711, "Malaysia": 2.458378, "Maldives": 0.0, "Mali": 0.0, "Malta": 2.5e-05, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.378166, "Mayotte": 0.0, "Mexico": 0.395067, "Micronesia (Federated States of)": 0.0, "Moldova": 0.126722, "Mongolia": 9.712723, "Montenegro": 1.900253, "Montserrat": 0.0, "Morocco": 0.475015, "Mozambique": 0.000898, "Myanmar": 0.029711, "Namibia": 0.03719, "Nauru": 0.0, "Nepal": 0.106344, "Netherlands": 2.094014, "New Caledonia": 9.638409, "New Zealand": 0.983785, "Nicaragua": 0.0, "Niger": 0.015533, "Nigeria": 0.000701, "Niue": 0.0, "North Korea": 1.810422, "North Macedonia": 1.805995, "Norway": 0.690265, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.189384, "Palau": 0.0, "Panama": 0.056373, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.000577, "Peru": 0.088912, "Philippines": 0.577412, "Poland": 5.283756, "Portugal": 1.203639, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 2.19061, "Romania": 1.108657, "Russia": 2.645015, "Rwanda": 0.000599, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.094997, "Serbia": 4.155716, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.670575, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 2.626085, "Slovenia": 2.338318, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.530899, "South Korea": 6.555194, "South Sudan": 0.0, "Spain": 1.150449, "Sri Lanka": 0.26611, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.140019, "Sweden": 0.842477, "Switzerland": 0.059897, "Syria": 0.000193, "Taiwan": 6.871645, "Tajikistan": 0.443759, "Tanzania": 0.026568, "Thailand": 0.885262, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.923962, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 3.9676, "Uganda": 0.0, "Ukraine": 2.521122, "United Arab Emirates": 0.890321, "United Kingdom": 0.592279, "Uruguay": 0.001071, "Uzbekistan": 0.209325, "Vanuatu": 0.0, "Venezuela": 0.01019, "Viet Nam": 1.15089, "Wallis and Futuna Islands": 0.0, "Yemen": 0.010247, "Zambia": 0.109991, "Zimbabwe": 0.400001}, 
              "2018": {"Afghanistan": 0.104866, "Albania": 0.164287, "Algeria": 0.031722, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.098087, "Armenia": 0.001292, "Aruba": 0.0, "Australia": 6.780453, "Austria": 1.390778, "Azerbaijan": 0.000361, "Bahamas": 0.009117, "Bahrain": 0.0, "Bangladesh": 0.049964, "Barbados": 0.0, "Belarus": 0.408726, "Belgium": 1.167562, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.556209, "Bolivia": 0.001894, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 4.882366, "Botswana": 1.886249, "Brazil": 0.313279, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 3.103544, "Burkina Faso": 0.0, "Burundi": 0.001585, "Cambodia": 0.239614, "Cameroon": 0.0, "Canada": 1.641559, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.446348, "China": 5.163049, "Christmas Island": 0.0, "Colombia": 0.278312, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.348175, "Cuba": 0.001294, "Curacao": 0.0, "Cyprus": 0.044182, "Czech Republic": 6.032838, "Democratic Republic of the Congo": 0.0, "Denmark": 1.103162, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.30529, "Ecuador": 0.0, "Egypt": 0.125382, "El Salvador": 0.000584, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 9.87993, "Ethiopia": 0.010025, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 3.249484, "France": 0.543988, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.320524, "Germany": 3.566771, "Ghana": 0.0, "Global": 1.919213, "Greece": 2.337101, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.141491, "Guatemala": 0.274145, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 3.262633, "Hungary": 0.966311, "Iceland": 2.025887, "India": 1.225417, "Indonesia": 0.98186, "International Transport": 0.0, "Iran": 0.057474, "Iraq": 0.0, "Ireland": 1.314335, "Israel": 2.143984, "Italy": 0.658418, "Jamaica": 0.082093, "Japan": 3.500543, "Jordan": 0.075663, "Kazakhstan": 10.291659, "Kenya": 0.036814, "Kiribati": 0.0, "Kosovo": 3.312672, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.649377, "Laos": 2.169905, "Latvia": 0.101795, "Lebanon": 0.105287, "Leeward Islands": 0.0, "Lesotho": 0.765133, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.298627, "Luxembourg": 0.439529, "Macao": 0.0, "Madagascar": 0.046267, "Malawi": 0.012767, "Malaysia": 2.597201, "Maldives": 0.0, "Mali": 0.0, "Malta": 2.4e-05, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.309601, "Mayotte": 0.0, "Mexico": 0.381516, "Micronesia (Federated States of)": 0.0, "Moldova": 0.097961, "Mongolia": 12.940998, "Montenegro": 2.251359, "Montserrat": 0.0, "Morocco": 0.543296, "Mozambique": 0.002118, "Myanmar": 0.061716, "Namibia": 0.010661, "Nauru": 0.0, "Nepal": 0.152181, "Netherlands": 1.882014, "New Caledonia": 8.765573, "New Zealand": 1.084898, "Nicaragua": 0.0, "Niger": 0.014444, "Nigeria": 0.000646, "Niue": 0.0, "North Korea": 1.657494, "North Macedonia": 1.611377, "Norway": 0.663891, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.213355, "Palau": 0.0, "Panama": 0.139818, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.001707, "Peru": 0.077713, "Philippines": 0.597815, "Poland": 5.161461, "Portugal": 1.009599, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 2.158386, "Romania": 1.055481, "Russia": 2.721498, "Rwanda": 0.00117, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.145149, "Serbia": 3.982492, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.353483, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 2.608226, "Slovenia": 2.275529, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.193131, "South Korea": 6.586068, "South Sudan": 0.0, "Spain": 1.027229, "Sri Lanka": 0.256155, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.138928, "Sweden": 0.791797, "Switzerland": 0.056252, "Syria": 0.00019, "Taiwan": 6.693304, "Tajikistan": 0.459008, "Tanzania": 0.02869, "Thailand": 0.851829, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.968848, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 3.782144, "Uganda": 0.0, "Ukraine": 2.712088, "United Arab Emirates": 0.796701, "United Kingdom": 0.50096, "Uruguay": 0.001069, "Uzbekistan": 0.29764, "Vanuatu": 0.0, "Venezuela": 0.004177, "Viet Nam": 1.420792, "Wallis and Futuna Islands": 0.0, "Yemen": 0.010115, "Zambia": 0.153866, "Zimbabwe": 0.476859}, 
              "2019": {"Afghanistan": 0.104708, "Albania": 0.112194, "Algeria": 0.025653, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.047903, "Armenia": 0.003897, "Aruba": 0.0, "Australia": 6.486179, "Austria": 1.464565, "Azerbaijan": 0.000358, "Bahamas": 0.009057, "Bahrain": 0.0, "Bangladesh": 0.090647, "Barbados": 0.0, "Belarus": 0.423781, "Belgium": 1.146097, "Belize": 0.0, "Benin": 0.022061, "Bermuda": 0.0, "Bhutan": 0.549033, "Bolivia": 0.002178, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 4.562677, "Botswana": 1.544295, "Brazil": 0.292223, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.828074, "Bulgaria": 2.944635, "Burkina Faso": 0.0, "Burundi": 0.004011, "Cambodia": 0.272634, "Cameroon": 0.0, "Canada": 1.554416, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.629087, "China": 5.305119, "Christmas Island": 0.0, "Colombia": 0.367137, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.406207, "Cuba": 0.000324, "Curacao": 0.0, "Cyprus": 0.055379, "Czech Republic": 5.452037, "Democratic Republic of the Congo": 0.0, "Denmark": 0.619126, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.300005, "Ecuador": 0.0, "Egypt": 0.095851, "El Salvador": 0.000583, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 5.859459, "Ethiopia": 0.010565, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 2.762942, "France": 0.454883, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.258465, "Germany": 2.887455, "Ghana": 0.0, "Global": 1.896468, "Greece": 1.690381, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.1717, "Guatemala": 0.263667, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 3.118944, "Hungary": 0.837731, "Iceland": 1.895957, "India": 1.212956, "Indonesia": 1.169958, "International Transport": 0.0, "Iran": 0.043089, "Iraq": 0.0, "Ireland": 0.927961, "Israel": 2.092518, "Italy": 0.513293, "Jamaica": 0.095103, "Japan": 3.436238, "Jordan": 0.073289, "Kazakhstan": 9.392327, "Kenya": 0.031863, "Kiribati": 0.0, "Kosovo": 3.523773, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.501192, "Laos": 1.969665, "Latvia": 0.086722, "Lebanon": 0.108363, "Leeward Islands": 0.0, "Lesotho": 0.750677, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.281089, "Luxembourg": 0.442609, "Macao": 0.0, "Madagascar": 0.050878, "Malawi": 0.011431, "Malaysia": 2.593079, "Maldives": 0.0, "Mali": 0.0, "Malta": 2.2e-05, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.204111, "Mayotte": 0.0, "Mexico": 0.361897, "Micronesia (Federated States of)": 0.0, "Moldova": 0.117912, "Mongolia": 12.919646, "Montenegro": 2.307451, "Montserrat": 0.0, "Morocco": 0.695773, "Mozambique": 0.001573, "Myanmar": 0.074122, "Namibia": 0.020966, "Nauru": 0.0, "Nepal": 0.118819, "Netherlands": 1.457556, "New Caledonia": 8.70504, "New Zealand": 1.207043, "Nicaragua": 0.0, "Niger": 0.013931, "Nigeria": 0.000721, "Niue": 0.0, "North Korea": 1.842298, "North Macedonia": 1.915035, "Norway": 0.663167, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.225294, "Palau": 0.0, "Panama": 0.562689, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.000561, "Peru": 0.078359, "Philippines": 0.62991, "Poland": 4.622457, "Portugal": 0.489787, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 2.19199, "Romania": 0.937765, "Russia": 2.678461, "Rwanda": 0.00143, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.130486, "Serbia": 3.999626, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.33602, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 2.159631, "Slovenia": 2.144189, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.788868, "South Korea": 6.208152, "South Sudan": 0.0, "Spain": 0.501205, "Sri Lanka": 0.272646, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.172296, "Sweden": 0.788095, "Switzerland": 0.050329, "Syria": 0.000182, "Taiwan": 6.500221, "Tajikistan": 0.488952, "Tanzania": 0.031577, "Thailand": 0.876244, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.976146, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 3.202695, "Uganda": 0.0, "Ukraine": 2.579566, "United Arab Emirates": 0.813979, "United Kingdom": 0.367074, "Uruguay": 0.001069, "Uzbekistan": 0.251096, "Vanuatu": 0.0, "Venezuela": 0.005691, "Viet Nam": 1.998842, "Wallis and Futuna Islands": 0.0, "Yemen": 0.011263, "Zambia": 0.127718, "Zimbabwe": 0.448616},
              "2020": {"Afghanistan": 0.106488, "Albania": 0.115611, "Algeria": 0.025282, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.058674, "Armenia": 0.003863, "Aruba": 0.0, "Australia": 6.082697, "Austria": 1.279033, "Azerbaijan": 0.000357, "Bahamas": 0.012293, "Bahrain": 0.0, "Bangladesh": 0.101231, "Barbados": 0.0, "Belarus": 0.392108, "Belgium": 0.921254, "Belize": 0.0, "Benin": 0.019449, "Bermuda": 0.0, "Bhutan": 0.572572, "Bolivia": 0.000754, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 4.749921, "Botswana": 1.361848, "Brazil": 0.263798, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.86202, "Bulgaria": 2.378158, "Burkina Faso": 0.0, "Burundi": 0.003803, "Cambodia": 0.282892, "Cameroon": 0.0, "Canada": 1.267792, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.34979, "China": 5.337608, "Christmas Island": 0.0, "Colombia": 0.303833, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.347544, "Cuba": 0.000442, "Curacao": 0.0, "Cyprus": 0.05499, "Czech Republic": 4.733362, "Democratic Republic of the Congo": 0.0, "Denmark": 0.539483, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.404752, "Ecuador": 0.0, "Egypt": 0.035862, "El Salvador": 0.000539, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 4.013374, "Ethiopia": 0.010037, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 2.14699, "France": 0.369525, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.266031, "Germany": 2.368416, "Ghana": 0.0, "Global": 1.80776, "Greece": 0.963556, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.059747, "Guatemala": 0.240423, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 1.660352, "Hungary": 0.763083, "Iceland": 1.820641, "India": 1.137264, "Indonesia": 1.105422, "International Transport": 0.0, "Iran": 0.042848, "Iraq": 0.0, "Ireland": 0.759739, "Israel": 1.792894, "Italy": 0.37428, "Jamaica": 0.129329, "Japan": 3.188692, "Jordan": 0.05646, "Kazakhstan": 9.537287, "Kenya": 0.030467, "Kiribati": 0.0, "Kosovo": 3.658821, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.486429, "Laos": 2.037298, "Latvia": 0.051935, "Lebanon": 0.087067, "Leeward Islands": 0.0, "Lesotho": 0.666222, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.220404, "Luxembourg": 0.376735, "Macao": 0.0, "Madagascar": 0.048388, "Malawi": 0.010886, "Malaysia": 2.848153, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.17356, "Mayotte": 0.0, "Mexico": 0.15882, "Micronesia (Federated States of)": 0.0, "Moldova": 0.117121, "Mongolia": 13.306289, "Montenegro": 2.37699, "Montserrat": 0.0, "Morocco": 0.691254, "Mozambique": 0.001491, "Myanmar": 0.077251, "Namibia": 0.018523, "Nauru": 0.0, "Nepal": 0.122534, "Netherlands": 0.974772, "New Caledonia": 9.105133, "New Zealand": 1.137228, "Nicaragua": 0.0, "Niger": 0.012153, "Nigeria": 0.000638, "Niue": 0.0, "North Korea": 1.925678, "North Macedonia": 1.316388, "Norway": 0.669611, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.251809, "Palau": 0.0, "Panama": 0.513271, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.000194, "Peru": 0.068139, "Philippines": 0.616145, "Poland": 4.273786, "Portugal": 0.236056, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 1.965938, "Romania": 0.732148, "Russia": 2.518647, "Rwanda": 0.00136, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.115237, "Serbia": 4.135405, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.315491, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.824551, "Slovenia": 2.074313, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.347073, "South Korea": 5.456362, "South Sudan": 0.0, "Spain": 0.301919, "Sri Lanka": 0.291752, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.153415, "Sweden": 0.642557, "Switzerland": 0.04797, "Syria": 0.000139, "Taiwan": 6.055988, "Tajikistan": 0.471728, "Tanzania": 0.029898, "Thailand": 0.934656, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.88542, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 2.616442, "Uganda": 0.0, "Ukraine": 2.326331, "United Arab Emirates": 0.771883, "United Kingdom": 0.340137, "Uruguay": 0.000375, "Uzbekistan": 0.338472, "Vanuatu": 0.0, "Venezuela": 0.002292, "Viet Nam": 1.989463, "Wallis and Futuna Islands": 0.0, "Yemen": 0.008663, "Zambia": 0.12108, "Zimbabwe": 0.428954}, 
              "2021": {"Afghanistan": 0.104828, "Albania": 0.061096, "Algeria": 0.024798, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.106371, "Armenia": 0.004473, "Aruba": 0.0, "Australia": 5.823767, "Austria": 1.375153, "Azerbaijan": 0.000355, "Bahamas": 0.012448, "Bahrain": 0.0, "Bangladesh": 0.087702, "Barbados": 0.0, "Belarus": 0.342635, "Belgium": 0.948716, "Belize": 0.0, "Benin": 0.021878, "Bermuda": 0.0, "Bhutan": 0.576234, "Bolivia": 0.001096, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 2.535815, "Botswana": 1.411529, "Brazil": 0.318346, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.865973, "Bulgaria": 3.028459, "Burkina Faso": 0.0, "Burundi": 0.003981, "Cambodia": 0.283217, "Cameroon": 0.0, "Canada": 1.149576, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 1.343286, "China": 5.579649, "Christmas Island": 0.0, "Colombia": 0.233234, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.415163, "Cuba": 0.000451, "Curacao": 0.0, "Cyprus": 0.161931, "Czech Republic": 4.92619, "Democratic Republic of the Congo": 0.0, "Denmark": 0.747621, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.406918, "Ecuador": 0.0, "Egypt": 0.057004, "El Salvador": 0.000713, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 4.682493, "Ethiopia": 0.010513, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 2.22024, "France": 0.4475, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.140289, "Germany": 2.760161, "Ghana": 0.0, "Global": 1.893923, "Greece": 0.935858, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 1.058653, "Guatemala": 0.314538, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 1.845824, "Hungary": 0.658229, "Iceland": 1.802619, "India": 1.280448, "Indonesia": 1.107397, "International Transport": 0.0, "Iran": 0.042423, "Iraq": 0.0, "Ireland": 1.261978, "Israel": 1.57791, "Italy": 0.405125, "Jamaica": 0.131081, "Japan": 3.360982, "Jordan": 0.048664, "Kazakhstan": 9.419363, "Kenya": 0.032122, "Kiribati": 0.0, "Kosovo": 1.935442, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.551421, "Laos": 2.03418, "Latvia": 0.073149, "Lebanon": 0.077514, "Leeward Islands": 0.0, "Lesotho": 0.693505, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.262508, "Luxembourg": 0.327207, "Macao": 0.0, "Madagascar": 0.050775, "Malawi": 0.011401, "Malaysia": 2.555403, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 1.26051, "Mayotte": 0.0, "Mexico": 0.1528, "Micronesia (Federated States of)": 0.0, "Moldova": 0.135924, "Mongolia": 13.262538, "Montenegro": 1.253209, "Montserrat": 0.0, "Morocco": 0.751007, "Mozambique": 0.001558, "Myanmar": 0.077701, "Namibia": 0.019199, "Nauru": 0.0, "Nepal": 0.121277, "Netherlands": 1.314206, "New Caledonia": 9.177665, "New Zealand": 1.316243, "Nicaragua": 0.0, "Niger": 0.013543, "Nigeria": 0.00072, "Niue": 0.0, "North Korea": 1.942642, "North Macedonia": 1.13805, "Norway": 0.773197, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.259101, "Palau": 0.0, "Panama": 0.6721, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.000282, "Peru": 0.073547, "Philippines": 0.657815, "Poland": 4.68579, "Portugal": 0.107059, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 1.949034, "Romania": 0.851123, "Russia": 2.620399, "Rwanda": 0.001428, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.12978, "Serbia": 2.194432, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.563631, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 2.30909, "Slovenia": 1.705311, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 6.234256, "South Korea": 5.477669, "South Sudan": 0.0, "Spain": 0.39117, "Sri Lanka": 0.279086, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.160061, "Sweden": 0.530563, "Switzerland": 0.047549, "Syria": 0.000119, "Taiwan": 6.491521, "Tajikistan": 0.531791, "Tanzania": 0.031188, "Thailand": 0.986674, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 1.917565, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 2.974205, "Uganda": 0.0, "Ukraine": 2.339223, "United Arab Emirates": 0.714923, "United Kingdom": 0.352101, "Uruguay": 0.000552, "Uzbekistan": 0.237196, "Vanuatu": 0.0, "Venezuela": 0.001283, "Viet Nam": 2.016234, "Wallis and Futuna Islands": 0.0, "Yemen": 0.007456, "Zambia": 0.126514, "Zimbabwe": 0.451784}
              }}, 
      {id: 'oil', metadata: {
              "2017": {"Afghanistan": 0.170436, "Albania": 1.416589, "Algeria": 1.3445, "Andorra": 6.302098, "Angola": 0.483036, "Anguilla": 9.516883, "Antarctica": 0.0, "Antigua and Barbuda": 5.388294, "Argentina": 1.835349, "Armenia": 0.304689, "Aruba": 8.444238, "Australia": 5.671368, "Austria": 3.926838, "Azerbaijan": 1.24091, "Bahamas": 5.24319, "Bahrain": 2.799243, "Bangladesh": 0.115626, "Barbados": 3.819032, "Belarus": 1.786644, "Belgium": 4.069848, "Belize": 1.633038, "Benin": 0.544662, "Bermuda": 9.959826, "Bhutan": 0.683256, "Bolivia": 1.115503, "Bonaire, Saint Eustatius and Saba": 4.210457, "Bosnia and Herzegovina": 1.421919, "Botswana": 1.173107, "Brazil": 1.517591, "British Virgin Islands": 5.606919, "Brunei Darussalam": 4.479134, "Bulgaria": 1.717848, "Burkina Faso": 0.192659, "Burundi": 0.044012, "Cambodia": 0.416377, "Cameroon": 0.225609, "Canada": 7.123722, "Cape Verde": 1.024706, "Central African Republic": 0.043263, "Chad": 0.093022, "Chile": 2.475329, "China": 1.014402, "Christmas Island": 0.0, "Colombia": 0.75008, "Comoros": 0.351168, "Congo": 0.371756, "Cook Islands": 4.633975, "Costa Rica": 1.498223, "Cote dIvoire": 0.30376, "Croatia": 2.388201, "Cuba": 1.98772, "Curacao": 25.97616, "Cyprus": 5.439979, "Czech Republic": 2.104534, "Democratic Republic of the Congo": 0.025214, "Denmark": 3.491075, "Djibouti": 0.317006, "Dominica": 2.289902, "Dominican Republic": 1.544676, "Ecuador": 2.05334, "Egypt": 1.169435, "El Salvador": 0.896351, "Equatorial Guinea": 0.785489, "Eritrea": 0.183365, "Estonia": 2.710959, "Ethiopia": 0.097189, "Faeroe Islands": 14.07828, "Fiji": 1.423309, "Finland": 4.017097, "France": 3.050226, "French Equatorial Africa": 0.0, "French Guiana": 2.624126, "French Polynesia": 2.914334, "French West Africa": 0.0, "Gabon": 1.127357, "Gambia": 0.249275, "Georgia": 0.935452, "Germany": 3.378917, "Ghana": 0.312665, "Global": 1.61091, "Greece": 3.2767, "Greenland": 9.69107, "Grenada": 2.302859, "Guadeloupe": 5.11579, "Guatemala": 0.72048, "Guinea": 0.264605, "Guinea-Bissau": 0.161777, "Guyana": 2.832302, "Haiti": 0.27826, "Honduras": 0.967903, "Hong Kong": 1.587083, "Hungary": 1.784948, "Iceland": 8.02785, "India": 0.466024, "Indonesia": 0.863786, "International Transport": 0.0, "Iran": 2.71059, "Iraq": 3.896932, "Ireland": 3.914479, "Israel": 2.566952, "Italy": 2.479459, "Jamaica": 2.499745, "Japan": 3.543649, "Jordan": 1.486348, "Kazakhstan": 2.464462, "Kenya": 0.273279, "Kiribati": 0.547947, "Kosovo": 1.250486, "Kuwait": 12.353963, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.782929, "Laos": 0.458575, "Latvia": 2.187689, "Lebanon": 4.084871, "Leeward Islands": 0.0, "Lesotho": 0.302152, "Liberia": 0.23298, "Libya": 4.106752, "Liechtenstein": 2.699679, "Lithuania": 2.673033, "Luxembourg": 11.528339, "Macao": 2.491064, "Madagascar": 0.098707, "Malawi": 0.059789, "Malaysia": 2.541684, "Maldives": 3.203001, "Mali": 0.17038, "Malta": 2.040123, "Marshall Islands": 3.10594, "Martinique": 6.037517, "Mauritania": 0.804139, "Mauritius": 2.125262, "Mayotte": 1.091959, "Mexico": 2.001313, "Micronesia (Federated States of)": 1.293996, "Moldova": 0.802957, "Mongolia": 1.21409, "Montenegro": 1.42519, "Montserrat": 6.237923, "Morocco": 1.036659, "Mozambique": 0.153257, "Myanmar": 0.219048, "Namibia": 1.574358, "Nauru": 4.704674, "Nepal": 0.22569, "Netherlands": 3.076221, "New Caledonia": 9.019902, "New Zealand": 4.290042, "Nicaragua": 0.796063, "Niger": 0.083743, "Nigeria": 0.302272, "Niue": 3.920813, "North Korea": 0.114884, "North Macedonia": 1.360135, "Norway": 4.300647, "Occupied Palestinian Territory": 0.69524, "Oman": 2.854092, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.394923, "Palau": 12.119527, "Panama": 2.501889, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.596946, "Paraguay": 1.205498, "Peru": 1.01234, "Philippines": 0.522661, "Poland": 2.169276, "Portugal": 2.517383, "Puerto Rico": 0.0, "Qatar": 3.339931, "Reunion": 2.582568, "Romania": 1.44273, "Russia": 2.84283, "Rwanda": 0.076394, "Ryukyu Islands": 0.0, "Saint Helena": 2.000364, "Saint Kitts and Nevis": 5.060668, "Saint Lucia": 2.85405, "Saint Pierre and Miquelon": 11.071345, "Saint Vincent and the Grenadines": 2.04811, "Samoa": 1.182334, "Sao Tome and Principe": 0.616432, "Saudi Arabia": 10.752529, "Senegal": 0.478855, "Serbia": 1.188399, "Seychelles": 5.650156, "Sierra Leone": 0.137444, "Singapore": 2.278683, "Sint Maarten (Dutch part)": 16.883986, "Slovakia": 1.863442, "Slovenia": 3.484087, "Solomon Islands": 0.444029, "Somalia": 0.042891, "South Africa": 0.999484, "South Korea": 3.482968, "South Sudan": 0.136477, "Spain": 3.060514, "Sri Lanka": 0.754715, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.495478, "Suriname": 3.554503, "Swaziland": 0.716004, "Sweden": 2.933163, "Switzerland": 3.386255, "Syria": 1.19937, "Taiwan": 2.934671, "Tajikistan": 0.265599, "Tanzania": 0.120794, "Thailand": 1.760396, "Timor-Leste": 0.442072, "Togo": 0.177769, "Tonga": 1.286041, "Trinidad and Tobago": 3.458982, "Tunisia": 1.211833, "Turkey": 1.471138, "Turkmenistan": 3.350501, "Turks and Caicos Islands": 8.828029, "Tuvalu": 0.676764, "USA": 7.018608, "Uganda": 0.124638, "Ukraine": 0.791409, "United Arab Emirates": 6.88883, "United Kingdom": 2.646653, "Uruguay": 1.670224, "Uzbekistan": 0.347881, "Vanuatu": 0.479715, "Venezuela": 2.518056, "Viet Nam": 0.663274, "Wallis and Futuna Islands": 2.148794, "Yemen": 0.274851, "Zambia": 0.236089, "Zimbabwe": 0.218747}, 
              "2018": {"Afghanistan": 0.18047, "Albania": 1.157651, "Algeria": 1.309946, "Andorra": 6.594057, "Angola": 0.475601, "Anguilla": 9.412819, "Antarctica": 0.0, "Antigua and Barbuda": 5.438456, "Argentina": 1.67499, "Armenia": 0.291926, "Aruba": 8.229667, "Australia": 5.753275, "Austria": 3.855559, "Azerbaijan": 1.165693, "Bahamas": 6.709788, "Bahrain": 2.473312, "Bangladesh": 0.11965, "Barbados": 4.085938, "Belarus": 1.874861, "Belgium": 3.99298, "Belize": 1.572754, "Benin": 0.586697, "Bermuda": 11.066178, "Bhutan": 0.74321, "Bolivia": 1.110857, "Bonaire, Saint Eustatius and Saba": 3.961874, "Bosnia and Herzegovina": 1.364476, "Botswana": 1.174795, "Brazil": 1.430318, "British Virgin Islands": 5.314521, "Brunei Darussalam": 4.388911, "Bulgaria": 1.764093, "Burkina Faso": 0.205006, "Burundi": 0.05454, "Cambodia": 0.451334, "Cameroon": 0.202608, "Canada": 7.208382, "Cape Verde": 1.019912, "Central African Republic": 0.04315, "Chad": 0.093219, "Chile": 2.490063, "China": 1.058857, "Christmas Island": 0.0, "Colombia": 0.789801, "Comoros": 0.37758, "Congo": 0.368649, "Cook Islands": 4.672115, "Costa Rica": 1.486466, "Cote dIvoire": 0.248138, "Croatia": 2.303941, "Cuba": 1.766661, "Curacao": 20.985142, "Cyprus": 5.267536, "Czech Republic": 2.123696, "Democratic Republic of the Congo": 0.023722, "Denmark": 3.483738, "Djibouti": 0.298056, "Dominica": 2.276323, "Dominican Republic": 1.688794, "Ecuador": 1.938409, "Egypt": 0.992247, "El Salvador": 0.953312, "Equatorial Guinea": 0.722023, "Eritrea": 0.209501, "Estonia": 2.64972, "Ethiopia": 0.099726, "Faeroe Islands": 14.237504, "Fiji": 1.475019, "Finland": 4.007055, "France": 2.945701, "French Equatorial Africa": 0.0, "French Guiana": 2.540156, "French Polynesia": 2.942468, "French West Africa": 0.0, "Gabon": 1.08649, "Gambia": 0.242776, "Georgia": 0.906208, "Germany": 3.199455, "Ghana": 0.370628, "Global": 1.59635, "Greece": 3.18252, "Greenland": 9.79816, "Grenada": 2.526108, "Guadeloupe": 5.095943, "Guatemala": 0.747431, "Guinea": 0.29359, "Guinea-Bissau": 0.161791, "Guyana": 2.952604, "Haiti": 0.299104, "Honduras": 0.921879, "Hong Kong": 1.537777, "Hungary": 1.898428, "Iceland": 7.886053, "India": 0.478589, "Indonesia": 0.833157, "International Transport": 0.0, "Iran": 2.749319, "Iraq": 3.56365, "Ireland": 4.034278, "Israel": 2.657448, "Italy": 2.550184, "Jamaica": 2.613946, "Japan": 3.42567, "Jordan": 1.402216, "Kazakhstan": 2.640337, "Kenya": 0.280135, "Kiribati": 0.539436, "Kosovo": 1.257787, "Kuwait": 11.995994, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.910776, "Laos": 0.465753, "Latvia": 2.253832, "Lebanon": 3.946711, "Leeward Islands": 0.0, "Lesotho": 0.313388, "Liberia": 0.196337, "Libya": 4.003492, "Liechtenstein": 2.443381, "Lithuania": 2.80893, "Luxembourg": 11.915452, "Macao": 1.63303, "Madagascar": 0.093079, "Malawi": 0.067823, "Malaysia": 2.558412, "Maldives": 3.553592, "Mali": 0.170924, "Malta": 1.76162, "Marshall Islands": 3.186849, "Martinique": 6.044394, "Mauritania": 0.858012, "Mauritius": 2.175125, "Mayotte": 1.041943, "Mexico": 1.885479, "Micronesia (Federated States of)": 1.288175, "Moldova": 0.848991, "Mongolia": 1.249516, "Montenegro": 1.54926, "Montserrat": 6.724478, "Morocco": 0.996229, "Mozambique": 0.151501, "Myanmar": 0.396663, "Namibia": 1.515447, "Nauru": 4.609192, "Nepal": 0.247679, "Netherlands": 3.10133, "New Caledonia": 9.883762, "New Zealand": 4.243848, "Nicaragua": 0.750976, "Niger": 0.061345, "Nigeria": 0.244233, "Niue": 5.825119, "North Korea": 0.113472, "North Macedonia": 1.342525, "Norway": 4.369315, "Occupied Palestinian Territory": 0.615299, "Oman": 2.887404, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.301465, "Palau": 11.896104, "Panama": 2.169377, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.714009, "Paraguay": 1.256111, "Peru": 1.031211, "Philippines": 0.528699, "Poland": 2.248373, "Portugal": 2.479536, "Puerto Rico": 0.0, "Qatar": 1.639491, "Reunion": 2.544578, "Romania": 1.465321, "Russia": 2.688019, "Rwanda": 0.081865, "Ryukyu Islands": 0.0, "Saint Helena": 2.008772, "Saint Kitts and Nevis": 5.139926, "Saint Lucia": 2.863015, "Saint Pierre and Miquelon": 9.862719, "Saint Vincent and the Grenadines": 2.296939, "Samoa": 1.135712, "Sao Tome and Principe": 0.62412, "Saudi Arabia": 9.694946, "Senegal": 0.44627, "Serbia": 1.206084, "Seychelles": 5.828227, "Sierra Leone": 0.131901, "Singapore": 4.021264, "Sint Maarten (Dutch part)": 16.30526, "Slovakia": 1.878953, "Slovenia": 3.478907, "Solomon Islands": 0.439069, "Somalia": 0.041369, "South Africa": 1.14201, "South Korea": 3.437376, "South Sudan": 0.144159, "Spain": 3.067432, "Sri Lanka": 0.666445, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.467258, "Suriname": 3.110341, "Swaziland": 0.751474, "Sweden": 2.870702, "Switzerland": 3.261487, "Syria": 1.102225, "Taiwan": 2.907881, "Tajikistan": 0.320985, "Tanzania": 0.119614, "Thailand": 1.647302, "Timor-Leste": 0.394901, "Togo": 0.165745, "Tonga": 1.289282, "Trinidad and Tobago": 2.612779, "Tunisia": 1.151425, "Turkey": 1.42094, "Turkmenistan": 3.320823, "Turks and Caicos Islands": 8.743365, "Tuvalu": 0.674459, "USA": 7.121344, "Uganda": 0.127707, "Ukraine": 0.792284, "United Arab Emirates": 6.788012, "United Kingdom": 2.605439, "Uruguay": 1.789746, "Uzbekistan": 0.36042, "Vanuatu": 0.591568, "Venezuela": 1.449721, "Viet Nam": 0.735006, "Wallis and Futuna Islands": 2.170616, "Yemen": 0.272148, "Zambia": 0.201936, "Zimbabwe": 0.269709}, 
              "2019": {"Afghanistan": 0.181177, "Albania": 1.197159, "Algeria": 1.385251, "Andorra": 6.287204, "Angola": 0.429439, "Anguilla": 10.005722, "Antarctica": 0.0, "Antigua and Barbuda": 5.409468, "Argentina": 1.672753, "Armenia": 0.370219, "Aruba": 8.571203, "Australia": 5.642777, "Austria": 3.838689, "Azerbaijan": 1.182227, "Bahamas": 6.258263, "Bahrain": 2.508568, "Bangladesh": 0.101383, "Barbados": 3.713955, "Belarus": 1.86444, "Belgium": 3.930573, "Belize": 1.817428, "Benin": 0.519023, "Bermuda": 9.129568, "Bhutan": 0.744775, "Bolivia": 1.082962, "Bonaire, Saint Eustatius and Saba": 4.298788, "Bosnia and Herzegovina": 1.393334, "Botswana": 1.168854, "Brazil": 1.427564, "British Virgin Islands": 5.506174, "Brunei Darussalam": 8.163635, "Bulgaria": 1.856303, "Burkina Faso": 0.2121, "Burundi": 0.053997, "Cambodia": 0.510906, "Cameroon": 0.195974, "Canada": 7.177703, "Cape Verde": 1.060409, "Central African Republic": 0.043608, "Chad": 0.089289, "Chile": 2.522247, "China": 1.09696, "Christmas Island": 0.0, "Colombia": 0.951753, "Comoros": 0.393736, "Congo": 0.363403, "Cook Islands": 4.925307, "Costa Rica": 1.439072, "Cote dIvoire": 0.236536, "Croatia": 2.25715, "Cuba": 1.798182, "Curacao": 10.151056, "Cyprus": 5.257423, "Czech Republic": 2.134146, "Democratic Republic of the Congo": 0.023963, "Denmark": 3.398762, "Djibouti": 0.293395, "Dominica": 2.359635, "Dominican Republic": 1.879495, "Ecuador": 2.009458, "Egypt": 0.960659, "El Salvador": 1.108532, "Equatorial Guinea": 0.719574, "Eritrea": 0.2135, "Estonia": 2.498305, "Ethiopia": 0.115478, "Faeroe Islands": 14.321085, "Fiji": 1.479862, "Finland": 3.908552, "France": 2.914578, "French Equatorial Africa": 0.0, "French Guiana": 2.534249, "French Polynesia": 2.921743, "French West Africa": 0.0, "Gabon": 0.832518, "Gambia": 0.239507, "Georgia": 0.951269, "Germany": 3.258166, "Ghana": 0.381327, "Global": 1.58992, "Greece": 3.210075, "Greenland": 9.898558, "Grenada": 2.687005, "Guadeloupe": 5.230805, "Guatemala": 0.804068, "Guinea": 0.34431, "Guinea-Bissau": 0.163633, "Guyana": 3.215592, "Haiti": 0.266582, "Honduras": 1.049293, "Hong Kong": 1.550429, "Hungary": 1.981575, "Iceland": 7.462608, "India": 0.487315, "Indonesia": 0.824181, "International Transport": 0.0, "Iran": 2.650078, "Iraq": 2.742125, "Ireland": 3.991934, "Israel": 2.46752, "Italy": 2.479841, "Jamaica": 2.398419, "Japan": 3.305946, "Jordan": 1.488041, "Kazakhstan": 2.61598, "Kenya": 0.299138, "Kiribati": 0.530839, "Kosovo": 1.3244, "Kuwait": 12.49659, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.705145, "Laos": 0.463331, "Latvia": 2.253323, "Lebanon": 4.088639, "Leeward Islands": 0.0, "Lesotho": 0.32266, "Liberia": 0.1955, "Libya": 6.410938, "Liechtenstein": 2.565594, "Lithuania": 2.875572, "Luxembourg": 11.929398, "Macao": 1.44097, "Madagascar": 0.102023, "Malawi": 0.068007, "Malaysia": 2.412136, "Maldives": 3.870924, "Mali": 0.168526, "Malta": 1.868084, "Marshall Islands": 3.276695, "Martinique": 6.235374, "Mauritania": 0.860869, "Mauritius": 2.283854, "Mayotte": 1.02561, "Mexico": 1.933857, "Micronesia (Federated States of)": 1.315867, "Moldova": 0.885523, "Mongolia": 1.548498, "Montenegro": 1.621609, "Montserrat": 4.879911, "Morocco": 1.001069, "Mozambique": 0.143847, "Myanmar": 0.371718, "Namibia": 1.445147, "Nauru": 4.530168, "Nepal": 0.216415, "Netherlands": 3.052419, "New Caledonia": 9.128736, "New Zealand": 4.216917, "Nicaragua": 0.748313, "Niger": 0.084682, "Nigeria": 0.337953, "Niue": 5.72202, "North Korea": 0.123332, "North Macedonia": 1.462705, "Norway": 4.103974, "Occupied Palestinian Territory": 0.664923, "Oman": 2.811703, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.290553, "Palau": 12.270596, "Panama": 2.105323, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.733761, "Paraguay": 1.200156, "Peru": 1.0593, "Philippines": 0.50195, "Poland": 2.2902, "Portugal": 2.541583, "Puerto Rico": 0.0, "Qatar": 3.71068, "Reunion": 2.584195, "Romania": 1.521071, "Russia": 2.73371, "Rwanda": 0.119853, "Ryukyu Islands": 0.0, "Saint Helena": 2.690655, "Saint Kitts and Nevis": 5.298793, "Saint Lucia": 2.892907, "Saint Pierre and Miquelon": 11.131139, "Saint Vincent and the Grenadines": 2.165072, "Samoa": 1.279517, "Sao Tome and Principe": 0.614653, "Saudi Arabia": 10.382984, "Senegal": 0.498136, "Serbia": 1.246077, "Seychelles": 5.686988, "Sierra Leone": 0.147984, "Singapore": 1.202928, "Sint Maarten (Dutch part)": 16.026803, "Slovakia": 1.892091, "Slovenia": 3.33975, "Solomon Islands": 0.434256, "Somalia": 0.039893, "South Africa": 0.998142, "South Korea": 3.39352, "South Sudan": 0.158166, "Spain": 2.996325, "Sri Lanka": 0.683901, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.459694, "Suriname": 4.431167, "Swaziland": 0.786298, "Sweden": 2.795639, "Switzerland": 3.205528, "Syria": 0.915897, "Taiwan": 2.753439, "Tajikistan": 0.314326, "Tanzania": 0.112847, "Thailand": 1.696994, "Timor-Leste": 0.472151, "Togo": 0.142238, "Tonga": 1.536107, "Trinidad and Tobago": 2.46122, "Tunisia": 1.117039, "Turkey": 1.375871, "Turkmenistan": 3.282977, "Turks and Caicos Islands": 8.420056, "Tuvalu": 0.668857, "USA": 7.055616, "Uganda": 0.12643, "Ukraine": 0.870383, "United Arab Emirates": 6.567223, "United Kingdom": 2.530682, "Uruguay": 1.759035, "Uzbekistan": 0.372311, "Vanuatu": 0.529612, "Venezuela": 1.199725, "Viet Nam": 0.796989, "Wallis and Futuna Islands": 2.189517, "Yemen": 0.320923, "Zambia": 0.241488, "Zimbabwe": 0.238148},
              "2020": {"Afghanistan": 0.185254, "Albania": 1.122339, "Algeria": 1.25519, "Andorra": 5.777148, "Angola": 0.39198, "Anguilla": 8.430535, "Antarctica": 0.0, "Antigua and Barbuda": 4.591351, "Argentina": 1.574577, "Armenia": 0.327806, "Aruba": 7.308293, "Australia": 5.277601, "Austria": 3.447875, "Azerbaijan": 1.054768, "Bahamas": 5.318157, "Bahrain": 2.344683, "Bangladesh": 0.09511, "Barbados": 3.165187, "Belarus": 1.858074, "Belgium": 3.416304, "Belize": 1.552782, "Benin": 0.515422, "Bermuda": 7.768184, "Bhutan": 0.780912, "Bolivia": 1.040544, "Bonaire, Saint Eustatius and Saba": 3.588496, "Bosnia and Herzegovina": 1.319667, "Botswana": 1.095969, "Brazil": 1.318454, "British Virgin Islands": 4.655555, "Brunei Darussalam": 8.544315, "Bulgaria": 1.739669, "Burkina Faso": 0.210778, "Burundi": 0.047592, "Cambodia": 0.533, "Cameroon": 0.179877, "Canada": 6.291544, "Cape Verde": 1.07284, "Central African Republic": 0.040097, "Chad": 0.081588, "Chile": 2.351882, "China": 1.14232, "Christmas Island": 0.0, "Colombia": 0.787472, "Comoros": 0.350406, "Congo": 0.335117, "Cook Islands": 5.222977, "Costa Rica": 1.238534, "Cote dIvoire": 0.235649, "Croatia": 2.019383, "Cuba": 1.537217, "Curacao": 8.841855, "Cyprus": 5.090074, "Czech Republic": 2.006404, "Democratic Republic of the Congo": 0.021882, "Denmark": 3.191264, "Djibouti": 0.262172, "Dominica": 1.998795, "Dominican Republic": 1.587534, "Ecuador": 1.649169, "Egypt": 0.840884, "El Salvador": 0.959856, "Equatorial Guinea": 0.660337, "Eritrea": 0.189726, "Estonia": 2.340689, "Ethiopia": 0.101977, "Faeroe Islands": 13.205626, "Fiji": 1.554512, "Finland": 3.642148, "France": 2.550423, "French Equatorial Africa": 0.0, "French Guiana": 2.238665, "French Polynesia": 3.061156, "French West Africa": 0.0, "Gabon": 0.768704, "Gambia": 0.238482, "Georgia": 0.890791, "Germany": 3.016765, "Ghana": 0.381506, "Global": 1.427353, "Greece": 2.955721, "Greenland": 8.932951, "Grenada": 2.312416, "Guadeloupe": 4.731013, "Guatemala": 0.686973, "Guinea": 0.343257, "Guinea-Bissau": 0.163398, "Guyana": 3.137406, "Haiti": 0.224662, "Honduras": 0.895275, "Hong Kong": 1.128397, "Hungary": 1.781729, "Iceland": 6.76371, "India": 0.43226, "Indonesia": 0.745165, "International Transport": 0.0, "Iran": 2.562442, "Iraq": 2.422963, "Ireland": 3.666845, "Israel": 2.17364, "Italy": 2.139199, "Jamaica": 2.041974, "Japan": 3.096795, "Jordan": 1.346317, "Kazakhstan": 2.111182, "Kenya": 0.265877, "Kiribati": 0.550413, "Kosovo": 1.251109, "Kuwait": 12.187947, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.611259, "Laos": 0.481836, "Latvia": 2.19821, "Lebanon": 3.858163, "Leeward Islands": 0.0, "Lesotho": 0.304474, "Liberia": 0.195699, "Libya": 5.56184, "Liechtenstein": 2.411888, "Lithuania": 2.84417, "Luxembourg": 9.42457, "Macao": 1.492421, "Madagascar": 0.090192, "Malawi": 0.0602, "Malaysia": 2.124009, "Maldives": 4.006578, "Mali": 0.166833, "Malta": 1.674806, "Marshall Islands": 3.563031, "Martinique": 5.670077, "Mauritania": 0.856995, "Mauritius": 2.069052, "Mayotte": 0.894282, "Mexico": 1.513339, "Micronesia (Federated States of)": 1.379782, "Moldova": 0.785608, "Mongolia": 1.603476, "Montenegro": 1.51979, "Montserrat": 4.171108, "Morocco": 0.893866, "Mozambique": 0.126738, "Myanmar": 0.389505, "Namibia": 1.357539, "Nauru": 4.710166, "Nepal": 0.224391, "Netherlands": 2.762084, "New Caledonia": 9.600004, "New Zealand": 3.778624, "Nicaragua": 0.640086, "Niger": 0.083216, "Nigeria": 0.336915, "Niue": 5.97381, "North Korea": 0.129612, "North Macedonia": 1.395252, "Norway": 3.937962, "Occupied Palestinian Territory": 0.601108, "Oman": 2.493781, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.288963, "Palau": 12.910238, "Panama": 1.799388, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.757969, "Paraguay": 1.152541, "Peru": 0.807803, "Philippines": 0.418905, "Poland": 2.225741, "Portugal": 2.254302, "Puerto Rico": 0.0, "Qatar": 2.949179, "Reunion": 2.317696, "Romania": 1.50295, "Russia": 2.615302, "Rwanda": 0.105922, "Ryukyu Islands": 0.0, "Saint Helena": 2.308731, "Saint Kitts and Nevis": 4.530767, "Saint Lucia": 2.460958, "Saint Pierre and Miquelon": 9.534364, "Saint Vincent and the Grenadines": 1.853702, "Samoa": 1.331423, "Sao Tome and Principe": 0.568961, "Saudi Arabia": 10.307343, "Senegal": 0.49554, "Serbia": 1.172159, "Seychelles": 5.101716, "Sierra Leone": 0.147738, "Singapore": 1.19698, "Sint Maarten (Dutch part)": 13.482639, "Slovakia": 1.761224, "Slovenia": 2.842406, "Solomon Islands": 0.447581, "Somalia": 0.034968, "South Africa": 0.83334, "South Korea": 3.183892, "South Sudan": 0.141316, "Spain": 2.539568, "Sri Lanka": 0.638132, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.405619, "Suriname": 4.261121, "Swaziland": 0.744419, "Sweden": 2.522632, "Switzerland": 2.929779, "Syria": 0.819003, "Taiwan": 2.639961, "Tajikistan": 0.270855, "Tanzania": 0.099316, "Thailand": 1.551684, "Timor-Leste": 0.490819, "Togo": 0.141871, "Tonga": 1.616566, "Trinidad and Tobago": 2.284778, "Tunisia": 0.972416, "Turkey": 1.370183, "Turkmenistan": 3.190759, "Turks and Caicos Islands": 6.994867, "Tuvalu": 0.698717, "USA": 6.100269, "Uganda": 0.110917, "Ukraine": 0.795141, "United Arab Emirates": 5.811253, "United Kingdom": 2.147063, "Uruguay": 1.711625, "Uzbekistan": 0.326481, "Vanuatu": 0.545904, "Venezuela": 1.03257, "Viet Nam": 0.675848, "Wallis and Futuna Islands": 2.32255, "Yemen": 0.289919, "Zambia": 0.212805, "Zimbabwe": 0.211664}, 
              "2021": {"Afghanistan": 0.185029, "Albania": 1.137164, "Algeria": 1.268066, "Andorra": 5.730292, "Angola": 0.402904, "Anguilla": 9.188354, "Antarctica": 0.0, "Antigua and Barbuda": 5.027895, "Argentina": 1.773737, "Armenia": 0.355273, "Aruba": 8.054722, "Australia": 5.368438, "Austria": 3.526375, "Azerbaijan": 1.077332, "Bahamas": 5.838075, "Bahrain": 2.426313, "Bangladesh": 0.106622, "Barbados": 3.480605, "Belarus": 1.773462, "Belgium": 3.83822, "Belize": 1.711186, "Benin": 0.535575, "Bermuda": 8.537196, "Bhutan": 0.797382, "Bolivia": 1.101349, "Bonaire, Saint Eustatius and Saba": 3.871365, "Bosnia and Herzegovina": 1.350757, "Botswana": 1.099621, "Brazil": 1.385677, "British Virgin Islands": 5.093802, "Brunei Darussalam": 8.708841, "Bulgaria": 1.855755, "Burkina Faso": 0.219259, "Burundi": 0.04891, "Cambodia": 0.541405, "Cameroon": 0.185873, "Canada": 6.333628, "Cape Verde": 1.135678, "Central African Republic": 0.041651, "Chad": 0.083864, "Chile": 2.401832, "China": 1.20159, "Christmas Island": 0.0, "Colombia": 0.969493, "Comoros": 0.362904, "Congo": 0.347396, "Cook Islands": 5.375721, "Costa Rica": 1.374266, "Cote dIvoire": 0.245609, "Croatia": 2.229111, "Cuba": 1.700125, "Curacao": 9.686792, "Cyprus": 5.221541, "Czech Republic": 2.210333, "Democratic Republic of the Congo": 0.022479, "Denmark": 3.188446, "Djibouti": 0.272875, "Dominica": 2.189268, "Dominican Republic": 1.730294, "Ecuador": 1.994683, "Egypt": 0.88788, "El Salvador": 1.067824, "Equatorial Guinea": 0.684107, "Eritrea": 0.196696, "Estonia": 2.428487, "Ethiopia": 0.104873, "Faeroe Islands": 13.203997, "Fiji": 1.590295, "Finland": 3.581235, "France": 2.785402, "French Equatorial Africa": 0.0, "French Guiana": 2.189895, "French Polynesia": 3.124014, "French West Africa": 0.0, "Gabon": 0.798612, "Gambia": 0.248379, "Georgia": 0.900633, "Germany": 2.975721, "Ghana": 0.399414, "Global": 1.496614, "Greece": 2.96915, "Greenland": 9.079509, "Grenada": 2.56167, "Guadeloupe": 4.726128, "Guatemala": 0.756146, "Guinea": 0.357805, "Guinea-Bissau": 0.170736, "Guyana": 3.329849, "Haiti": 0.244452, "Honduras": 0.984147, "Hong Kong": 0.998571, "Hungary": 1.892456, "Iceland": 6.821205, "India": 0.442003, "Indonesia": 0.768025, "International Transport": 0.0, "Iran": 2.535864, "Iraq": 2.683748, "Ireland": 3.697733, "Israel": 2.203413, "Italy": 2.393763, "Jamaica": 2.243742, "Japan": 3.17271, "Jordan": 1.352621, "Kazakhstan": 2.227889, "Kenya": 0.275241, "Kiribati": 0.555062, "Kosovo": 1.268866, "Kuwait": 12.643539, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.648636, "Laos": 0.488123, "Latvia": 2.260398, "Lebanon": 4.0038, "Leeward Islands": 0.0, "Lesotho": 0.306806, "Liberia": 0.204781, "Libya": 6.581704, "Liechtenstein": 2.443113, "Lithuania": 3.006061, "Luxembourg": 9.581352, "Macao": 1.51066, "Madagascar": 0.092927, "Malawi": 0.061905, "Malaysia": 2.117796, "Maldives": 4.06203, "Mali": 0.172667, "Malta": 1.671925, "Marshall Islands": 3.780319, "Martinique": 5.6946, "Mauritania": 0.892337, "Mauritius": 2.182113, "Mayotte": 0.864775, "Mexico": 1.544653, "Micronesia (Federated States of)": 1.405118, "Moldova": 0.85345, "Mongolia": 1.621541, "Montenegro": 1.536249, "Montserrat": 4.681398, "Morocco": 0.975242, "Mozambique": 0.130027, "Myanmar": 0.397494, "Namibia": 1.362075, "Nauru": 4.764679, "Nepal": 0.225331, "Netherlands": 2.738996, "New Caledonia": 9.817779, "New Zealand": 3.635653, "Nicaragua": 0.704639, "Niger": 0.085654, "Nigeria": 0.351327, "Niue": 6.154972, "North Korea": 0.132663, "North Macedonia": 1.608522, "Norway": 3.975181, "Occupied Palestinian Territory": 0.602376, "Oman": 2.697747, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.324041, "Palau": 13.229228, "Panama": 1.982355, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.763302, "Paraguay": 1.218865, "Peru": 1.00294, "Philippines": 0.447164, "Poland": 2.39401, "Portugal": 2.321238, "Puerto Rico": 0.0, "Qatar": 3.226295, "Reunion": 2.297768, "Romania": 1.645286, "Russia": 2.777896, "Rwanda": 0.109183, "Ryukyu Islands": 0.0, "Saint Helena": 2.550917, "Saint Kitts and Nevis": 4.995041, "Saint Lucia": 2.704837, "Saint Pierre and Miquelon": 10.544484, "Saint Vincent and the Grenadines": 2.047981, "Samoa": 1.344282, "Sao Tome and Principe": 0.591547, "Saudi Arabia": 10.28421, "Senegal": 0.515504, "Serbia": 1.192537, "Seychelles": 5.337406, "Sierra Leone": 0.154312, "Singapore": 1.166976, "Sint Maarten (Dutch part)": 14.711011, "Slovakia": 1.852993, "Slovenia": 3.013811, "Solomon Islands": 0.449141, "Somalia": 0.035766, "South Africa": 0.880674, "South Korea": 3.308581, "South Sudan": 0.147192, "Spain": 2.803142, "Sri Lanka": 0.605924, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.416732, "Suriname": 4.520192, "Swaziland": 0.751829, "Sweden": 2.537716, "Switzerland": 2.924785, "Syria": 0.81765, "Taiwan": 2.762183, "Tajikistan": 0.285824, "Tanzania": 0.101726, "Thailand": 1.518872, "Timor-Leste": 0.496403, "Togo": 0.147997, "Tonga": 1.649345, "Trinidad and Tobago": 2.016713, "Tunisia": 1.155178, "Turkey": 1.39616, "Turkmenistan": 3.236365, "Turks and Caicos Islands": 7.562677, "Tuvalu": 0.7094, "USA": 6.628469, "Uganda": 0.113376, "Ukraine": 0.837403, "United Arab Emirates": 6.389958, "United Kingdom": 2.290553, "Uruguay": 1.834908, "Uzbekistan": 0.346405, "Vanuatu": 0.547911, "Venezuela": 1.071702, "Viet Nam": 0.621885, "Wallis and Futuna Islands": 2.392571, "Yemen": 0.290844, "Zambia": 0.21833, "Zimbabwe": 0.218894}
          }}, 
      {id: 'gas', metadata: {
              "2017": {"Afghanistan": 0.008429, "Albania": 0.058495, "Algeria": 2.00192, "Andorra": 0.0, "Angola": 0.052027, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.189145, "Armenia": 1.564582, "Aruba": 0.0, "Australia": 3.099259, "Austria": 2.043153, "Azerbaijan": 2.074367, "Bahamas": 0.0, "Bahrain": 19.212413, "Bangladesh": 0.331684, "Barbados": 0.157486, "Belarus": 3.569172, "Belgium": 3.077016, "Belize": 0.009779, "Benin": 0.006322, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.806584, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.133138, "Botswana": 0.0, "Brazil": 0.339022, "British Virgin Islands": 0.0, "Brunei Darussalam": 15.855795, "Bulgaria": 0.840747, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.045963, "Canada": 5.870196, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.541341, "China": 0.344868, "Christmas Island": 0.0, "Colombia": 0.464672, "Comoros": 0.0, "Congo": 0.222778, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.173556, "Croatia": 1.295695, "Cuba": 0.178087, "Curacao": 0.811088, "Cyprus": 0.000346, "Czech Republic": 1.681995, "Democratic Republic of the Congo": 0.0, "Denmark": 1.16473, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.205819, "Ecuador": 0.092157, "Egypt": 1.065011, "El Salvador": 0.0, "Equatorial Guinea": 4.238104, "Eritrea": 0.0, "Estonia": 0.700239, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.705554, "France": 1.389643, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.422545, "Gambia": 0.0, "Georgia": 1.246298, "Germany": 2.074596, "Ghana": 0.078075, "Global": 0.940144, "Greece": 0.89187, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.833317, "Hungary": 2.092773, "Iceland": 0.000139, "India": 0.087817, "Indonesia": 0.318862, "International Transport": 0.0, "Iran": 4.727577, "Iraq": 0.485221, "Ireland": 2.127395, "Israel": 2.00867, "Italy": 2.479136, "Jamaica": 0.071757, "Japan": 1.939742, "Jordan": 0.786215, "Kazakhstan": 3.426252, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 10.255886, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.094574, "Laos": 0.0, "Latvia": 1.176229, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.845831, "Liechtenstein": 1.411515, "Lithuania": 1.473099, "Luxembourg": 2.778724, "Macao": 0.526846, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.202502, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.15192, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.16617, "Micronesia (Federated States of)": 0.0, "Moldova": 0.5426, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.066003, "Mozambique": 0.05643, "Myanmar": 0.161869, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 4.110491, "New Caledonia": 0.0, "New Zealand": 1.794636, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.167525, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.220328, "Norway": 2.937815, "Occupied Palestinian Territory": 0.0, "Oman": 10.853038, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.343343, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.102506, "Paraguay": 0.0, "Peru": 0.457425, "Philippines": 0.070542, "Poland": 0.885733, "Portugal": 1.193814, "Puerto Rico": 0.0, "Qatar": 32.11306, "Reunion": 0.0, "Romania": 1.238251, "Russia": 5.34357, "Rwanda": 0.00689, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.241969, "Senegal": 0.002417, "Serbia": 0.648932, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.496523, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.72625, "Slovenia": 0.835533, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.129569, "South Korea": 1.958015, "South Sudan": 0.0, "Spain": 1.343378, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.012472, "Swaziland": 0.0, "Sweden": 0.180611, "Switzerland": 0.838451, "Syria": 0.36151, "Taiwan": 1.962717, "Tajikistan": 0.000411, "Tanzania": 0.026373, "Thailand": 1.162417, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 23.382817, "Tunisia": 1.053026, "Turkey": 1.277743, "Turkmenistan": 8.185952, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 4.428231, "Uganda": 0.0, "Ukraine": 1.492592, "United Arab Emirates": 14.986416, "United Kingdom": 2.447557, "Uruguay": 0.035332, "Uzbekistan": 2.687962, "Vanuatu": 0.0, "Venezuela": 1.564779, "Viet Nam": 0.190114, "Wallis and Futuna Islands": 0.0, "Yemen": 0.019641, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2018": {"Afghanistan": 0.00799, "Albania": 0.052215, "Algeria": 2.120033, "Andorra": 0.0, "Angola": 0.051426, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.164272, "Armenia": 1.64951, "Aruba": 0.0, "Australia": 3.180032, "Austria": 1.92517, "Azerbaijan": 2.096442, "Bahamas": 0.0, "Bahrain": 19.099192, "Bangladesh": 0.326112, "Barbados": 0.197071, "Belarus": 3.790441, "Belgium": 3.153067, "Belize": 0.00959, "Benin": 0.003069, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.8056, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.133645, "Botswana": 0.0, "Brazil": 0.320779, "British Virgin Islands": 0.0, "Brunei Darussalam": 16.179891, "Bulgaria": 0.812233, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.05818, "Canada": 6.263775, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.533711, "China": 0.406027, "Christmas Island": 0.0, "Colombia": 0.47582, "Comoros": 0.0, "Congo": 0.246887, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.154116, "Croatia": 1.211972, "Cuba": 0.16428, "Curacao": 0.555898, "Cyprus": 0.000183, "Czech Republic": 1.579714, "Democratic Republic of the Congo": 0.0, "Denmark": 1.123461, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.202846, "Ecuador": 0.079888, "Egypt": 0.989951, "El Salvador": 0.0, "Equatorial Guinea": 2.866138, "Eritrea": 0.0, "Estonia": 0.746268, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.799873, "France": 1.318802, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.401166, "Gambia": 0.0, "Georgia": 1.24033, "Germany": 2.045299, "Ghana": 0.109455, "Global": 0.979965, "Greece": 0.853147, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.810026, "Hungary": 2.030007, "Iceland": 9e-05, "India": 0.092185, "Indonesia": 0.315082, "International Transport": 0.0, "Iran": 4.778185, "Iraq": 0.751112, "Ireland": 2.192292, "Israel": 2.114086, "Italy": 2.39943, "Jamaica": 0.066456, "Japan": 1.853009, "Jordan": 0.752075, "Kazakhstan": 3.699082, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 9.836817, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.103029, "Laos": 0.0, "Latvia": 1.396823, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.70708, "Liechtenstein": 1.300629, "Lithuania": 1.373054, "Luxembourg": 2.646612, "Macao": 0.274978, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.600707, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.384791, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.337801, "Micronesia (Federated States of)": 0.0, "Moldova": 0.597093, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.058848, "Mozambique": 0.054944, "Myanmar": 0.154115, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 4.04123, "New Caledonia": 0.0, "New Zealand": 1.632466, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.17309, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.20294, "Norway": 2.879533, "Occupied Palestinian Territory": 0.0, "Oman": 11.468149, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.344887, "Palau": 0.0, "Panama": 0.120472, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.082869, "Paraguay": 0.0, "Peru": 0.464233, "Philippines": 0.077418, "Poland": 0.889982, "Portugal": 1.100676, "Puerto Rico": 0.0, "Qatar": 31.497296, "Reunion": 0.0, "Romania": 1.296068, "Russia": 5.667024, "Rwanda": 0.007602, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.345341, "Senegal": 0.001412, "Serbia": 0.65652, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.539871, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.718268, "Slovenia": 0.816933, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.159046, "South Korea": 2.267409, "South Sudan": 0.0, "Spain": 1.32293, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.018514, "Swaziland": 0.0, "Sweden": 0.186342, "Switzerland": 0.785151, "Syria": 0.353068, "Taiwan": 2.047654, "Tajikistan": 0.012037, "Tanzania": 0.024528, "Thailand": 1.142572, "Timor-Leste": 0.0, "Togo": 0.010928, "Tonga": 0.0, "Trinidad and Tobago": 23.775558, "Tunisia": 1.054398, "Turkey": 1.153031, "Turkmenistan": 8.055879, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 4.873608, "Uganda": 0.0, "Ukraine": 1.507232, "United Arab Emirates": 14.613066, "United Kingdom": 2.430799, "Uruguay": 0.033143, "Uzbekistan": 2.768868, "Vanuatu": 0.0, "Venezuela": 1.398248, "Viet Nam": 0.195487, "Wallis and Futuna Islands": 0.0, "Yemen": 0.006426, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2019": {"Afghanistan": 0.006502, "Albania": 0.045897, "Algeria": 2.136732, "Andorra": 0.0, "Angola": 0.075084, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.136715, "Armenia": 1.732884, "Aruba": 0.0, "Australia": 3.22172, "Austria": 2.003686, "Azerbaijan": 2.357292, "Bahamas": 0.0, "Bahrain": 22.172503, "Bangladesh": 0.352671, "Barbados": 0.170005, "Belarus": 3.786235, "Belgium": 3.144868, "Belize": 0.0, "Benin": 0.008645, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.752878, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.127559, "Botswana": 0.0, "Brazil": 0.316935, "British Virgin Islands": 0.0, "Brunei Darussalam": 13.63394, "Bulgaria": 0.743668, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.051445, "Canada": 6.181943, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.632967, "China": 0.443201, "Christmas Island": 0.0, "Colombia": 0.472357, "Comoros": 0.0, "Congo": 0.338432, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.162829, "Croatia": 1.269931, "Cuba": 0.161263, "Curacao": 0.0, "Cyprus": 0.000184, "Czech Republic": 1.647717, "Democratic Republic of the Congo": 0.0, "Denmark": 1.038093, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.22694, "Ecuador": 0.069933, "Egypt": 1.141086, "El Salvador": 0.0, "Equatorial Guinea": 1.922795, "Eritrea": 0.0, "Estonia": 0.689046, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.780621, "France": 1.340943, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.40973, "Gambia": 0.0, "Georgia": 1.406013, "Germany": 2.074357, "Ghana": 0.130209, "Global": 0.984878, "Greece": 0.945541, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.838757, "Hungary": 2.043535, "Iceland": 0.00063, "India": 0.093034, "Indonesia": 0.326098, "International Transport": 0.0, "Iran": 4.886201, "Iraq": 0.824242, "Ireland": 2.213208, "Israel": 2.08741, "Italy": 2.457116, "Jamaica": 0.168059, "Japan": 1.782551, "Jordan": 0.734603, "Kazakhstan": 2.689467, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 10.417538, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.097921, "Laos": 0.0, "Latvia": 1.329665, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.415675, "Liechtenstein": 1.307004, "Lithuania": 1.43243, "Luxembourg": 2.593754, "Macao": 0.386467, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.752243, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.40611, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.255934, "Micronesia (Federated States of)": 0.0, "Moldova": 0.557726, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.055206, "Mozambique": 0.057103, "Myanmar": 0.150456, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 4.173986, "New Caledonia": 0.0, "New Zealand": 1.661642, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.172671, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.23743, "Norway": 2.813428, "Occupied Palestinian Territory": 0.0, "Oman": 11.464159, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.335776, "Palau": 0.0, "Panama": 0.367912, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.085241, "Paraguay": 0.0, "Peru": 0.477634, "Philippines": 0.076677, "Poland": 0.921992, "Portugal": 1.18154, "Puerto Rico": 0.0, "Qatar": 31.144656, "Reunion": 0.0, "Romania": 1.18613, "Russia": 5.515648, "Rwanda": 0.007151, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.143536, "Senegal": 0.001831, "Serbia": 0.616355, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.560692, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.717967, "Slovenia": 0.829677, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.156748, "South Korea": 2.192626, "South Sudan": 0.0, "Spain": 1.511792, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.018336, "Swaziland": 0.0, "Sweden": 0.173119, "Switzerland": 0.802149, "Syria": 0.325778, "Taiwan": 1.974532, "Tajikistan": 0.029824, "Tanzania": 0.031271, "Thailand": 1.175913, "Timor-Leste": 0.0, "Togo": 0.023114, "Tonga": 0.0, "Trinidad and Tobago": 23.95893, "Tunisia": 1.042225, "Turkey": 0.995918, "Turkmenistan": 8.199113, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 5.007181, "Uganda": 0.0, "Ukraine": 1.3693, "United Arab Emirates": 14.453508, "United Kingdom": 2.385805, "Uruguay": 0.048119, "Uzbekistan": 2.80161, "Vanuatu": 0.0, "Venezuela": 1.189986, "Viet Nam": 0.197401, "Wallis and Futuna Islands": 0.0, "Yemen": 0.00627, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2020": {"Afghanistan": 0.006447, "Albania": 0.045757, "Algeria": 2.032334, "Andorra": 0.0, "Angola": 0.075982, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.003119, "Armenia": 1.838826, "Aruba": 0.0, "Australia": 3.290666, "Austria": 1.894629, "Azerbaijan": 2.460449, "Bahamas": 0.0, "Bahrain": 22.389554, "Bangladesh": 0.337185, "Barbados": 0.157655, "Belarus": 3.491142, "Belgium": 3.101308, "Belize": 0.0, "Benin": 0.008995, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.610233, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.128474, "Botswana": 0.0, "Brazil": 0.276863, "British Virgin Islands": 0.0, "Brunei Darussalam": 13.837468, "Bulgaria": 0.768244, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.052351, "Canada": 5.904646, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.597774, "China": 0.482747, "Christmas Island": 0.0, "Colombia": 0.474573, "Comoros": 0.0, "Congo": 0.346005, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.169955, "Croatia": 1.347157, "Cuba": 0.15001, "Curacao": 0.0, "Cyprus": 0.000178, "Czech Republic": 1.655196, "Democratic Republic of the Congo": 0.0, "Denmark": 0.822584, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.208582, "Ecuador": 0.058576, "Egypt": 1.107604, "El Salvador": 0.0, "Equatorial Guinea": 1.956264, "Eritrea": 0.0, "Estonia": 0.608951, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.788731, "France": 1.241329, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.419437, "Gambia": 0.0, "Georgia": 1.400091, "Germany": 2.011642, "Ghana": 0.136483, "Global": 0.963695, "Greece": 1.050424, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 1.329956, "Hungary": 2.142995, "Iceland": 0.000547, "India": 0.091404, "Indonesia": 0.275735, "International Transport": 0.0, "Iran": 5.198539, "Iraq": 0.763479, "Ireland": 2.214222, "Israel": 2.152067, "Italy": 2.366376, "Jamaica": 0.155693, "Japan": 1.777359, "Jordan": 0.718054, "Kazakhstan": 1.697027, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 10.095835, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.101726, "Laos": 0.0, "Latvia": 1.108575, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.296229, "Liechtenstein": 1.251954, "Lithuania": 1.50416, "Luxembourg": 2.330852, "Macao": 0.388142, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.304511, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.42864, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.186719, "Micronesia (Federated States of)": 0.0, "Moldova": 0.592979, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.042621, "Mozambique": 0.053235, "Myanmar": 0.152879, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 4.053271, "New Caledonia": 0.0, "New Zealand": 1.550426, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.180351, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.271563, "Norway": 2.661232, "Occupied Palestinian Territory": 0.0, "Oman": 12.041041, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.305565, "Palau": 0.0, "Panama": 0.268954, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.085386, "Paraguay": 0.0, "Peru": 0.408776, "Philippines": 0.068764, "Poland": 0.956695, "Portugal": 1.164543, "Puerto Rico": 0.0, "Qatar": 29.435718, "Reunion": 0.0, "Romania": 1.291942, "Russia": 5.361872, "Rwanda": 0.006687, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.231387, "Senegal": 0.001909, "Serbia": 0.616548, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.54847, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.702124, "Slovenia": 0.826265, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.144281, "South Korea": 2.249691, "South Sudan": 0.0, "Spain": 1.358016, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.014874, "Swaziland": 0.0, "Sweden": 0.139503, "Switzerland": 0.769703, "Syria": 0.314726, "Taiwan": 2.108571, "Tajikistan": 0.030799, "Tanzania": 0.029121, "Thailand": 1.07902, "Timor-Leste": 0.0, "Togo": 0.024154, "Tonga": 0.0, "Trinidad and Tobago": 20.846939, "Tunisia": 0.994089, "Turkey": 1.096054, "Turkmenistan": 7.589088, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 4.92251, "Uganda": 0.0, "Ukraine": 1.384079, "United Arab Emirates": 14.060411, "United Kingdom": 2.228173, "Uruguay": 0.039498, "Uzbekistan": 2.691333, "Vanuatu": 0.0, "Venezuela": 1.020079, "Viet Nam": 0.175673, "Wallis and Futuna Islands": 0.0, "Yemen": 0.006119, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2021": {"Afghanistan": 0.005956, "Albania": 0.052631, "Algeria": 2.100412, "Andorra": 0.0, "Angola": 0.085536, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 2.083353, "Armenia": 1.956629, "Aruba": 0.0, "Australia": 2.979896, "Austria": 1.999475, "Azerbaijan": 2.523936, "Bahamas": 0.0, "Bahrain": 23.642933, "Bangladesh": 0.346862, "Barbados": 0.205075, "Belarus": 3.76403, "Belgium": 3.08121, "Belize": 0.0, "Benin": 0.009465, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.705627, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.149283, "Botswana": 0.0, "Brazil": 0.35448, "British Virgin Islands": 0.0, "Brunei Darussalam": 13.046933, "Bulgaria": 0.880323, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.059246, "Canada": 6.169093, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.595372, "China": 0.542724, "Christmas Island": 0.0, "Colombia": 0.451441, "Comoros": 0.0, "Congo": 0.392831, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.17939, "Croatia": 1.308067, "Cuba": 0.196253, "Curacao": 0.0, "Cyprus": 0.000177, "Czech Republic": 1.777341, "Democratic Republic of the Congo": 0.0, "Denmark": 0.816214, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.26892, "Ecuador": 0.057668, "Egypt": 1.156058, "El Salvador": 0.0, "Equatorial Guinea": 2.219633, "Eritrea": 0.0, "Estonia": 0.688327, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.770695, "France": 1.326183, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.477242, "Gambia": 0.0, "Georgia": 1.606986, "Germany": 2.079931, "Ghana": 0.144707, "Global": 1.001585, "Greece": 1.163427, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 1.299107, "Hungary": 2.277324, "Iceland": 0.000541, "India": 0.09481, "Indonesia": 0.270637, "International Transport": 0.0, "Iran": 5.311369, "Iraq": 0.690132, "Ireland": 2.105999, "Israel": 2.185248, "Italy": 2.548195, "Jamaica": 0.202368, "Japan": 1.777711, "Jordan": 0.736172, "Kazakhstan": 1.457571, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 11.721402, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.105982, "Laos": 0.0, "Latvia": 1.21184, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 2.567193, "Liechtenstein": 1.423536, "Lithuania": 1.436983, "Luxembourg": 2.457908, "Macao": 0.363442, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 2.44245, "Maldives": 0.0, "Mali": 0.0, "Malta": 1.600917, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 1.24346, "Micronesia (Federated States of)": 0.0, "Moldova": 0.632462, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.042446, "Mozambique": 0.059981, "Myanmar": 0.144323, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 3.890066, "New Caledonia": 0.0, "New Zealand": 1.297904, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.190456, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.343675, "Norway": 2.345509, "Occupied Palestinian Territory": 0.0, "Oman": 13.787812, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.326313, "Palau": 0.0, "Panama": 0.209475, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.079542, "Paraguay": 0.0, "Peru": 0.4544, "Philippines": 0.057877, "Poland": 1.059067, "Portugal": 1.132036, "Puerto Rico": 0.0, "Qatar": 31.072901, "Reunion": 0.0, "Romania": 1.319795, "Russia": 6.030566, "Rwanda": 0.00757, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 7.512159, "Senegal": 0.002011, "Serbia": 0.712093, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 3.740957, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 1.908065, "Slovenia": 0.869544, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.138634, "South Korea": 2.446255, "South Sudan": 0.0, "Spain": 1.413211, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.017238, "Swaziland": 0.0, "Sweden": 0.141789, "Switzerland": 0.831828, "Syria": 0.320633, "Taiwan": 2.308715, "Tajikistan": 0.031909, "Tanzania": 0.032757, "Thailand": 1.080827, "Timor-Leste": 0.0, "Togo": 0.025517, "Tonga": 0.0, "Trinidad and Tobago": 21.305957, "Tunisia": 1.115694, "Turkey": 1.349392, "Turkmenistan": 9.265475, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 4.857715, "Uganda": 0.0, "Ukraine": 1.242234, "United Arab Emirates": 13.90118, "United Kingdom": 2.3612, "Uruguay": 0.046259, "Uzbekistan": 2.822092, "Vanuatu": 0.0, "Venezuela": 1.146074, "Viet Nam": 0.140346, "Wallis and Futuna Islands": 0.0, "Yemen": 0.006264, "Zambia": 0.0, "Zimbabwe": 0.0}
          }}, 
      {id: 'cement', metadata: {
              "2017": {"Afghanistan": 0.001256, "Albania": 0.351291, "Algeria": 0.277278, "Andorra": 0.0, "Angola": 0.032966, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.099015, "Armenia": 0.072046, "Aruba": 0.0, "Australia": 0.122774, "Austria": 0.194418, "Azerbaijan": 0.092232, "Bahamas": 0.0, "Bahrain": 0.357213, "Bangladesh": 0.007386, "Barbados": 0.252761, "Belarus": 0.229419, "Belgium": 0.201275, "Belize": 0.0, "Benin": 0.018358, "Bermuda": 0.0, "Bhutan": 0.451704, "Bolivia": 0.124513, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.101175, "Botswana": 0.00242, "Brazil": 0.091512, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.172547, "Burkina Faso": 0.035163, "Burundi": 0.001563, "Cambodia": 0.145325, "Cameroon": 0.041302, "Canada": 0.18677, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.00899, "Chile": 0.04714, "China": 0.537615, "Christmas Island": 0.0, "Colombia": 0.108227, "Comoros": 0.0, "Congo": 0.076589, "Cook Islands": 0.0, "Costa Rica": 0.139738, "Cote dIvoire": 0.0, "Croatia": 0.307039, "Cuba": 0.056816, "Curacao": 0.0, "Cyprus": 0.763641, "Czech Republic": 0.164107, "Democratic Republic of the Congo": 0.004138, "Denmark": 0.208067, "Djibouti": 0.059601, "Dominica": 0.0, "Dominican Republic": 0.191307, "Ecuador": 0.134376, "Egypt": 0.213869, "El Salvador": 0.055678, "Equatorial Guinea": 0.0, "Eritrea": 0.023955, "Estonia": 0.23283, "Ethiopia": 0.032232, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.109594, "France": 0.09808, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.06699, "Gambia": 0.0, "Georgia": 0.208213, "Germany": 0.162278, "Ghana": 0.050516, "Global": 0.198416, "Greece": 0.344663, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.080442, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.206651, "Haiti": 0.007137, "Honduras": 0.094525, "Hong Kong": 0.080808, "Hungary": 0.080001, "Iceland": 0.0, "India": 0.089387, "Indonesia": 0.109511, "International Transport": 0.0, "Iran": 0.223773, "Iraq": 0.114595, "Ireland": 0.385512, "Israel": 0.238579, "Italy": 0.128516, "Jamaica": 0.128055, "Japan": 0.208655, "Jordan": 0.160008, "Kazakhstan": 0.208424, "Kenya": 0.049321, "Kiribati": 0.0, "Kosovo": 0.188313, "Kuwait": 0.287883, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.095969, "Laos": 0.214748, "Latvia": 0.223584, "Lebanon": 0.370625, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.023024, "Libya": 0.273385, "Liechtenstein": 0.0, "Lithuania": 0.155056, "Luxembourg": 0.621683, "Macao": 0.0, "Madagascar": 0.002961, "Malawi": 0.004572, "Malaysia": 0.393465, "Maldives": 0.0, "Mali": 0.013444, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.169953, "Micronesia (Federated States of)": 0.0, "Moldova": 0.16913, "Mongolia": 0.096752, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.152562, "Mozambique": 0.031874, "Myanmar": 0.039994, "Namibia": 0.171532, "Nauru": 0.0, "Nepal": 0.081242, "Netherlands": 0.017317, "New Caledonia": 0.139574, "New Zealand": 0.0935, "Nicaragua": 0.046662, "Niger": 0.000909, "Nigeria": 0.038049, "Niue": 0.0, "North Korea": 0.102252, "North Macedonia": 0.166547, "Norway": 0.145147, "Occupied Palestinian Territory": 0.0, "Oman": 0.376802, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.068176, "Palau": 0.0, "Panama": 0.181724, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.063513, "Peru": 0.13576, "Philippines": 0.093238, "Poland": 0.181572, "Portugal": 0.245512, "Puerto Rico": 0.0, "Qatar": 0.772772, "Reunion": 0.0, "Romania": 0.168043, "Russia": 0.141023, "Rwanda": 0.011593, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.701842, "Senegal": 0.132856, "Serbia": 0.10612, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.251324, "Slovenia": 0.195499, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.096775, "South Korea": 0.511546, "South Sudan": 0.0, "Spain": 0.202831, "Sri Lanka": 0.05002, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.03824, "Suriname": 0.020133, "Swaziland": 0.0, "Sweden": 0.147572, "Switzerland": 0.208221, "Syria": 0.039004, "Taiwan": 0.226368, "Tajikistan": 0.170664, "Tanzania": 0.028924, "Thailand": 0.315783, "Timor-Leste": 0.0, "Togo": 0.097284, "Tonga": 0.0, "Trinidad and Tobago": 0.175671, "Tunisia": 0.27144, "Turkey": 0.4808, "Turkmenistan": 0.23018, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.12227, "Uganda": 0.009359, "Ukraine": 0.079346, "United Arab Emirates": 0.670153, "United Kingdom": 0.066749, "Uruguay": 0.094137, "Uzbekistan": 0.114735, "Vanuatu": 0.0, "Venezuela": 0.069798, "Viet Nam": 0.454471, "Wallis and Futuna Islands": 0.0, "Yemen": 0.022327, "Zambia": 0.049506, "Zimbabwe": 0.031785}, 
              "2018": {"Afghanistan": 0.00155, "Albania": 0.353399, "Algeria": 0.295315, "Andorra": 0.0, "Angola": 0.033454, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.098364, "Armenia": 0.111096, "Aruba": 0.0, "Australia": 0.117769, "Austria": 0.206623, "Azerbaijan": 0.106669, "Bahamas": 0.0, "Bahrain": 0.375716, "Bangladesh": 0.008139, "Barbados": 0.252309, "Belarus": 0.223125, "Belgium": 0.221371, "Belize": 0.0, "Benin": 0.032853, "Bermuda": 0.0, "Bhutan": 0.471197, "Bolivia": 0.127649, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.111924, "Botswana": 0.000158, "Brazil": 0.092033, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.171902, "Burkina Faso": 0.037623, "Burundi": 0.003371, "Cambodia": 0.206897, "Cameroon": 0.043266, "Canada": 0.186708, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.009933, "Chile": 0.041826, "China": 0.555191, "Christmas Island": 0.0, "Colombia": 0.107585, "Comoros": 0.0, "Congo": 0.049852, "Cook Islands": 0.0, "Costa Rica": 0.146129, "Cote dIvoire": 0.0, "Croatia": 0.291004, "Cuba": 0.063175, "Curacao": 0.0, "Cyprus": 0.695883, "Czech Republic": 0.177277, "Democratic Republic of the Congo": 0.004663, "Denmark": 0.201111, "Djibouti": 0.065975, "Dominica": 0.0, "Dominican Republic": 0.195543, "Ecuador": 0.133481, "Egypt": 0.202449, "El Salvador": 0.067328, "Equatorial Guinea": 0.0, "Eritrea": 0.031491, "Estonia": 0.225211, "Ethiopia": 0.032428, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.10909, "France": 0.101048, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.08662, "Gambia": 0.0, "Georgia": 0.2004, "Germany": 0.159571, "Ghana": 0.062635, "Global": 0.204225, "Greece": 0.321582, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.080987, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.205814, "Haiti": 0.007041, "Honduras": 0.085107, "Hong Kong": 0.083652, "Hungary": 0.090196, "Iceland": 0.0, "India": 0.101508, "Indonesia": 0.115447, "International Transport": 0.0, "Iran": 0.222983, "Iraq": 0.120463, "Ireland": 0.396326, "Israel": 0.209956, "Italy": 0.129543, "Jamaica": 0.113361, "Japan": 0.20738, "Jordan": 0.156268, "Kazakhstan": 0.209879, "Kenya": 0.046775, "Kiribati": 0.0, "Kosovo": 0.194989, "Kuwait": 0.266971, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.121111, "Laos": 0.25781, "Latvia": 0.284627, "Lebanon": 0.351223, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.024885, "Libya": 0.269184, "Liechtenstein": 0.0, "Lithuania": 0.177784, "Luxembourg": 0.607804, "Macao": 0.0, "Madagascar": 0.003031, "Malawi": 0.004894, "Malaysia": 0.363362, "Maldives": 0.0, "Mali": 0.013413, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.168238, "Micronesia (Federated States of)": 0.0, "Moldova": 0.189161, "Mongolia": 0.131, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.155438, "Mozambique": 0.031606, "Myanmar": 0.047098, "Namibia": 0.201021, "Nauru": 0.0, "Nepal": 0.120481, "Netherlands": 0.012751, "New Caledonia": 0.115202, "New Zealand": 0.086383, "Nicaragua": 0.040112, "Niger": 0.000892, "Nigeria": 0.041017, "Niue": 0.0, "North Korea": 0.086807, "North Macedonia": 0.169984, "Norway": 0.137416, "Occupied Palestinian Territory": 0.0, "Oman": 0.402309, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.07091, "Palau": 0.0, "Panama": 0.155436, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.062646, "Peru": 0.134159, "Philippines": 0.10048, "Poland": 0.198729, "Portugal": 0.218747, "Puerto Rico": 0.0, "Qatar": 0.605933, "Reunion": 0.0, "Romania": 0.178756, "Russia": 0.137936, "Rwanda": 0.011604, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.717768, "Senegal": 0.134647, "Serbia": 0.116895, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.247245, "Slovenia": 0.21372, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.095328, "South Korea": 0.47801, "South Sudan": 0.0, "Spain": 0.206604, "Sri Lanka": 0.050237, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.037039, "Suriname": 0.019925, "Swaziland": 0.0, "Sweden": 0.158151, "Switzerland": 0.204171, "Syria": 0.03884, "Taiwan": 0.226669, "Tajikistan": 0.205797, "Tanzania": 0.030077, "Thailand": 0.315852, "Timor-Leste": 0.0, "Togo": 0.097712, "Tonga": 0.0, "Trinidad and Tobago": 0.17082, "Tunisia": 0.261901, "Turkey": 0.475955, "Turkmenistan": 0.239095, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.117332, "Uganda": 0.007925, "Ukraine": 0.083667, "United Arab Emirates": 0.622851, "United Kingdom": 0.065689, "Uruguay": 0.093429, "Uzbekistan": 0.116368, "Vanuatu": 0.0, "Venezuela": 0.067426, "Viet Nam": 0.522971, "Wallis and Futuna Islands": 0.0, "Yemen": 0.021325, "Zambia": 0.059767, "Zimbabwe": 0.03707}, 
              "2019": {"Afghanistan": 0.001015, "Albania": 0.364726, "Algeria": 0.258235, "Andorra": 0.0, "Angola": 0.034733, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.092544, "Armenia": 0.120932, "Aruba": 0.0, "Australia": 0.119869, "Austria": 0.199385, "Azerbaijan": 0.107153, "Bahamas": 0.0, "Bahrain": 0.411394, "Bangladesh": 0.008905, "Barbados": 0.251866, "Belarus": 0.235276, "Belgium": 0.244932, "Belize": 0.0, "Benin": 0.03154, "Bermuda": 0.0, "Bhutan": 0.591717, "Bolivia": 0.130588, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.108685, "Botswana": 0.0, "Brazil": 0.093799, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.159815, "Burkina Faso": 0.040688, "Burundi": 0.002447, "Cambodia": 0.32856, "Cameroon": 0.045088, "Canada": 0.18989, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.010092, "Chile": 0.043348, "China": 0.581544, "Christmas Island": 0.0, "Colombia": 0.110321, "Comoros": 0.0, "Congo": 0.050778, "Cook Islands": 0.0, "Costa Rica": 0.14487, "Cote dIvoire": 0.0, "Croatia": 0.286727, "Cuba": 0.055961, "Curacao": 0.0, "Cyprus": 0.642244, "Czech Republic": 0.187649, "Democratic Republic of the Congo": 0.005017, "Denmark": 0.194828, "Djibouti": 0.072159, "Dominica": 0.0, "Dominican Republic": 0.199508, "Ecuador": 0.142551, "Egypt": 0.18623, "El Salvador": 0.072842, "Equatorial Guinea": 0.0, "Eritrea": 0.03101, "Estonia": 0.222665, "Ethiopia": 0.034294, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.105674, "France": 0.102304, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.093298, "Gambia": 0.0, "Georgia": 0.280227, "Germany": 0.159795, "Ghana": 0.073633, "Global": 0.208309, "Greece": 0.31778, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.080681, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.202403, "Haiti": 0.006947, "Honduras": 0.078565, "Hong Kong": 0.081453, "Hungary": 0.104675, "Iceland": 0.0, "India": 0.10387, "Indonesia": 0.111862, "International Transport": 0.0, "Iran": 0.241355, "Iraq": 0.126046, "Ireland": 0.386559, "Israel": 0.165489, "Italy": 0.132459, "Jamaica": 0.11882, "Japan": 0.201349, "Jordan": 0.164859, "Kazakhstan": 0.202629, "Kenya": 0.045381, "Kiribati": 0.0, "Kosovo": 0.18889, "Kuwait": 0.27525, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.12376, "Laos": 0.284144, "Latvia": 0.292952, "Lebanon": 0.369016, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.026427, "Libya": 0.247747, "Liechtenstein": 0.0, "Lithuania": 0.202892, "Luxembourg": 0.636791, "Macao": 0.0, "Madagascar": 0.003237, "Malawi": 0.004991, "Malaysia": 0.329156, "Maldives": 0.0, "Mali": 0.01884, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.155875, "Micronesia (Federated States of)": 0.0, "Moldova": 0.204615, "Mongolia": 0.150741, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.137738, "Mozambique": 0.033394, "Myanmar": 0.0554, "Namibia": 0.212532, "Nauru": 0.0, "Nepal": 0.130502, "Netherlands": 0.000365, "New Caledonia": 0.102967, "New Zealand": 0.082867, "Nicaragua": 0.034906, "Niger": 0.004298, "Nigeria": 0.043075, "Niue": 0.0, "North Korea": 0.083033, "North Macedonia": 0.166374, "Norway": 0.134997, "Occupied Palestinian Territory": 0.0, "Oman": 0.39458, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.069133, "Palau": 0.0, "Panama": 0.134646, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.061814, "Peru": 0.138497, "Philippines": 0.105766, "Poland": 0.199837, "Portugal": 0.216241, "Puerto Rico": 0.0, "Qatar": 0.559866, "Reunion": 0.0, "Romania": 0.196065, "Russia": 0.139329, "Rwanda": 0.012746, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.686726, "Senegal": 0.167098, "Serbia": 0.129586, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.257479, "Slovenia": 0.226049, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.093876, "South Korea": 0.481237, "South Sudan": 0.0, "Spain": 0.192317, "Sri Lanka": 0.069802, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.035982, "Suriname": 0.019706, "Swaziland": 0.0, "Sweden": 0.131418, "Switzerland": 0.201993, "Syria": 0.038231, "Taiwan": 0.231645, "Tajikistan": 0.219931, "Tanzania": 0.042158, "Thailand": 0.312789, "Timor-Leste": 0.0, "Togo": 0.102148, "Tonga": 0.0, "Trinidad and Tobago": 0.172932, "Tunisia": 0.267502, "Turkey": 0.387495, "Turkmenistan": 0.247244, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.122326, "Uganda": 0.013545, "Ukraine": 0.08928, "United Arab Emirates": 0.621808, "United Kingdom": 0.066616, "Uruguay": 0.084766, "Uzbekistan": 0.141889, "Vanuatu": 0.0, "Venezuela": 0.061247, "Viet Nam": 0.551855, "Wallis and Futuna Islands": 0.0, "Yemen": 0.021035, "Zambia": 0.052283, "Zimbabwe": 0.037097}, 
              "2020": {"Afghanistan": 0.001557, "Albania": 0.36562, "Algeria": 0.2538, "Andorra": 0.0, "Angola": 0.033616, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.077904, "Armenia": 0.121579, "Aruba": 0.0, "Australia": 0.109862, "Austria": 0.204442, "Azerbaijan": 0.106609, "Bahamas": 0.0, "Bahrain": 0.416049, "Bangladesh": 0.008804, "Barbados": 0.251405, "Belarus": 0.238993, "Belgium": 0.227845, "Belize": 0.0, "Benin": 0.03066, "Bermuda": 0.0, "Bhutan": 0.587851, "Bolivia": 0.105939, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.11007, "Botswana": 0.0, "Brazil": 0.103438, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.152726, "Burkina Faso": 0.039609, "Burundi": 0.002378, "Cambodia": 0.324771, "Cameroon": 0.043882, "Canada": 0.174847, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.009778, "Chile": 0.042762, "China": 0.602298, "Christmas Island": 0.0, "Colombia": 0.098985, "Comoros": 0.0, "Congo": 0.049607, "Cook Islands": 0.0, "Costa Rica": 0.14378, "Cote dIvoire": 0.0, "Croatia": 0.296067, "Cuba": 0.05604, "Curacao": 0.0, "Cyprus": 0.712962, "Czech Republic": 0.179569, "Democratic Republic of the Congo": 0.004858, "Denmark": 0.210613, "Djibouti": 0.071089, "Dominica": 0.0, "Dominican Republic": 0.197372, "Ecuador": 0.140567, "Egypt": 0.168749, "El Salvador": 0.072698, "Equatorial Guinea": 0.0, "Eritrea": 0.030512, "Estonia": 0.015135, "Ethiopia": 0.033396, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.103024, "France": 0.092963, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.091271, "Gambia": 0.0, "Georgia": 0.280592, "Germany": 0.160298, "Ghana": 0.072127, "Global": 0.208844, "Greece": 0.283268, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.079489, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.202797, "Haiti": 0.006858, "Honduras": 0.0773, "Hong Kong": 0.0814, "Hungary": 0.095255, "Iceland": 0.0, "India": 0.088019, "Indonesia": 0.103743, "International Transport": 0.0, "Iran": 0.273285, "Iraq": 0.123104, "Ireland": 0.357784, "Israel": 0.162663, "Italy": 0.118641, "Jamaica": 0.134861, "Japan": 0.195539, "Jordan": 0.161388, "Kazakhstan": 0.234369, "Kenya": 0.05521, "Kiribati": 0.0, "Kosovo": 0.190799, "Kuwait": 0.280342, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.12181, "Laos": 0.279976, "Latvia": 0.290362, "Lebanon": 0.376769, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.025896, "Libya": 0.244587, "Liechtenstein": 0.0, "Lithuania": 0.197387, "Luxembourg": 0.633154, "Macao": 0.0, "Madagascar": 0.003158, "Malawi": 0.004859, "Malaysia": 0.402669, "Maldives": 0.0, "Mali": 0.018257, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.163894, "Micronesia (Federated States of)": 0.0, "Moldova": 0.20625, "Mongolia": 0.147909, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.136295, "Mozambique": 0.032438, "Myanmar": 0.055003, "Namibia": 0.208907, "Nauru": 0.0, "Nepal": 0.128207, "Netherlands": 0.0, "New Caledonia": 0.102597, "New Zealand": 0.074915, "Nicaragua": 0.034431, "Niger": 0.00414, "Nigeria": 0.042036, "Niue": 0.0, "North Korea": 0.083941, "North Macedonia": 0.166619, "Norway": 0.134762, "Occupied Palestinian Territory": 0.0, "Oman": 0.399736, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.077664, "Palau": 0.0, "Panama": 0.132707, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.060986, "Peru": 0.136502, "Philippines": 0.10406, "Poland": 0.200129, "Portugal": 0.224278, "Puerto Rico": 0.0, "Qatar": 0.569368, "Reunion": 0.0, "Romania": 0.200649, "Russia": 0.141334, "Rwanda": 0.012445, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.710971, "Senegal": 0.162672, "Serbia": 0.130344, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.264473, "Slovenia": 0.22425, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.086238, "South Korea": 0.44104, "South Sudan": 0.0, "Spain": 0.172954, "Sri Lanka": 0.069591, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.035004, "Suriname": 0.019486, "Swaziland": 0.0, "Sweden": 0.12268, "Switzerland": 0.194388, "Syria": 0.03699, "Taiwan": 0.24179, "Tajikistan": 0.215179, "Tanzania": 0.040907, "Thailand": 0.306756, "Timor-Leste": 0.0, "Togo": 0.099735, "Tonga": 0.0, "Trinidad and Tobago": 0.173138, "Tunisia": 0.265029, "Turkey": 0.485084, "Turkmenistan": 0.243604, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.121115, "Uganda": 0.013101, "Ukraine": 0.09171, "United Arab Emirates": 0.616745, "United Kingdom": 0.058153, "Uruguay": 0.084749, "Uzbekistan": 0.139563, "Vanuatu": 0.0, "Venezuela": 0.062281, "Viet Nam": 0.548774, "Wallis and Futuna Islands": 0.0, "Yemen": 0.020555, "Zambia": 0.050771, "Zimbabwe": 0.036351}, 
              "2021": {"Afghanistan": 0.000306, "Albania": 0.367175, "Algeria": 0.249628, "Andorra": 0.0, "Angola": 0.032568, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.10316, "Armenia": 0.122216, "Aruba": 0.0, "Australia": 0.108798, "Austria": 0.204114, "Azerbaijan": 0.106319, "Bahamas": 0.0, "Bahrain": 0.420088, "Bangladesh": 0.008703, "Barbados": 0.250952, "Belarus": 0.240379, "Belgium": 0.22687, "Belize": 0.0, "Benin": 0.029825, "Bermuda": 0.0, "Bhutan": 0.584086, "Bolivia": 0.117536, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.111667, "Botswana": 0.0, "Brazil": 0.111013, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.154796, "Burkina Faso": 0.038573, "Burundi": 0.002315, "Cambodia": 0.321008, "Cameroon": 0.04274, "Canada": 0.173626, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.009473, "Chile": 0.042339, "China": 0.598194, "Christmas Island": 0.0, "Colombia": 0.113956, "Comoros": 0.0, "Congo": 0.048471, "Cook Islands": 0.0, "Costa Rica": 0.142919, "Cote dIvoire": 0.0, "Croatia": 0.298746, "Cuba": 0.056261, "Curacao": 0.0, "Cyprus": 0.709151, "Czech Republic": 0.179914, "Democratic Republic of the Congo": 0.004704, "Denmark": 0.209584, "Djibouti": 0.070099, "Dominica": 0.0, "Dominican Republic": 0.195274, "Ecuador": 0.138915, "Egypt": 0.147861, "El Salvador": 0.072451, "Equatorial Guinea": 0.0, "Eritrea": 0.029969, "Estonia": 0.015144, "Ethiopia": 0.032537, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.102902, "France": 0.092889, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.089376, "Gambia": 0.0, "Georgia": 0.281184, "Germany": 0.158664, "Ghana": 0.070694, "Global": 0.211472, "Greece": 0.285082, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.07838, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.200941, "Haiti": 0.006773, "Honduras": 0.076122, "Hong Kong": 0.08147, "Hungary": 0.095655, "Iceland": 0.0, "India": 0.105858, "Indonesia": 0.10461, "International Transport": 0.0, "Iran": 0.256188, "Iraq": 0.120342, "Ireland": 0.354884, "Israel": 0.160057, "Italy": 0.119162, "Jamaica": 0.142247, "Japan": 0.190903, "Jordan": 0.15821, "Kazakhstan": 0.231717, "Kenya": 0.067605, "Kiribati": 0.0, "Kosovo": 0.191797, "Kuwait": 0.287619, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.119891, "Laos": 0.275992, "Latvia": 0.293946, "Lebanon": 0.381504, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.025368, "Libya": 0.241634, "Liechtenstein": 0.0, "Lithuania": 0.199768, "Luxembourg": 0.624318, "Macao": 0.0, "Madagascar": 0.003082, "Malawi": 0.004734, "Malaysia": 0.398683, "Maldives": 0.0, "Mali": 0.01769, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.176309, "Micronesia (Federated States of)": 0.0, "Moldova": 0.207822, "Mongolia": 0.145547, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.134869, "Mozambique": 0.031529, "Myanmar": 0.054619, "Namibia": 0.205518, "Nauru": 0.0, "Nepal": 0.125277, "Netherlands": 0.000362, "New Caledonia": 0.102099, "New Zealand": 0.073914, "Nicaragua": 0.033955, "Niger": 0.00399, "Nigeria": 0.041037, "Niue": 0.0, "North Korea": 0.095506, "North Macedonia": 0.167232, "Norway": 0.129789, "Occupied Palestinian Territory": 0.0, "Oman": 0.401763, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.080469, "Palau": 0.0, "Panama": 0.130972, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.060212, "Peru": 0.134839, "Philippines": 0.102516, "Poland": 0.195685, "Portugal": 0.224454, "Puerto Rico": 0.0, "Qatar": 0.58465, "Reunion": 0.0, "Romania": 0.201827, "Russia": 0.151071, "Rwanda": 0.012153, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.797994, "Senegal": 0.158425, "Serbia": 0.131438, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.264913, "Slovenia": 0.224063, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.085381, "South Korea": 0.457341, "South Sudan": 0.0, "Spain": 0.181289, "Sri Lanka": 0.069405, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.034071, "Suriname": 0.019298, "Swaziland": 0.0, "Sweden": 0.12153, "Switzerland": 0.193208, "Syria": 0.036033, "Taiwan": 0.245175, "Tajikistan": 0.210614, "Tanzania": 0.039695, "Thailand": 0.295402, "Timor-Leste": 0.0, "Togo": 0.097401, "Tonga": 0.0, "Trinidad and Tobago": 0.172285, "Tunisia": 0.262842, "Turkey": 0.523674, "Turkmenistan": 0.240093, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.122265, "Uganda": 0.012687, "Ukraine": 0.10157, "United Arab Emirates": 0.611617, "United Kingdom": 0.057961, "Uruguay": 0.084819, "Uzbekistan": 0.137291, "Vanuatu": 0.0, "Venezuela": 0.062923, "Viet Nam": 0.555266, "Wallis and Futuna Islands": 0.0, "Yemen": 0.02012, "Zambia": 0.049349, "Zimbabwe": 0.035615}
          }}, 
      {id: 'flaring', metadata: {
              "2017": {"Afghanistan": 0.0, "Albania": 0.010682, "Algeria": 0.402316, "Andorra": 0.0, "Angola": 0.236512, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.021787, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.604361, "Austria": 0.015714, "Azerbaijan": 0.02824, "Bahamas": 0.0, "Bahrain": 0.169865, "Bangladesh": 7.5e-05, "Barbados": 0.091867, "Belarus": 0.000629, "Belgium": 0.008691, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.004345, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.083955, "British Virgin Islands": 0.0, "Brunei Darussalam": 1.300912, "Bulgaria": 0.122168, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.080415, "Canada": 0.405826, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.029106, "Chile": 0.003147, "China": 0.002074, "Christmas Island": 0.0, "Colombia": 0.021376, "Comoros": 0.0, "Congo": 0.402274, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.005696, "Croatia": 0.074322, "Cuba": 0.000652, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.012093, "Democratic Republic of the Congo": 0.0, "Denmark": 0.042075, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.120299, "Egypt": 0.043137, "El Salvador": 0.0, "Equatorial Guinea": 0.395972, "Eritrea": 0.0, "Estonia": 2.4e-05, "Ethiopia": 2.7e-05, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.026613, "France": 0.043903, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.320111, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.027436, "Ghana": 0.020106, "Global": 0.051579, "Greece": 0.000721, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.008008, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.014562, "Iceland": 0.426266, "India": 0.002085, "Indonesia": 0.016586, "International Transport": 0.0, "Iran": 0.393116, "Iraq": 0.846641, "Ireland": 0.000998, "Israel": 0.000611, "Italy": 0.039185, "Jamaica": 0.0, "Japan": 0.003443, "Jordan": 0.0, "Kazakhstan": 0.973016, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.360462, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 8e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 1.152023, "Liechtenstein": 1e-05, "Lithuania": 0.0772, "Luxembourg": 7e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.166167, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.017955, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.057988, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.001961, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.000785, "Myanmar": 0.001297, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.064964, "New Caledonia": 0.0, "New Zealand": 0.229472, "Nicaragua": 0.0, "Niger": 0.003392, "Nigeria": 0.074291, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.209384, "Occupied Palestinian Territory": 0.0, "Oman": 1.024368, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.003151, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.010342, "Paraguay": 0.0, "Peru": 0.005598, "Philippines": 0.002326, "Poland": 0.121014, "Portugal": 0.111001, "Puerto Rico": 0.0, "Qatar": 0.717113, "Reunion": 0.0, "Romania": 0.039377, "Russia": 0.288246, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.127286, "Senegal": 0.000749, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.004172, "Slovenia": 0.06632, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000525, "South Korea": 0.0, "South Sudan": 0.0, "Spain": 0.082069, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0177, "Suriname": 0.006236, "Swaziland": 0.0, "Sweden": 0.079604, "Switzerland": 0.003688, "Syria": 0.117915, "Taiwan": 0.001883, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.009874, "Timor-Leste": 0.067784, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.250009, "Tunisia": 0.044758, "Turkey": 0.001913, "Turkmenistan": 0.524593, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.179645, "Uganda": 0.0, "Ukraine": 0.051592, "United Arab Emirates": 0.180184, "United Kingdom": 0.065107, "Uruguay": 0.0, "Uzbekistan": 0.049972, "Vanuatu": 0.0, "Venezuela": 0.430411, "Viet Nam": 0.019537, "Wallis and Futuna Islands": 0.0, "Yemen": 0.025483, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2018": {"Afghanistan": 0.0, "Albania": 0.004816, "Algeria": 0.390946, "Andorra": 0.0, "Angola": 0.167915, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.030594, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.677588, "Austria": 0.014394, "Azerbaijan": 0.036474, "Bahamas": 0.0, "Bahrain": 0.095925, "Bangladesh": 0.000116, "Barbados": 0.06569, "Belarus": 0.000648, "Belgium": 0.01059, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.004414, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.083291, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.948541, "Bulgaria": 0.099959, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.08012, "Canada": 0.419857, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.025451, "Chile": 0.004745, "China": 0.002365, "Christmas Island": 0.0, "Colombia": 0.021207, "Comoros": 0.0, "Congo": 0.546918, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.00382, "Croatia": 0.068414, "Cuba": 0.002357, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.009876, "Democratic Republic of the Congo": 0.0, "Denmark": 0.040329, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.095864, "Egypt": 0.0411, "El Salvador": 0.0, "Equatorial Guinea": 0.411898, "Eritrea": 0.0, "Estonia": 2.6e-05, "Ethiopia": 7e-05, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.01646, "France": 0.045199, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.159307, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.024217, "Ghana": 0.011367, "Global": 0.053634, "Greece": 0.001032, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.00667, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.015057, "Iceland": 0.443303, "India": 0.001819, "Indonesia": 0.014777, "International Transport": 0.0, "Iran": 0.378882, "Iraq": 0.822903, "Ireland": 4.2e-05, "Israel": 5.6e-05, "Italy": 0.038331, "Jamaica": 0.0, "Japan": 0.003354, "Jordan": 0.0, "Kazakhstan": 0.904091, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.379089, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 5e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 1.358856, "Liechtenstein": 1e-05, "Lithuania": 0.088173, "Luxembourg": 6.7e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.123926, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.059352, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.00079, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.000445, "Myanmar": 0.000862, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.063705, "New Caledonia": 0.0, "New Zealand": 0.205055, "Nicaragua": 0.0, "Niger": 0.00272, "Nigeria": 0.071441, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.203113, "Occupied Palestinian Territory": 0.000477, "Oman": 1.011165, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.002616, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.009463, "Paraguay": 0.0, "Peru": 0.005614, "Philippines": 0.001893, "Poland": 0.125526, "Portugal": 0.101833, "Puerto Rico": 0.0, "Qatar": 0.67764, "Reunion": 0.0, "Romania": 0.043889, "Russia": 0.339423, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.123856, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.003622, "Slovenia": 0.062183, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000996, "South Korea": 0.0, "South Sudan": 0.0, "Spain": 0.081082, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.016294, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.081186, "Switzerland": 0.003276, "Syria": 0.069282, "Taiwan": 0.002424, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.008622, "Timor-Leste": 0.107436, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.241961, "Tunisia": 0.046047, "Turkey": 0.002107, "Turkmenistan": 0.461902, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.219145, "Uganda": 0.0, "Ukraine": 0.053982, "United Arab Emirates": 0.178767, "United Kingdom": 0.067382, "Uruguay": 0.0, "Uzbekistan": 0.045782, "Vanuatu": 0.0, "Venezuela": 0.52283, "Viet Nam": 0.014908, "Wallis and Futuna Islands": 0.0, "Yemen": 0.030162, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2019": {"Afghanistan": 0.0, "Albania": 0.001557, "Algeria": 0.397461, "Andorra": 0.0, "Angola": 0.135106, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.039571, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.796589, "Austria": 0.013317, "Azerbaijan": 0.040921, "Bahamas": 0.0, "Bahrain": 0.214713, "Bangladesh": 0.000161, "Barbados": 0.065387, "Belarus": 0.000655, "Belgium": 0.010087, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.004618, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.082655, "British Virgin Islands": 0.0, "Brunei Darussalam": 1.315813, "Bulgaria": 0.117263, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.076151, "Canada": 0.421818, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.019817, "Chile": 0.002414, "China": 0.002677, "Christmas Island": 0.0, "Colombia": 0.019994, "Comoros": 0.0, "Congo": 0.565252, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.003545, "Croatia": 0.069481, "Cuba": 0.002724, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.007714, "Democratic Republic of the Congo": 0.0, "Denmark": 0.033596, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.099614, "Egypt": 0.041315, "El Salvador": 0.0, "Equatorial Guinea": 0.344034, "Eritrea": 0.0, "Estonia": 2.4e-05, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.011798, "France": 0.038896, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.221656, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.024395, "Ghana": 0.008267, "Global": 0.056569, "Greece": 0.000855, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.006796, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.015294, "Iceland": 0.4521, "India": 0.001774, "Indonesia": 0.014035, "International Transport": 0.0, "Iran": 0.299933, "Iraq": 0.810296, "Ireland": 5.8e-05, "Israel": 0.0, "Italy": 0.046148, "Jamaica": 0.0, "Japan": 0.002933, "Jordan": 7.6e-05, "Kazakhstan": 0.783724, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.309442, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 5e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 1.466449, "Liechtenstein": 1e-05, "Lithuania": 0.082111, "Luxembourg": 6.6e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.118348, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.067393, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 6.4e-05, "Myanmar": 0.000812, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.061166, "New Caledonia": 0.0, "New Zealand": 0.18409, "Nicaragua": 0.0, "Niger": 0.002391, "Nigeria": 0.071755, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.178936, "Occupied Palestinian Territory": 0.000157, "Oman": 1.010811, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.002072, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.006722, "Paraguay": 0.0, "Peru": 0.003411, "Philippines": 0.001431, "Poland": 0.112842, "Portugal": 0.110129, "Puerto Rico": 0.0, "Qatar": 0.617509, "Reunion": 0.0, "Romania": 0.044132, "Russia": 0.4299, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.110219, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.003498, "Slovenia": 0.058973, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000718, "South Korea": 0.0, "South Sudan": 0.0, "Spain": 0.077335, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.012096, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.05222, "Switzerland": 0.003889, "Syria": 0.087143, "Taiwan": 0.001388, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.008293, "Timor-Leste": 0.062953, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.228897, "Tunisia": 0.03847, "Turkey": 0.00219, "Turkmenistan": 0.410409, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.264367, "Uganda": 0.0, "Ukraine": 0.053269, "United Arab Emirates": 0.17738, "United Kingdom": 0.06414, "Uruguay": 0.0, "Uzbekistan": 0.035547, "Vanuatu": 0.0, "Venezuela": 0.619152, "Viet Nam": 0.015329, "Wallis and Futuna Islands": 0.0, "Yemen": 0.042575, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2020": {"Afghanistan": 0.0, "Albania": 6.6e-05, "Algeria": 0.403426, "Andorra": 0.0, "Angola": 0.104963, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.04411, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.672876, "Austria": 0.012265, "Azerbaijan": 0.024701, "Bahamas": 0.0, "Bahrain": 0.300501, "Bangladesh": 0.000167, "Barbados": 0.065267, "Belarus": 0.000647, "Belgium": 0.008775, "Belize": 0.003666, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.007552, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.082107, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.647003, "Bulgaria": 0.098038, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.063902, "Canada": 0.423793, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.016908, "Chile": 0.001442, "China": 0.003592, "Christmas Island": 0.0, "Colombia": 0.014393, "Comoros": 0.0, "Congo": 0.589795, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.003315, "Croatia": 0.070342, "Cuba": 0.002394, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.004991, "Democratic Republic of the Congo": 0.0, "Denmark": 0.021673, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.110769, "Egypt": 0.041284, "El Salvador": 0.0, "Equatorial Guinea": 0.509316, "Eritrea": 0.0, "Estonia": 2.1e-05, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.013806, "France": 0.033048, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.203744, "Gambia": 0.0, "Georgia": 0.001273, "Germany": 0.02178, "Ghana": 0.020639, "Global": 0.051981, "Greece": 0.000492, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.006526, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.662503, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.016623, "Iceland": 0.476923, "India": 0.002009, "Indonesia": 0.012966, "International Transport": 0.0, "Iran": 0.285543, "Iraq": 0.767506, "Ireland": 6.8e-05, "Israel": 0.0, "Italy": 0.035504, "Jamaica": 0.0, "Japan": 0.002751, "Jordan": 3.8e-05, "Kazakhstan": 0.887491, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.318584, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 6e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.698915, "Liechtenstein": 6e-06, "Lithuania": 0.064395, "Luxembourg": 5.9e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.136364, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.086049, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 5.1e-05, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 1e-05, "Myanmar": 0.000891, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.053426, "New Caledonia": 0.0, "New Zealand": 0.15426, "Nicaragua": 0.0, "Niger": 0.002874, "Nigeria": 0.064926, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.15428, "Occupied Palestinian Territory": 0.0, "Oman": 1.02402, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.001998, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.010536, "Paraguay": 0.0, "Peru": 0.004677, "Philippines": 0.001329, "Poland": 0.109946, "Portugal": 0.098344, "Puerto Rico": 0.0, "Qatar": 0.686234, "Reunion": 0.0, "Romania": 0.040833, "Russia": 0.404634, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.118246, "Senegal": 0.0, "Serbia": 5.9e-05, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.002413, "Slovenia": 0.059073, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000931, "South Korea": 6e-06, "South Sudan": 0.0, "Spain": 0.075127, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.010216, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.042912, "Switzerland": 0.003056, "Syria": 0.088485, "Taiwan": 0.005664, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.008484, "Timor-Leste": 0.062006, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.247683, "Tunisia": 0.036095, "Turkey": 0.00232, "Turkmenistan": 0.501492, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.201476, "Uganda": 0.0, "Ukraine": 0.052471, "United Arab Emirates": 0.175936, "United Kingdom": 0.051337, "Uruguay": 0.0, "Uzbekistan": 0.030889, "Vanuatu": 0.0, "Venezuela": 0.566745, "Viet Nam": 0.013286, "Wallis and Futuna Islands": 0.0, "Yemen": 0.050785, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2021": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.347072, "Andorra": 0.0, "Angola": 0.098133, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.051346, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.666359, "Austria": 0.012245, "Azerbaijan": 0.024515, "Bahamas": 0.0, "Bahrain": 0.174386, "Bangladesh": 0.000288, "Barbados": 0.065149, "Belarus": 0.000651, "Belgium": 0.008737, "Belize": 0.011984, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.005078, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.081675, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.910255, "Bulgaria": 0.099366, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.001429, "Cameroon": 0.053969, "Canada": 0.420835, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.019582, "Chile": 0.000596, "China": 0.00328, "Christmas Island": 0.0, "Colombia": 0.011953, "Comoros": 0.0, "Congo": 0.490366, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.001034, "Croatia": 0.070979, "Cuba": 0.006452, "Curacao": 0.0, "Cyprus": 0.0, "Czech Republic": 0.005001, "Democratic Republic of the Congo": 0.0, "Denmark": 0.021568, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.130475, "Egypt": 0.035831, "El Salvador": 0.0, "Equatorial Guinea": 0.292893, "Eritrea": 0.0, "Estonia": 2.1e-05, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.013685, "France": 0.033295, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 1.07477, "Gambia": 0.0, "Georgia": 0.00062, "Germany": 0.02167, "Ghana": 0.034312, "Global": 0.052663, "Greece": 0.000495, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.005329, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.307084, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.016692, "Iceland": 0.472201, "India": 0.001969, "Indonesia": 0.011504, "International Transport": 0.0, "Iran": 0.371554, "Iraq": 0.768708, "Ireland": 6.7e-05, "Israel": 0.000133, "Italy": 0.03566, "Jamaica": 0.0, "Japan": 0.002765, "Jordan": 8.8e-05, "Kazakhstan": 0.877448, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.319538, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 6e-06, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 1.674357, "Liechtenstein": 6e-06, "Lithuania": 0.065172, "Luxembourg": 5.8e-05, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.112102, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.0, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.096579, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.000734, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.052863, "New Caledonia": 0.0, "New Zealand": 0.152197, "Nicaragua": 0.0, "Niger": 0.003689, "Nigeria": 0.058381, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.281113, "Occupied Palestinian Territory": 0.0, "Oman": 1.029214, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.001909, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.012435, "Paraguay": 0.0, "Peru": 0.003597, "Philippines": 0.00143, "Poland": 0.110292, "Portugal": 0.098422, "Puerto Rico": 0.0, "Qatar": 0.703512, "Reunion": 0.0, "Romania": 0.041073, "Russia": 0.406069, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.108627, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.002417, "Slovenia": 0.059024, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.000882, "South Korea": 0.000118, "South Sudan": 0.0, "Spain": 0.074932, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.009983, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.04251, "Switzerland": 0.003037, "Syria": 0.091758, "Taiwan": 0.005655, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.00777, "Timor-Leste": 0.061023, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.182644, "Tunisia": 0.041749, "Turkey": 0.002303, "Turkmenistan": 0.346794, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.200845, "Uganda": 0.0, "Ukraine": 0.052927, "United Arab Emirates": 0.174473, "United Kingdom": 0.051632, "Uruguay": 0.0, "Uzbekistan": 0.025863, "Vanuatu": 0.0, "Venezuela": 0.545925, "Viet Nam": 0.011096, "Wallis and Futuna Islands": 0.0, "Yemen": 0.053605, "Zambia": 0.0, "Zimbabwe": 0.0}
          }}, 
      {id: 'other', metadata: {
              "2017": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.158558, "Austria": 0.136409, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.118785, "Belgium": 0.181338, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.030656, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.178516, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.060465, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.120355, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.035605, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.01327, "Czech Republic": 0.164196, "Democratic Republic of the Congo": 0.0, "Denmark": 0.066344, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.063915, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.132076, "France": 0.058762, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.103908, "Ghana": 0.0, "Global": 0.039776, "Greece": 0.052516, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.05957, "Iceland": 0.009448, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.111696, "Israel": 0.0, "Italy": 0.051615, "Jamaica": 0.0, "Japan": 0.066887, "Jordan": 0.0, "Kazakhstan": 0.180423, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.017702, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.018587, "Luxembourg": 0.128843, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.000608, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.080364, "New Caledonia": 0.0, "New Zealand": 0.127787, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.100049, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.123514, "Portugal": 0.084947, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.066272, "Russia": 0.111781, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.167793, "Slovenia": 0.048448, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.198867, "South Sudan": 0.0, "Spain": 0.065195, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.062291, "Switzerland": 0.020769, "Syria": 0.0, "Taiwan": 0.038242, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.085295, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.084423, "Uganda": 0.0, "Ukraine": 0.059478, "United Arab Emirates": 0.0, "United Kingdom": 0.045097, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2018": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.156082, "Austria": 0.136131, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.106598, "Belgium": 0.178088, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.030414, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.17633, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.058445, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.121052, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.036611, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.01647, "Czech Republic": 0.17077, "Democratic Republic of the Congo": 0.0, "Denmark": 0.069852, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.063948, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.121326, "France": 0.062963, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.105272, "Ghana": 0.0, "Global": 0.039366, "Greece": 0.055314, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.059484, "Iceland": 0.011561, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.132291, "Israel": 0.0, "Italy": 0.052752, "Jamaica": 0.0, "Japan": 0.066352, "Jordan": 0.0, "Kazakhstan": 0.154344, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.023282, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.013774, "Luxembourg": 0.127445, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.000415, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.075613, "New Caledonia": 0.0, "New Zealand": 0.126569, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.103345, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.125559, "Portugal": 0.090575, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.067033, "Russia": 0.12084, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.172042, "Slovenia": 0.05075, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.199575, "South Sudan": 0.0, "Spain": 0.066052, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.054086, "Switzerland": 0.020406, "Syria": 0.0, "Taiwan": 0.043201, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.082036, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.074349, "Uganda": 0.0, "Ukraine": 0.063134, "United Arab Emirates": 0.0, "United Kingdom": 0.045712, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2019": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.152544, "Austria": 0.130881, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.102645, "Belgium": 0.16182, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.030182, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.169888, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.057222, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.124665, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.034602, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.020488, "Czech Republic": 0.157356, "Democratic Republic of the Congo": 0.0, "Denmark": 0.056536, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.059684, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.106145, "France": 0.061252, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.100533, "Ghana": 0.0, "Global": 0.03949, "Greece": 0.054025, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.055634, "Iceland": 0.018302, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.103956, "Israel": 0.0, "Italy": 0.050784, "Jamaica": 0.0, "Japan": 0.063421, "Jordan": 0.0, "Kazakhstan": 0.182641, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.028177, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.01285, "Luxembourg": 0.126662, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.000363, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.068105, "New Caledonia": 0.0, "New Zealand": 0.132979, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.105081, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.126453, "Portugal": 0.088434, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.060227, "Russia": 0.114979, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.162341, "Slovenia": 0.050108, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.196559, "South Sudan": 0.0, "Spain": 0.064074, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.050823, "Switzerland": 0.019557, "Syria": 0.0, "Taiwan": 0.041762, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.07445, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.078699, "Uganda": 0.0, "Ukraine": 0.060848, "United Arab Emirates": 0.0, "United Kingdom": 0.047808, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2020": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.145626, "Austria": 0.12617, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.100998, "Belgium": 0.140655, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.029982, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.159939, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.054087, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.120384, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.037414, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.016026, "Czech Republic": 0.142754, "Democratic Republic of the Congo": 0.0, "Denmark": 0.069133, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.049588, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.104496, "France": 0.055629, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.094072, "Ghana": 0.0, "Global": 0.037789, "Greece": 0.036593, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.049722, "Iceland": 0.016873, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.108571, "Israel": 0.0, "Italy": 0.046263, "Jamaica": 0.0, "Japan": 0.060362, "Jordan": 0.0, "Kazakhstan": 0.201543, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.037745, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.01057, "Luxembourg": 0.078105, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.00037, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.063131, "New Caledonia": 0.0, "New Zealand": 0.112657, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.099631, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.132115, "Portugal": 0.081431, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.04476, "Russia": 0.11225, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.143683, "Slovenia": 0.049433, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.196404, "South Sudan": 0.0, "Spain": 0.056693, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.051291, "Switzerland": 0.018815, "Syria": 0.0, "Taiwan": 0.041685, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.07484, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.075405, "Uganda": 0.0, "Ukraine": 0.063153, "United Arab Emirates": 0.0, "United Kingdom": 0.040419, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}, 
              "2021": {"Afghanistan": 0.0, "Albania": 0.0, "Algeria": 0.0, "Andorra": 0.0, "Angola": 0.0, "Anguilla": 0.0, "Antarctica": 0.0, "Antigua and Barbuda": 0.0, "Argentina": 0.0, "Armenia": 0.0, "Aruba": 0.0, "Australia": 0.144215, "Austria": 0.125968, "Azerbaijan": 0.0, "Bahamas": 0.0, "Bahrain": 0.0, "Bangladesh": 0.0, "Barbados": 0.0, "Belarus": 0.101584, "Belgium": 0.140053, "Belize": 0.0, "Benin": 0.0, "Bermuda": 0.0, "Bhutan": 0.0, "Bolivia": 0.0, "Bonaire, Saint Eustatius and Saba": 0.0, "Bosnia and Herzegovina": 0.0, "Botswana": 0.0, "Brazil": 0.029824, "British Virgin Islands": 0.0, "Brunei Darussalam": 0.0, "Bulgaria": 0.162107, "Burkina Faso": 0.0, "Burundi": 0.0, "Cambodia": 0.0, "Cameroon": 0.0, "Canada": 0.053709, "Cape Verde": 0.0, "Central African Republic": 0.0, "Chad": 0.0, "Chile": 0.0, "China": 0.120303, "Christmas Island": 0.0, "Colombia": 0.0, "Comoros": 0.0, "Congo": 0.0, "Cook Islands": 0.0, "Costa Rica": 0.0, "Cote dIvoire": 0.0, "Croatia": 0.037753, "Cuba": 0.0, "Curacao": 0.0, "Cyprus": 0.015941, "Czech Republic": 0.143028, "Democratic Republic of the Congo": 0.0, "Denmark": 0.068796, "Djibouti": 0.0, "Dominica": 0.0, "Dominican Republic": 0.0, "Ecuador": 0.0, "Egypt": 0.0, "El Salvador": 0.0, "Equatorial Guinea": 0.0, "Eritrea": 0.0, "Estonia": 0.049616, "Ethiopia": 0.0, "Faeroe Islands": 0.0, "Fiji": 0.0, "Finland": 0.10358, "France": 0.056044, "French Equatorial Africa": 0.0, "French Guiana": 0.0, "French Polynesia": 0.0, "French West Africa": 0.0, "Gabon": 0.0, "Gambia": 0.0, "Georgia": 0.0, "Germany": 0.093593, "Ghana": 0.0, "Global": 0.037443, "Greece": 0.036827, "Greenland": 0.0, "Grenada": 0.0, "Guadeloupe": 0.0, "Guatemala": 0.0, "Guinea": 0.0, "Guinea-Bissau": 0.0, "Guyana": 0.0, "Haiti": 0.0, "Honduras": 0.0, "Hong Kong": 0.0, "Hungary": 0.049931, "Iceland": 0.016706, "India": 0.0, "Indonesia": 0.0, "International Transport": 0.0, "Iran": 0.0, "Iraq": 0.0, "Ireland": 0.107691, "Israel": 0.0, "Italy": 0.046466, "Jamaica": 0.0, "Japan": 0.060669, "Jordan": 0.0, "Kazakhstan": 0.199262, "Kenya": 0.0, "Kiribati": 0.0, "Kosovo": 0.0, "Kuwait": 0.0, "Kuwaiti Oil Fires": 0.0, "Kyrgyzstan": 0.0, "Laos": 0.0, "Latvia": 0.038211, "Lebanon": 0.0, "Leeward Islands": 0.0, "Lesotho": 0.0, "Liberia": 0.0, "Libya": 0.0, "Liechtenstein": 0.0, "Lithuania": 0.010698, "Luxembourg": 0.077015, "Macao": 0.0, "Madagascar": 0.0, "Malawi": 0.0, "Malaysia": 0.0, "Maldives": 0.0, "Mali": 0.0, "Malta": 0.000362, "Marshall Islands": 0.0, "Martinique": 0.0, "Mauritania": 0.0, "Mauritius": 0.0, "Mayotte": 0.0, "Mexico": 0.0, "Micronesia (Federated States of)": 0.0, "Moldova": 0.0, "Mongolia": 0.0, "Montenegro": 0.0, "Montserrat": 0.0, "Morocco": 0.0, "Mozambique": 0.0, "Myanmar": 0.0, "Namibia": 0.0, "Nauru": 0.0, "Nepal": 0.0, "Netherlands": 0.062465, "New Caledonia": 0.0, "New Zealand": 0.111151, "Nicaragua": 0.0, "Niger": 0.0, "Nigeria": 0.0, "Niue": 0.0, "North Korea": 0.0, "North Macedonia": 0.0, "Norway": 0.068484, "Occupied Palestinian Territory": 0.0, "Oman": 0.0, "Pacific Islands (Palau)": 0.0, "Pakistan": 0.0, "Palau": 0.0, "Panama": 0.0, "Panama Canal Zone": 0.0, "Papua New Guinea": 0.0, "Paraguay": 0.0, "Peru": 0.0, "Philippines": 0.0, "Poland": 0.132531, "Portugal": 0.081495, "Puerto Rico": 0.0, "Qatar": 0.0, "Reunion": 0.0, "Romania": 0.045023, "Russia": 0.112648, "Rwanda": 0.0, "Ryukyu Islands": 0.0, "Saint Helena": 0.0, "Saint Kitts and Nevis": 0.0, "Saint Lucia": 0.0, "Saint Pierre and Miquelon": 0.0, "Saint Vincent and the Grenadines": 0.0, "Samoa": 0.0, "Sao Tome and Principe": 0.0, "Saudi Arabia": 0.0, "Senegal": 0.0, "Serbia": 0.0, "Seychelles": 0.0, "Sierra Leone": 0.0, "Singapore": 0.0, "Sint Maarten (Dutch part)": 0.0, "Slovakia": 0.143922, "Slovenia": 0.049391, "Solomon Islands": 0.0, "Somalia": 0.0, "South Africa": 0.0, "South Korea": 0.196459, "South Sudan": 0.0, "Spain": 0.056546, "Sri Lanka": 0.0, "St. Kitts-Nevis-Anguilla": 0.0, "Sudan": 0.0, "Suriname": 0.0, "Swaziland": 0.0, "Sweden": 0.05081, "Switzerland": 0.0187, "Syria": 0.0, "Taiwan": 0.041618, "Tajikistan": 0.0, "Tanzania": 0.0, "Thailand": 0.0, "Timor-Leste": 0.0, "Togo": 0.0, "Tonga": 0.0, "Trinidad and Tobago": 0.0, "Tunisia": 0.0, "Turkey": 0.074275, "Turkmenistan": 0.0, "Turks and Caicos Islands": 0.0, "Tuvalu": 0.0, "USA": 0.075169, "Uganda": 0.0, "Ukraine": 0.063701, "United Arab Emirates": 0.0, "United Kingdom": 0.040652, "Uruguay": 0.0, "Uzbekistan": 0.0, "Vanuatu": 0.0, "Venezuela": 0.0, "Viet Nam": 0.0, "Wallis and Futuna Islands": 0.0, "Yemen": 0.0, "Zambia": 0.0, "Zimbabwe": 0.0}
          }}
      ],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};
console.log(data_pie2);



// config 
const config5 = {
  type: 'pie',
  data: data_pie2,
  options: {
    parsing: {
      key: 'metadata.2017.Afghanistan'
    },
    aspectRatio: 2,
    }
};
//console.log(configpie)

// render init block
const pieChart = new Chart(
  document.getElementById('pieChart'),
  config5
);
console.log(config5);

function changeYearCountry(){
    const year = document.getElementById('year').value;
    const Country = document.getElementById('Country').value;
    console.log(year);
    console.log(Country);
    
    const output1 = `metadata.${year}.${Country}`;
    console.log(output1)


    barChart2.config4.options.parsing.yAxisKey = output1;
    barChart2.update();
    
    pieChart.config5.options.parsing.key = output1;
    pieChart.update();
}


// multiple lines chart
// setup 
const data_line = {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [{
        label: 'Total',
        data: [4.749682, 4.792753, 4.775633, 4.497423, 4.693699],
        backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        ],
        borderColor: [
        'rgba(255, 26, 104, 1)',
        ],
        tension: 0.4
    }, {
        label: 'Coal',
        data: [1.9088569999999998, 1.919213, 1.896468, 1.80776, 1.893923],
        backgroundColor: [
        'rgba(54, 102, 235, 0.2)',
        ],
        borderColor: [
        'rgba(54, 102, 235, 1)',
        ],
        tension: 0.4
        }, {
        label: 'Oil',
        data: [1.61091, 1.5963500000000002, 1.58992, 1.427353, 1.496614],
        backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
        'rgba(255, 206, 86, 1)',
        ],
        tension: 0.4
    }, {
        label: 'Gas',
        data: [0.940144, 0.979965, 0.9848779999999999, 0.963695, 1.001585],
        backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
        'rgba(75, 192, 192, 1)',
        ],
        tension: 0.4
    }, {
        label: 'Cement',
        data: [0.19841599999999998, 0.204225, 0.208309, 0.208844, 0.211472],
        backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
        'rgba(153, 102, 255, 1)',
        ],
        tension: 0.4
    }, {
        label: 'Flaring',
        data: [0.051579, 0.053633999999999994, 0.056568999999999994, 0.051981, 0.052662999999999995],
        backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
        'rgba(255, 159, 64, 1)',
        ],
        tension: 0.4
    }, {
        label: 'Other',
        data: [0.039776, 0.039366, 0.039490000000000004, 0.037788999999999996, 0.037443],
        backgroundColor: [
        'rgba(0, 0, 0, 0.2)',
        ],
        borderColor: [
        'rgba(0, 0, 0, 1)',
        ],
        tension: 0.4
    }]
};
  
const customLegend = {
    id: 'customLegend',
    afterDraw: (chart, args, pluginOptions) => {
        const {ctx, data, chartArea: {left, right, top, bottom, width, height}, scales: {x,y} } = chart;
              
        ctx.save();
              
        data.datasets.forEach((dataset, index) => {
            let color = 'transparent';
            if(chart.isDatasetVisible(index) === true) {
                color = dataset.borderColor;
            };
  
            ctx.font = 'bolder 14px sans-serif';
            ctx.fillStyle = color;
            ctx.textAlign = 'right';
            ctx.fillText(dataset.label, left -40, chart.getDatasetMeta(index).data[0].y);
            // ctx.fillText(dataset.label, dataset.data[dataset.data.length - 1].x + 6, dataset.data[dataset.data.length - 1].y);
        });
  
        ctx.restore();
    }
}
// config 
const config3 = {
    type: 'line',
    data: data_line,
    options: {
        layout: {
            padding: {
                left: (context) => {
                    const labelText = context.chart.data.datasets[4].label;
                    return context.chart.ctx.measureText(labelText).width + 25;
                }
            }
        },
        scales: {
            x: {
              ticks: {
                  //align: 'start',
                  color: 'darkblue',
                  font: {
                      size: 14,
                      weight: 'bolder' 
                    }
              }
            },
            y: {
              ticks: {
                  //color: 'darkcyan',
                  font: {
                      size: 14
                  }
              },
              beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Global CO2 Emissions Data",
                color: 'darkblue',
                font: {
                    size: 35,
                    weight: 'bolder' 
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
    },
    plugins: [customLegend]
};
  
// render init block
const all_lineChart = new Chart(
    document.getElementById('all_lineChart'),
    config3
);
//console.log(all_lineChart)   

// setup bar chart
const dataBar = {
    labels: ['Qatar', 'Bahrain', 'Kuwait', 'Trinidad and Tobago', 'Brunei Darussalam', 'United Arab Emirates', 'New Caledonia', 'Saudi Arabia', 'Oman', 'Australia'],
    datasets: [{
        label: 'Total',
        data: [35.587357, 26.66372, 24.972098, 23.677599, 23.532003, 21.792151, 19.097542, 18.702989, 17.916536, 15.091473],
        backgroundColor: [
        'rgba(255, 26, 104, 0.2)'
        ],
        borderColor: [
        'rgb(255, 26, 104)'
        ],
        tension: 0.4,
        type: 'line'
    },{
        label: 'Coal',
        data: [0, 0, 0, 0, 0.865973, 0.714923, 9.177665, 0, 0, 5.823767],
        backgroundColor: [
        'rgba(54, 102, 235, 0.2)'
        ],
        borderColor: [
        'rgba(54, 102, 235, 1)'
        ],
        borderWidth: 3
    }, {
        label: 'Oil',
        data: [3.226295, 2.426313, 12.643539, 2.016713, 8.708841, 6.389958, 9.817779, 10.28421, 2.697747, 5.368438],
        backgroundColor: [
        'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
        'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 3
    }, {
        label: 'Gas',
        data: [31.072901, 23.642933, 11.721402, 21.305957, 13.046933, 13.90118, 0, 7.5121590000000005, 13.787812, 2.979896],
        backgroundColor: [
        'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
        'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 3
    }, {
        label: 'Cement',
        data: [0.58465, 0.42008799999999996, 0.287619, 0.172285, 0, 0.611617, 0.102099, 0.797994, 0.401763, 0.10879799999999999],
        backgroundColor: [
        'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
        'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 3
    }, {
        label: 'Flaring',
        data: [0.7035119999999999, 0.17438599999999999, 0.319538, 0.182644, 0.9102549999999999, 0.174473, 0, 0.108627, 1.029214, 0.6663589999999999],
        backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
        'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
    }, {
        label: 'Other',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.14421499999999998],
        backgroundColor: [
        'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
        'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 3
    }]
};    

// config bar chart
const configBar = {
    type: 'bar',
    data: dataBar,
    options: {
        scales: {
        x: {
            ticks: {
            //align: 'start',
            color: 'darkblue',
            font: {
                size: 14,
                weight: 'bolder' 
            }
            },
            stacked: true
        },
        y: {
            beginAtZero: true,
            stacked: true
        }
        },
        plugins: {
        legend: {
            display: true
        },
        title: {
            display: true,
            text: "Top 10 CO2 Emitting Countries - 2021",
            color: 'darkblue',
            font: {
                size: 35,
                weight: 'bolder' 
            },
            padding: {
                top: 10,
                bottom: 30
            }
            }
    }
    },
};

// render bar chart
const barChart = new Chart(
  document.getElementById('barChart'),
  configBar
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;