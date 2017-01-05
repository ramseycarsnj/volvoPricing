$(document).ready(function() {

// Staff Member Function
function StaffBuilder(firstName, lastName, title, extension, email, picture) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
  this.extension = extension;
  this.email = email;
  this.picture = picture;
}


// Staff Members----------------------------------------------------------------

var robertWood = new StaffBuilder(
  'Robert',
  'Wood',
  'E-Commerce Manager',
  '5218',
  'rwood@ramseysubaru.net',
  'http://pictures.dealer.com/ddc/resize/250x/quality/72/sharpen/1/ddc/r/ramseysubaruramseysoa/1793/de311009994b88be56cff815939923bbx.jpg'
);

var baileyKasbarian = new StaffBuilder(
  'Bailey',
  'Kasbarian',
  'E-Commerce Associate',
  '5230',
  'bkasbarian@ramseysubaru.net',
  'http://pictures.dealer.com/ddc/resize/250x/quality/72/sharpen/1/ddc/r/ramseysubaruramseysoa/0644/50536bea247e3bf37d670151d25c6898x.jpg'
);

var meganPrevidi = new StaffBuilder(
  'Megan',
  'Previdi',
  'E-Commerce Associate',
  '5223',
  'mprevidi@ramseysubaru.net',
  'http://pictures.dealer.com/ddc/resize/250x/quality/72/sharpen/1/ddc/r/ramseysubaruramseysoa/0425/81acd5b1f6bdee16935f0adb9e9e9e0ax.jpg'
);

var emanuelJustafort = new StaffBuilder(
  'Emanuel',
  'Justafort',
  'E-Commerce Associate',
  '5224',
  'ejustafort@ramseysubaru.net',
  'http://pictures.dealer.com/ddc/resize/250x/quality/72/sharpen/1/ddc/r/ramseysubaruramseysoa/1864/cc13a7c97b910615e80826b4595a7a96x.jpg'
);

// Staff Members END -----------------------------------------------------------

// URL Pull
var currentURL = window.location.href;
console.log(currentURL);
var currentUser = 'none';

if (currentURL === 'https://ramseycarsnj.github.io/volvoPricing/index.html' || currentURL === 'http://ramseycarsnj.github.io/volvoPricing/index.html' || currentURL === 'http://localhost:5757/') {

  currentUser = window.prompt("Enter Username","user");

  currentURL += "?" + currentUser;
  history.pushState({}, null, currentURL);


}
console.log(currentURL);

// User Check
if (currentUser == 'rwood' || currentURL.split("?").pop() == 'rwood/') {
  $('#usernamed').append(robertWood.firstName);
  $('#employeeName').html(robertWood.firstName + ' ' + robertWood.lastName);
  $('#currentUserPosition').html(robertWood.title);
  $('#currentUserExtension').html(robertWood.extension);
  $('#userImage').attr('src', robertWood.picture);
  $('#userEmail').html(robertWood.email);
  $('#userEmail').attr('href','mailto:' + robertWood.email);
}
 else if (currentUser == 'bkasb' || currentURL.split("?").pop() == 'bkasb/') {
  $('#usernamed').append(baileyKasbarian.firstName);
  $('#employeeName').html(baileyKasbarian.firstName + ' ' + baileyKasbarian.lastName);
  $('#currentUserPosition').html(baileyKasbarian.title);
  $('#currentUserExtension').html(baileyKasbarian.extension);
  $('#userImage').attr('src', baileyKasbarian.picture);
  $('#userEmail').html(baileyKasbarian.email);
  $('#userEmail').attr('href','mailto:' + baileyKasbarian.email);
}

else if (currentUser == 'mprev' || currentURL.split("?").pop() == 'mprev/') {
  $('#usernamed').append(meganPrevidi.firstName);
  $('#employeeName').html(meganPrevidi.firstName + ' ' + meganPrevidi.lastName);
  $('#currentUserPosition').html(meganPrevidi.title);
  $('#currentUserExtension').html(meganPrevidi.extension);
  $('#userImage').attr('src', meganPrevidi.picture);
  $('#userEmail').html(meganPrevidi.email);
  $('#userEmail').attr('href','mailto:' + meganPrevidi.email);
}

else if (currentUser == 'ejust' || currentURL.split("?").pop() == 'ejust/') {
  $('#usernamed').append(emanuelJustafort.firstName);
  $('#employeeName').html(emanuelJustafort.firstName + ' ' + emanuelJustafort.lastName);
  $('#currentUserPosition').html(emanuelJustafort.title);
  $('#currentUserExtension').html(emanuelJustafort.extension);
  $('#userImage').attr('src', emanuelJustafort.picture);
  $('#userEmail').html(emanuelJustafort.email);
  $('#userEmail').attr('href','mailto:' + emanuelJustafort.email);
}

else {
  $('#usernamed').append('User');
}


function refresher() {
  $('#refreshButton').click(function(){
    location.reload();
  });
}
// Selects Name input on load
var inputPreSelect = document.getElementById('customerName');
inputPreSelect.focus();
inputPreSelect.select();

// Sets Default Availability
$('#vehicleAvailability').html('This vehicle is available.');

// Customer Name Input Functionality
function nameFunc(){
        var input = $("#customerName").val();
        $("#customerNameDisplay").text(input);
    }
    nameFunc();

    $('#customerName').keyup(function(){
        $('#customerNameDisplay').html($(this).val());
    });

    $('#customerName').change(function(){
        nameFunc();
    });

// Price Input Functionality
function priceFunc(){
        var input = $("txtPrice").val();
        $("#priceDisplay").text(input);
    }
    priceFunc();

    $('#txtPrice').keyup(function(){
        $('#priceDisplay').html('<span style="margin: 0;padding: 0 30px 0 0;border: 0;font-size: 16px;vertical-align: baseline;font-family: Arial, sans-serif;font-weight: bold;color: #003057;">Your Finance Quote</span><br><span style="margin: 0;padding: 0 30px 0 0;border: 0;font-size: 40px;vertical-align: baseline;font-family: Arial, sans-serif;font-weight: bold;color: #003057;">$' + $(this).val() + '</span>');
    });

    $('#txtPrice').change(function(){
        priceFunc();
    });

// Date Input Functionality
function dateFunc(){
        var input = $("#txtDate").val();
        $("#dateDisplay").text(input);
    }
    dateFunc();

    $('#txtDate').keyup(function(){
        $('#dateDisplay').html($(this).val());
    });

    $('#txtDate').change(function(){
        dateFunc();
    });


// Monthly Payment Input Functionality
function monthlyFunc(){
        var input = $("txtMonth").val();
        $("#monthlyDisplay").text(input);
    }
    monthlyFunc();

    $('#txtMonth').keyup(function(){
        $('#monthlyDisplay').html('<span style="margin: 0;padding: 0 30px 0 0;border: 0;font-size: 16px;vertical-align: baseline;font-family: Arial, sans-serif;font-weight: bold;color: #003057;">Your Lease Quote</span><br><span style="margin: 0;padding: 0 0px 0 0;border: 0;font-size: 40px;vertical-align: baseline;font-family: Arial, sans-serif;font-weight: bold;color: #003057;">$' + $(this).val() + '</span><span style="margin: 0;padding: 0 30px 0 0;border: 0;font-size: 16px;vertical-align: baseline;font-family: Arial, sans-serif;font-weight: bold;color: #003057;">/month</span>');
    });

    $('#txtMonth').change(function(){
        monthlyFunc();
    });

// Lease Term Input Functionality
function termFunc(){
        var input = $("txtTerm").val();
        $("termDisplay").text(input);
    }
    termFunc();

    $('#txtTerm').keyup(function(){
        $('#termDisplay').html('<span style="margin: 0;padding: 0 30px 0 0;border: 0;font-size: 12px;vertical-align: top;font-family: Arial, sans-serif;font-weight: bold;color: #003057;line-height:.8;">For ' + $(this).val() + ' months</span>');
    });

    $('#txtTerm').change(function(){
        termFunc();
    });

// Down Payment Input Functionality
function downFunc(){
        var input = $("txtDown").val();
        $("#downDisplay").text(input);
    }
    downFunc();

    $('#txtDown').keyup(function(){
        $('#downDisplay').html('<span style="margin: 0;padding: 0 30px 0 0;border: 0;font-size: 12px;vertical-align: top;font-family: Arial, sans-serif;font-weight: bold;color: #003057;line-height:.8;">$' + $(this).val() + ' due at signing</span>');
    });

    $('#txtDown').change(function(){
        downFunc();
    });

// Mileage Input Functionality
function mileageFunc(){
        var input = $("txtMileage").val();
        $("#mileageDisplay").text(input);
    }
    mileageFunc();

    $('#txtMileage').keyup(function(){
        $('#mileageDisplay').html('<span style="margin: 0;padding: 0 30px 0 0;border: 0;font-size: 12px;vertical-align: top;font-family: Arial, sans-serif;font-weight: bold;color: #003057;line-height:.8;">' + $(this).val() + ' miles per year</span>');
    });

    $('#txtMileage').change(function(){
        mileageFunc();
    });


// Adds / to date
$("#txtDate").keyup(function(){
                if ($(this).val().length == 2){
                    $(this).val($(this).val() + "/");
                }else if ($(this).val().length == 5){
                    $(this).val($(this).val() + "/");
                }
});



// Availability Status and Write to Page
$(function() {
  $('.availButton').click(function() {
      if (this.value === 'available') {
        // Writes The Availability of Checked item to Page
        $('#vehicleAvailability').html('This vehicle is available.');
      } else if (this.value === 'order') {
        // Writes The Availability of Checked item to Page
        $('#vehicleAvailability').html('This vehicle is currently out of stock. However, we are able to order it for you.');
      } else if (this.value === 'inbound') {
        $('#vehicleAvailability').html('This vehicle is currently inbound. We will notify you when it arrives.');
      }
  });
});


// Wheel Checkbox Checked Status and Write to Page
$(function() {
  $('.wheelSelect').click(function() {
      if (this.checked === true) {
        // Writes The Accessory Value of Checked item to Page
        $('#accessoryBuilder').prepend('<li id="accessory' + this.name + '">' + wheelArray[this.name] + '</li>');
      } else {
        // Removes Selected Accessory Item from page
          $('#accessory' + this.name).remove();
      }
  });
});

// Upholstry Checkbox Checked Status and Write to Page
$(function() {
  $('.upholstrySelect').click(function() {
      if (this.checked === true) {
        // Writes The Accessory Value of Checked item to Page
        $('#accessoryBuilder').prepend('<li id="accessory' + this.name + '">' + upholstryArray[this.name] + '</li>');
      } else {
        // Removes Selected Accessory Item from page
          $('#accessory' + this.name).remove();
      }
  });
});

// Exterior Styling Checkbox Checked Status and Write to Page
$(function() {
  $('.extStylingSelect').click(function() {
      if (this.checked === true) {
        // Writes The Accessory Value of Checked item to Page
        $('#accessoryBuilder').prepend('<li id="accessory' + this.name + '">' + extStyling[this.name] + '</li>');
      } else {
        // Removes Selected Accessory Item from page
          $('#accessory' + this.name).remove();
      }
  });
});

// Interior Styling Inlay Styling Checkbox Checked Status and Write to Page
$(function() {
  $('.intStylingInlaySelect').click(function() {
      if (this.checked === true) {
        // Writes The Accessory Value of Checked item to Page
        $('#accessoryBuilder').prepend('<li id="accessory' + this.name + '">' + intStylingInlay[this.name] + '</li>');
      } else {
        // Removes Selected Accessory Item from page
          $('#accessory' + this.name).remove();
      }
  });
});

// Interior Styling Steering Wheel Styling Checkbox Checked Status and Write to Page
$(function() {
  $('.intStylingSteeringWheelSelect').click(function() {
      if (this.checked === true) {
        // Writes The Accessory Value of Checked item to Page
        $('#accessoryBuilder').prepend('<li id="accessory' + this.name + '">' + intStylingSteeringWheel[this.name] + '</li>');
      } else {
        // Removes Selected Accessory Item from page
          $('#accessory' + this.name).remove();
      }
  });
});

// Interior Styling Gear Lever Styling Checkbox Checked Status and Write to Page
$(function() {
  $('.intStylingGearLeverSelect').click(function() {
      if (this.checked === true) {
        // Writes The Accessory Value of Checked item to Page
        $('#accessoryBuilder').prepend('<li id="accessory' + this.name + '">' + intStylingGearLever[this.name] + '</li>');
      } else {
        // Removes Selected Accessory Item from page
          $('#accessory' + this.name).remove();
      }
  });
});

// Options Checkbox Checked Status and Write to Page
$(function() {
  $('.optionsArraySelect').click(function() {
      if (this.checked === true) {
        // Writes The Accessory Value of Checked item to Page
        $('#accessoryBuilder').prepend('<li id="accessory' + this.name + '">' + optionsArray[this.name] + '</li>');
      } else {
        // Removes Selected Accessory Item from page
          $('#accessory' + this.name).remove();
      }
  });
});

// Package Checkbox Checked Status and Write to Page
$(function() {
  $('.packagesSelect').click(function() {
      if (this.checked === true) {
        // Writes The Accessory Value of Checked item to Page
        $('#accessoryBuilder').prepend('<li id="accessory' + this.name + '">' + packagesArray[this.name] + '</li>');
      } else {
        // Removes Selected Accessory Item from page
          $('#accessory' + this.name).remove();
      }
  });
});



// Auto Scroll Functionality
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top,
        }, 900);
        return false;
      }
    }
  });
});

