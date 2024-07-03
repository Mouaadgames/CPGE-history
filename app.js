
const axios = require('axios')
const fs = require('node:fs');
const path = require('node:path');

const CPGEList = {
  "26261U": "Addakhla  -  Lycée Okba Ibn Nafea",
  "05026M": "Agadir  -  Lycée Réda Slaoui",
  "54376D": "Benguerir  -  Lycée d'Excellence Mohammed VI",
  "07699T": "Beni Mellal -  Lycée Qualifiant Technique Mohammed V",
  "01566B": "Casablanca -  Lycée Mohammed V",
  "58169B": "CASABLANCA -  Lycée Mohammed VI d'excellence - Casablanca",
  "01483L": "Casablanca -  Lycée Qualifiant  Al-Khansaa",
  "08732R": "El Jadida -  Lycée Qualifiant Technique Errazi",
  "28808M": "Errachidia -  Lycée qualifiant Moulay Ali Cherif",
  "02067W": "Fête -  Lycée Qualifiant Moulay Idriss",
  "10662N": "Guelmim -  LYCEE QUALIFIANT BAB ESSAHRA",
  "25529Y": "Kénitra  -  Lycée Mohammed 6",
  "12259Z": "Khouribga  -  Lycée Ibn Abdoun",
  "06475M": "Laâyoune  -  Lycée Qualifiant Lissane Eddine Ibn Al-Khatib",
  "18542D": "Marrakech  -  Lycée Ibn Timiya",
  "56609F": "Martil -  Lycée Méditerranéen LYMED",
  "04095A": "Meknés  -  Lycée Qualifiant Omar Ibn Al-Khattab",
  "03947P": "Müknes -  Lycée Qualifiant Moulay Ismail",
  "01911B": "Mohammedia  -  Lycée Technique",
  "12749G": "Nador  -  LYCEE QUALIFIANT ABDELKARIM AL KHATTABI",
  "27239G": "OUARZAZAT -  Lycée qualifiant Prince Héritier Moulay El Hassan",
  "04398E": "Oujda  -  Lycée Omar Ibn Abdelaziz",
  "55530H": "Rabat -  Lycée Al-Zahrawi- Rabat",
  "01121T": "Rabat -  Lycée Moulay Youssef",
  "01118P": "Rabat -  Lycée Omar Al-Khayyam",
  "25743F": "Safi -  Lycée Moulay Abdellah",
  "01265Z": "Salé -  Lycée Selmane Al-Farissi",
  "14638K": "Settat  -  Lycée Technique",
  "18410K": "Tanger  -  Lycée Moulay Hassan",
  "25736Y": "Taza  -  Lycée Charrif El Idrissi",
  "26974U": "Tetouan -  Centre CPGE ",
}

