const products = [
    {
        id: 1,
        name: "Mercedes-Benz V-Class 2026",
        category: "Mercedes-Benz",
        price: 85000,
        oldprice: 92000,
        discount: 7,
        image: "../img/Mercedes-Benz V-Class 2026.jpg",
        description: "2026 · 12 miles · V220d Diessel"
    },

    {
        id: 2,
        name: "Mercedes-Benz Sprinter 2026",
        category: "Mercedes-Benz",
        price:68000 ,
        oldprice: 74000,
        discount: 8,
        image: "../img/Mercedes-Benz Sprinter 2.jpg",
        description: "2026 · 25 miles · CDI Turbo"
    },


    {
        id: 3,
        name: "Mercedes-Benz Marco Polo 2026",
        category: "Mercedes-Benz",
        price: 95000,
        oldprice: 102000,
        discount: 6,
        image: "../img/Mercedes-Benz Marco Polo.jpg",
        description: "2026 · 5 miles · Comper Hybrid"
    },

    {
        id: 4,
        name: "Mercedes-Benz  EQV 2026",
        category: "Mercedes-Benz",
        price: 89000,
        oldprice: 96000,
        discount: 7,
        image: "../img/Mercedes-Benz EQV 2026.jpg",
        description: "2026 · 8 miles · Full Electric"
    },

    {
        id: 5,
        name: "Mercedes-Benz  Vito Tourer 2025",
        category: "Mercedes-Benz",
        price: 52000,
        oldprice: 57000,
        discount: 9,
        image: "../img/Mercedes-Benz EQV 2026.jpg",
        description: "2025 · 45 miles · CDI Diessel "
    },

    {
        id: 6,
        name: "Mercedes-Benz  Metris 2025",
        category: "Mercedes-Benz ",
        price: 48000,
        oldprice:53000,
        discount: 10,
        image: "../img/Mercedes-Benz Metris 2025.jpg",
        description: "2025 · 30 miles · Turbo Gosoline"
    },

    {
        id: 7,
        name: "Mercedes-Benz eSprinter 2026",
        category: "Mercedes-Benz",
        price: 74000,
        oldprice:80000,
        discount: 7,
        image: "../img/Mercedes-Benz eSprinter 202.jpg",
        description: "2026 · 10 miles · Electric Van"
    },
    {
        id: 8,
        name: "Mercedes-Benz  T-Class 2026",
        category: "Mercedes-Benz",
        price: 36000,
        oldprice: 40000,
        discount: 10,
        image: "../img/Mercedes-Benz T-Class 2025.jpg",
        description: "2026 · 18 miles · Compact Family"
    },
    {
        id: 9,
        name: "Ford Transit Custom  2010",
        category: "Ford",
        price: 52000,
        oldprice: 58000,
        discount: 10,
        image: "../img/Ford Transit Custom 2026.jpg",
        description: "2026 · 10 miles · EcoBlue Diesel"
    },
    {
        id: 10,
        name: "Ford Transit Trail 2026",
        category: "Ford",
        price:74000,
        oldprice:80000,
        discount: 8,
        image: "../img/Ford Transit Trail 2026.jpg",
        description: "2026 · 14 miles ·AWD Off-Road"
    },
    {
        id: 11,
        name: "Ford Tourneo Connect 2025",
        category: "Ford",
        price: 37000,
        oldprice:41000,
        discount: 9,
        image: "../img/Ford Tourneo Connect 2025.jpg",
        description: "2025 · 18 miles · family van"
    },
    {
        id: 12,
        name: "Ford Transit Connect 2025",
        category: "Ford",
        price: 34000,
        oldprice: 38000,
        discount: 10,
        image: "../img/Ford Transit Connect 2025.jpg",
        description: "2026 · 22 miles · Compa"
    },
    {
        id: 13,
        name: "Ford Nugget Camper 2026",
        category: "Ford",
        price: 78000,
        oldprice:85000,
        discount: 8,
        image: "../img/Ford Nugget Camper 2026.jpg",
        description: "2026 · 8 miles · Westalia Camper"
    },
    {
        id: 14,
        name: "Ford Tourneo Custom  2026",
        category: "Ford ",
        price: 55000,
        oldprice: 60000,
        discount: 8,
        image: "../img/Ford Tourneo Custom 2026.jpg",
        description: "2026 · 12 miles · Plug-in  Hybrid"
    },
    {
        id: 15,
        name: "Ford E-Transit Electric 2026",
        category: "Ford",
        price: 57000,
        oldprice:62000,
        discount: 13,
        image: "../img/Ford E-Transit Electric 2026.jpg",
        description: "2026 · 5 miles · Full Electric"
    },
    {
        id: 16,
        name: "Ford Transit 15-Passenger 2026",
        category: "Ford",
        price: 61000,
        oldprice: 66000,
        discount: 7,
        image: "../img/Ford Transit 15-Passenger 2026.jpg",
        description: "2026 · 15 miles · V6 Turbo"
    },
    {
        id: 17,
        name: "Volkswagen California 2026",
        category: "Volkswagen",
        price: 82000,
        oldprice:89000,
        discount: 8,
        image: "../img/Volkswagen California 2026.jpg",
        description: "2026 · 10 miles · Camper Hybrid"
    },
    {
        id: 18,
        name: "Volkswagen ID. Buzz Cargo 2026",
        category: "Volkswagen ",
        price: 54000,
        oldprice: 59000,
        discount: 8,
        image: "../img/Volkswagen ID. Buzz Cargo 2026.jpg",
        description: "2026 · 5 miles · Full Electric"
    },
    {
        id: 19,
        name: "Volkswagen Multivan 2026",
        category: "Volkswagen",
        price:65000,
        oldprice:71000,
        discount: 8,
        image: "../img/Volkswagen Multivan 2026.jpg",
        description: "2026 · 12 miles ·Plug-in Hybrid"
    },
    {
        id: 20,
        name: "Volkswagen Transporter 2026",
        category: "Volkswagen",
        price: 49000,
        oldprice: 54000,
        discount: 9,
        image: "../img/Volkswagen Transporter 2026.jpg",
        description: "2026 · 15 miles · DBI Diesel"
    },
    {
        id: 21,
        name: "Volkswagen ID. Buzz Passenger 2026",
        category: "Volkswagen ",
        price: 61000,
        oldprice: 67000,
        discount: 9,
        image: "../img/Volkswagen ID. Buzz Passenger 2026.jpg",
        description: "2026 · 8 miles · Electric MPY"
    },
    {
        id: 22,
        name: "Volkswagen Grand California 2025",
        category: "Volkswagen",
        price: 98000,
        oldprice: 105000,
        discount: 7,
        image: "../img/Volkswagen Grand California 2025.jpg",
        description: "2025 · 20 miles . Motorhome TDI"
    },
    {
        id: 23,
        name: "Volkswagen Caddy Maxi 2025",
        category: "Volkswagen",
        price: 33000,
        oldprice: 37000,
        discount: 11,
        image: "../img/Volkswagen Caddy Maxi 2025.jpg",
        description: "2025 · 25 miles · Compact Van"
    },
    {
        id: 24,
        name: "Volkswagen Caravelle 2026",
        category: "Volkswagen",
        price: 67000,
        oldprice:73000,
        discount: 8,
        image: "../img/Volkswagen Caravelle 2026.jpg",
        description: "2026 · 10 miles · VIP Shuttle"
    },
    {
        id: 25,
        name: "Toyota HiAce Commuter 2026",
        category: "Toyota",
        price: 48000,
        oldprice: 53000,
        discount: 13,
        image: "../img/Toyota HiAce Commuter 2026.jpg",
        description: "2026 · 10 miles · D-4D Diesel"
    },
    {
        id: 26,
        name: "Toyota HiAce Commuter 2026",
        category: "Toyota",
        price: 89000,
        oldprice: 96000,
        discount: 7,
        image: "../img/Toyota Alphard VIP 2026.jpg",
        description: "2026 · 6 miles · Luxury Hybrid"
    },
    {
        id: 27,
        name: "Toyota Vellfire Executive 2026",
        category: "Toyota",
        price: 92000,
        oldprice: 99000,
        discount: 7,
        image: "../img/Toyota Vellfire Executive 2026.jpg",
        description: "2026 · 8 miles ·  Turbo Hybrid"
    },
    {
        id: 28,
        name: "Toyota Granvia 2025",
        category: "Toyota",
        price: 82000,
        oldprice:86000,
        discount: 9,
        image: "../img/Toyota Granvia 2025.jpg",
        description:  "2025 · 15 miles · Premium MPV"
    },
    {
        id: 29,
        name: "Toyota Proace Verso Electric 2026",
        category: "Toyota",
        price:54000,
        oldprice: 59000,
        discount: 13,
        image: "../img/Toyota Proace Verso Electric 202.jpg",
        description: "2026 · 5 miles · Full Electric"
    },
    {
        id: 30,
        name: "Toyota Sienna Woodland 2026",
        category: "Toyota",
        price: 51000,
        oldprice: 56000,
        discount: 9,
        image: "../img/Toyota Sienna Woodland 2026.jpg",
        description: "2026 · 12 miles · AWD Hybrid"
    },
    {
        id: 31,
        name: "Toyota Noah Spacious 2025",
        category: "Toyota",
        price: 38000,
        oldprice: 42000,
        discount: 10,
        image: "../img/Toyota Noah Spacious 2025.jpg",
        description: "2025 · 20 miles · Family Hybrid"
    },
    {
        id: 32,
        name: "Toyota Venza",
        category: "Toyota",
        price: 2600800,
        oldprice: 2900800,
        discount: 13,
        image: "../img/Venza.jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },
    {
        id: 33,
        name: "Toyota Yaris",
        category: "Toyota",
        price: 75000,
        oldprice: 82000,
        discount: 8,
        image: "../img/Toyota HiAce Campervan 2026.jpg",
        description: "2026 · 10 miles · Motorhome Edition"
    },
    {
        id: 34,
        name: "Renault Trafic Combi 2026",
        category: "Renault",
        price: 46000,
        oldprice: 51000,
        discount: 10,
        image: "../img/1791228695400.jpg",
        description: "2026 · 14 miles · Family Transport"
    },
    {
        id: 35,
        name: "Renault Trafic Passenger 2026",
        category: "Renault",
        price: 45000,
        oldprice: 50000,
        discount: 10,
        image: "../img/Renault Trafic Passenger 2026.jpg",
        description: "2026 · 10 miles · V12 Hybrid"
    },
    {
        id: 36,
        name: "Renault Master E-Tech 2026",
        category: "Renault",
        price: 48000,
        oldprice: 56000,
        discount: 10,
        image: "../img/Renault Master E-Tech 2026.jpg",
        description: "2026 · 5 miles · Full Hybrid"
    },
    {
        id: 37,
        name: "Renault Kangoo Van E-Tech 2026",
        category: "Renault",
        price: 67999,
        oldprice: 78000,
        discount: 9,
        image: "../img/Renault Kangoo Van E-Tech 2026.jpg",
        description: "2026 · 8 miles · Compact Electric"
    },
    {
        id: 38,
        name: "Renault SpaceNomad Camper 2026",
        category: "Renault",
        price: 62000,
        oldprice: 72000,
        discount: 8,
        image: "../img/Renault SpaceNomad Camper 2026.jpg",
        description: "2026 · 8 miles · Compervan Hybrid"
    },
    {
        id: 39,
        name: "Renault Master Passenger 2025",
        category: "Renault",
        price: 76000,
        oldprice: 83000,
        discount: 6,
        image: "../img/Renault Master Passenger 2025.jpg",
        description: "2025 · 8 miles · Diesel"
    },
    {
        id: 40,
        name: "Renault Trafic SpaceClass 2026",
        category: "Renault",
        price: 69000,
        oldprice: 78000,
        discount: 10,
        image: "../img/Renault Trafic SpaceClass 2026.jpg",
        description: "2026 · 15 miles · VIP Shuttle"
    },
    {
        id: 41,
        name: "Renault Express Van 2025",
        category: "Renault",
        price: 56000,
        oldprice: 67000,
        discount: 10,
        image: "../img/Renault Express Van 2025.jpg",
        description: "2025 · 8 miles ·  Hybrid"
    },
    {
        id: 42,
        name: "Hyundai Staria Lounge VIP 2026",
        category: "Hyundai",
        price: 78000,
        oldprice: 90000,
        discount: 7,
        image: "../img/Hyundai Staria Lounge VIP 2026.jpg",
        description: "2026 · 7 miles ·  Hybrid"
    },
    {
        id: 43,
        name: "Hyundai Staria Hybrid 2026",
        category: "Hyundai",
        price: 68000,
        oldprice: 78000,
        discount: 9,
        image: "../img/Hyundai Staria Hybrid 2026.jpg",
        description: "2026 · 8 miles ·  Hybrid"
    },
    {
        id: 44,
        name: "Hyundai Staria Electric 2026",
        category: "Hyundai",
        price: 56000,
        oldprice: 67000,
        discount: 10,
        image: "../img/Hyundai Staria Electric 2026.jpg",
        description: "2026 · 10 miles · Electric"
    },
    {
        id: 45,
        name: "Hyundai Staria Cargo 2026",
        category: "Hyundai",
        price: 90000,
        oldprice: 101000,
        discount: 11,
        image: "../img/Hyundai Staria Cargo 2026.jpg",
        description: "2026· 8 miles ·Hybrid"
    },
    {
        id: 46,
        name: "Hyundai Staria Camper 2026",
        category: "Hyundai",
        price: 54000,
        oldprice: 78000,
        discount: 12,
        image: "../img/Hyundai Staria Camper 2026.jpg",
        description: "2026 · 9 miles · V12 Disel"
    },
    {
        id: 47,
        name: "Hyundai Solati Passenger 2026",
        category: "Hyundai",
        price: 78000,
        oldprice: 80000,
        discount: 11,
        image: "../img/Hyundai Solati Passenger 2026.jpg",
        description: "2026 · 8 miles · Hybrid"
    },
    {
        id: 48,
        name: "Hyundai Porter II Van 2025 ",
        category: "Hyundai",
        price:45000,
        oldprice: 59000,
        discount: 11,
        image: "../img/Hyundai Porter II Van 2025.jpg",
        description: "2025 · 8 miles · Electric"
    },
    {
        id: 49,
        name: "Hyundai H-1 Travel 2025",
        category: "Hyundai",
        price: 69000,
        oldprice: 78000,
        discount: 10,
        image: "../img/Hyundai H-1 Travel 2025.jpg",
        description: "2025 · 8 miles · Hybrid"
    },
    {
        id: 50,
        name: "Cadillac Escalade VIP Van 2026",
        category: "Cadillac ",
        price: 45200,
        oldprice: 67000,
        discount: 14,
        image: "../img/Cadillac Escalade VIP Van 2026.jpg",
        description: "2026 · 8 miles ·  Hybrid"
    },
    {
        id: 51,
        name: "Cadillac Escalade ",
        category: "Cadillac",
        price: 67000,
        oldprice:89000,
        discount: 11,
        image: "../img/Cadillac Escalade.jpg",
        description: "2026 · 8 miles · Electric"
    },
    {
        id: 52,
        name: "Cadillac ESV Limousine Van 2025",
        category: "Cadillac",
        price: 78000,
        oldprice: 90000,
        discount: 13,
        image: "../img/Cadillac ESV Limousine Van 2025 .jpg",
        description: "2025 · 21 miles ·  Hybrid"
    },
    {
        id: 53,
        name: "Cadillac Opulent Velocity Van 2026",
        category: "Cadillac",
        price: 44000,
        oldprice: 60000,
        discount: 11,
        image: "../img/Cadillac Opulent Velocity Van 2026 .jpg",
        description: "2026 · 11 miles · Hybrid"
    },

    {
        id: 54,
        name: "Cadillac Presidential Shuttle 2026 ",
        category: "Cadillac",
        price: 56000,
        oldprice: 70000,
        discount: 12,
        image: "../img/Cadillac Presidential Shuttle 2026 .jpg",
        description: "2026 · 8 miles · Electric"
    },


    {
        id: 55,
        name: "Cadillac Urban VIP Van 2025",
        category: "Cadillac ",
        price: 60000,
        oldprice: 72000,
        discount: 13,
        image: "../img/Cadillac Urban VIP Van 2025 .jpg",
        description: "2025· 10 miles · Hybrid"
    },

    {
        id: 56,
        name: "Cadillac XT6 Executive MPV 2025",
        category: "Cadillac",
        price: 40000,
        oldprice: 46700,
        discount: 11,
        image: "../img/Cadillac XT6 Executive MPV 2025 .jpg",
        description: "2025 · 10 miles ·Hybrid"
    },

    {
        id: 57,
        name: "Cadillac Celestiq Executive 2026",
        category: "Cadillac",
        price: 44000,
        oldprice:67000,
        discount: 10,
        image: "../img/Cadillac Celestiq Executive 2026.jpg",
        description: "2026 · 8 miles ·  Hybrid"
    },

    {
        id: 58,
        name: "Cadillac Solis Grand Cruiser 2026",
        category: "Cadillac",
        price: 67000,
        oldprice:70000,
        discount: 8,
        image: "../img/Cadillac Solis Grand Cruiser 2026.jpg",
        description: "2026 · 13 miles · Electric"
    },

    {
        id: 59,
        name: "Fiat Doblò Panorama 2025",
        category: "Fiat",
        price: 92000,
        oldprice: 110800,
        discount: 13,
        image: "../img/Fiat Doblò Panorama 2025.jpg",
        description: "2025 · 12 miles · Hybrid"
    },
    {
        id: 60,
        name: "Fiat Ducato Camper XL 2026",
        category: "Fiat",
        price: 45000,
        oldprice: 67000,
        discount: 9,
        image: "../img/Fiat Ducato Camper XL 2026.jpg",
        description: "2026 · 8 miles ·  Hybrid"
    },
    {
        id: 61,
        name: "Fiat Ducato Van 2026",
        category: "Fiat ",
        price: 65000,
        oldprice: 89000,
        discount: 8,
        image: "../img/Fiat Ducato Van 2026 .jpg",
        description: "2026 · 8 miles · Diesel"
    },
    {
        id: 62,
        name: "Fiat E-Ducato Electric 2026",
        category: "Fiat",
        price: 67000,
        oldprice:89000,
        discount: 14,
        image: "../img/Fiat E-Ducato Electric 2026 .jpg",
        description: "2026 · 8 miles · V12 Hybrid"
    },
    {
        id: 63,
        name: "Fiat E-Scudo Electric 2026",
        category: "Fiat",
        price: 78000,
        oldprice: 90000,
        discount: 10,
        image: "../img/Fiat E-Scudo Electric 2026.jpg",
        description: "2026 · 8 miles ·  Hybrid"
    },
    {
        id: 64,
        name: "Fiat Fiorino Cargo 2025  ",
        category: "Fiat",
        price: 65000,
        oldprice: 78000,
        discount: 10,
        image:"../img/Fiat Fiorino Cargo 2025.jpg",
        description: "2025 · 10 miles ·Hybrid"
    },
    {
        id: 65,
        name: "Fiat Scudo Combi 2026",
        category: "Fiat",
        price: 98000,
        oldprice: 10500,
        discount: 11,
        image: "../img/Fiat Scudo Combi 2026.jpg",
        description: "2026 · 8 miles · Diesel"
    },
    {
        id: 66,
        name: "Fiat Ulysse VIP 2026 ",
        category: "Fiat ",
        price: 68000,
        oldprice: 75000,
        discount: 7,
        image: "../img/Fiat Ulysse VIP 2026.jpg",
        description: "2026 · 10 miles ·     Electric"
    }
    ,{
        id: 67,
        name: "Morelo Grand Empire 120 GSO",
        category: "Motorhome",
        price: 855000,
        oldprice: 900000,
        discount: 7,
        image: "../img/Morelo Grand Empire 120 GSO .jpg",
        description: "2026 · 12 miles · Diessel"
    },

    {
        id: 68,
        name: "Morelo Home 78 L ",
        category: "Motorhome",
        price:292000 ,
        oldprice: 342000,
        discount: 8,
        image: "../img/Morelo Home 78 L .jpg",
        description: "2026 · 25 miles · Diessel"
    },


    {
        id: 69,
        name: "Niesmann+Bischoff Arto 78",
        category: "Motorhome",
        price: 158000,
        oldprice: 200000,
        discount: 6,
        image: "../img/Niesmann+Bischoff Arto 78 .jpg",
        description: "2026 · 5 miles · Diessel"
    },

    {
        id: 70,
        name: "Niesmann+Bischoff iSmove",
        category: "Motorhome",
        price: 110000,
        oldprice: 150000,
        discount: 7,
        image: "../img/Niesmann+Bischoff iSmove .jpg",
        description: "2026 · 8 miles · Diessel"
    },

    {
        id: 71,
        name: "VARIOmobil Perfect 1200 QS Platinum ",
        category: "Motorhome",
        price: 247000000,
        oldprice:266000000,
        discount: 5,
        image: "../img/VARIOmobil Perfect 1200 QS Platinum .jpg",
        description: "2025 · 45 miles ·  Diessel "
    },

    {
        id: 72,
        name: "Volkner Performance S",
        category: "Motorhome ",
        price: 253000000,
        oldprice:289000000,
        discount: 6,
        image: "../img/Volkner Performance S_ .jpg",
        description: "2026 · 30 miles · Diessel"
    },

    {
        id: 73,
        name: "Le Voyageur Eterna 7.0 GJF",
        category: "Motorhome",
        price: 154000,
        oldprice:190000,
        discount: 5,
        image: "../img/اLe Voyageur Eterna 7.0 GJF .jpg",
        description: "2026 · 10 miles · Diessel"
    },
    {
        id: 74,
        name: "Concorde Centurion 1200 GSI",
        category: "Motorhome",
        price: 974000 ,
        oldprice:999000,
        discount: 3,
        image: "../img/رنConcorde Centurion 1200 GSI_ .jpg",
        description: "2026 · 18 miles · Diessel"
    },
    {
        id: 75,
        name: "Marchi Mobile eleMMent Palazzo Superior",
        category: "Motorhome",
        price: 325000000 ,
        oldprice: 360000000,
        discount: 6,
        image: "../img/Marchi Mobile eleMMent Palazzo Superior.jpg",
        description: "2026 · 10 miles ·  Diesel"
    },
    {
        id: 76,
        name: "La Strada Nova M",
        category: "Motorhome",
        price:107000,
        oldprice:120000,
        discount: 8,
        image: "../img/La Strada Nova M .jpg",
        description: "2026 · 8 miles ·Diesel"
    },
    {
        id: 77,
        name: "Hymer B-MC I 600",
        category: "Motorhome",
        price: 199000,
        oldprice:210000,
        discount: 9,
        image: "../img/Hymer B-MC I 600 .jpg",
        description: "2026 · 9 miles · Diesel"
    },
    {
        id: 78,
        name: "Hymer Venture S",
        category: "Motorhome",
        price: 268000,
        oldprice: 289000,
        discount: 6,
        image: "../img/Hymer Venture S .jpg",
        description: "2026 · 22 miles · Diesel"
    },
    {
        id: 79,
        name: "Adria Supersonic 780 DL",
        category: "Motorhome",
        price: 177000,
        oldprice:200000,
        discount: 8,
        image: "../img/Adria Supersonic 780 DL.jpg",
        description: "2026 · 8 miles ·Diesel"
    },
    {
        id: 80,
        name: "Concorde Carver 790 LI",
        category: "Motorhome ",
        price: 309000,
        oldprice: 340000,
        discount: 8,
        image: "../img/Concorde Carver 790 LI .jpg",
        description: "2026 · 12 miles · Diesel"
    },
    {
        id: 81,
        name: "Carthago C2 Tourer ",
        category: "Motorhome",
        price: 130000,
        oldprice:170000,
        discount: 13,
        image: "../img/Carthago C2 Tourer .jpg",
        description: "2026 · 5 miles ·  Diesel"
    },

];
const productscontainer = document.getElementById("productsContainer");
const noResult = document.getElementById("noResult");
const resultcount = document.getElementById("resultcount");
const categorybutton = document.querySelectorAll(".category-btn");
const cartbutton = document.getElementById("cartButton");
const cartcount = document.getElementById("cartCount");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

let selectedcategory = "All";
let cart = [];
function displayproductds(productList) {
    productscontainer.innerHTML = "";
    if (productList.length === 0) {
        productscontainer.appendChild(noResult);
        noResult.style.display = "#FF5500";
        resultcount.textContent = "0 Products Found";
        return;
    }

    noResult.style.display = "none";
    productList.forEach(function (product) {
        const productCart = document.createElement("div");
        productCart.classList.add("product-card");
        productCart.innerHTML = `
        <span class="discount">${product.discount}%OFF</span>
        <img class="product-img" src="${product.image}" alt="${product.name}"/>
        <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class"product-description">${product.description}</p>
        <div class="price"><span class="old-price">$${product.oldprice}</span></div>
        <button class="add-cart" onclick="addTocart(${product.id})">Add to Cart</button>
        </div>
        `;
        productscontainer.appendChild(productCart);
    });
    resultcount.textContent = `${productList.length}product(s) found`;
}
categorybutton.forEach(function (button) {
    button.addEventListener("click", function () {
        const category = button.dataset.category;
        categorybutton.forEach(function (btn) { btn.classList.remove("active"); });
         button.classList.add("active"); 
         if (category === "All") { displayproductds(products); 
            selectedcategory = "All"; 
            return; 
        }
             const filteredProducts = products.filter(function (product) { return product.category.trim().toLowerCase() === category.trim().toLowerCase(); }); displayproductds(filteredProducts); selectedcategory = category;
    });
});
/*function searchProducts(){
    const searchtext=searchInput.Value.toLowerCase().trim();
    const filteredProducts=products.filter(function(product){
        const matchesSearch=product.name.toLowerCase().includes(searchtext);
        const matchesCategory=selectedcategory==="All" || product.category===selectedcategory;
        return matchesSearch && matchesCategory;

    });
    displayproductds(filteredProducts)
}
searchInput.addEventListener("input",function(event){
    console.log("Input value:",event.target.Value);
    searchProducts();
})*/
//add to cart
function addTocart(productId) {
    let selectedProduct = null;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            selectedProduct = products[i];
            break; 
        }
    }

    if (selectedProduct === null) return;
    let foundIndex = -1;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            foundIndex = i; 
            break;
        }
    }

    if (foundIndex !== -1) {
       
        cart[foundIndex].quantity = cart[foundIndex].quantity + 1;
    } else {
        let newItem = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
            quantity: 1
        };
        cart.push(newItem);
    }
    localStorage.setItem('myCart', JSON.stringify(cart));
    updateCartDisplay();
    
    
}

