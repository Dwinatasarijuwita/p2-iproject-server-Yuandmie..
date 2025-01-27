# endpoints users
List of available:
- `POST /users/register`
- `POST /users/login`

# endpoints doctors
- `GET /doctors/`
- `GET /doctors/:id`

# endpoints transactions
- `GET /transactions/`
- `GET /transactions/:id`
- `DELETE /transactions/:id`
- `PUT /transactions/:id`
- `POST /transactions/:doctorId`

# endpoints payments
- `POST /payments/get-token-payment`

# endpoints halodoc api
- `GET /medicine/categories`

# users
## 1. POST /users/register

request: 

- body:

```json
{
    "email": "string",
    "password": "string"
}

```

_Response (201 - Created)_

```json
{
    "email":"string",
    "password": "string"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Invalid email format"
},
{
    "message": "Email is required"
},
{
    "message": "Password is required"
},
{
    "message": "Email must be unique"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

## 2. POST /users/login

request: 

- body:

```json
{
    "email": "string",
    "password": "string"
}

```

_Response (200 - OK)_

```json
{
    "access_token":"string"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email or Password Required"
}
```

_Response (401 - Invalid credentials)_
```json
{
    "message": "Invalid Email or Password"
}
```

_Response(401 - JsonWebTokenError)

```json
{
    "message": "Invalid Token"
}

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

## POST /users/google-sign-in
request: 

- headers

_Response (200 - OK)_

