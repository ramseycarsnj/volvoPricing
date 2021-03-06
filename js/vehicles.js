// Vehicle Building Function
function VehicleBuilder(year,model,trim,color,image,url) {
  this.year = year;
  this.model = model;
  this.trim = trim;
  this.color = color;
  this.image = image;
  this.url = url;
}

// Vehicle Selection Default
var selectedVehicle = 'noVehicleSelected';

// Vehicle Array
var fullVehicleArray = [];

// Vehicle Building Area


// BEGIN S60
  // BEGIN DYNAMIC
    // BEGIN DYNAMIC T5 AWD
fullVehicleArray[0] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'Dynamic T5 AWD',
  'Electric Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Awd/electricSilverMetallic,jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[1] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'Dynamic T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Awd/iceWhite,jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[2] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'Dynamic T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Awd/onyxBlackMetallic,jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[3] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'Dynamic T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Awd/osmiumGreyMetallic,jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[4] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'Dynamic T5 AWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Awd/passionRed,jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);

  // BEGIN DYNAMIC T5 FWD
  fullVehicleArray[5] = new VehicleBuilder(
    '2017',
    'Volvo S60',
    'Dynamic T5 FWD',
    'Electric Silver Metallic',
    'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Fwd/electricSilverMetallic,jpg',
    'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
  );
  fullVehicleArray[6] = new VehicleBuilder(
    '2017',
    'Volvo S60',
    'Dynamic T5 FWD',
    'Ice White',
    'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Fwd/iceWhite,jpg',
    'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
  );
  fullVehicleArray[7] = new VehicleBuilder(
    '2017',
    'Volvo S60',
    'Dynamic T5 FWD',
    'Onyx Black Metallic',
    'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Fwd/onyxBlackMetallic,jpg',
    'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
  );
  fullVehicleArray[8] = new VehicleBuilder(
    '2017',
    'Volvo S60',
    'Dynamic T5 FWD',
    'Osmium Grey Metallic',
    'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Fwd/osmiumGreyMetallic,jpg',
    'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
  );
  fullVehicleArray[9] = new VehicleBuilder(
    '2017',
    'Volvo S60',
    'Dynamic T5 FWD',
    'Passion Red',
    'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/dynamic/t5Fwd/passionRed,jpg',
    'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
  );

  // BEGIN S60 R-DESIGN
fullVehicleArray[10] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'R-Design T6 AWD',
  'Bursting Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/rdesign/t6Awd/burstingBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[11] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'R-Design T6 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/rdesign/t6Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[12] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'R-Design T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/rdesign/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[13] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'R-Design T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/rdesign/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[14] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'R-Design T6 AWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/rdesign/t6Awd/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);

  // BEGIN S60 INSCRIPTION
    // BEGIN S60 T5 INSCRIPTION
fullVehicleArray[15] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5Inscription/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[16] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5Inscription/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[17] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5Inscription/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[18] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5Inscription/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[19] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5Inscription/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[20] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5Inscription/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[21] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5Inscription/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[22] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5Inscription/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);

    // BEGIN S60 T5 INSCRIPTION AWD
fullVehicleArray[23] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription AWD',
  'Bright Silver Metal Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5InscriptionAwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[24] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5InscriptionAwd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[25] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription AWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5InscriptionAwd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[26] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5InscriptionAwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[27] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5InscriptionAwd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[28] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5InscriptionAwd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[29] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5InscriptionAwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[30] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscription/t5InscriptionAwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);

    // BEGIN S60 T5 INSCRIPTION PLATINUM
fullVehicleArray[31] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5Inscription/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[32] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5Inscription/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[33] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5Inscription/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[34] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5Inscription/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[35] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5Inscription/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[36] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5Inscription/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[37] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5Inscription/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[38] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5Inscription/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);

    // BEGIN S60 T5 INSCRIPTION PLATINUM AWD
fullVehicleArray[39] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5InscriptionAwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[40] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5InscriptionAwd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[41] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum AWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5InscriptionAwd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[42] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5InscriptionAwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[43] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5InscriptionAwd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[44] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5InscriptionAwd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[45] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5InscriptionAwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);
fullVehicleArray[46] = new VehicleBuilder(
  '2017',
  'Volvo S60',
  'T5 Inscription Platinum AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60/inscriptionPlatinum/t5InscriptionAwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60/Sedan.htm'
);

// BEGIN S60 CROSS COUNTRY T5 AWD
fullVehicleArray[47] = new VehicleBuilder(
  '2017',
  'Volvo S60 Cross Country',
  'T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S60CrossCountry/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S60+Cross+Country/Sedan.htm'
);