// Default Hide Function
$('.defaultHide').hide();

// 2017 Vehicle Path
$('#year2017').click(function() {
  $('#yearSelect').hide();
  $('#modelSelect2017').show();
});

$(function() {
  $('.modelButton').click(function() {
    $('#' + this.value + 'TrimSelect').show();
    var trimSelector = '#' + this.value + 'TrimSelect';
    console.log(trimSelector);
    $('#modelSelect2017').hide();

  });
});



// Full Reset
$('#vehicleReset').click(function() {
  $('.defaultHide').hide();
  $('#modelSelect2017').show();
});

// Options Array
var wheelArray = [];
var upholstryArray = [];
var extStyling = [];
var intStylingInlay = [];
var intStylingSteeringWheel = [];
var intStylingGearLever = [];
var packagesArray = [];
var optionsArray = [];




// WHEELS
wheelArray[0] = '17” Pallene Silver  ';
wheelArray[1] = '18” Skadi  ';
wheelArray[2] = '18” 5-Spoke Sparkling Silver  ';
wheelArray[3] = '18” 10-Spoke Turbine Silver Bright  ';
wheelArray[4] = '18” Tuscan Diamond Cut/Glossy Black  ';
wheelArray[5] = '18” Neso Diamond Cut  ';
wheelArray[6] = '18” Leda Diamond Cut/Gloss Black  ';
wheelArray[7] = '19” Bor Matte Black Finish  ';
wheelArray[8] = '19” Ixion  ';
wheelArray[9] = '19” Portia Diamond Cut/Black  ';
wheelArray[10] = '19” 6-Double Spoke Tech Black Matte/Diamond Cut  ';
wheelArray[11] = '19” 5-Triple Spoke Tech Matte Black Diamond Cut  ';
wheelArray[12] = '19” 10-Spoke Turbine Silver Bright  ';
wheelArray[13] = '19” 10-Spoke Silver Diamond Cut  ';
wheelArray[14] = '20” Titania  ';
wheelArray[15] = '20” Avior  ';
wheelArray[16] = '20” 5-Double Spoke Matte Tech Black  ';
wheelArray[17] = '20” 5-Spoke Tech Matte Tech Grey Diamond Cut  ';
wheelArray[18] = '20” 8-Spoke Silver Diamond Cut  ';
wheelArray[19] = '20” 10-Spoke Tinted Silver Diamond Cut  ';
wheelArray[20] = '20” 10-Spoke Tech Grey Diamond Cut  ';
wheelArray[21] = '21” 8-Spoke Diamond Cut Silver  ';
wheelArray[22] = '21” 10-Spoke Turbine Polished  ';
wheelArray[23] = '22” 6-Spoke Matte Black Diamond Wheels';
wheelArray[24] = '22” 5-Double Spoke Diamond Cut/Matte Black  ';
wheelArray[25] = '22” 6-Double Spoke Matte Black Diamond Cut  ';

