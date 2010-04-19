load('riot.js');
Riot.require('../dates.js');

Riot.context('parsing dates', function() {

    given("the format dd/MM/yyyy", function() {
        should("parse 12/03/2009", Dates.parse("12/03/2009", "dd/MM/yyyy")).equals(new Date("03/12/2009"));
        should("parse 02/03/2009", Dates.parse("02/03/2009", "dd/MM/yyyy")).equals(new Date("03/02/2009"));
    });

    given("the format d/MM/yyyy", function() {
        should("parse 2/03/2009", Dates.parse("2/03/2009", "d/MM/yyyy")).equals(new Date("03/02/2009"));
        should("parse 12/11/2009", Dates.parse("12/11/2009", "d/MM/yyyy")).equals(new Date("11/12/2009"));        
    });

    given("the format d/M/yyyy", function() {
        should("parse 2/3/2009", Dates.parse("2/3/2009", "d/M/yyyy")).equals(new Date("03/02/2009"));
        should("parse 12/11/2009", Dates.parse("12/11/2009", "d/M/yyyy")).equals(new Date("11/12/2009"));
    });

    given("the format d/MM/yy", function() {
        should("parse 2/03/79", Dates.parse("2/03/79", "d/MM/yy")).equals(new Date("03/02/1979"));
        should("parse 12/03/10", Dates.parse("12/03/10", "d/MM/yy")).equals(new Date("03/12/2010"));
        should("parse 2/03/20", Dates.parse("2/03/20", "d/MM/yy")).equals(new Date("03/02/2020"));
    });

    given("the format dd MM yyyy", function() {
        should("parse 12 03 2010", Dates.parse("12 03 2010", "dd MM yyyy")).equals(new Date("03/12/2010"));
    });

    given("the format ddMMyyyy", function() {
        should("parse 12032009", Dates.parse("12032009", "ddMMyyyy")).equals(new Date("03/12/2009"));
        should("parse 02032009", Dates.parse("02032009", "ddMMyyyy")).equals(new Date("03/02/2009"));
    });

    given("the format yyyyMMdd", function() {
        should("parse 20090312", Dates.parse("20090312", "yyyyMMdd")).equals(new Date("03/12/2009"));
        should("parse 20090302", Dates.parse("20090302", "yyyyMMdd")).equals(new Date("03/02/2009"));
    });

    given("the format dd/MM/yyyy HH:mm", function() {
        should("parse 12/03/2009 18:02", Dates.parse("12/03/2009 18:02", "dd/MM/yyyy HH:mm")).equals(new Date(2009, 2, 12, 18, 02, 0, 0));
    });

    given("the format dd/MM/yyyy HH:mm:ss", function() {
        should("parse 12/03/2009 18:02:12", Dates.parse("12/03/2009 18:02:12", "dd/MM/yyyy HH:mm:ss")).equals(new Date(2009, 2, 12, 18, 02, 12, 0));
        should("parse 12/03/2009 07:02:12", Dates.parse("12/03/2009 07:02:12", "dd/MM/yyyy HH:mm:ss")).equals(new Date(2009, 2, 12, 07, 02, 12, 0));
    });

    given("the format dd/MM/yyyy HH:mm:ss:SSS", function() {
        should("parse 12/03/2009 18:02:12:987", Dates.parse("12/03/2009 18:02:12:987", "dd/MM/yyyy HH:mm:ss:SSS")).equals(new Date(2009, 2, 12, 18, 02, 12, 987));
    });

    given("the format dd/MM/yyyy HH:mm:ss:SS", function() {
        should("parse 12/03/2009 18:02:12:98", Dates.parse("12/03/2009 18:02:12:98", "dd/MM/yyyy HH:mm:ss:SS")).equals(new Date(2009, 2, 12, 18, 02, 12, 98));
    });

    given("the format dd/MM/yyyy HH:mm:ss:S", function() {
        should("parse 12/03/2009 18:02:12:9", Dates.parse("12/03/2009 18:02:12:9", "dd/MM/yyyy HH:mm:ss:S")).equals(new Date(2009, 2, 12, 18, 02, 12, 9));
    });

    given("the format dd/MM/yyyy H:mm", function() {
        should("parse 12/03/2009 8:02", Dates.parse("12/03/2009 8:02", "dd/MM/yyyy H:mm")).equals(new Date(2009, 2, 12, 8, 02, 0, 0));
        should("parse 12/03/2009 18:02", Dates.parse("12/03/2009 18:02", "dd/MM/yyyy H:mm")).equals(new Date(2009, 2, 12, 18, 02, 0, 0));
    });

    given("the format dd MMM yyyy", function() {
        should("parse 12 Mar 2009", Dates.parse("12 Mar 2009", "dd MMM yyyy")).equals(new Date("03/12/2009"));
    });

    given("the format MMM dd yyyy", function() {
        should("parse Mar 12 2009", Dates.parse("Mar 12 2009", "MMM dd yyyy")).equals(new Date("03/12/2009"));
    });

    given("the format MMMM dd, yyyy", function() {
        should("parse March 12, 2009", Dates.parse("March 12, 2009", "MMMM dd, yyyy")).equals(new Date("03/12/2009"));
    });

    given("the format MMMM dd yyyy", function() {
        should("parse March 12 2009", Dates.parse("March 12 2009", "MMMM dd yyyy")).equals(new Date("03/12/2009"));
    });

    given("the format ddMMMyyyy", function() {
        should("parse 12Mar2009", Dates.parse("12Mar2009", "ddMMMyyyy")).equals(new Date("03/12/2009"));
    });

    given("the format dd MMMM yyyy", function() {
        should("parse 12 March 2009", Dates.parse("12 March 2009", "dd MMMM yyyy")).equals(new Date("03/12/2009"));
    });

    given("the format ISO8601", function() {
        should("parse 2010-04-14T18:02:39.123Z", Dates.parse("2010-04-14T18:02:39.123Z", "yyyy-MM-ddTHH:mm:ss.SSSZ")).equals(new Date(2010, 3, 14, 18, 02, 39, 123));
    });

    /*given("the locale frFr and format dd MMM yyyy", function() {
        should("parse 12 mars 2009", Dates.parse("12 mars 2009", "dd MMM yyyy", "fr_Fr")).equals(new Date("03/12/2009"));
    });*/

    given("the format ddMMMMyyyy", function() {
        should("parse 12March2009", Dates.parse("12March2009", "ddMMMMyyyy")).equals(new Date("03/12/2009"));
    });

    given("the format MMMMddyyyy", function() {
        should("parse March122009", Dates.parse("March122009", "MMMMddyyyy")).equals(new Date("03/12/2009"));
    });

    //le monde.fr: 16.04.10 | 15h11
    given("the format dd.MM.yy | HHhmm", function() {
        should("parse 14.04.10 | 18h02", Dates.parse("14.04.10 | 18h02", "dd.MM.yy | HHhmm")).equals(new Date(2010, 3, 14, 18, 02, 0, 0));
    });

//    given("the format dd/MM/yyyy", function() {
//        should("parse 1X/03/2009", Dates.parse("1X/03/2009", "dd/MM/yyyy")).isNull();
//    });

});


