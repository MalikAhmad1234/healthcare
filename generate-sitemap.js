// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your routes here
const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/searchjob', changefreq: 'daily', priority: 1.0 },
    { url: '/applyjob', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/staffing-solutions', changefreq: 'daily', priority: 1.0 },
    { url: '/signup', changefreq: 'daily', priority: 1.0 },
    { url: '/about/career', changefreq: 'daily', priority: 1.0 },
    { url: '/about/community', changefreq: 'daily', priority: 1.0 },
    { url: '/about/ceo', changefreq: 'daily', priority: 1.0 },
    { url: '/resources/shift-makers', changefreq: 'daily', priority: 1.0 },
    { url: '/about/leadership', changefreq: 'daily', priority: 1.0 },
    { url: '/resources/referral-program', changefreq: 'daily', priority: 1.0 },
    { url: '/resources/network', changefreq: 'daily', priority: 1.0 },
    { url: '/resources/benefits', changefreq: 'daily', priority: 1.0 },
    { url: '/resources/empowercare-heroes', changefreq: 'daily', priority: 1.0 },
    { url: '/resources', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/seamless', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/seamless', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/unsung-heroes', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/advantages', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/guide', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/directcare-careers', changefreq: 'daily', priority: 1.0 },
    { url: '/post-job', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/request-staffing', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/shift-champions', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/empowercare-acadmey', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/dynamic-squads', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/ripple-effect', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/seamless-solutions', changefreq: 'daily', priority: 1.0 },
    { url: '/facilitiesbridgeleadership', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiespracticestaff', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesskillednursing', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesalliedhealth', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesellevatedirectcare', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesmentalhealth', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesstudenthealth', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesschoolhealth', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiessurgicalexellence', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiescorporatestaffing', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitieshealthsystem', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesheallthcenter', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/ProfessionalEasytouse', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionalhelpstheworld', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionalperfectmatch', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionalgainawinning', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Faqcontracts', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Faqlocalcontracts', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Faqperdiem', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Faqpermanentstaffing', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Faqstravelnursing', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/directcare-careers', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Beaconofflexibility', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Trustedpartnercontract', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Trustedpartnerpermanent', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Trustedpartnertemp', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesarborassociates', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesayahealthcare', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesfavriouthealthcarestaffing', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesintelycarefornurses', changefreq: 'daily', priority: 1.0 },
    { url: '/facilities/Facilitiesmasmedicalstaffing', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/faqs', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/Faqsperdiem', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/Faqstemptohire', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/Faqstravelnurse', changefreq: 'daily', priority: 1.0 },
    { url: '/professionals/Faqspermanentstaffing', changefreq: 'daily', priority: 1.0 },
    { url: '/guide/Guideforbehavioral', changefreq: 'daily', priority: 1.0 },
    { url: '/guide/Guidecrictalcare', changefreq: 'daily', priority: 1.0 },
    { url: '/guide/Guideemergencyroom', changefreq: 'daily', priority: 1.0 },
    { url: '/guide/Guidehomehealth', changefreq: 'daily', priority: 1.0 },
    { url: '/guide/Guidemedicalsurgical', changefreq: 'daily', priority: 1.0 },
    { url: '/guide/Guideoperatingroom', changefreq: 'daily', priority: 1.0 },
    { url: '/guide/Guidestepdown', changefreq: 'daily', priority: 1.0 },
    { url: '/guide/Guidetelemetrynursing', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Advantagesdiscoverjobs', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Advantagesdiscoverideal', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Advantagesdreamjob', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Advantagestravelnursing', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionals2elevateadvance', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionals2staffingoppertunities', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionals2ignitepassion', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionals2cnacarrers', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionals2gatewayexciting', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionals2gatewaynursing', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionals2gatewaymeaningful', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Professionals2passport', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Prseamlesssarborassociates', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Prseamlesssayahealthcare', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Prseamlesssimpactfull', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Prseamlesssintelycare', changefreq: 'daily', priority: 1.0 },
    { url: '/professional/Prseamlesssmasmedical', changefreq: 'daily', priority: 1.0 }
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://empowercare.us/' });

// Write sitemap to file
const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));
sitemap.pipe(writeStream);

// Handle errors
writeStream.on('error', (err) => {
  console.error('Error writing sitemap:', err);
});

// End sitemap stream and log completion
sitemap.on('end', () => {
  console.log('Sitemap written successfully');
});

// Add links to sitemap
links.forEach(link => sitemap.write(link));

// End sitemap stream
sitemap.end();