function changeQuantity(productId, action) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            if (action === 'plus') {
                cart[i].quantity = cart[i].quantity + 1; // زیاد کردن
            } else if (action === 'minus') {
                if(cart[i].quantity>1){
                cart[i].quantity = cart[i].quantity - 1; 
                }
            }
            break;
        }
    }
    localStorage.setItem("cart" , JSON.stringify(cart));
    updateCartDisplay();
    localStorage.setItem('myCart', JSON.stringify(cart));
    updateCartDisplay();
}

function removeItem(productId){
        cart = cart.filter(item =>item.id !== productId);
        localStorage.setItem("myCar" , JSON.stringify(cart));
        updateCartDisplay();
        showCustomAlert("kjhuihgftydtc");
        alert("dfgyckhvl");
    }
function updateCartDisplay() {
    let cartBox = document.getElementById("cartBox");
    let cartTotal = document.getElementById("cartTotal");
    cartcount.textContent=cart.length;

    if (!cartBox) return; 
    cartBox.innerHTML = "";

    if (cart.length === 0) {
        cartBox.innerHTML = "<p>سبد خرید شما خالی است.</p>";
        if (cartTotal) {
            cartTotal.textContent = "$0";
        }
        return;
    }

    let totalPrice = 0;

    
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemTotalPrice = item.price * item.quantity; 
        totalPrice = totalPrice + itemTotalPrice;

        
        let productDiv = document.createElement("div");
        productDiv.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border:none; padding-bottom: 10px;";
        
        productDiv.innerHTML = `
            <div class="cart-line container" style="display: flex; flex:row; align-items: center;">
            <div class=" col-lg-3">
                <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="col-lg-4">
                    <h4 style="margin: 0;">${item.name}</h4>
                    <p style="margin: 5px 0 0 0; color: gray;">$${item.price}  <br>$${itemTotalPrice}</p>
                </div>
                <div class="col-lg-4 d-flex flex-row flex-nowrap">
                 <button class="p-mbutton" onclick="changeQuantity(${item.id}, 'plus')" style="padding: 2px 8px; cursor: pointer;">+</button>
                <span class="mt-3" style="margin: 0 8px;">${item.quantity}</span>
                <button class="p-mbutton" onclick="changeQuantity(${item.id}, 'minus')" style="padding: 2px 8px; cursor: pointer ">-</button>
                <button class="btn-ghost mx-3" onclick="removeItem(${item.id})" >Remove</button>
                </div>
            </div>
          
        `;

        cartBox.appendChild(productDiv);
    }

    if (cartTotal) {
        cartTotal.textContent = "$" + totalPrice.toLocaleString();
    }
}

window.onload = function() {
    let savedCart = localStorage.getItem('myCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
};

displayproductds(products);