// BEGIN S90
  // BEGIN S90 MOMENTUM T5 FWD
fullVehicleArray[48] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T5 FWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t5Fwd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[49] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T5 FWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t5Fwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[50] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T5 FWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t5Fwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[51] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T5 FWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t5Fwd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[52] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T5 FWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t5Fwd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[53] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T5 FWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t5Fwd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[54] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[55] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);

  // BEGIN S90 MOMENTUM T6 AWD
fullVehicleArray[56] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T6 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t6Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[57] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T6 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t6Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[58] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T6 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t6Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[59] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T6 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t6Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[60] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T6 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t6Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[61] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T6 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t6Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[62] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[63] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Momentum T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/momentum/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
  // BEGIN S90 INSCRIPTION T5 FWD
fullVehicleArray[64] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T5 FWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t5Fwd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[65] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T5 FWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t5Fwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[66] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T5 FWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t5Fwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[67] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T5 FWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t5Fwd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[68] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T5 FWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t5Fwd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[69] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T5 FWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t5Fwd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[70] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[71] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
  // BEGIN S90 INSCRIPTION T6 AWD
fullVehicleArray[72] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T6 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t6Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[73] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T6 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t6Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[74] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T6 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t6Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[75] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T6 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t6Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[76] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T6 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t6Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[77] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T6 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t6Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[78] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);
fullVehicleArray[79] = new VehicleBuilder(
  '2017',
  'Volvo S90',
  'Inscription T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/S90/inscription/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/S90/Sedan.htm'
);

// BEGIN V60

  // BEGIN V60 T5 FWD
fullVehicleArray[80] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[81] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[82] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[83] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[84] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[85] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[86] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[87] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[88] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[89] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
  // BEGIN V60 T5 AWD
fullVehicleArray[90] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[91] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[92] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[93] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[94] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[95] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[96] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[97] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[98] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[99] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/t5/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);

  // BEGIN V60 PREMIER FWD
fullVehicleArray[100] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[101] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[102] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[103] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[104] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[105] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[106] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[107] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[108] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[109] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);

  // BEGIN V60 PREMIER AWD
fullVehicleArray[110] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[111] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[112] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[113] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[114] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[115] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[116] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[117] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[118] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[119] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Premier T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/premier/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
  // BEGIN V60 PLATINUM FWD
fullVehicleArray[120] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[121] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[122] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[123] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[124] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[125] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[126] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[127] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[128] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[129] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);


  // BEGIN V60 PLATINUM AWD
fullVehicleArray[130] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[131] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[132] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[133] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[134] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[135] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[136] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[137] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[138] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[139] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Platinum T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/platinum/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
  // BEGIN V60 DYNAMIC T5 FWD
fullVehicleArray[140] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 FWD',
  'Electric Silver',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Fwd/electricSilverMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[141] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 FWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Fwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[142] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[143] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[144] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 FWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Fwd/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);

  // BEGIN V60 DYNAMIC T5 AWD
fullVehicleArray[145] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 AWD',
  'Electric Silver',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Awd/electricSilverMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[146] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[147] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[148] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[149] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'Dynamic T5 AWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/dynamic/t5Awd/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
  // BEGIN V60 R-DESIGN T6 AWD
fullVehicleArray[150] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'R-Design T6 AWD',
  'Bursting Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/rdesign/t6Awd/burstingBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[151] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'R-Design T6 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/rdesign/t6Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[152] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'R-Design T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/rdesign/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[153] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'R-Design T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/rdesign/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);
fullVehicleArray[154] = new VehicleBuilder(
  '2017',
  'Volvo V60',
  'R-Design T6 AWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60/rdesign/t6Awd/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60/Wagon.htm'
);

// BEGIN V60 CROSS COUNTRY
  // BEGIN V60 CROSS COUNTRY T5 AWD
fullVehicleArray[155] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[156] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[157] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[158] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[159] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[160] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[161] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[162] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[163] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Rich Java Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/richJavaMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[164] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'T5 AWD',
  'Twilight Bronze Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/t5Awd/twilightBronzeMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
  // BEGIN V60 CROSS COUNTRY PLATINUM
fullVehicleArray[165] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[166] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[167] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[168] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[169] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[170] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[171] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[172] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[173] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Rich Java Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/richJavaMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);
fullVehicleArray[174] = new VehicleBuilder(
  '2017',
  'Volvo V60 Cross Country',
  'Platinum T5 AWD',
  'Twilight Bronze Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V60CrossCountry/platinum/twilightBronzeMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/V60+Cross+Country/Wagon.htm'
);