```json
{
    "access_token":"string"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

# doctors
## 1. get /doctors/
Description:
- Get all doctors from database

_Response (200 - OK)_

```json
[
    {
        "id": 1,
        "name": "Dr. Wijaya Trinular, S.Psi",
        "description": "Wijaya merupakan Psikolog Klinis dari Universitas Padjadjaran yang memiliki ketertarikan dalam membantu individu dewasa muda untuk lebih mengenal dirinya sendiri dan juga mengembangkan potensi dalam dirinya. Ia juga memiliki keahlian dalam menangani kasus terkait masalah tumbuh kembang anak, relasi orangtua dan anak, permasalahan sosial emosional, anak berkebutuhan khusus, dan permasalahan belajar. Vena memiliki misi untuk membantu klien mengenal dan juga mengembangkan dirinya.",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=1480&t=st=1673135882~exp=1673136482~hmac=315f7525186bb3350b540ff254e063d6e286e4ee1672696cdd90a77e65f51561",
        "CategoryId": 1
    },
    {
        "id": 2,
        "name": "Dr. Bintang Prasetya, S.Psi",
        "description": "Bintang adalah seorang psikolog klinis yang menamatkan pendidikan S1 Psikologi di Universitas Brawijaya dan melanjutkan pendidikan S2 Psikologi Profesi Klinis di Universitas Tarumanagara. Menurut Bintang, proses belajar tidak pernah ada masanya, karena kehidupan merupakan tempat belajar seumur hidup. Oleh sebab itu, Bintang meyakini dengan usaha meningkatkan kesadaran individu akan masa kini, setiap individu akan belajar menerima masa lalu sebagai pengalaman yang berharga, dan berusaha merancang masa depan sesuai dengan tujuan yang diinginkan. Bintang memiliki keahlian dalam menangani isu psikologis yang berkaitan dengan permasalahan emosi, relasi dengan orangtua/pasangan, konflik dalam keluarga, stres, depresi, serta masalah kepribadian. Melalui proses konseling, Bintang akan membantu klien menemukan kebermaknaan dan mencapai kesejahteraan psikologis.",
        "price": 600000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=1480&t=st=1673135943~exp=1673136543~hmac=809a593d736859f2677b508bf319a8380e9620724fb36a7aa88364535067d7ba",
        "CategoryId": 2
    },
    {
        "id": 3,
        "name": "Dr. Alice Miranda, S.Psi",
        "description": "Alice adalah seorang Psikolog Klinis lulusan Universitas Tarumanagara yang memiliki keahlian dalam menangani masalah emosi dan suasana hati, depresi, kecemasan, serta gangguan kepribadian. Alice percaya bahwa menjadi berani itu bukan berarti tidak takut. Berani adalah ketika kita mampu menghadapi rasa takut yang kita miliki. Sehingga dalam melaksanakan sesi konseling, Alice akan berfokus pada membantu klien melakukan pengenalan diri serta potensi-potensi yang dimiliki agar klien dapat menemukan insight dan mampu menghadapi permasalahannya secara mandiri hingga tuntas.",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/smiling-hopeful-young-woman-doctor-holding-hands-begging-thank-you-pose-standing-blue-background-medical-concept_1258-87710.jpg?w=1480&t=st=1673138725~exp=1673139325~hmac=1fa760968c23d7569f4d70912880687975b94533d1a76c363315a664a4c0dab5",
        "CategoryId": 3
    },
    {
        "id": 4,
        "name": "Dr. Gracia Ivonika, S.Psi",
        "description": "Gracia Ivonika (Ivon) adalah seorang psikolog klinis lulusan Universitas Tarumanagara yang banyak membantu klien anak dan orangtua, remaja, hingga dewasa muda. Sebagai psikolog, Ivon percaya bahwa setiap orang memiliki hak untuk didengarkan dan dimengerti. Misi Ivon sebagai psikolog adalah untuk mengarahkan setiap klien pada kesejahteraan psikologis yang lebih baik. Hal tersebut dilakukan melalui konseling dan berbagai pendekatan psikoterapi. ",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/smiling-pretty-doctor-standing-hospital-office-with-paper-folder_1098-18884.jpg?w=1480&t=st=1673136046~exp=1673136646~hmac=0e368e68825ea942aa95d5de9a77a2e04cfc06abbd9dc3c6404c314334e7a1f5",
        "CategoryId": 4
    },
    {
        "id": 5,
        "name": "Dr. Kezia Kinanti, S.Psi",
        "description": "Kezia adalah seorang Psikolog Klinis lulusan Universitas Tarumanagara dengan ketertarikan dalam menangani permasalahan psikologis yang berkaitan dengan masalah kecemasan, pengalaman traumatis, permasalahan emosi, isu seksualitas, relasi, serta masalah kepribadian. Kezia percaya bahwa setiap individu memiliki kekuatan dan hal-hal positif dalam diri mereka untuk bertumbuh dan berkembang menjadi lebih baik. Melalui suasana konseling yang aman, komunikasi efektif serta menumbuhkan insight bagi pembicara merupakan hal penting pada setiap sesi konseling",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/portrait-smiling-young-woman-doctor-healthcare-medical-worker-pointing-fingers-left-showing-clini_1258-88433.jpg?w=1480&t=st=1673136127~exp=1673136727~hmac=f7910c77cdaca3c582a4f2c12d165ff5563bee755db08445c7fbed4303d5dc47",
        "CategoryId": 5
    },
    {
        "id": 6,
        "name": "Dr. Arif Airlangga, S.Psi",
        "description": "Arief adalah seorang psikolog klinis lulusan Universitas Tarumanagara tahun 2017. Arief sudah mengikuti program sertifikasi filial play coaching/mentoring dari Cipta Aliansi Edukasi, dan juga pelatihan art therapy dan menjadi anggota resmi dari Indonesian Art Therapy Community. Sebagai psikolog, Arief percaya bahwa setiap individu memiliki keunikan tersendiri dan memiliki cara yang khas dalam menyikapi tantangan kehidupan. ",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/medium-shot-doctor-wearing-face-mask_23-2149551163.jpg?w=1480&t=st=1673136184~exp=1673136784~hmac=5347ccb76b1d3c21c2d1818a698b4178df08b6b6c3bb02fc3a85535e344bbb7a",
        "CategoryId": 6
    },
    {
        "id": 7,
        "name": "Dr. Giavanny Sari, S.Psi",
        "description": "Giavanny adalah seorang psikolog klinis dari Universitas Padjajaran yang memiliki pemahaman yang mendalam pada proses tumbuh kembang anak-remaja, parenting, dan pola asuh. Vanny memiliki keahlian dalam menangani kasus terkait masalah sosial emosional, relasi orang tua dan anak, tumbuh kembang anak, permasalahan belajar, anak berkebutuhan khusus, dan juga minat & bakat. Selain itu, ia juga berpengalaman sebagai fasilitator bagi dewasa muda untuk dapat mengembangkan potensi dalam dirinya",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/image-asian-female-doctor-physician-with-magnifying-glass-wearing-medical-mask-rubber-gloves-patient-examination-white-background_1258-83386.jpg?w=1480&t=st=1673136238~exp=1673136838~hmac=5a7589490446a4549c03062544eb1ae47077660b2dd0da0a08ba266fb4fb7c7c",
        "CategoryId": 7
    },
    {
        "id": 8,
        "name": "Dr. Ikhsan Bella Persada, S.Psi",
        "description": "Ikhsan Bella Persada adalah seorang clinical psychologist yang telah menyelesaikan studi Master’s Degree nya dari Universitas Tarumanagara. Memiliki pengalaman praktik yang beragam mulai dari konseling di penjara, pusat tumbuh kembang anak, dan konseling pasangan.",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/happy-young-male-doctor-using-tablet-computer_1262-18254.jpg?w=1480&t=st=1673136353~exp=1673136953~hmac=1492bc878ac0290d7eb12f5ffd82f71b34df849c57c0712154a441b398e5f0e1",
        "CategoryId": 8
    },
    {
        "id": 9,
        "name": "Dr. Hilmy Praditya, S.Psi",
        "description": "Sebagai seorang psikolog klinis, Hilmy sempat menjadi konselor di salah satu perusahaan decacorn untuk membantu pegawai dalam menghadapi permasalahan pribadi (mulai dari klien dengan permasalahan keseharian hingga klien dengan gangguan klinis) maupun permasalahan pekerjaan.",
        "price": 300000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/portrait-african-american-doctor-lobby-sitting-waiting-room-seats-before-having-medical-consultation-appointment-with-patients-general-practitioner-working-healthcare-center_482257-51259.jpg?w=1480&t=st=1673136425~exp=1673137025~hmac=b72ac668a2014fa3f5bcf5eacadc19c1d2179484cad69182afd8b0d8e60929ca",
        "CategoryId": 1
    },
    {
        "id": 10,
        "name": "Dr. Ima Abigail, S.Psi",
        "description": "Ima adalah seorang Psikolog Klinis Dewasa lulusan Universitas Indonesia (S1) dan Universitas Padjadjaran (S2). Ima telah banyak bekerja dengan klien usia dewasa dengan permasalahan emosi, kecemasan, hubungan dengan orang lain (keluarga dan pasangan), issue seputar pekerjaan, dan pertumbuhan/perkembangan diri. Penting bagi Ima untuk menciptakan hubungan terapeutik dengan individu yang menjadi kliennya agar individu dapat merasa aman, percaya, nyaman untuk bercerita.",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/young-medical-doctor-woman-presenting-showing-product_231208-13105.jpg?w=1480&t=st=1673136465~exp=1673137065~hmac=f961e608618397ad14c3bb0ca561851f59dd5574f1154d0f094c88808c29e74b",
        "CategoryId": 2
    },
    {
        "id": 11,
        "name": "Dr. Fika Permatasari, S.Psi",
        "description": "Fika menyelesaikan studinya di Magister Psikologi Universitas Tarumanegara dengan spesialisasi klinis anak dan dewasa. Kesenangannya membagi ilmu juga memotivasinya untuk menjadi dosen honorer di salah satu perguruan tinggi swasta di Jakarta. Saat ini, ia berpraktik sebagai psikolog klinis di salah satu rumah sakit swasta di Tangerang. Dari berbagai kasus yang pernah ditangani, ia berpengalaman dalam bidang perkembangan anak & remaja, keluarga, hubungan interpersonal, self-improvement, emosi dan komunikasi.",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/smiling-young-female-doctor-raising-forefinger_1262-18334.jpg?w=1480&t=st=1673136547~exp=1673137147~hmac=61955398413f877d4f6dee90e99b815d206a2f52f57cba80e01178573f3d5ee7",
        "CategoryId": 3
    },
    {
        "id": 12,
        "name": "Dr. Eviana Misty, S.Psi",
        "description": "Eviana Misty adalah seorang psikolog klinis lulusan Universitas Tarumanagara yang memiliki keahlian dalam membantu anak, remaja, serta dewasa awal dalam mengatasi kecemasan, masalah relasi, dan masalah akademis. Evi percaya dengan membentuk pola pikir serta rutinitas yang sehat, ia dapat membantu meningkatkan kesejahteraan dan kesehatan mental dari klien",
        "price": 600000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/doctor-working-with-laptop-front-view_23-2149941453.jpg?w=1480&t=st=1673136582~exp=1673137182~hmac=51f38d7f312585cbc8de9dec44a8cd1cd7f59033d5c9c8275328e1b19c177305",
        "CategoryId": 4
    },
    {
        "id": 13,
        "name": "Dr. Mario Albert, S.Psi",
        "description": "Memperoleh kualifikasi sebagai Psikolog Klinis dari Universitas Tarumanagara, Mario Albert percaya bahwa “If you don’t say what you think, you’re punishing yourself.” Melakukan percakapan secara terbuka merupakan proses yang penting dalam sesi konseling. Mario memiliki pengalaman dalam menangani masalah pada toxic relationship, depresi, kecemasan, pengendalian emosi, dan pencarian makna hidup",
        "price": 700000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/medium-shot-women-doctors-hugging_23-2149856233.jpg?w=1480&t=st=1673136637~exp=1673137237~hmac=fd9c9c1be3169a28b891c65e44316bc0bbc87a7973a4723e94aa0d726ef35c73",
        "CategoryId": 5
    },
    {
        "id": 14,
        "name": "Dr. Kezia Sundary, S.Psi",
        "description": "Kezia adalah seorang Psikolog Klinis lulusan Universitas Tarumanagara dengan ketertarikan dalam menangani permasalahan psikologis yang berkaitan dengan masalah kecemasan, pengalaman traumatis, permasalahan emosi, isu seksualitas, relasi, serta masalah kepribadian. Kezia percaya bahwa setiap individu memiliki kekuatan dan hal-hal positif dalam diri mereka untuk bertumbuh dan berkembang menjadi lebih baik.",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2149355000.jpg?w=1480&t=st=1673136697~exp=1673137297~hmac=eda69c694e517444c1eabc0782c6beff89fefe950d436285ef4662a90c462003",
        "CategoryId": 6
    },
    {
        "id": 15,
        "name": "Dr. Edward Septianto, S.Psi",
        "description": "Edward Septianto merupakan psikolog klinis dari Universitas Tarumanegara yang memiliki ketertarikan kuat pada pengembangan diri individu. Edward meyakini bahwa setiap individu mampu untuk berdaya dengan cara mereka masing-masing. Peran psikolog disini adalah sebagai fasilitator yang dapat membantumu menemukan & membentuk versi terbaik dari dirimu. Versi terbaik ini tentunya dapat dilihat ketika seseorang dapat berfungsi pada aspek pekerjaan, relasi, dan hobinya. ",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/serious-asia-male-doctor-wear-protective-mask-using-tablet-is-delivering-great-news-talk-discuss-results_7861-3124.jpg?w=1480&t=st=1673136738~exp=1673137338~hmac=572c3e6d7c3f1dd9c50a65a13ccdf61830270e180f676d0efd0d7e2a3f91ea03",
        "CategoryId": 7
    },
    {
        "id": 16,
        "name": "Dr. Ezra Putranto, S.Psi",
        "description": "Ezra Putranto Wahyudi merupakan seorang psikolog klinis dewasa yang menyelesaikan studinya di Universitas Indonesia. Ia memiliki pengalaman lebih dari 1 tahun dalam menangani klien dewasa dengan pelbagai kasus yang berbeda-beda, seperti gangguan mood, gangguan kepribadian, seksualitas, dan lain-lain.",
        "price": 500000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg?w=1480&t=st=1673136800~exp=1673137400~hmac=51f6388451589df547b0d49c567c0dd1ea1f0b9971c9302b047e477fa7d2046a",
        "CategoryId": 8
    }
]
```
_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

## 2.GET /doctors/:id
Description:
- Get all doctors per id

Request:
- params:

```json