let FilierResulta = [
  {
    schoolName: 'Addakhla  -  Lycée Okba Ibn Nafea',
    id: '26261U',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'Agadir  -  Lycée Réda Slaoui',
    id: '05026M',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Agadir  -  Lycée Réda Slaoui',
    id: '05026M',
    name: 'Technologie et Sciences Industrielles',
    value: '41'
  },
  {
    schoolName: 'Agadir  -  Lycée Réda Slaoui',
    id: '05026M',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Agadir  -  Lycée Réda Slaoui',
    id: '05026M',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'Agadir  -  Lycée Réda Slaoui',
    id: '05026M',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: "Benguerir  -  Lycée d'Excellence Mohammed VI",
    id: '54376D',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: "Benguerir  -  Lycée d'Excellence Mohammed VI",
    id: '54376D',
    name: 'Technologie et Sciences Industrielles',
    value: '41'
  },
  {
    schoolName: 'Beni Mellal -  Lycée Qualifiant Technique Mohammed V',
    id: '07699T',
    name: 'Technologie et Sciences Industrielles',
    value: '41'
  },
  {
    schoolName: 'Beni Mellal -  Lycée Qualifiant Technique Mohammed V',
    id: '07699T',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Casablanca -  Lycée Mohammed V',
    id: '01566B',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Casablanca -  Lycée Mohammed V',
    id: '01566B',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: "CASABLANCA -  Lycée Mohammed VI d'excellence - Casablanca",
    id: '58169B',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: "CASABLANCA -  Lycée Mohammed VI d'excellence - Casablanca",
    id: '58169B',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Casablanca -  Lycée Qualifiant  Al-Khansaa',
    id: '01483L',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Casablanca -  Lycée Qualifiant  Al-Khansaa',
    id: '01483L',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Casablanca -  Lycée Qualifiant  Al-Khansaa',
    id: '01483L',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'El Jadida -  Lycée Qualifiant Technique Errazi',
    id: '08732R',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'El Jadida -  Lycée Qualifiant Technique Errazi',
    id: '08732R',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'El Jadida -  Lycée Qualifiant Technique Errazi',
    id: '08732R',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'El Jadida -  Lycée Qualifiant Technique Errazi',
    id: '08732R',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Errachidia -  Lycée qualifiant Moulay Ali Cherif',
    id: '28808M',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Fête -  Lycée Qualifiant Moulay Idriss',
    id: '02067W',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'Fête -  Lycée Qualifiant Moulay Idriss',
    id: '02067W',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Fête -  Lycée Qualifiant Moulay Idriss',
    id: '02067W',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Guelmim -  LYCEE QUALIFIANT BAB ESSAHRA',
    id: '10662N',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Guelmim -  LYCEE QUALIFIANT BAB ESSAHRA',
    id: '10662N',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Guelmim -  LYCEE QUALIFIANT BAB ESSAHRA',
    id: '10662N',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'Kénitra  -  Lycée Mohammed 6',
    id: '25529Y',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'Kénitra  -  Lycée Mohammed 6',
    id: '25529Y',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Kénitra  -  Lycée Mohammed 6',
    id: '25529Y',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Kénitra  -  Lycée Mohammed 6',
    id: '25529Y',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Khouribga  -  Lycée Ibn Abdoun',
    id: '12259Z',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Laâyoune  -  Lycée Qualifiant Lissane Eddine Ibn Al-Khatib',
    id: '06475M',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Laâyoune  -  Lycée Qualifiant Lissane Eddine Ibn Al-Khatib',
    id: '06475M',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Marrakech  -  Lycée Ibn Timiya',
    id: '18542D',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Marrakech  -  Lycée Ibn Timiya',
    id: '18542D',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Marrakech  -  Lycée Ibn Timiya',
    id: '18542D',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'Martil -  Lycée Méditerranéen LYMED',
    id: '56609F',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Meknés  -  Lycée Qualifiant Omar Ibn Al-Khattab',
    id: '04095A',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Meknés  -  Lycée Qualifiant Omar Ibn Al-Khattab',
    id: '04095A',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'Müknes -  Lycée Qualifiant Moulay Ismail',
    id: '03947P',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Müknes -  Lycée Qualifiant Moulay Ismail',
    id: '03947P',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Mohammedia  -  Lycée Technique',
    id: '01911B',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Mohammedia  -  Lycée Technique',
    id: '01911B',
    name: 'Technologie et Sciences Industrielles',
    value: '41'
  },
  {
    schoolName: 'Nador  -  LYCEE QUALIFIANT ABDELKARIM AL KHATTABI',
    id: '12749G',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Nador  -  LYCEE QUALIFIANT ABDELKARIM AL KHATTABI',
    id: '12749G',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'OUARZAZAT -  Lycée qualifiant Prince Héritier Moulay El Hassan',
    id: '27239G',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'OUARZAZAT -  Lycée qualifiant Prince Héritier Moulay El Hassan',
    id: '27239G',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'OUARZAZAT -  Lycée qualifiant Prince Héritier Moulay El Hassan',
    id: '27239G',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Oujda  -  Lycée Omar Ibn Abdelaziz',
    id: '04398E',
    name: 'Technologie et Sciences Industrielles',
    value: '41'
  },
  {
    schoolName: 'Oujda  -  Lycée Omar Ibn Abdelaziz',
    id: '04398E',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Rabat -  Lycée Al-Zahrawi- Rabat',
    id: '55530H',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Rabat -  Lycée Moulay Youssef',
    id: '01121T',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Rabat -  Lycée Moulay Youssef',
    id: '01121T',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'Rabat -  Lycée Omar Al-Khayyam',
    id: '01118P',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Rabat -  Lycée Omar Al-Khayyam',
    id: '01118P',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Safi -  Lycée Moulay Abdellah',
    id: '25743F',
    name: 'Technologie et Sciences Industrielles',
    value: '41'
  },
  {
    schoolName: 'Safi -  Lycée Moulay Abdellah',
    id: '25743F',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Safi -  Lycée Moulay Abdellah',
    id: '25743F',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Salé -  Lycée Selmane Al-Farissi',
    id: '01265Z',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Salé -  Lycée Selmane Al-Farissi',
    id: '01265Z',
    name: 'Technologie et Sciences Industrielles',
    value: '41'
  },
  {
    schoolName: 'Settat  -  Lycée Technique',
    id: '14638K',
    name: 'Technologie et Sciences Industrielles',
    value: '41'
  },
  {
    schoolName: 'Settat  -  Lycée Technique',
    id: '14638K',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Settat  -  Lycée Technique',
    id: '14638K',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Tanger  -  Lycée Moulay Hassan',
    id: '18410K',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Tanger  -  Lycée Moulay Hassan',
    id: '18410K',
    name: "Physique, Chimie et Sciences de l'Ingénieur",
    value: '38'
  },
  {
    schoolName: 'Tanger  -  Lycée Moulay Hassan',
    id: '18410K',
    name: 'Economie et Commerce - Option Technologique',
    value: '40'
  },
  {
    schoolName: 'Tanger  -  Lycée Moulay Hassan',
    id: '18410K',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Taza  -  Lycée Charrif El Idrissi',
    id: '25736Y',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  },
  {
    schoolName: 'Taza  -  Lycée Charrif El Idrissi',
    id: '25736Y',
    name: 'Economie et Commerce - Option Scientifique',
    value: '39'
  },
  {
    schoolName: 'Tetouan -  Centre CPGE ',
    id: '26974U',
    name: 'Technologie et Sciences Industrielles',
    value: '41'
  },
  {
    schoolName: 'Tetouan -  Centre CPGE ',
    id: '26974U',
    name: 'Mathématiques Physique et Sciences de l’Ingénieur',
    value: '36'
  }
]


