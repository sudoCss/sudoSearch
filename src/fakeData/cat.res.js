/**
 * IMPORTANT: This file is to be used during development in order to not spam the google API
 * or reach the limits, please make use of it!
 */

const fakeData = {
    json() {
        return {
            kind: "customsearch#search",
            url: {
                type: "application/json",
                template:
                    "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
            },
            queries: {
                request: [
                    {
                        title: "Google Custom Search - cat",
                        totalResults: "5260000000",
                        searchTerms: "cat",
                        count: 10,
                        startIndex: 1,
                        inputEncoding: "utf8",
                        outputEncoding: "utf8",
                        safe: "off",
                        cx: "somefakecxforsecurity",
                    },
                ],
                nextPage: [
                    {
                        title: "Google Custom Search - cat",
                        totalResults: "5260000000",
                        searchTerms: "cat",
                        count: 10,
                        startIndex: 11,
                        inputEncoding: "utf8",
                        outputEncoding: "utf8",
                        safe: "off",
                        cx: "somefakecxforsecurity",
                    },
                ],
            },
            context: { title: "sudo" },
            searchInformation: {
                searchTime: 0.3989,
                formattedSearchTime: "0.40",
                totalResults: "5260000000",
                formattedTotalResults: "5,260,000,000",
            },
            items: [
                {
                    kind: "customsearch#result",
                    title: "Cat.com | Cat | Caterpillar",
                    htmlTitle: "<b>Cat</b>.com | <b>Cat</b> | Caterpillar",
                    link: "https://www.cat.com/",
                    displayLink: "www.cat.com",
                    snippet:
                        "... North America, Southeast Asia. Region. Select a Language. Language. Continue to Cat.com. CAT LOGO. Caterpillar © 2022. All Rights Reserved. Privacy ...",
                    htmlSnippet:
                        "... North America, Southeast Asia. Region. Select a Language. Language. Continue to <b>Cat</b>.com. <b>CAT</b> LOGO. Caterpillar © 2022. All Rights Reserved. Privacy&nbsp;...",
                    cacheId: "5NVMnUxgBZYJ",
                    formattedUrl: "https://www.cat.com/",
                    htmlFormattedUrl: "https://www.<b>cat</b>.com/",
                    pagemap: {
                        cse_thumbnail: [
                            {
                                src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJ6E8VIqy3NLPJwm3gIx-nIlltAVVQBiTsahm9GFou2d7k3Mfe3ah-LT_l",
                                width: "225",
                                height: "225",
                            },
                        ],
                        metatags: [
                            {
                                template: "admin-template",
                                "og:image":
                                    "http://s7d2.scene7.com/is/image/Caterpillar/CM20131112-34116-31362",
                                "twitter:card": "summary_large_image",
                                "twitter:title": "Cat.com",
                                viewport:
                                    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
                                "og:title": "Cat.com",
                                "twitter:image:src":
                                    "http://s7d2.scene7.com/is/image/Caterpillar/CM20131112-34116-31362",
                            },
                        ],
                        cse_image: [
                            {
                                src: "http://s7d2.scene7.com/is/image/Caterpillar/CM20131112-34116-31362",
                            },
                        ],
                    },
                },
                {
                    kind: "customsearch#result",
                    title: "Caterpillar | Caterpillar",
                    htmlTitle: "Caterpillar | Caterpillar",
                    link: "https://www.caterpillar.com/",
                    displayLink: "www.caterpillar.com",
                    snippet:
                        "Caterpillar Brands. Cat · Cat Financial · Cat Reman · The Cat Rental Store · Cat Lift Trucks · Anchor · AsiaTrak · FG Wilson.",
                    htmlSnippet:
                        "Caterpillar Brands. <b>Cat</b> &middot; <b>Cat</b> Financial &middot; <b>Cat</b> Reman &middot; The <b>Cat</b> Rental Store &middot; <b>Cat</b> Lift Trucks &middot; Anchor &middot; AsiaTrak &middot; FG Wilson.",
                    cacheId: "1RbCMw1MM8MJ",
                    formattedUrl: "https://www.facebook.com/runwaymagpk/photos/hania-amir-and-naimalkhawar-with-beautiful-people-of-kalash-and-they-both-dresse/332708040818410/",
                    htmlFormattedUrl: "https://www.<b>cat</b>erpillar.com/",
                    pagemap: {
                        cse_thumbnail: [
                            {
                                src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQevx5sKcs2N8G0AiqQoJw7zF04IYB9Roqs44jjMuJ8WNfbXwHqiXKAz2xr",
                                width: "343",
                                height: "147",
                            },
                        ],
                        metatags: [
                            {
                                template: "subsidiary-homepage-template",
                                "twitter:card": "summary_large_image",
                                "og:site_name":
                                    "https://www.caterpillar.com/en.html",
                                viewport:
                                    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
                            },
                        ],
                        cse_image: [
                            {
                                src: "https://s7d2.scene7.com/is/image/Caterpillar/CM20221026-63f53-02d62",
                            },
                        ],
                    },
                },
                {
                    kind: "customsearch#result",
                    title: "Cat phones: Made Mighty",
                    htmlTitle: "<b>Cat</b> phones: Made Mighty",
                    link: "https://www.catphones.com/",
                    displayLink: "www.catphones.com",
                    snippet:
                        "DUST PROOF. Each and every Cat phone is fully sealed. The casing is sealed with a unique pressure-sensitive adhesive – significantly tougher ...",
                    htmlSnippet:
                        "DUST PROOF. Each and every <b>Cat</b> phone is fully sealed. The casing is sealed with a unique pressure-sensitive adhesive – significantly tougher&nbsp;...",
                    cacheId: "5b_dzL_kfoUJ",
                    formattedUrl: "https://www.pinterest.com/pin/678706606336776214/https://www.catphones.com/",
                    htmlFormattedUrl: "https://www.<b>cat</b>phones.com/",
                    pagemap: {
                        metatags: [
                            {
                                "p:domain_verify":
                                    "594966bf088b7e014c75ba165015daf8",
                                "og:image":
                                    "https://www.catphones.com/wp-content/uploads/2020/06/Cat-S42-Tough.jpg",
                                "og:type": "website",
                                "og:image:width": "1096",
                                "twitter:card": "summary_large_image",
                                "og:site_name": "Cat phones",
                                "og:title": "Made Mighty | Cat phones",
                                "og:image:height": "480",
                                "twitter:label1": "Est. reading time",
                                "og:image:type": "image/jpeg",
                                "msapplication-tileimage":
                                    "https://www.catphones.com/en-gb/wp-content/themes/wp5/assets/brand/cat/img/logo.png",
                                "og:description":
                                    "RUGGED TO THE CORE RUGGED IS IN OUR BLOOD. MANUFACTURED TO BE TOUGH. PROUD TO WEAR THE CAT® BADGE. For over 100 years, Cat has made some of the most reliable rugged machines and engines ever seen. The Cat badge symbolises extreme quality, remarkable performance and above all else, technological innovation. Our comprehensive range of...",
                                "twitter:data1": "5 minutes",
                                "facebook-domain-verification":
                                    "ahi1ogptvd5etwusga8uaz4owgdfkw",
                                "article:modified_time":
                                    "2022-04-19T10:34:12+00:00",
                                viewport: "width=device-width, initial-scale=1",
                                "og:locale": "en_GB",
                                "og:url": "https://www.catphones.com/en-gb/",
                            },
                        ],
                    },
                },
                {
                    kind: "customsearch#result",
                    title: "Cat - Wikipedia",
                    htmlTitle: "<b>Cat</b> - Wikipedia",
                    link: "https://en.wikipedia.org/wiki/Cat",
                    displayLink: "en.wikipedia.org",
                    snippet:
                        "The cat (Felis catus) is a domestic species of small carnivorous mammal. ... It is the only domesticated species in the family Felidae and is commonly referred to ...",
                    htmlSnippet:
                        "The <b>cat</b> (Felis catus) is a domestic species of small carnivorous mammal. ... It is the only domesticated species in the family Felidae and is commonly referred to&nbsp;...",
                    cacheId: "HkevFQZ5DYsJ",
                    formattedUrl: "https://en.wikipedia.org/wiki/Cat",
                    htmlFormattedUrl:
                        "https://en.wikipedia.org/wiki/<b>Cat</b>",
                    pagemap: {
                        metatags: [
                            {
                                referrer: "origin",
                                "og:image":
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/1200px-Cat_poster_1.jpg",
                                "theme-color": "#eaecf0",
                                "og:image:width": "1200",
                                "og:type": "website",
                                viewport:
                                    "width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=0.25, maximum-scale=5.0",
                                "og:title": "Cat - Wikipedia",
                                "og:image:height": "788",
                                "format-detection": "telephone=no",
                            },
                        ],
                    },
                },
                {
                    kind: "customsearch#result",
                    title: "Cat Footwear: Caterpillar Work Boots - Comfortable Work Shoes",
                    htmlTitle:
                        "<b>Cat</b> Footwear: Caterpillar Work Boots - Comfortable Work Shoes",
                    link: "https://www.catfootwear.com/US/en/home",
                    displayLink: "www.catfootwear.com",
                    snippet:
                        "Official Cat Footwear Site - Shop Caterpillar work boots, steel toe work boots & shoes along with casual shoes & casual boots. Free shipping!",
                    htmlSnippet:
                        "Official <b>Cat</b> Footwear Site - Shop Caterpillar work boots, steel toe work boots &amp; shoes along with casual shoes &amp; casual boots. Free shipping!",
                    cacheId: "-yJIy-z5_7IJ",
                    formattedUrl: "https://www.catfootwear.com/US/en/home",
                    htmlFormattedUrl:
                        "https://www.<b>cat</b>footwear.com/US/en/home",
                    pagemap: {
                        cse_thumbnail: [
                            {
                                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHjP2_57PyfsouUMoLUWg8Z6HpDX-vl39bHUWZ67PEKQEjA4TbVzrCOQ",
                                width: "225",
                                height: "225",
                            },
                        ],
                        organization: [
                            {
                                logo: "https://www.catfootwear.com/on/demandware.static/Sites-catfootwear_us-Site/-/default/dwc3b3f523/images/logo.svg",
                                url: "CAT Footwear",
                            },
                            {
                                logo: "https://www.catfootwear.com/on/demandware.static/Sites-catfootwear_us-Site/-/default/dwc3b3f523/images/logo.svg",
                                url: "https://www.catfootwear.com/US/en/home",
                            },
                            {
                                logo: "https://www.catfootwear.com/on/demandware.static/Sites-catfootwear_us-Site/-/default/dwc1043f2e/images/mobile/logo.svg",
                                url: "CAT Footwear",
                            },
                            {
                                url: "https://www.catfootwear.com/en/home",
                                sameas: "https://www.facebook.com/catfootwear",
                            },
                        ],
                        metatags: [
                            {
                                "p:domain_verify":
                                    "725b0bfb2f4e23b350bf13403b008121",
                                "og:image":
                                    "https://s7d4.scene7.com/is/image/WolverineWorldWide/logo-persistent_Cat?fmt=png-alpha&hei=300&wid=300",
                                "mcafeesecure-site-verification":
                                    "41856dd1150f95247e2522f5e1124cdd",
                                "twitter:card": "summary",
                                "og:site_name": "CAT Footwear",
                                "twitter:url":
                                    "https://www.catfootwear.com/US/en/home",
                                "og:description":
                                    "Official Cat Footwear Site - Shop Caterpillar work boots, steel toe work boots & shoes along with casual shoes & casual boots. Free shipping!",
                                "twitter:image":
                                    "https://s7d4.scene7.com/is/image/WolverineWorldWide/logo-persistent_Cat?fmt=png-alpha&hei=300&wid=300",
                                "twitter:image:alt":
                                    "Caterpillar Work Boots - Comfortable Work Shoes | Cat Footwear",
                                "be:norm_url":
                                    "https://www.catfootwear.com/US/en/home",
                                "be:sdk_type": "custom",
                                "be:capsule_url":
                                    "https://ixfd1-api.bc0a.com/api/ixf/1.0.0/get_capsule/f00000000091951/01957013197",
                                "be:timer": "15ms",
                                "be:messages": "true",
                                "og:type": "website",
                                "og:image:alt":
                                    "Caterpillar Work Boots - Comfortable Work Shoes | Cat Footwear",
                                "twitter:title":
                                    "Caterpillar Work Boots - Comfortable Work Shoes | Cat Footwear",
                                "msvalidate.01":
                                    "AEBAA6E09D7C8EE5F88B52B7469AA7DB",
                                "be:sdk": "js_sdk_1.5.1",
                                "og:title":
                                    "Caterpillar Work Boots - Comfortable Work Shoes | Cat Footwear",
                                viewport: "width=321px, user-scalable=no",
                                "twitter:description":
                                    "Official Cat Footwear Site - Shop Caterpillar work boots, steel toe work boots & shoes along with casual shoes & casual boots. Free shipping!",
                                "be:api_dt":
                                    "py_2022; pm_05; pd_11; ph_07; pmh_00; p_epoch:1652277600143",
                                "be:mod_dt":
                                    "py_2022; pm_05; pd_11; ph_07; pmh_00; p_epoch:1652277600143",
                                "og:url":
                                    "https://www.catfootwear.com/US/en/home",
                                "be:orig_url":
                                    "https://www.catfootwear.com/US/en/home",
                            },
                        ],
                        cse_image: [
                            {
                                src: "https://s7d4.scene7.com/is/image/WolverineWorldWide/logo-persistent_Cat?fmt=png-alpha&hei=300&wid=300",
                            },
                        ],
                    },
                },
                {
                    kind: "customsearch#result",
                    title: "Committee against Torture - OHCHR",
                    htmlTitle: "Committee against Torture - OHCHR",
                    link: "https://www.ohchr.org/en/treaty-bodies/cat",
                    displayLink: "www.ohchr.org",
                    snippet:
                        "The Committee against Torture (CAT) is the body of 10 independent experts that monitors implementation of the Convention against Torture and Other Cruel, ...",
                    htmlSnippet:
                        "The <b>Committee against Torture</b> (<b>CAT</b>) is the body of 10 independent experts that monitors implementation of the Convention against Torture and Other Cruel,&nbsp;...",
                    cacheId: "Catm43QgBtMJ",
                    formattedUrl: "https://www.ohchr.org/en/treaty-bodies/cat",
                    htmlFormattedUrl:
                        "https://www.ohchr.org/en/treaty-bodies/<b>cat</b>",
                    pagemap: {
                        cse_thumbnail: [
                            {
                                src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlMwjj7p02SuYK0a5bbWcglTVhFhIRS1q5aBfP1o-JZYXwjQjHdubql_Wt",
                                width: "225",
                                height: "225",
                            },
                        ],
                        metatags: [
                            {
                                "twitter:card": "summary",
                                "twitter:title":
                                    "OHCHR | Committee against Torture",
                                "og:site_name": "OHCHR",
                                "twitter:site": "@UNHumanRights",
                                handheldfriendly: "true",
                                viewport:
                                    "width=device-width, initial-scale=1.0",
                                "og:title": "OHCHR | Committee against Torture",
                                mobileoptimized: "width",
                                "og:url":
                                    "https://www.ohchr.org/en/treaty-bodies/cat",
                            },
                        ],
                        cse_image: [
                            {
                                src: "https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/2021-07/Honduras-55300969-EPA.jpg?itok=y6ivxXuu",
                            },
                        ],
                    },
                },
                {
                    kind: "customsearch#result",
                    title: "Caterpillar Inc. (CAT) Stock Price, News, Quote & History - Yahoo ...",
                    htmlTitle:
                        "Caterpillar Inc. (<b>CAT</b>) Stock Price, News, Quote &amp; History - Yahoo ...",
                    link: "https://finance.yahoo.com/quote/CAT/",
                    displayLink: "finance.yahoo.com",
                    snippet:
                        "Find the latest Caterpillar Inc. (CAT) stock quote, history, news and other vital information to help you with your stock trading and investing.",
                    htmlSnippet:
                        "Find the latest Caterpillar Inc. (<b>CAT</b>) stock quote, history, news and other vital information to help you with your stock trading and investing.",
                    cacheId: "W2qp1bBWldMJ",
                    formattedUrl: "https://finance.yahoo.com/quote/CAT/",
                    htmlFormattedUrl:
                        "https://finance.yahoo.com/quote/<b>CAT</b>/",
                    pagemap: {
                        cse_thumbnail: [
                            {
                                src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoCgoe2XIWK1wvQQnCXpvwGieiET3EZ89hNdiU356o8MB7kfJHy8vE4EBf",
                                width: "225",
                                height: "225",
                            },
                        ],
                        metatags: [
                            {
                                "og:image":
                                    "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
                                "apple-itunes-app":
                                    "app-id=328412701, app-clip-bundle-id=com.yahoo.finance.clip-qsp, affiliate-data=ct=us.fin.mbl.smart-banner&pt=9029, app-argument=https://finance.yahoo.com/quote/CAT",
                                "theme-color": "#400090",
                                "twitter:title":
                                    "Caterpillar Inc. (CAT) Stock Price, News, Quote & History - Yahoo Finance",
                                "al:ios:app_name": "Yahoo Finance",
                                "msvalidate.01":
                                    "A9862C0E6E1BE95BCE0BF3D0298FD58B",
                                "og:title":
                                    "Caterpillar Inc. (CAT) Stock Price, News, Quote & History - Yahoo Finance",
                                "al:android:package":
                                    "com.yahoo.mobile.client.android.finance",
                                "fb:pages": "458584288257241",
                                "og:description":
                                    "Find the latest Caterpillar Inc. (CAT) stock quote, history, news and other vital information to help you with your stock trading and investing.",
                                "twitter:dnt": "on",
                                "al:ios:app_store_id": "328412701",
                                "al:android:url":
                                    "intent://quote/CAT/#Intent;scheme=yfinance;action=android.intent.action.VIEW;package=com.yahoo.mobile.client.android.finance;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.yahoo.mobile.client.android.finance;end",
                                "fb:app_id": "458584288257241",
                                "oath:guce:consent-host": "guce.yahoo.com",
                                "twitter:site": "@YahooFinance",
                                viewport: "width=device-width, initial-scale=1",
                                "twitter:description":
                                    "Find the latest Caterpillar Inc. (CAT) stock quote, history, news and other vital information to help you with your stock trading and investing.",
                                "og:url":
                                    "https://finance.yahoo.com/quote/CAT/",
                                "al:android:app_name": "Yahoo Finance",
                            },
                        ],
                        cse_image: [
                            {
                                src: "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
                            },
                        ],
                    },
                },
                {
                    kind: "customsearch#result",
                    title: "Cat Adoption Team | Sherwood Cat Rescue | Cat Adoption Center",
                    htmlTitle:
                        "<b>Cat Adoption Team</b> | Sherwood <b>Cat</b> Rescue | <b>Cat</b> Adoption Center",
                    link: "https://catadoptionteam.org/",
                    displayLink: "catadoptionteam.org",
                    snippet:
                        "Cat Adoption Team is the largest nonprofit, adoption guarantee cat shelter in the Pacific Northwest. We offer adoption, foster care, and veterinary services ...",
                    htmlSnippet:
                        "<b>Cat Adoption Team</b> is the largest nonprofit, adoption guarantee <b>cat</b> shelter in the Pacific Northwest. We offer adoption, foster care, and veterinary services&nbsp;...",
                    cacheId: "Tql7n-yz4LYJ",
                    formattedUrl: "https://catadoptionteam.org/",
                    htmlFormattedUrl: "https://<b>cat</b>adoptionteam.org/",
                    pagemap: {
                        cse_thumbnail: [
                            {
                                src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt2KnuSl3gVTN_0AE0cMbkdiHrjIAx9bro8nL_UJV7cWey6M6t4G8JOoWf",
                                width: "194",
                                height: "260",
                            },
                        ],
                        Organization: [
                            {
                                name: "Cat Adoption Team",
                                logo: "https://catadoptionteam.org/wp-content/uploads/2019/02/weblogo.png",
                                url: "https://catadoptionteam.org/",
                                sameAs: "https://www.facebook.com/CatAdoptionTeam",
                            },
                        ],
                        WebSite: [{ url: "https://catadoptionteam.org/" }],
                        Event: [
                            {
                                image: "https://catadoptionteam.org/wp-content/uploads/2021/12/Volunteer_Orientation_Header.png",
                                endDate: "2022-11-01",
                                eventStatus: "http://schema.org/EventScheduled",
                                name: "Volunteer Orientation",
                                description:
                                    "Interested in volunteering your time, skills,",
                                eventAttendanceMode:
                                    "http://schema.org/OfflineEventAttendanceMode",
                                startDate: "2022-11-01",
                                url: "https://catadoptionteam.org/events/volunteer-orientation-11-01-22/",
                            },
                            {
                                image: "https://catadoptionteam.org/wp-content/uploads/2022/10/2022-Wall-of-Wine-Event-Header.png",
                                endDate: "2022-11-05",
                                eventStatus: "http://schema.org/EventScheduled",
                                name: "Wall of Wine Game — part of Whisker Wonderland 2022",
                                description:
                                    "A Little Bit of Whisker Wonderland… IN-PERSON!",
                                eventAttendanceMode:
                                    "http://schema.org/OfflineEventAttendanceMode",
                                startDate: "2022-11-05",
                                url: "https://catadoptionteam.org/events/wall-of-wine-game-2022/",
                            },
                            {
                                image: "https://catadoptionteam.org/wp-content/uploads/2022/10/Subaru-Loves-Pets-Header.png",
                                endDate: "2022-10-31",
                                eventStatus: "http://schema.org/EventScheduled",
                                name: "Subaru Loves Pets Month",
                                description:
                                    "October kicks off #SubaruLovesPets Month, and",
                                eventAttendanceMode:
                                    "http://schema.org/OfflineEventAttendanceMode",
                                startDate: "2022-10-30",
                                url: "https://catadoptionteam.org/events/subaru-loves-pets-month-2022/",
                            },
                            {
                                image: "https://catadoptionteam.org/wp-content/uploads/2022/10/Subaru-Loves-Pets-Header.png",
                                endDate: "2022-10-31",
                                eventStatus: "http://schema.org/EventScheduled",
                                name: "Subaru Loves Pets Month",
                                description:
                                    "October kicks off #SubaruLovesPets Month, and",
                                eventAttendanceMode:
                                    "http://schema.org/OfflineEventAttendanceMode",
                                startDate: "2022-10-31",
                                url: "https://catadoptionteam.org/events/subaru-loves-pets-month-2022/",
                            },
                        ],
                        metatags: [
                            {
                                "og:image":
                                    "https://catadoptionteam.org/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png",
                                "dc.description":
                                    "Cat Adoption Team is the largest nonprofit, adoption guarantee cat shelter in the Pacific Northwest. We offer adoption, foster care, and veterinary services to homeless cats. Learn more.",
                                "og:type": "website",
                                "twitter:card": "summary",
                                "twitter:title":
                                    "Cat Adoption Team | Sherwood Cat Rescue | Cat Adoption Center",
                                "og:site_name": "Cat Adoption Team",
                                "og:title":
                                    "Cat Adoption Team | Sherwood Cat Rescue | Cat Adoption Center",
                                bingbot:
                                    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
                                "msapplication-tileimage":
                                    "https://catadoptionteam.org/wp-content/uploads/2019/05/CAT-just-C-no-bkgrd-300x300.png",
                                "og:description":
                                    "Cat Adoption Team is the largest nonprofit, adoption guarantee cat shelter in the Pacific Northwest. We offer adoption, foster care, and veterinary services to homeless cats. Learn more.",
                                "twitter:creator": "@CatAdopt",
                                "og:image:secure_url":
                                    "https://catadoptionteam.org/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png",
                                "twitter:image":
                                    "https://catadoptionteam.org/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png",
                                "twitter:site": "@CatAdopt",
                                "dc.source": "https://catadoptionteam.org/",
                                viewport: "width=device-width, initial-scale=1",
                                "twitter:description":
                                    "Cat Adoption Team is the largest nonprofit, adoption guarantee cat shelter in the Pacific Northwest. We offer adoption, foster care, and veterinary services to homeless cats. Learn more.",
                                "dc.relation": "https://catadoptionteam.org/",
                                "dc.title":
                                    "Cat Adoption Team | Sherwood Cat Rescue | Cat Adoption Center",
                                "og:locale": "en_US",
                                "dc.language": "en_US",
                                "og:url": "https://catadoptionteam.org/",
                            },
                        ],
                        creativework: [
                            {
                                text: "Love, Laughter & Companionship Await YouIf you’re a cat person, you’re in the right place. Whether you're here to adopt, volunteer, or find out more about our services, CAT can help. Adopt...",
                            },
                        ],
                        cse_image: [
                            {
                                src: "https://catadoptionteam.org/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png",
                            },
                        ],
                    },
                },
                {
                    kind: "customsearch#result",
                    title: "cat | Breeds & Facts | Britannica",
                    htmlTitle: "<b>cat</b> | Breeds &amp; Facts | Britannica",
                    link: "https://www.britannica.com/animal/cat",
                    displayLink: "www.britannica.com",
                    snippet:
                        "cat, (Felis catus), also called house cat or domestic cat, domesticated member of the family Felidae, order Carnivora, and the smallest member of that ...",
                    htmlSnippet:
                        "<b>cat</b>, (Felis catus), also called house <b>cat</b> or domestic <b>cat</b>, domesticated member of the family Felidae, order Carnivora, and the smallest member of that&nbsp;...",
                    cacheId: "Bvzzy2OOLWkJ",
                    formattedUrl: "https://www.britannica.com/animal/cat",
                    htmlFormattedUrl:
                        "https://www.britannica.com/animal/<b>cat</b>",
                    pagemap: {
                        cse_thumbnail: [
                            {
                                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwuvXL6WW64LSoMEpITO8LBNhQAc24ezxR8nkkw4yKCf2MTOGiAiJ4nU",
                                width: "275",
                                height: "183",
                            },
                        ],
                        metatags: [
                            {
                                "og:image":
                                    "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
                                "twitter:card": "summary_large_image",
                                "og:type": "ARTICLE",
                                "og:site_name": "Encyclopedia Britannica",
                                "og:title": "cat | Breeds & Facts",
                                "og:image:type": "image/jpeg",
                                "fb:pages": "74442380906",
                                "og:description":
                                    "cat,  (Felis catus), also called house cat or domestic cat,  domesticated member of the family Felidae, order Carnivora, and the smallest member of that family. Like all felids, domestic cats are characterized by supple low-slung bodies, finely molded heads, long tails that aid in balance, and specialized teeth and claws that adapt them admirably to a life of active hunting. Cats possess other features of their wild relatives in being basically carnivorous, remarkably agile and powerful, and finely coordinated in movement. It is noteworthy that the ancestors of the other common household pet, the dog, were social animals that lived",
                                "twitter:image":
                                    "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
                                "fb:app_id": "1887621861548296",
                                "twitter:site": "@britannica",
                                viewport:
                                    "width=device-width, initial-scale=1.0",
                                "twitter:description":
                                    "cat,  (Felis catus), also called house cat or domestic cat,  domesticated member of the family Felidae, order Carnivora, and the smallest member of that family. Like all felids, domestic cats are characterized by supple low-slung bodies, finely molded heads, long tails that aid in balance, and specialized teeth and claws that adapt them admirably to a life of active hunting. Cats possess other features of their wild relatives in being basically carnivorous, remarkably agile and powerful, and finely coordinated in movement. It is noteworthy that the ancestors of the other common household pet, the dog, were social animals that lived",
                                "og:url":
                                    "https://www.britannica.com/animal/cat",
                            },
                        ],
                        cse_image: [
                            {
                                src: "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
                            },
                        ],
                    },
                },
                {
                    kind: "customsearch#result",
                    title: "Home . peg + cat | PBS KIDS",
                    htmlTitle: "Home . peg + <b>cat</b> | PBS KIDS",
                    link: "https://pbskids.org/peg/",
                    displayLink: "pbskids.org",
                    snippet:
                        "Play PEG + CAT games, watch videos, and download printable activities! PEG + CAT follows the adorable, spirited Peg and her sidekick Cat as they embark on ...",
                    htmlSnippet:
                        "Play PEG + <b>CAT</b> games, watch videos, and download printable activities! PEG + <b>CAT</b> follows the adorable, spirited Peg and her sidekick <b>Cat</b> as they embark on&nbsp;...",
                    cacheId: "1p_YL71xT_cJ",
                    formattedUrl: "https://pbskids.org/peg/",
                    htmlFormattedUrl: "https://pbskids.org/peg/",
                    pagemap: {
                        cse_thumbnail: [
                            {
                                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOOmvy1N_CPmPBTJK1k31CkRHWCHxvEoFqi3NMlhqxPkr3R4cnOxo8zQ",
                                width: "284",
                                height: "177",
                            },
                        ],
                        metatags: [
                            {
                                viewport:
                                    "width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
                                "apple-mobile-web-app-capable": "yes",
                                author: "CloudKid",
                            },
                        ],
                        cse_image: [
                            {
                                src: "https://pbskids.org/peg/assets/images/games_promo.png?v=3",
                            },
                        ],
                    },
                },
            ],
        };
    },
};

export default fakeData;