// UPHOLSTRY
upholstryArray[0] = 'Off-Black Textile/T-Tec Seats';
upholstryArray[1] = 'Soft Beige Comfort Leather Seats';
upholstryArray[2] = 'Off-Black Comfort Leather Seats';
upholstryArray[3] = 'Off-Black Sport Leather Seats';
upholstryArray[4] = 'Soft Beige Sport Leather Seats';
upholstryArray[5] = 'Beechwood Sport Leather Seats';
upholstryArray[6] = 'Soft Beige/Off-Black  Sport Leather Seats';
upholstryArray[7] = 'Beechwood  Brown/Off-Black Sport Leather Seats';
upholstryArray[8] = 'Blonde/Off-Black Sport Leather Seats';
upholstryArray[9] = 'Charcoal Leather in Charcoal';
upholstryArray[10] = 'Amber Leather in Charcoal';
upholstryArray[11] = 'Blonde Leather in Blonde/Charcoal';
upholstryArray[12] = 'Charcoal Leatherette in Charcoal';
upholstryArray[13] = 'Charcoal Perforated Fine Nappa Leather in Charcoal';
upholstryArray[14] = 'Blonde Perforated Fine Nappa Leather in Charcoal';
upholstryArray[15] = 'Charcoal Perforated Nappa Leather in Charcoal';
upholstryArray[16] = 'Amber Perforated Nappa Leather in Charcoal';
upholstryArray[17] = 'Blonde Perforated Nappa Leather in Blonde/ Charcoal';
upholstryArray[18] = 'Charcoal Nuback &amp; Nappa Leather in Charcoal';
upholstryArray[19] = 'R-Design Sport Leather/ Perforated Leather Seats';