// BEGIN V90 CROSS COUNTRY T5 AWD
fullVehicleArray[175] = new VehicleBuilder(
  '2017',
  'Volvo V90',
  'T6 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V90/t6Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/volvo-models/v90.htm'
);
fullVehicleArray[176] = new VehicleBuilder(
  '2017',
  'Volvo V90',
  'T6 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V90/t6Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/volvo-models/v90.htm'
);
fullVehicleArray[177] = new VehicleBuilder(
  '2017',
  'Volvo V90',
  'T6 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V90/t6Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/volvo-models/v90.htm'
);
fullVehicleArray[178] = new VehicleBuilder(
  '2017',
  'Volvo V90',
  'T6 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V90/t6Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/volvo-models/v90.htm'
);
fullVehicleArray[179] = new VehicleBuilder(
  '2017',
  'Volvo V90',
  'T6 AWD',
  'Maple Brown Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V90/t6Awd/mapleBrownMetallic.jpg',
  'http://www.volvocarsramsey.com/volvo-models/v90.htm'
);
fullVehicleArray[180] = new VehicleBuilder(
  '2017',
  'Volvo V90',
  'T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V90/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/volvo-models/v90.htm'
);
fullVehicleArray[181] = new VehicleBuilder(
  '2017',
  'Volvo V90',
  'T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V90/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/volvo-models/v90.htm'
);
fullVehicleArray[182] = new VehicleBuilder(
  '2017',
  'Volvo V90',
  'T6 AWD',
  'Twilight Bronze Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/V90/t6Awd/twilightBronzeMetallic.jpg',
  'http://www.volvocarsramsey.com/volvo-models/v90.htm'
);

// BEGIN XC60
// BEGIN XC60 DYNAMIC T5 FWD
fullVehicleArray[183] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[184] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[185] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[186] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[187] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[188] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[189] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[190] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[191] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[192] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[193] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Power Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/powerBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[194] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 FWD',
  'Rich Java Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Fwd/richJavaMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);

// BEGIN XC90 DYNAMIC T5 AWD
fullVehicleArray[195] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[196] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[197] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[198] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[199] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[200] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[201] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[202] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[203] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[204] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[205] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Power Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/powerBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[206] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T5 AWD',
  'Rich Java Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t5Awd/richJavaMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);

// BEGIN XC90 DYNAMIC T6 AWD
fullVehicleArray[207] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[208] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[209] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[210] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[211] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[212] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[213] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[214] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[215] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[216] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[217] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Power Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/powerBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[218] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Dynamic T6 AWD',
  'Rich Java Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/dynamic/t6Awd/richJavaMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
// BEGIN XC90 INSCRIPTION T5 FWD
fullVehicleArray[219] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[220] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[221] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[222] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[223] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[224] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[225] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[226] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[227] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[228] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[229] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Power Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/powerBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[230] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 FWD',
  'Rich Java Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Fwd/richJavaMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);

// BEGIN XC90 INSCRIPTION T5 AWD
fullVehicleArray[231] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[232] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[233] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[234] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[235] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[236] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[237] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[238] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[239] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[240] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[241] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Power Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/powerBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[242] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T5 AWD',
  'Rich Java Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t5Awd/richJavaMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);

// BEGIN XC90 INSCRIPTION T6 AWD
fullVehicleArray[243] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Black Stone',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/blackStone.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[244] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[245] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[246] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Flamenco Red Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/flamencoRedMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[247] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[248] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[249] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[250] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Mussel Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/musselBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[251] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[252] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[253] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Power Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/powerBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[254] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'Inscription T6 AWD',
  'Rich Java Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/inscription/t6Awd/richJavaMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
  // BEGIN XC60 R-DESIGN
fullVehicleArray[255] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'R-Design T6 AWD',
  'Bursting Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/rdesign/t6Awd/burstingBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[256] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'R-Design T6 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/rdesign/t6Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[257] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'R-Design T6 AWD',
  'Electric Siler Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/rdesign/t6Awd/electricSilverMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[258] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'R-Design T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/rdesign/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[259] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'R-Design T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/rdesign/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);
fullVehicleArray[260] = new VehicleBuilder(
  '2017',
  'Volvo XC60',
  'R-Design T6 AWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC60/rdesign/t6Awd/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC60/SUV.htm'
);

// BEGIN XC90
  // XC90 MOMENTUM FWD