{
    "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
    "id": 1,
    "name": "Dr. Wijaya Trinular, S.Psi",
    "description": "Wijaya merupakan Psikolog Klinis dari Universitas Padjadjaran yang memiliki ketertarikan dalam membantu individu dewasa muda untuk lebih mengenal dirinya sendiri dan juga mengembangkan potensi dalam dirinya. Ia juga memiliki keahlian dalam menangani kasus terkait masalah tumbuh kembang anak, relasi orangtua dan anak, permasalahan sosial emosional, anak berkebutuhan khusus, dan permasalahan belajar. Vena memiliki misi untuk membantu klien mengenal dan juga mengembangkan dirinya.",
    "price": 500000,
    "duration": 120,
    "imageUrl": "https://img.freepik.com/free-photo/smiling-asian-male-doctor-pointing-upwards_1262-18321.jpg?w=1480&t=st=1673135882~exp=1673136482~hmac=315f7525186bb3350b540ff254e063d6e286e4ee1672696cdd90a77e65f51561",
    "CategoryId": 1,
    "Category": {
        "id": 1,
        "name": "Psikosomatis"
    }
}
```

_Response (404 - Data Not Found)_

```json
{
    "message": "data not found"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

# transactions
## 1.GET /transactions/

Description:
- Get all transactions from database


_Response (200 - OK)_

```json
[
    {
        "id": 3,
        "name": "Tasya",
        "date": "2023-01-11T00:00:00.000Z",
        "UserId": 4,
        "DoctorId": 2,
        "status": "process",
        "Doctor": {
            "id": 2,
            "name": "Dr. Bintang Prasetya, S.Psi",
            "description": "Bintang adalah seorang psikolog klinis yang menamatkan pendidikan S1 Psikologi di Universitas Brawijaya dan melanjutkan pendidikan S2 Psikologi Profesi Klinis di Universitas Tarumanagara. Menurut Bintang, proses belajar tidak pernah ada masanya, karena kehidupan merupakan tempat belajar seumur hidup. Oleh sebab itu, Bintang meyakini dengan usaha meningkatkan kesadaran individu akan masa kini, setiap individu akan belajar menerima masa lalu sebagai pengalaman yang berharga, dan berusaha merancang masa depan sesuai dengan tujuan yang diinginkan. Bintang memiliki keahlian dalam menangani isu psikologis yang berkaitan dengan permasalahan emosi, relasi dengan orangtua/pasangan, konflik dalam keluarga, stres, depresi, serta masalah kepribadian. Melalui proses konseling, Bintang akan membantu klien menemukan kebermaknaan dan mencapai kesejahteraan psikologis.",
            "price": 600000,
            "duration": 120,
            "imageUrl": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=1480&t=st=1673135943~exp=1673136543~hmac=809a593d736859f2677b508bf319a8380e9620724fb36a7aa88364535067d7ba",
            "CategoryId": 2
        }
    },
    {
        "id": 4,
        "name": "tasya",
        "date": "2023-01-09T00:00:00.000Z",
        "UserId": 4,
        "DoctorId": 5,
        "status": "process",
        "Doctor": {
            "id": 5,
            "name": "Dr. Kezia Kinanti, S.Psi",
            "description": "Kezia adalah seorang Psikolog Klinis lulusan Universitas Tarumanagara dengan ketertarikan dalam menangani permasalahan psikologis yang berkaitan dengan masalah kecemasan, pengalaman traumatis, permasalahan emosi, isu seksualitas, relasi, serta masalah kepribadian. Kezia percaya bahwa setiap individu memiliki kekuatan dan hal-hal positif dalam diri mereka untuk bertumbuh dan berkembang menjadi lebih baik. Melalui suasana konseling yang aman, komunikasi efektif serta menumbuhkan insight bagi pembicara merupakan hal penting pada setiap sesi konseling",
            "price": 500000,
            "duration": 120,
            "imageUrl": "https://img.freepik.com/free-photo/portrait-smiling-young-woman-doctor-healthcare-medical-worker-pointing-fingers-left-showing-clini_1258-88433.jpg?w=1480&t=st=1673136127~exp=1673136727~hmac=f7910c77cdaca3c582a4f2c12d165ff5563bee755db08445c7fbed4303d5dc47",
            "CategoryId": 5
        }
    }
]
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

_Response (401 - Unauthenticated)_
```json
{
    "message": "Invalid Token"
}
```

_Response(401 - JsonWebTokenError)

```json
{
    "message": "Invalid Token"
}
```


## 2.GET /transactions/:id

Description:
- Get transactions per id from database


_Response (200 - OK)_

```json
{
    "id": 3,
    "name": "Tasya",
    "date": "2023-01-11T00:00:00.000Z",
    "UserId": 4,
    "DoctorId": 2,
    "status": "process",
    "createdAt": "2023-01-10T16:05:46.062Z",
    "updatedAt": "2023-01-10T16:05:46.062Z",
    "Doctor": {
        "id": 2,
        "name": "Dr. Bintang Prasetya, S.Psi",
        "description": "Bintang adalah seorang psikolog klinis yang menamatkan pendidikan S1 Psikologi di Universitas Brawijaya dan melanjutkan pendidikan S2 Psikologi Profesi Klinis di Universitas Tarumanagara. Menurut Bintang, proses belajar tidak pernah ada masanya, karena kehidupan merupakan tempat belajar seumur hidup. Oleh sebab itu, Bintang meyakini dengan usaha meningkatkan kesadaran individu akan masa kini, setiap individu akan belajar menerima masa lalu sebagai pengalaman yang berharga, dan berusaha merancang masa depan sesuai dengan tujuan yang diinginkan. Bintang memiliki keahlian dalam menangani isu psikologis yang berkaitan dengan permasalahan emosi, relasi dengan orangtua/pasangan, konflik dalam keluarga, stres, depresi, serta masalah kepribadian. Melalui proses konseling, Bintang akan membantu klien menemukan kebermaknaan dan mencapai kesejahteraan psikologis.",
        "price": 600000,
        "duration": 120,
        "imageUrl": "https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=1480&t=st=1673135943~exp=1673136543~hmac=809a593d736859f2677b508bf319a8380e9620724fb36a7aa88364535067d7ba",
        "CategoryId": 2,
        "createdAt": "2023-01-10T15:58:31.829Z",
        "updatedAt": "2023-01-10T15:58:31.829Z"
    }
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

_Response (401 - Unauthenticated)_
```json
{
    "message": "Invalid Token"
}
```

_Response(401 - JsonWebTokenError)

```json
{
    "message": "Invalid Token"
}
```

## 2. DELETE /transactions/:id
Description:
- Delete transactions per id from database


_Response (200 - OK)_

```json
{
    "message": "Success"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

_Response (401 - Unauthenticated)_
```json
{
    "message": "Invalid Token"
}
```

_Response(401 - JsonWebTokenError)

```json
{
    "message": "Invalid Token"
}

```

## 3. PUT /transactions/:id

Request:
- params:

```json

{
    "id": "integer (required)"
}
```

- body:
```json

{
    "name": "string",
    "date": "date"
}
```

_Response (200 - OK)_

```json
{
    "message": "success edited"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

_Response (401 - Unauthenticated)_
```json
{
    "message": "Invalid Token"
}
```

_Response(401 - JsonWebTokenError)

```json
{
    "message": "Invalid Token"
}

```

## 4. POST /transactions/:doctorId

request:

- body:
```json

{
    "name": "string",
    "date": "date"
}
```

_Response (200 - OK)_

```json
{
    "id": 8,
    "name": "Fachri",
    "date": "2023-02-20T00:00:00.000Z",
    "UserId": 4,
    "DoctorId": 6,
    "status": "process",
    "updatedAt": "2023-01-11T09:39:35.256Z",
    "createdAt": "2023-01-11T09:39:35.256Z"
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

_Response (401 - Unauthenticated)_
```json
{
    "message": "Invalid Token"
}
```

_Response(401 - JsonWebTokenError)

```json
{
    "message": "Invalid Token"
}

```

# payments
## 1. POST /payments/get-token-payment
 

_Response (200 - OK)_

```json
{
    "token": {
        "token": "60675439-808b-47c8-9865-b1a48c394b9a",
        "redirect_url": "https://app.sandbox.midtrans.com/snap/v3/redirection/60675439-808b-47c8-9865-b1a48c394b9a"
    },
    "order_id": 1673430196876
}
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```

_Response (401 - Unauthenticated)_
```json
{
    "message": "Invalid Token"
}
```

_Response(401 - JsonWebTokenError)

```json
{
    "message": "Invalid Token"
}

```

# halodoc api

## GET /medicine/categories

_Response (200 - OK)_

```json
[
    {
        "external_id": "a883b8f3-dae3-4903-b786-8d809f9c76e8",
        "slug": "batuk-dan-flu",
        "canon_slug": null,
        "image_url": "https://d2qjkwm11akmwu.cloudfront.net/categories/184498_3-3-2020_16-30-32-1-1-1-1.png",
        "attributes": {
            "meta_description": "Dapatkan informasi obat batuk dan flu paling lengkap hanya di Halodoc. Konsultasi obat dengan dokter ✓ Order obat di Halodoc ✓ #TenangAdaHalodoc",
            "seo_url": "https://halodoc-sumba.s3.ap-southeast-1.amazonaws.com/product-category-seo-information/product_category_seo_information_Batuk%20dan%20Flu.html",
            "meta_title": "Informasi Obat Batuk dan Flu, Dosis, Efek Samping - Halodoc",
            "name": "Batuk dan Flu",
            "meta_keywords": "Obat Batuk dan Flu"
        },
        "images_map": {
            "image_url": [
                {
                    "extension": "webp",
                    "url": "https://d2qjkwm11akmwu.cloudfront.net/categories/184498_3-3-2020_16-30-32-1-1-1-1.webp"
                },
                {
                    "extension": "png",
                    "url": "https://d2qjkwm11akmwu.cloudfront.net/categories/184498_3-3-2020_16-30-32-1-1-1-1.png"
                }
            ]
        }
    },
    {
        "external_id": "c58ecdb3-d2df-4a1c-aa9f-b55f1d41d039",
        "slug": "saluran-pencernaan",
        "canon_slug": null,
        "image_url": "https://d2qjkwm11akmwu.cloudfront.net/categories/102678_4-3-2020_14-9-50-1-1-1.png",
        "attributes": {
            "meta_description": "Temukan berbagai macam jenis obat dan vitamin berdasarkan Kategori Saluran Pencernaan. Ketahui juga manfaat, dosis, cara konsumsi, aturan pakai dan efek samping obat dan vitamin di Halodoc.",
            "seo_url": "https://halodoc-sumba.s3.ap-southeast-1.amazonaws.com/product-category-seo-information/product_category_seo_information_maag%20dan%20lambung.html",
            "meta_title": "Daftar Informasi obat dan vitamin - Saluran Pencernaan",
            "name": "Saluran Pencernaan",
            "meta_keywords": "Kategori Saluran Pencernaan"
        },
        "images_map": {
            "image_url": [
                {
                    "extension": "png",
                    "url": "https://d2qjkwm11akmwu.cloudfront.net/categories/102678_4-3-2020_14-9-50-1-1-1.png"
                },
                {
                    "extension": "webp",
                    "url": "https://d2qjkwm11akmwu.cloudfront.net/categories/102678_4-3-2020_14-9-50-1-1-1.webp"
                }
            ]
        }
    },   
]
```

_Response (500 - Internal Server Error)_

```json
{
    "message": "Internal Server Error"
}
```