Riot.context('formatting dates', function() {

    given("the format dd/MM/yyyy", function() {
        should("format 12/03/2009", Dates.format(new Date("03/12/2009"), "dd/MM/yyyy")).equals("12/03/2009");
        should("format 02/03/2009", Dates.format(new Date("03/02/2009"), "dd/MM/yyyy")).equals("02/03/2009");
    });

    given("the format d/MM/yyyy", function() {
        should("format 12/03/2009", Dates.format(new Date("03/12/2009"), "d/MM/yyyy")).equals("12/03/2009");
        should("format 02/03/2009", Dates.format(new Date("03/02/2009"), "d/MM/yyyy")).equals("2/03/2009");
    });

    given("the format d/M/yyyy", function() {
        should("format 2/3/2009", Dates.format(new Date("03/02/2009"), "d/M/yyyy")).equals("2/3/2009");
        should("format 12/11/2009", Dates.format(new Date("11/12/2009"), "d/M/yyyy")).equals("12/11/2009");
    });

    given("the format d/MM/yy", function() {
        should("format 2/03/79", Dates.format(new Date("03/02/1979"), "d/MM/yy")).equals("2/03/79");
        should("format 12/03/10", Dates.format(new Date("03/12/2010"), "d/MM/yy")).equals("12/03/10");
        should("format 2/03/20", Dates.format(new Date("03/02/2020"), "d/MM/yy")).equals("2/03/20");
    });

    given("the format dd MM yyyy", function() {
        should("format 12 03 2010", Dates.format(new Date("03/12/2010"), "dd MM yyyy")).equals("12 03 2010");
    });

    given("the format dd/MM/yyyy HH:mm", function() {
        should("format 12/03/2009 18:02", Dates.format(new Date(2009, 2, 12, 18, 02, 0, 0), "dd/MM/yyyy HH:mm")).equals("12/03/2009 18:02");
    });

    given("the format dd/MM/yyyy HH:mm:ss", function() {
        should("format 12/03/2009 18:02:12", Dates.format(new Date(2009, 2, 12, 18, 02, 12, 0), "dd/MM/yyyy HH:mm:ss")).equals("12/03/2009 18:02:12");
        should("format 12/03/2009 07:02:12", Dates.format(new Date(2009, 2, 12, 07, 02, 12, 0), "dd/MM/yyyy HH:mm:ss")).equals("12/03/2009 07:02:12");
    });

    given("the format dd/MM/yyyy HH:mm:ss:SSS", function() {
        should("format 12/03/2009 18:02:12:987", Dates.format(new Date(2009, 2, 12, 18, 02, 12, 987), "dd/MM/yyyy HH:mm:ss:SSS")).equals("12/03/2009 18:02:12:987");
    });

    given("the format dd/MM/yyyy HH:mm:ss:SS", function() {
        should("format 12/03/2009 18:02:12:987", Dates.format(new Date(2009, 2, 12, 18, 02, 12, 987), "dd/MM/yyyy HH:mm:ss:SS")).equals("12/03/2009 18:02:12:987");
    });

    given("the format dd/MM/yyyy HH:mm:ss:S", function() {
        should("format 12/03/2009 18:02:12:987", Dates.format(new Date(2009, 2, 12, 18, 02, 12, 987), "dd/MM/yyyy HH:mm:ss:S")).equals("12/03/2009 18:02:12:987");
    });

    given("the format dd MMM yyyy", function() {
        should("format 12 Mar 2009", Dates.format(new Date("03/12/2009"), "dd MMM yyyy")).equals("12 Mar 2009");
    });

    given("the format MMMM dd, yyyy", function() {
        should("format March 12, 2009", Dates.format(new Date("03/12/2009"), "MMMM dd, yyyy")).equals("March 12, 2009");
    });

    given("the format ISO8601", function() {
        should("format 2010-04-14T18:02:39.123Z", Dates.format(new Date(2010, 3, 14, 18, 02, 39, 123), "yyyy-MM-ddTHH:mm:ss.SSSZ")).equals("2010-04-14T18:02:39.123Z");
    });

});



Riot.run();