// EXTERIOR STYLING
extStyling[0] = 'Split Dual End Tailpipes w/Rear Diffuser';
extStyling[1] = 'Rear Spoiler';
extStyling[2] = 'Decor Spoiler Front Bumper';
extStyling[3] = 'Diffuser';
extStyling[4] = 'Integrated Running Boards';
extStyling[5] = 'Side Scuff Plates';
extStyling[6] = 'Rugged Styling Kt  with Running Boards';
extStyling[7] = 'Urban Styling Kit with Running Boards';
extStyling[8] = 'Rugged Styling Kit with Side Scuff Plates';
extStyling[9] = 'Urban Styling Kit with Side Scuff Plates';
extStyling[10] = 'Front &amp; Rear Skid Plate Kit';
extStyling[11] = 'Running Boards';

// INTERIOR STYLING - INLAYS
intStylingInlay[0] = 'Milled Aluminum Inlays';
intStylingInlay[1] = 'Metal Mesh Aluminium Inlays';
intStylingInlay[2] = 'Metal Mesh Decor Inlays';
intStylingInlay[3] = 'Aluminum Inlays';
intStylingInlay[4] = 'Iron Ore Aluminum Inlays';
intStylingInlay[5] = 'R-Design Aluminum Inlays';
intStylingInlay[6] = 'Carbon Fiber Inlays';
intStylingInlay[7] = 'Piano Black Inlays';
intStylingInlay[8] = 'Urbane Wood Inlays';
intStylingInlay[9] = 'Dark Walnut Wood Inlays';
intStylingInlay[10] = 'Linear Walnut Wood Inlays';
intStylingInlay[11] = 'Dark Flame Birch Wood Inlays';

