

describe('Dates unit tests', function() {

    describe('parsing dates', function() {

        it("should parse dates with the format dd/MM/yyyy", function() {
            var format = "dd/MM/yyyy";
            expect(Dates.parse("12/03/2009", format)).to.eql(new Date("03/12/2009"));
            expect(Dates.parse("02/03/2009", format)).to.eql(new Date("03/02/2009"));
        });

        it("should parse dates with the format d/MM/yyyy", function() {
            var format = "d/MM/yyyy";
            expect(Dates.parse("2/03/2009", format)).to.eql(new Date("03/02/2009"));
            expect(Dates.parse("12/11/2009", format)).to.eql(new Date("11/12/2009"));
        });

        it("should parse dates with the format d/M/yyyy", function() {
            var format = "d/M/yyyy";
            expect(Dates.parse("2/3/2009", format)).to.eql(new Date("03/02/2009"));
            expect(Dates.parse("12/11/2009", format)).to.eql(new Date("11/12/2009"));
        });

        it("should parse dates with the format d/MM/yy", function() {
            var format = "d/MM/yy";
            expect(Dates.parse("2/03/79", format)).to.eql(new Date("03/02/1979"));
            expect(Dates.parse("12/03/10", format)).to.eql(new Date("03/12/2010"));
            expect(Dates.parse("2/03/20", format)).to.eql(new Date("03/02/2020"));
        });

        it("should parse dates with the format dd MM yyyy", function() {
            var format = "dd MM yyyy";
            expect(Dates.parse("12 03 2010", format)).to.eql(new Date("03/12/2010"));
        });


        it("should parse dates with the format ddMMyyyy", function() {
            var format = "ddMMyyyy";
            expect(Dates.parse("12032009", format)).to.eql(new Date("03/12/2009"));
            expect(Dates.parse("02032009", format)).to.eql(new Date("03/02/2009"));
        });

        it("should parse dates with the format yyyyMMdd", function() {
            var format = "yyyyMMdd";
            expect(Dates.parse("20090312", format)).to.eql(new Date("03/12/2009"));
            expect(Dates.parse("20090302", format)).to.eql(new Date("03/02/2009"));
        });

        it("should parse dates with the format dd/MM/yyyy HH:mm", function() {
            var format = "dd/MM/yyyy HH:mm";
            expect(Dates.parse("12/03/2009 18:02", format)).to.eql(new Date(2009, 2, 12, 18, 02, 0, 0));
        });

        it("should parse dates with the format dd/MM/yyyy HH:mm:ss", function() {
            var format = "dd/MM/yyyy HH:mm:ss";
            expect(Dates.parse("12/03/2009 18:02:12", format)).to.eql(new Date(2009, 2, 12, 18, 02, 12, 0));
            expect(Dates.parse("12/03/2009 07:02:12", format)).to.eql(new Date(2009, 2, 12, 07, 02, 12, 0));
        });

        it("should parse dates with the format dd/MM/yyyy HH:mm:ss:SSS", function() {
            var format = "dd/MM/yyyy HH:mm:ss:SSS";
            expect(Dates.parse("12/03/2009 18:02:12:987", format)).to.eql(new Date(2009, 2, 12, 18, 02, 12, 987));
        });

        it("should parse dates with the format dd/MM/yyyy HH:mm:ss:SS", function() {
            var format = "dd/MM/yyyy HH:mm:ss:SS";
            expect(Dates.parse("12/03/2009 18:02:12:98", format)).to.eql(new Date(2009, 2, 12, 18, 02, 12, 98));
        });

        it("should parse dates with the format dd/MM/yyyy HH:mm:ss:S", function() {
            var format = "dd/MM/yyyy HH:mm:ss:S";
            expect(Dates.parse("12/03/2009 18:02:12:9", format)).to.eql(new Date(2009, 2, 12, 18, 02, 12, 9));
        });

        it("should parse dates with the format dd/MM/yyyy H:mm", function() {
            var format = "dd/MM/yyyy H:mm";
            expect(Dates.parse("12/03/2009 8:02", format)).to.eql(new Date(2009, 2, 12, 8, 02, 0, 0));
            expect(Dates.parse("12/03/2009 18:02", format)).to.eql(new Date(2009, 2, 12, 18, 02, 0, 0));
        });

        it("should parse dates with the format dd MMM yyyy", function() {
            var format = "dd MMM yyyy";
            expect(Dates.parse("12 Mar 2009", format)).to.eql(new Date("03/12/2009"));
        });

        it("should parse dates with the format MMM dd yyyy", function() {
            var format = "MMM dd yyyy";
            expect(Dates.parse("Mar 12 2009", format)).to.eql(new Date("03/12/2009"));
        });

        it("should parse dates with the format MMMM dd, yyyy", function() {
            var format = "MMMM dd, yyyy";
            expect(Dates.parse("March 12, 2009", format)).to.eql(new Date("03/12/2009"));
        });

        it("should parse dates with the format MMMM dd yyyy", function() {
            var format = "MMMM dd yyyy";
            expect(Dates.parse("March 12 2009", format)).to.eql(new Date("03/12/2009"));
        });

        it("should parse dates with the format ddMMMyyyy", function() {
            var format = "ddMMMyyyy";
            expect(Dates.parse("12Mar2009", format)).to.eql(new Date("03/12/2009"));
        });

        it("should parse dates with the format dd MMMM yyyy", function() {
            var format = "dd MMMM yyyy";
            expect(Dates.parse("12 March 2009", format)).to.eql(new Date("03/12/2009"));
        });

        it("should parse dates with the format ISO8601", function() {
            var format = "yyyy-MM-ddTHH:mm:ss.SSSZ";
            expect(Dates.parse("2010-04-14T18:02:39.123Z", format)).to.eql(new Date(2010, 3, 14, 18, 02, 39, 123));
        });


        it("should parse dates with the format ddMMMMyyyy", function() {
            var format = "ddMMMMyyyy";
            expect(Dates.parse("12March2009", format)).to.eql(new Date("03/12/2009"));
        });

        it("should parse dates with the format MMMMddyyyy", function() {
            var format = "MMMMddyyyy";
            expect(Dates.parse("March122009", format)).to.eql(new Date("03/12/2009"));
        });

        //le monde.fr: 16.04.10 | 15h11
        it("should parse dates with the format dd.MM.yy | HHhmm", function() {
            var format = "dd.MM.yy | HHhmm";
            expect(Dates.parse("14.04.10 | 18h02", format)).to.eql(new Date(2010, 3, 14, 18, 02, 0, 0));
        });

//         it("should parse using the locale frFr and format dd MMM yyyy", function() {
//            expect(Dates.parse("12 mars 2009", "dd MMM yyyy", "fr_Fr")).to.eql(new Date("03/12/2009"));
//         });

//        it("should parse dates with the format dd/MM/yyyy", function() {
//            expect(Dates.parse("1X/03/2009", "dd/MM/yyyy")).isNull();
//        });

    });


    describe('formatting dates', function() {

        it("should format dates with the format dd/MM/yyyy", function() {
            expect(Dates.format(new Date("03/12/2009"), "dd/MM/yyyy")).to.eql("12/03/2009");
            expect(Dates.format(new Date("03/02/2009"), "dd/MM/yyyy")).to.eql("02/03/2009");
        });

        it("should format dates with the format d/MM/yyyy", function() {
            expect(Dates.format(new Date("03/12/2009"), "d/MM/yyyy")).to.eql("12/03/2009");
            expect(Dates.format(new Date("03/02/2009"), "d/MM/yyyy")).to.eql("2/03/2009");
        });

        it("should format dates with the format d/M/yyyy", function() {
            expect(Dates.format(new Date("03/02/2009"), "d/M/yyyy")).to.eql("2/3/2009");
            expect(Dates.format(new Date("11/12/2009"), "d/M/yyyy")).to.eql("12/11/2009");
        });

        it("should format dates with the format d/MM/yy", function() {
            expect(Dates.format(new Date("03/02/1979"), "d/MM/yy")).to.eql("2/03/79");
            expect(Dates.format(new Date("03/12/2010"), "d/MM/yy")).to.eql("12/03/10");
            expect(Dates.format(new Date("03/02/2020"), "d/MM/yy")).to.eql("2/03/20");
        });

        it("should format dates with the format dd MM yyyy", function() {
            expect(Dates.format(new Date("03/12/2010"), "dd MM yyyy")).to.eql("12 03 2010");
        });

        it("should format dates with the format dd/MM/yyyy HH:mm", function() {
            expect(Dates.format(new Date(2009, 2, 12, 18, 02, 0, 0), "dd/MM/yyyy HH:mm")).to.eql("12/03/2009 18:02");
        });

        it("should format dates with the format dd/MM/yyyy HH:mm:ss", function() {
            expect(Dates.format(new Date(2009, 2, 12, 18, 02, 12, 0), "dd/MM/yyyy HH:mm:ss")).to.eql("12/03/2009 18:02:12");
            expect(Dates.format(new Date(2009, 2, 12, 07, 02, 12, 0), "dd/MM/yyyy HH:mm:ss")).to.eql("12/03/2009 07:02:12");
        });

        it("should format dates with the format dd/MM/yyyy HH:mm:ss:SSS", function() {
            expect(Dates.format(new Date(2009, 2, 12, 18, 02, 12, 987), "dd/MM/yyyy HH:mm:ss:SSS")).to.eql("12/03/2009 18:02:12:987");
        });

        it("should format dates with the format dd/MM/yyyy HH:mm:ss:SS", function() {
            expect(Dates.format(new Date(2009, 2, 12, 18, 02, 12, 987), "dd/MM/yyyy HH:mm:ss:SS")).to.eql("12/03/2009 18:02:12:987");
        });

        it("should format dates with the format dd/MM/yyyy HH:mm:ss:S", function() {
            expect(Dates.format(new Date(2009, 2, 12, 18, 02, 12, 987), "dd/MM/yyyy HH:mm:ss:S")).to.eql("12/03/2009 18:02:12:987");
        });

        it("should format dates with the format dd MMM yyyy", function() {
            expect(Dates.format(new Date("03/12/2009"), "dd MMM yyyy")).to.eql("12 Mar 2009");
        });

        it("should format dates with the format MMMM dd, yyyy", function() {
            expect(Dates.format(new Date("03/12/2009"), "MMMM dd, yyyy")).to.eql("March 12, 2009");
        });

        it("should format dates with the format ISO8601", function() {
            expect(Dates.format(new Date(2010, 3, 14, 18, 02, 39, 123), "yyyy-MM-ddTHH:mm:ss.SSSZ")).to.eql("2010-04-14T18:02:39.123Z");
        });

        it("should format dates with the format EEE dd MMM yyyy", function() {
            expect(Dates.format(new Date(2010, 3, 14, 18, 02, 39, 123), "EEE dd MMM yyyy")).to.eql("Wed 14 Apr 2010");
        });

        it("should format dates with the format EEEE dd MMM yyyy", function() {
            expect(Dates.format(new Date(2010, 3, 14, 18, 02, 39, 123), "EEEE dd MMM yyyy")).to.eql("Wednesday 14 Apr 2010");
        });

    });

});