async function getFilier() {
  for (const [id, schoolName] of Object.entries(CPGEList)) {
    var bodyFormData = new FormData();
    bodyFormData.append('cd_etab', id);

    res = await axios({
      method: "post",
      url: 'https://moutamadris.men.gov.ma/moutamadris/CpgePublicationResult/FiltreFiliereParCentre',
      data: bodyFormData
    })

    console.log(res.data);

    for (let i = 0; i < res.data.length; i++) {
      const value = res.data[i].Value
      const name = res.data[i].Text
      resulta.push({ schoolName, id, name, value })
    }
    console.log(resulta);
  }
}

async function getLists() {

  for (const { __, id, _, value } of FilierResulta) {
    const schoolID = id
    const filierId = value

    var bodyFormData = new FormData();
    bodyFormData.append('SelectedCentre', schoolID);
    bodyFormData.append('SelectedFiliere', filierId);
    bodyFormData.append('SelectedTranche', '14'); // 14 : principal // 3 : attend 1 // 4 : attend 2 // 5 : attend 3

    //[TO-DO]: handle err
    res = await axios({
      method: "post",
      url: 'https://moutamadris.men.gov.ma/moutamadris/CpgePublicationResult/RechercheCandidat',
      data: bodyFormData
    })


    try {
      fs.writeFileSync(path.join(__dirname, "output", `${schoolID}-${filierId}.html`), res.data);
    } catch (err) {
      console.error(err);
    }

    console.log(`${schoolID}-${filierId} Done!`);
  }

}
//   schoolName: 'Addakhla  -  Lycée Okba Ibn Nafea',
//   id: '26261U',
//   name: "Physique, Chimie et Sciences de l'Ingénieur",
//   value: '38'

// console.log(resulta.length) //resulta.length
getLists()






// const DATA = ```
// <select class="form-control" id="SelectedCentre" name="SelectedCentre"><option value=""></option>
// <option value="26261U">Addakhla  -  Lycée Okba Ibn Nafea</option>
// <option value="05026M">Agadir  -  Lycée Réda Slaoui</option>
// <option value="54376D">Benguerir  -  Lycée d'Excellence Mohammed VI</option>
// <option value="07699T">Beni Mellal -  Lycée Qualifiant Technique Mohammed V</option>
// <option value="01566B">Casablanca -  Lycée Mohammed V</option>
// <option value="58169B">CASABLANCA -  Lycée Mohammed VI d'excellence - Casablanca</option>
// <option value="01483L">Casablanca -  Lycée Qualifiant  Al-Khansaa</option>
// <option value="08732R">El Jadida -  Lycée Qualifiant Technique Errazi</option>
// <option value="28808M">Errachidia -  Lycée qualifiant Moulay Ali Cherif</option>
// <option value="02067W">Fès -  Lycée Qualifiant Moulay Idriss</option>
// <option value="10662N">Guelmim -  LYCEE QUALIFIANT BAB ESSAHRA</option>
// <option value="25529Y">Kénitra  -  Lycée Mohammed 6</option>
// <option value="12259Z">Khouribga  -  Lycée Ibn Abdoun</option>
// <option value="06475M">Laâyoune  -  Lycée Qualifiant Lissane Eddine Ibn Al-Khatib</option>
// <option value="18542D">Marrakech  -  Lycée Ibn Timiya</option>
// <option value="56609F">Martil -  Lycée Méditerranéen LYMED</option>
// <option value="04095A">Meknès  -  Lycée Qualifiant Omar Ibn Al-Khattab</option>
// <option value="03947P">Méknes -  Lycée Qualifiant Moulay Ismail</option>
// <option value="01911B">Mohammedia  -  Lycée Technique</option>
// <option value="12749G">Nador  -  LYCEE QUALIFIANT ABDELKARIM AL KHATTABI</option>
// <option value="27239G">OUARZAZAT -  Lycée qualifiant Prince Héritier Moulay El Hassan</option>
// <option value="04398E">Oujda  -  Lycée Omar Ibn Abdelaziz</option>
// <option value="55530H">Rabat -  Lycée Al-Zahrawi- Rabat</option>
// <option value="01121T">Rabat -  Lycée Moulay Youssef</option>
// <option value="01118P">Rabat -  Lycée Omar Al-Khayyam</option>
// <option value="25743F">Safi -  Lycée Moulay Abdellah</option>
// <option value="01265Z">Salé -  Lycée Selmane Al-Farissi</option>
// <option value="14638K">Settat  -  Lycée Technique</option>
// <option value="18410K">Tanger  -  Lycée Moulay Hassan</option>
// <option value="25736Y">Taza  -  Lycée Charrif El Idrissi</option>
// <option value="26974U">Tetouan -  Centre CPGE </option>
// </select>
// ``` 