// INTERIOR STYLING - STEERING WHEEL
intStylingSteeringWheel[0] = '3-Spoke Leather Steering Wheel w/Decor Inlay';
intStylingSteeringWheel[1] = 'Leather Steering Wheel w/Decor Inlay';
intStylingSteeringWheel[2] = 'Leather &amp; Flame Birch Wood Steering Wheel';
intStylingSteeringWheel[3] = 'R-Design 3-Spoke Steering Wheel';

// INTERIOR STYLING - GEAR LEVER
intStylingGearLever[0] = 'Illuminated Gearshift Knob';
intStylingGearLever[1] = 'Leather Gearshift Knob';
intStylingGearLever[2] = 'Leather Gaiter Gearshift Knob';
intStylingGearLever[3] = 'R-Design Perforated Gearshift Knob';
intStylingGearLever[4] = 'Crystal Gearshift Knob or Orrefors';

// PACKAGES
packagesArray[0] = 'Dynamic Platinum Package';
packagesArray[1] = 'T5 Momentum Plus Package';
packagesArray[2] = 'Vision Package';
packagesArray[3] = 'Preferred Option Package';
packagesArray[4] = 'Advanced Package';
packagesArray[5] = 'Climate Package';
packagesArray[6] = 'Climate Package w/Child Booster Seats';
packagesArray[7] = 'Climate Package with Graphical Head-up Display';
packagesArray[8] = 'Convenience Package';
packagesArray[9] = 'Technology Package';
packagesArray[10] = 'BLIS Package';
packagesArray[11] = 'Park Assist Pilot w/BLIS';
packagesArray[12] = 'Sport Package';
packagesArray[13] = 'Navigation / Harman Kardon Package';
packagesArray[14] = '19” Sport Package';
packagesArray[15] = 'Luxury Package';
packagesArray[16] = 'Bowers &amp; Wilkins Sound';

// OPTIONAL EQUIPMENT
optionsArray[0] = 'Eyeglass Holder';
optionsArray[1] = 'Tempa Spare';
optionsArray[2] = 'Park Assist Camera';
optionsArray[3] = 'Black Headliner';
optionsArray[4] = 'Premium Air Suspension';
optionsArray[5] = '4-corner Air Suspension';
optionsArray[6] = 'Polestar Performance Software';
optionsArray[7] = 'Heated Front Seats';
optionsArray[8] = 'Keyless Drive';
optionsArray[9] = 'Active Dual Xenon Headlights';
optionsArray[10] = 'Rear Seat Entertainment System';
optionsArray[11] = 'Sport Pedals';
optionsArray[12] = 'Sensus Navigation';
optionsArray[13] = 'Graphical Head-Up Display (HUD)';
optionsArray[14] = 'Dual Two-Stage Child Booster Seats';
optionsArray[15] = 'Integrated, Center Booster Cushion, 2nd Row';
optionsArray[16] = 'Child Booster Cushion and Backrest';
optionsArray[17] = 'Charcoal Headliner';
optionsArray[18] = 'Leather Upgrade on Dash Board &amp; Front/Rear Door Panels';
optionsArray[19] = 'Trailer Hitch';
optionsArray[20] = 'Steel Grille';
optionsArray[21] = 'iPad Holder';
optionsArray[22] = 'Red Key';
optionsArray[23] = 'Sunshades. Luggage Compartment Area';
optionsArray[24] = 'Sunshade';
optionsArray[25] = 'Dirt Cover Load Compartment, Full Coverage';
optionsArray[26] = 'Luggage Net';
optionsArray[27] = 'Luggage Compartment Mat, Plastic';
optionsArray[28] = 'Luggage Compartment Mat, Reversible';
optionsArray[29] = 'Rubber Floor Mats';
optionsArray[30] = 'Luggage Net';
optionsArray[31] = 'Net Pocket Kit';
optionsArray[32] = 'Roof Box, Designed by Volvo Cars';
optionsArray[33] = 'Roof Box, Expanding';
optionsArray[34] = 'Roof Box, Sport Time - Glossy Black';
optionsArray[35] = 'Bike Carrier, Frame- Mounted Aluminum';
optionsArray[36] = 'Ski Holder, Sliding';
optionsArray[37] = 'Canoe/Kayak Carrier';
optionsArray[38] = 'Child Seat Kick Guard';
optionsArray[39] = 'Comfort Upholstery and Head Support';
optionsArray[40] = 'Child Booster Cushion and Backrest';
optionsArray[41] = 'Dog Harness';
optionsArray[42] = 'Mudflaps, Front';
optionsArray[43] = 'Mudflaps, Rear';
optionsArray[44] = 'Rear Seat Guard';
optionsArray[45] = 'Bumper Cover';
optionsArray[46] = 'Illuminated Tailgate Scuff Plate';
optionsArray[47] = 'Illuminated Sill Molding';
optionsArray[48] = 'Load Bars';