fullVehicleArray[261] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 FWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Fwd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[262] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 FWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Fwd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[263] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 FWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Fwd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[264] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 FWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Fwd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[265] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[266] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[267] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 FWD',
  'Savile Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Fwd/savileGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[268] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 FWD',
  'Twilight Bronze Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Fwd/twilightBronzeMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);

  //  XC90 MOMENTUM T5 AWD
fullVehicleArray[269] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[270] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[271] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[272] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[273] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[274] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[275] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 AWD',
  'Savile Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Awd/savileGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[276] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T5 AWD',
  'Twilight Bronze Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t5Awd/twilightBronzeMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);

  // XC90 MOMENTUM T6 AWD
fullVehicleArray[277] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T6 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t6Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[278] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T6 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t6Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[279] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T6 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t6Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[280] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T6 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t6Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[281] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T6 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t6Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[282] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[283] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[284] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T6 AWD',
  'Savile Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t6Awd/savileGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[285] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Momentum T6 AWD',
  'Twilight Bronze Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/momentum/t6Awd/twilightBronzeMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[286] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 FWD',
  'Bursting Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Fwd/burstingBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[287] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 FWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Fwd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[288] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 FWD',
  'Electric Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Fwd/electricSilverMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[289] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 FWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Fwd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[290] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 FWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Fwd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[291] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 FWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Fwd/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);

  // XC90 RDESIGN T5 AWD
fullVehicleArray[292] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 AWD',
  'Bursting Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Awd/burstingBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[293] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[294] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 AWD',
  'Electric Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Awd/electricSilverMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[295] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[296] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[297] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T5 AWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t5Awd/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
  // XC90 RDESIGN T6 AWD
fullVehicleArray[298] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T6 AWD',
  'Bursting Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t6Awd/burstingBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[299] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T6 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t6Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[300] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T6 AWD',
  'Electric Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t6Awd/electricSilverMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[301] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[302] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[303] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T6 AWD',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t6Awd/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);

  // XC90 RDESIGN T8
fullVehicleArray[304] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T8 Plug-In Hybrid',
  'Bursting Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t8/burstingBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[305] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T8 Plug-In Hybrid',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t8/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[306] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T8 Plug-In Hybrid',
  'Electric Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t8/electricSilverMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[307] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T8 Plug-In Hybrid',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t8/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[308] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T8 Plug-In Hybrid',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t8/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[309] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'R-Design T8 Plug-In Hybrid',
  'Passion Red',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/rdesign/t8/passionRed.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
  // XC90 INSCRIPTION T6 AWD
fullVehicleArray[310] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T6 AWD',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t6Awd/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[311] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T6 AWD',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t6Awd/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[312] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T6 AWD',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t6Awd/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[313] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T6 AWD',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t6Awd/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[314] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T6 AWD',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t6Awd/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[315] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T6 AWD',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t6Awd/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[316] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T6 AWD',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t6Awd/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[317] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T6 AWD',
  'Savile Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t6Awd/savileGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[318] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T6 AWD',
  'Twilight Bronze Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t6Awd/twilightBronzeMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
  // XC90 INSCRIPTION T8
fullVehicleArray[319] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T8 Plug-in Hybrid',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t8/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[320] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T8 Plug-in Hybrid',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t8/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[321] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T8 Plug-in Hybrid',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t8/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[322] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T8 Plug-in Hybrid',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t8/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[323] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T8 Plug-in Hybrid',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t8/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[324] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T8 Plug-in Hybrid',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t8/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[325] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T8 Plug-in Hybrid',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t8/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[326] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T8 Plug-in Hybrid',
  'Savile Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t8/savileGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[327] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Inscription T8 Plug-in Hybrid',
  'Twilight Bronze Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/inscription/t8/twilightBronzeMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);

  // XC90 EXCELLENCE T8
fullVehicleArray[328] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Bright Silver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/brightSilverMetalic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[329] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Crystal White Pearl',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/crystalWhitePearl.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[330] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Electric Siver Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/electricSilverMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[331] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Ice White',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/iceWhite.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[332] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Luminous Sand Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/luminousSandMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[333] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Magic Blue Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/magicBlueMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[334] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Onyx Black Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/onyxBlackMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[335] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Osmium Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/osmiumGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[337] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Savile Grey Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/savileGreyMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
fullVehicleArray[338] = new VehicleBuilder(
  '2017',
  'Volvo XC90',
  'Excellence T8 Plug-in Hybrid',
  'Twilight Bronze Metallic',
  'https://ramseycarsnj.github.io/volvoPricing/vehicles/XC90/excellence/t8/twilightBronzeMetallic.jpg',
  'http://www.volvocarsramsey.com/showroom/2017/Volvo/XC90/SUV.htm'
);