// WHEELS
for (var h = 0; h < wheelArray.length; h++) {
  $('#wheelArea').prepend('<label class="vehicleClass"><input class="wheelSelect" type="checkbox" name="' + [h] + '" value="accessory">' + wheelArray[h] + '</label>');
}

$('#wheelArea').hide();
$('#wheelHeading').click(function() {
  $('#wheelArea').toggle();
});

// UPHOLSTRY
for (var f = 0; f < upholstryArray.length; f++) {
  $('#upholstryArea').prepend('<label class="vehicleClass"><input class="upholstrySelect" type="checkbox" name="' + [f] + '" value="accessory">' + upholstryArray[f] + '</label>');
}

$('#upholstryArea').hide();
$('#upholstryHeading').click(function() {
  $('#upholstryArea').toggle();
});

// EXTERIOR STYLING
for (var k = 0; k < extStyling.length; k++) {
  $('#extStylingArea').prepend('<label class="vehicleClass"><input class="extStylingSelect" type="checkbox" name="' + [k] + '" value="accessory">' + extStyling[k] + '</label>');
}

$('#extStylingArea').hide();
$('#extStylingHeading').click(function() {
  $('#extStylingArea').toggle();
});

// INTERIOR STYLING - INLAYS
for (var q = 0; q < intStylingInlay.length; q++) {
  $('#intStylingInlayArea').prepend('<label class="vehicleClass"><input class="intStylingInlaySelect" type="checkbox" name="' + [q] + '" value="accessory">' + intStylingInlay[q] + '</label>');
}

$('#intStylingInlayArea').hide();
$('#intStylingInlayHeading').click(function() {
  $('#intStylingInlayArea').toggle();
});

// INTERIOR STYLING - STEERING WHEEL
for (var w = 0; w < intStylingSteeringWheel.length; w++) {
  $('#intStylingSteeringWheelArea').prepend('<label class="vehicleClass"><input class="intStylingSteeringWheelSelect" type="checkbox" name="' + [w] + '" value="accessory">' + intStylingSteeringWheel[w] + '</label>');
}

$('#intStylingSteeringWheelArea').hide();
$('#intStylingSteeringWheelHeading').click(function() {
  $('#intStylingSteeringWheelArea').toggle();
});

// INTERIOR STYLING - GEAR LEVER
for (var e = 0; e < intStylingGearLever.length; e++) {
  $('#intStylingGearLeverArea').prepend('<label class="vehicleClass"><input class="intStylingGearLeverSelect" type="checkbox" name="' + [e] + '" value="accessory">' + intStylingGearLever[e] + '</label>');
}

$('#intStylingGearLeverArea').hide();
$('#intStylingGearLeverHeading').click(function() {
  $('#intStylingGearLeverArea').toggle();
});

// OPTIONAL EQUIPMENT
for (var t = 0; t < optionsArray.length; t++) {
  $('#optionsArrayArea').prepend('<label class="vehicleClass"><input class="optionsArraySelect" type="checkbox" name="' + [t] + '" value="accessory">' + optionsArray[t] + '</label>');
}

$('#optionsArrayArea').hide();
$('#optionsArrayHeading').click(function() {
  $('#optionsArrayArea').toggle();
});

// PACKAGES
for (var r = 0; r < packagesArray.length; r++) {
  $('#packagesContainer').prepend('<label class="vehicleClass"><input class="packagesSelect" type="checkbox" name="' + [r] + '" value="accessory">' + packagesArray[r] + '</label>');
}



$(function() {
  $('.trimButton').click(function() {
      $('.trimSelector').hide();
      $('#trimColorSelectContainer').show();

      if (this.value === 's60DynamicAwd') {
        $('#trimColorSelectContainer').html('<h3>S60 Dynamic AWD</h3>');

          // S60 DYNAMIC AWD

        for (var z = 0; z < 4; z++) {

          $('#trimColorSelectContainer').append(
            '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
          );
        }

      } else if (this.value === 's60DynamicFwd') {
        $('#trimColorSelectContainer').html('<h3>S60 Dynamic FWD</h3>');

            // S60 DYNAMIC FWD
          for (var z = 5; z < 9; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }  else if (this.value === 's60Inscription') {
        $('#trimColorSelectContainer').html('<h3>S60 Inscription</h3>');

            // S60 INSCRIPTION
          for (var z = 15; z < 22; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }  else if (this.value === 's60InscriptionAwd') {
        $('#trimColorSelectContainer').html('<h3>S60 Inscription AWD</h3>');

            // S60 INSCRIPTION AWD
          for (var z = 23; z < 30; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }  else if (this.value === 's60InscriptionPlatinum') {
        $('#trimColorSelectContainer').html('<h3>S60 Inscription Platinum</h3>');

            // S60 INSCRIPTION PLATINUM
          for (var z = 31; z < 38; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }  else if (this.value === 's60InscriptionPlatinumAwd') {
        $('#trimColorSelectContainer').html('<h3>S60 Inscription Platinum AWD</h3>');

            // S60 INSCRIPTION PLATINUM AWD
          for (var z = 39; z < 46; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }  else if (this.value === 's60Rdesign') {
        $('#trimColorSelectContainer').html('<h3>S60 R-Design</h3>');

            // S60 R-DESIGN
          for (var z = 10; z < 14; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }

      else if (this.value === 's60CcT5Awd') {
        $('#trimColorSelectContainer').html('<h3>S60 CC T5 AWD</h3>');

            // S60 CC T5 AWD

            $('#trimColorSelectContainer').append(
              '<div class="' + fullVehicleArray[47].model + fullVehicleArray[47].trim + 'ColorSelect" class=""><button type="button" name="carColor" class="vehicleButton colorButton" value="' + [47] + '">' + fullVehicleArray[47].color + ' </button></div>'
            );

      }

      else if (this.value === 's90MomentumFwd') {
        $('#trimColorSelectContainer').html('<h3>S90 Momentum FWD</h3>');

            // S90 MOMENTUM FWD
          for (var z = 48; z < 55; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 's90MomentumAwd') {
        $('#trimColorSelectContainer').html('<h3>S90 Momentum AWD</h3>');

            // S90 MOMENTUM AWD
          for (var z = 56; z < 63; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 's90InscriptionFwd') {
        $('#trimColorSelectContainer').html('<h3>S90 Inscription FWD</h3>');

            // S90 INSCRIPTION T5 FWD
          for (var z = 64; z < 71; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 's90InscriptionAwd') {
        $('#trimColorSelectContainer').html('<h3>S90 Inscription AWD</h3>');

            // S90 INSCRIPTION T5 AWD
          for (var z = 72; z < 79; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }


      }

      else if (this.value === 'v60T5Fwd') {
        $('#trimColorSelectContainer').html('<h3>V60 T5 FWD</h3>');

            // V60 T5 FWD
          for (var z = 80; z < 89; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'v60T5Awd') {
        $('#trimColorSelectContainer').html('<h3>V60 T5 AWD</h3>');

            // V60 T5 AWD
          for (var z = 90; z < 99; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'v60DynamicFwd') {
        $('#trimColorSelectContainer').html('<h3>V60 Dynamic FWD</h3>');

            // V60 DYNAMIC FWD
          for (var z = 140; z < 144; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'v60DynamicAwd') {
        $('#trimColorSelectContainer').html('<h3>V60 Dynamic AWD</h3>');

            // V60 DYNAMIC AWD
          for (var z = 145; z < 149; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'v60PlatinumFwd') {
        $('#trimColorSelectContainer').html('<h3>V60 Platinum FWD</h3>');

            // V60 PLATINUM FWD
          for (var z = 120; z < 129; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'v60PlatinumAwd') {
        $('#trimColorSelectContainer').html('<h3>V60 Platinum AWD</h3>');

            // V60 PLATINUM AWD
          for (var z = 130; z < 139; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'v60PremierFwd') {
        $('#trimColorSelectContainer').html('<h3>V60 Premier FWD</h3>');

            // V60 PREMIER FWD
          for (var z = 100; z < 109; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'v60PremierAwd') {
        $('#trimColorSelectContainer').html('<h3>V60 Premier AWD</h3>');

            // V60 PREMIER AWD
          for (var z = 110; z < 119; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'v60RdesignAwd') {
        $('#trimColorSelectContainer').html('<h3>V60 R-Design AWD</h3>');

            // V60 R-DESIGN AWD
          for (var z = 150; z < 154; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }

      else if (this.value === 'v60CcPlatinum') {
        $('#trimColorSelectContainer').html('<h3>V60 CC Platinum AWD</h3>');

            // V60 CC T5 AWD
          for (var z = 155; z < 164; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }  else if (this.value === 'v60CcT5Awd') {
        $('#trimColorSelectContainer').html('<h3>V60 CC T5 AWD</h3>');

            // V60 CC PLATINUM
          for (var z = 165; z < 174; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }

      else if (this.value === 'v90T6Awd') {
        $('#trimColorSelectContainer').html('<h3>V90 T6 AWD</h3>');

            // V90 T5 FWD
          for (var z = 175; z < 182; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }

      else if (this.value === 'xc60DynamicT5Fwd') {
        $('#trimColorSelectContainer').html('<h3>XC60 Dynamic T5 FWD</h3>');

            // XC60 DYNAMIC T5 FWD
          for (var z = 183; z < 194; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc60DynamicT5Awd') {
        $('#trimColorSelectContainer').html('<h3>XC60 Dynamic T5 AWD</h3>');

            // XC60 DYNAMIC T5 AWD
          for (var z = 195; z < 206; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc60DynamicT6Awd') {
        $('#trimColorSelectContainer').html('<h3>XC60 Dynamic T6 AWD</h3>');

            // XC60 DYNAMIC T6 AWD
          for (var z = 207; z < 218; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc60InscriptionT5Fwd') {
        $('#trimColorSelectContainer').html('<h3>XC60 Inscription T5 FWD</h3>');

            // XC60 INSCRIPTION T5 FWD
          for (var z = 219; z < 230; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc60InscriptionT5Awd') {
        $('#trimColorSelectContainer').html('<h3>XC60 Inscription T5 AWD</h3>');

            // XC60 INSCRIPTION T5 AWD
          for (var z = 231; z < 242; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc60InscriptionT6Awd') {
        $('#trimColorSelectContainer').html('<h3>XC60 Inscription T6 AWD</h3>');

            // XC60 INSCRIPTION T6 AWD
          for (var z = 243; z < 254; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc60RdesignT6Awd') {
        $('#trimColorSelectContainer').html('<h3>XC60 T6 R-Design AWD</h3>');

            // XC60 R-DESIGN T6 AWD
          for (var z = 255; z < 260; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }

      else if (this.value === 'xc90MomentumT5Fwd') {
        $('#trimColorSelectContainer').html('<h3>XC90 Momentum T5 FWD</h3>');

            // XC90 MOMENTUM T5 FWD
          for (var z = 261; z < 268; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc90MomentumT5Awd') {
        $('#trimColorSelectContainer').html('<h3>XC90 Momentum T5 AWD</h3>');

            // XC90 MOMENTUM T5 AWD
          for (var z = 269; z < 276; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc90MomentumT6Awd') {
        $('#trimColorSelectContainer').html('<h3>XC90 Momentum T6 AWD</h3>');

            // XC90 MOMENTUM T6 AWD
          for (var z = 277; z < 291; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc90InscriptionT6Awd') {
        $('#trimColorSelectContainer').html('<h3>XC90 Inscription T6 AWD</h3>');

            // XC90 INSCRIPTION T6 AWD
          for (var z = 310; z < 318; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc90InscriptionT8') {
        $('#trimColorSelectContainer').html('<h3>XC90 Inscription T8</h3>');

            // XC90 INSCRIPTION T8
          for (var z = 319; z < 327; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc90RdesignT5Awd') {
        $('#trimColorSelectContainer').html('<h3>XC90 R-Design T5  AWD</h3>');

            // XC90 R-DESIGN T5 AWD
          for (var z = 292; z < 303; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc90RdesignT8') {
        $('#trimColorSelectContainer').html('<h3>XC90 T6 R-Design T8</h3>');

            // XC90 R-DESIGN T8
          for (var z = 304; z < 309; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      } else if (this.value === 'xc90ExcellenceT8') {
        $('#trimColorSelectContainer').html('<h3>XC90 Excellence T8</h3>');

            // XC90 EXCELLENCE T8
          for (var z = 328; z < 338; z++) {
            $('#trimColorSelectContainer').append(
              '<button type="button" name="carColor" class="vehicleButton colorButton" value="' + [z] + '">' + fullVehicleArray[z].color + '</button>'
            );
          }

      }



// Vehicle Write Function
$(function(){
  // Adds vehicle to template
  $('.colorButton').click(function() {
    selectedVehicle = this.value;
    console.log(this.value);

    for (var i = 0; i < fullVehicleArray.length; i++) {
      // if statement must not contain "==="
      if (selectedVehicle == i) {
        //renders array data into email area
        $('.salutationModel').html(fullVehicleArray[i].year + ' ' + fullVehicleArray[i].model + ' ' + fullVehicleArray[i].trim);
        $('#modelArea').html(fullVehicleArray[i].year + ' ' + fullVehicleArray[i].model + ' ' + fullVehicleArray[i].trim);
        $('#imageArea').attr('src',fullVehicleArray[i].image);
        $('#carArea').html(fullVehicleArray[i].model);
        $('#vehicleBrochure').attr('href', fullVehicleArray[i].url);

      }
    }
  });
});



    });
  });

});
