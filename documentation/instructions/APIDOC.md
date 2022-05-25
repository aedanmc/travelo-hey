# Travelo-Hey! API Documentation

The Travelo-Hey! API provides an interface between the front-end portion of Travelo-Hey! and the database and Google API calls.

___

## Contents
- [Activities Endpoint](#Activities-Endpoint)
- [Business Endpoint](#Business-Endpoint)
- [Cities Endpoint](#Cities-Endpoint)
- [Countries Endpoint](#Countries-Endpoint)
- [Country Endpoint](#Country-Endpoint)
- [Reviews Endpoint](#Reviews-Endpoint)
- [Reviews/New Endpoint](#Reviews/New-Endpoint)
- [Search Endpoint](#Search-Endpoint)
- [States Endpoint](#States Endpoint)

---

## Activities Endpoint

**Request Format:** `/activities`

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Retrieves a list of all activities.

**Example Request:** `/activities`

**Example Response:**
```JSON
{
  "activities": [
    "Restaurants", "Club", "Bar", "Hotels"
  ]
}
```

**Error Handling:**
- possible 500 (internal server error)
  - Response error message sent in plain text

---

## Business Endpoint

**Request Format:** `/business`

**Request Type:** POST

**Returned Data Format**: JSON

**Description:** Returns the country safety values for the business that matches the `place_id` given.

Form Parameters
- `place_id`: the business's Google Place ID for which to return results

**Example Request:** `/business`

**Example Response:**
```JSON
{
  "html_attributions": [],
  "result": {
    "address_components": [
      {
        "long_name": "2865",
        "short_name": "2865",
        "types": [
          "street_number"
        ]
      },
      {
        "long_name": "Eastlake Avenue East",
        "short_name": "Eastlake Ave E",
        "types": [
          "route"
        ]
      },
      {
        "long_name": "Eastlake",
        "short_name": "Eastlake",
        "types": [
          "neighborhood",
          "political"
        ]
      },
      {
        "long_name": "Seattle",
        "short_name": "Seattle",
        "types": [
          "locality",
          "political"
        ]
      },
      {
        "long_name": "King County",
        "short_name": "King County",
        "types": [
          "administrative_area_level_2",
          "political"
        ]
      },
      {
        "long_name": "Washington",
        "short_name": "WA",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      },
      {
        "long_name": "United States",
        "short_name": "US",
        "types": [
          "country",
          "political"
        ]
      },
      {
        "long_name": "98102",
        "short_name": "98102",
        "types": [
          "postal_code"
        ]
      }
    ],
    "adr_address": "\u003cspan class=\"street-address\"\u003e2865 Eastlake Ave E\u003c/span\u003e, \u003cspan class=\"locality\"\u003eSeattle\u003c/span\u003e, \u003cspan class=\"region\"\u003eWA\u003c/span\u003e \u003cspan class=\"postal-code\"\u003e98102\u003c/span\u003e, \u003cspan class=\"country-name\"\u003eUSA\u003c/span\u003e",
    "business_status": "OPERATIONAL",
    "formatted_address": "2865 Eastlake Ave E, Seattle, WA 98102, USA",
    "formatted_phone_number": "(206) 466-6171",
    "geometry": {
      "location": {
        "lat": 47.6472222,
        "lng": -122.325
      },
      "viewport": {
        "northeast": {
          "lat": 47.6485239302915,
          "lng": -122.3235171197085
        },
        "southwest": {
          "lat": 47.6458259697085,
          "lng": -122.3262150802915
        }
      }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
    "icon_background_color": "#FF9E67",
    "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
    "international_phone_number": "+1 206-466-6171",
    "name": "Little Water Cantina",
    "opening_hours": {
      "open_now": true,
      "periods": [
        {
          "close": {
            "day": 0,
            "time": "2200"
          },
          "open": {
            "day": 0,
            "time": "1130"
          }
        },
        {
          "close": {
            "day": 1,
            "time": "2200"
          },
          "open": {
            "day": 1,
            "time": "1130"
          }
        },
        {
          "close": {
            "day": 2,
            "time": "2200"
          },
          "open": {
            "day": 2,
            "time": "1130"
          }
        },
        {
          "close": {
            "day": 3,
            "time": "2200"
          },
          "open": {
            "day": 3,
            "time": "1130"
          }
        },
        {
          "close": {
            "day": 4,
            "time": "2200"
          },
          "open": {
            "day": 4,
            "time": "1130"
          }
        },
        {
          "close": {
            "day": 6,
            "time": "0100"
          },
          "open": {
            "day": 5,
            "time": "1130"
          }
        },
        {
          "close": {
            "day": 0,
            "time": "0100"
          },
          "open": {
            "day": 6,
            "time": "1130"
          }
        }
      ],
      "weekday_text": [
        "Monday: 11:30 AM – 10:00 PM",
        "Tuesday: 11:30 AM – 10:00 PM",
        "Wednesday: 11:30 AM – 10:00 PM",
        "Thursday: 11:30 AM – 10:00 PM",
        "Friday: 11:30 AM – 1:00 AM",
        "Saturday: 11:30 AM – 1:00 AM",
        "Sunday: 11:30 AM – 10:00 PM"
      ]
    },
    "photos": [
      {
        "height": 617,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/110413365097082725645\"\u003eLittle Water Cantina\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uEAPqz2MtrfpgljQYUuIDNzk1mioTBop4dgNKfUSlXjqCna-7L-oX75CD6-ZQF7e75PDliMLUKhKY45IzX8C_km7b-g72cuXzNZ-2ew3Ti6vbAhr4u2gG3sPOhpYBwgnvsU5Z2CfoJKglvnaAtaAbNokOvyy5rJTzVdRqMxE5nzJHK0p",
        "width": 1095
      },
      {
        "height": 4032,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/109479845758910778779\"\u003eKimberly Pham\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uEBEuTWO0gXX8r6NABhBMtLnOy5U6rlPSf10bUY7d9YETqPxAR8jUAA7rRae6Fs4VXSzQqvBxlnoUPRwBwweSeiAUp_zt9MttRguZox26wRvbTkOrKYgg-GwKYgZhkWEvoojA8rcIle3ZLB8i44sNIREIa_KXQx_Jm5UkWdC257I6Pnc",
        "width": 3024
      },
      {
        "height": 900,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/110413365097082725645\"\u003eLittle Water Cantina\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uEDUSwcPtx_-p3LA1AP3HbdCJ93FH780CIcVKNaK-8NtdMINQSAKJs74-pfMihe6RoFgTkNYFy9SmjJavC-F2RU9gVND8hlZ8OusGYNj0gyhbNhYHetGpHIA_HVfIcVSQ5IlpDvGAD48moZzMSONMmXcPAbPAdmIW7HHP05UyoG0DZZi",
        "width": 900
      },
      {
        "height": 2160,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/109086662773262107833\"\u003eTony Tschanz\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uECuh4JByI76kElUNyFcPl8Vv_EzfxJTvHtDhsPBw1Yl6QA1qpKwMFdiq8_eWJiNduslJ-bPca4wZWqMnL0hxdPhQOEg0wQod3QZ0aUmRXWOesqkcy-Gq3mul8IsWNwXgQlsjprShMI8YIOCFK0KKCRA9wk5-AwUFLYeJ0EKTGpbyZNj",
        "width": 3840
      },
      {
        "height": 1200,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/109479845758910778779\"\u003eKimberly Pham\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uEBAsdOgoECqBSFRMjJ8he6Hu5_w_pSHt1551dclb-lhrS6HiRl5xooND4oC4exwhk-lcFvKMGoKTOT9YD3gKWs8O8HOjJ_Ra4i2HA6C3puXA6DPkNszKN1jQ8xsW2EV19_t6lYB-t3Fzvadl0YBjjTBoEpgJw9hEJfm9YFxIm7pbo4t",
        "width": 1600
      },
      {
        "height": 3024,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/104641095422852249098\"\u003eMatty B\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uEA15Z0zgY3L_Sh-1ZnD3IKrw4zfdlaBEz_gDPxUqWrtUvsOsZL-7Y358WX3dHvV0Nc2B5XdoOTQWob1_BaSTgSAYHkXfmamkZUax1628F5Q0mE6iNxeS_DR5WTw0tW4oQSXCQjpsFThYDlTGAOfRH6YVHz6mjgLNLg-_u1U0QATvAdB",
        "width": 4032
      },
      {
        "height": 3024,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/111589903686295173445\"\u003ePratik Shah\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uEA7SMw_HZAMjhk02l81e_8A1A3iv88L6Z-WfibByjDyYoESWHpOMHaXQwMcUd0bAzu18bhG8miKB4nY64FIpsJPAqTK-z9xOK7Voq42_hM_Wk59PnKEDJXPJqla9mo-NGMvDl9ZxKCwumBqPfLxEJhCVy9A12v3z26OuUTNpfXJhBcn",
        "width": 4032
      },
      {
        "height": 3024,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/110413365097082725645\"\u003eLittle Water Cantina\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uECh1kkb52t7uN2RKZ9YzeX-tZXbVzZSjZ1htiBNtN7NCxfOYCBcpATYyYQdq-m28zNt1KR0DnD7GK55Cs_4rEKIyEMVKbCLUXWh62aulNIjLKSIw3oEOIJ6QRKKinjW921PFsRX59fJDniHTJKvRpKTcTtqIIBkFy5uKB79UpljfLgS",
        "width": 4032
      },
      {
        "height": 3024,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/110413365097082725645\"\u003eLittle Water Cantina\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uECo6k6rOT0usicvzJq9GQjcCCAIUqn5RkA2MBWfq9liUvSTeHRnSmyCpsyUV-Jv7lEBKgNBJyMW_RblzWPSeIrXRguNh5xy2KMm23OtUnNpVw6ny_I5pmxvK3PEr22gwEgM3zRf8mOf9q_zBZefb29f6UNJfKRsmcWnrSiTzZ1avTpf",
        "width": 4032
      },
      {
        "height": 3024,
        "html_attributions": [
          "\u003ca href=\"https://maps.google.com/maps/contrib/112105889974586469875\"\u003ejake papa\u003c/a\u003e"
        ],
        "photo_reference": "Aap_uEBfEJBkR1gc_RsrEDNLl3aVlwwEf5YMor_MQL0z840R54gRSQWY34cfZuzsrOhPpe67ergiNNKuf-PwVZ5qnxTIpjiivg1QYgqNOgi_iL8ZfblGRRSYJaE9Rc_MGqblacLp2mjN-CsXuqSaOzQmnOEQZLznWbLdN9kvTpjxymy_KLuS",
        "width": 4032
      }
    ],
    "place_id": "ChIJu9LYj-QUkFQRxb9K4D7e9bI",
    "plus_code": {
      "compound_code": "JMWF+VX Seattle, WA, USA",
      "global_code": "84VVJMWF+VX"
    },
    "price_level": 2,
    "rating": 4,
    "reference": "ChIJu9LYj-QUkFQRxb9K4D7e9bI",
    "reviews": [
      {
        "author_name": "Kimberly Pham",
        "author_url": "https://www.google.com/maps/contrib/109479845758910778779/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GjuC6lgfkqb46Z8huNLYs4dnyu0x05Lfco4Pw63cDM=s128-c0x00000000-cc-rp-mo-ba6",
        "rating": 5,
        "relative_time_description": "3 weeks ago",
        "text": "Love the fact that this place has wonderful outdoor seatings with an incredible cozy family vibe. The indoor setting seems to be pretty cool and comfortable, especially by the bar. We love the food here. Everything we had is delicious and fresh. We consider this a hidden gem in the Eastlake area. No reservation is accepted but usually, plenty of tables are available. No parking garage/ only street parking.",
        "time": 1651442641
      },
      {
        "author_name": "Joshua Kemper",
        "author_url": "https://www.google.com/maps/contrib/104471502176307681430/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GjqyhwzORT1f2437Ja7FQFMLSvE1vF9QJg1X0_QPA=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "2 months ago",
        "text": "I came here with some coworkers and I showed up early. The bartender was awesome at welcoming me and letting me know where I could go while I waited for the rest of my group. The margaritas we had were awesome and I loved the chips & guac. Definitely going back!",
        "time": 1647553957
      },
      {
        "author_name": "Mark Lavery",
        "author_url": "https://www.google.com/maps/contrib/104717300262470684657/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJwo51H0nItuzHg2MBMy2l_l7BBv9crwHy2lavOj=s128-c0x00000000-cc-rp-mo",
        "rating": 5,
        "relative_time_description": "a year ago",
        "text": "Beautiful view with great service.  Manager Dustin was terrific, courteous & professional.",
        "time": 1599400178
      },
      {
        "author_name": "Jennifer Stefanik",
        "author_url": "https://www.google.com/maps/contrib/116224092582494413566/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a/AATXAJzZ-0cSJziNU0gnIDmiLZw4U2u2417CWGu7XMGU=s128-c0x00000000-cc-rp-mo-ba2",
        "rating": 5,
        "relative_time_description": "3 months ago",
        "text": "This place is a staple with my fiancé and I. We have come here for years for the great drinks and amazing deck/views. Food is good too and consistent. The staff have always been friendly. They also offer outdoor dining (with see through plastic walls/heaters) during the winter, which has been nice for the pandemic.",
        "time": 1644298772
      },
      {
        "author_name": "Justin Siebert",
        "author_url": "https://www.google.com/maps/contrib/113415252828826523936/reviews",
        "language": "en",
        "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14Gibxf5B90TCLzIKlFQ5AlEMnbJI6AzoD1hG5jaALw=s128-c0x00000000-cc-rp-mo-ba2",
        "rating": 4,
        "relative_time_description": "a month ago",
        "text": "The ppl and food are ok. I go here mostly to sit outside on a nice day. I think it’s crazy that three people can each have an entree and one drink/beer a price and the bill is like $140 plus tip (of course I still tipped over 20%) for lunch, but you have to order through QR which is fine, however, you also have to get your own plates, water, and silverware. Only the best for Seattle /s",
        "time": 1650302788
      }
    ],
    "types": [
      "night_club",
      "bar",
      "restaurant",
      "point_of_interest",
      "food",
      "establishment"
    ],
    "url": "https://maps.google.com/?cid=12895457469677617093",
    "user_ratings_total": 635,
    "utc_offset": -420,
    "vicinity": "2865 Eastlake Avenue East, Seattle",
    "website": "http://www.littlewatercantina.com/"
  },
  "status": "OK"
}

```

**Schema**
```Javascript
address_component: object                       // An array containing the separate components applicable to the business address
formatted_address: string                       // A string containing the human-readable address of this place
formatted_phone_number: string                  // Contains the place's phone number in its local format
geometry: object                                // Contains the location and viewport for the location. (ie. longitude, latitude)
international_phone_number: string              // Contains the place's phone number in international format.
opening_hours: object                           // Contains hours of operation
name: string                                    // Contains the human-readable name for the returned result. For establishment results, this is usually the canonicalized business name.
place_id: string                                // A textual identifier that uniquely identifies a place
price_level: number                             // The price level of the place, on a scale of 0 to 4
rating: number                                  // Contains the place's rating, from 1.0 to 5.0, based on aggregated user reviews
review: array                                   // A JSON array of up to five reviews
types: array                                    // Contains an array of feature types describing the given result (ie. restaurant, club, hotel)
user_ratings_total: number                      // The total number of reviews, with or without text, for this place
webesite: string                                // The authoritative website for this place
```

**Error Handling:**
- Possible 400 (invalid request)
  - Required parameter is missing: `Missing place_id`
- Possible 500 (internal server error)
  - Response error message sent in plain text

---

## Cities Endpoint

**Request Format:** `/cities`

**Request Type:** POST

**Returned Data Format**: JSON

**Description:** Retrieves an object of all cities in the database for the given state.

Form Parameters
- `state`: name of the state in which the cities are located

**Example Request:** `/cities`

**Example Response:**
```JSON
{"cities":
  [
    {"name":"Angra dos Reis"},
    {"name":"Aperibé"},
    {"name":"Araruama"},
    {"name":"Areal"},
    {"name":"Armação dos Búzios"},
    {"name":"Arraial do Cabo"},
    {"name":"Cachoeiras de Macacu"},
    {"name":"Cambuci"},
    {"name":"Campos dos Goytacazes"},
    {"name":"Cantagalo"},
    {"name":"Carapebus"},
    {"name":"Cardoso Moreira"}
  ]
}
```

**Error Handling:**
- Possible 400 (invalid request)
  - Required parameter is missing: `Missing state`
- Possible 500 (internal server error)
  - Response error message sent in plain text

---

## Countries Endpoint

**Request Format:** `/countries`

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Retrieves an object with the name of all countries in the database.

**Example Request:** `/countries`

**Example Response:**
```JSON
{"countries":
  [
    {"name":"Albania"},
    {"name":"Algeria"},
    {"name":"Andorra"},
    {"name":"Argentina"},
    {"name":"Armenia"},
    {"name":"Aruba"},
    {"name":"Australia"},
    {"name":"Austria"},
    {"name":"Azerbaijan"},
    {"name":"Bahrain"},
    {"name":"Barbados"},
    {"name":"Belarus"},
    {"name":"Belgium"},
    {"name":"Belize"},
    {"name":"Bolivia"},
    {"name":"Bosnia and Herzegovina"},
    {"name":"Botswana"},
    {"name":"Brazil"},
    {"name":"Bulgaria"},
    {"name":"CURAÇAO"},
    {"name":"El Salvador"},
    {"name":"Estonia"},
    {"name":"Eswatini"},
    {"name":"Ethiopia"},
    {"name":"Fiji"},
    {"name":"Finland"},
    {"name":"France"},
    {"name":"Georgia"},
    {"name":"Germany"},
    {"name":"Ghana"},
    {"name":"Greece"},
    {"name":"Guam"},
    {"name":"Guatemala"},
    {"name":"Haiti"},
    {"name":"Honduras"},
    {"name":"Hong Kong"},
    {"name":"Hungary"},
    {"name":"Iceland"},
    {"name":"India"},
    {"name":"Indonesia"},
    {"name":"Iran"},
    {"name":"Iraq"},
    {"name":"Ireland"},
    {"name":"Israel"},
    {"name":"Italy"},
    {"name":"Japan"},
    {"name":"Jordan"},
    {"name":"Kazakhstan"},
    {"name":"Kenya"},
    {"name":"Kyrgyzstan"},
    {"name":"Laos"},
    {"name":"Latvia"},
    {"name":"Mexico"},
    {"name":"Monaco"},
    {"name":"Mongolia"},
    {"name":"United Kingdom"},
    {"name":"Uruguay"},
    {"name":"Uzbekistan"},
    {"name":"Venezuela"},
    {"name":"Vietnam"},
    {"name":"Virgin Islands (US)"},
    {"name":"West Bank and Gaza"},
    {"name":"Yemen"},
    {"name":"Zambia"},
    {"name":"Zimbabwe"}
  ]
}
```

**Error Handling:**
- Possible 500 (internal server error)
  - Response error message sent in plain text

---  

## Country Endpoint

**Request Format:** `/country`

**Request Type:** POST

**Returned Data Format**: JSON

**Description:** Returns the country details for the given country.

Form Parameters
- `form_addr`: the complete formatted address for the business with which to return results

**Example Request:** `/country/?name=USA`

**Example Response:**
```JSON
{
  "country": {
    "countryID": 122,
    "rank": 20,
    "name": "USA",
    "lgbtqSafetyIndex": 276,
    "safetyScore": "B+",
    "notes": "Some states don't offer protections against discrimination or allow for a change of gender. Other states prohibit “advocacy of homosexuality\" in schools.",
    "legalizedMarriage": "Legal",
    "workerProtections": "Protection for Sexual Orientation & Gender Identity",
    "protectionsAgainstDiscrimination": "Limited Protections",
    "criminalizationOfViolence": "Hate Crimes",
    "adoptionRecognition": "Joint & Second-Parent Adoption",
    "goodPlaceToLive": "76-100%",
    "transgenderLaws": "Legal to change gender but it requires sex reassignment surgery",
    "illegalSameSexRelationship": null,
    "propagandaMoralityLaws": "Laws prevent the discussion of Pro-LGBTQ+ issues"
  }
}

```

**Schema**
```Javascript
countryID: number                                  // Unique ID that identifies a country
rank: number                                       // The country's overall rank based on the metrics below, lower values are more favorable
name: string                                       // Name of the country  
lgbtqSafetyIndex: number                           // The country's safety score (numerical value)
safetyScore: string                                // The country's safety score (letter grade A-F)
notes: string                                      // Additional information (ie. Null)
legalizedMarriage: string                          // Country's recognition of legal same sex marriage (ie. Legal, Civil Union or Partnership, NO LGBTQ+ PROTECTION)
workerProtections: string                          // Country's recognition of worker's protection (ie. Protection for Sexual Orientation Only, Limited Protections)
protectionsAgainstDiscrimination: string           // Country's laws against discriminization (ie. Constitutional Protections, Broad Protections)
criminalizationOfViolence: string                  // Types of violence the country criminalizes (ie. Hate Crimes, Incitement)
adoptionRecognition: string                        // Types of adoption recognition for each country (ie. Joint & Second-Parent Adoption, Second-Parent Adoption Only")
goodPlaceToLive: string                            // Percentage value for overall quality of life (ie. 76-100%, 51-75%, 26-50%, 0-25%)
transgenderLaws: string                            // Country's recognition of transgender rights (ie. Legal to change gender without sex reassignment surgery, Legal to change gender but it requires sex reassignment surgery)
illegalSameSexRelationship: string                 // Whether the country punishes same sex relationships or not (ie. Null, or Punishments range from jail time to the death penalty)
propagandaMoralityLaws: string                     // Whether the country has laws against LGBTQ+ content or having morality laws (ie. Null, or Laws prevent the discussion of Pro-LGBTQ+ issues)
```

**Error Handling:**
- Possible 400 (invalid request)
  - Required parameter is missing: `Missing form_addr`
- Possible 500 (internal server error)
  - Response error message sent in plain text

---

## Reviews Endpoint

**Request Format:** `/reviews`

**Request Type:** POST

**Returned Data Format**: JSON

**Description:** Endpoint retrieving Travelo-Hey specific reviews for the given place_id.

Form Parameters
- `place_id`: a textual identifier that uniquely identifies a business

**Example Request:** `/reviews`

**Example Response:**
```JSON
{"th_reviews":
  [
    {"reviewsID":1,"userID":1,"placeID":"ChIJu9LYj-QUkFQRxb9K4D7e9bI","createdAt":"2021 Mar 03 05:12:41.211 PDT","inclusiveLanguages":1,"neutralRestrooms":1,"queerBusinessPromotion":1,"accessibility":0,"queerSignage":1,"safety":3,"recommendedBusiness":0,"review":"This is my first time trying this restaurant and I loved it! The restaurant had a very cool theme and great service. I felt safe and respected."},
    {"reviewsID":3,"userID":1,"placeID":"ChIJu9LYj-QUkFQRxb9K4D7e9bI","createdAt":"2022 Mar 03 05:12:41.211 PDT","inclusiveLanguages":1,"neutralRestrooms":0,"queerBusinessPromotion":1,"accessibility":1,"queerSignage":1,"safety":5,"recommendedBusiness":1,"review":"The atmosphere of this restaurant is very nice! an they offer gender neutral restrooms."},
    {"reviewsID":6,"userID":2,"placeID":"ChIJu9LYj-QUkFQRxb9K4D7e9bI","createdAt":"2022 Mar 04 05:12:42.211 PDT","inclusiveLanguages":1,"neutralRestrooms":0,"queerBusinessPromotion":1,"accessibility":1,"queerSignage":1,"safety":5,"recommendedBusiness":1,"review":"Excellent dining experience!! Amazing views, delicious cuisine, busy restaurant. Queer friendly!"},
    {"reviewsID":9,"userID":10,"placeID":"ChIJu9LYj-QUkFQRxb9K4D7e9bI","createdAt":"1652670889643","inclusiveLanguages":1,"neutralRestrooms":1,"queerBusinessPromotion":1,"accessibility":0,"queerSignage":1,"safety":5,"recommendedBusiness":0,"review":"This is my first time trying this restaurant and I loved it! The restaurant had a very cool theme and great service. I felt safe and respected."},
    {"reviewsID":10,"userID":10,"placeID":"ChIJu9LYj-QUkFQRxb9K4D7e9bI","createdAt":"Mon, 16 May 2022 03:16:49 GMT","inclusiveLanguages":1,"neutralRestrooms":1,"queerBusinessPromotion":1,"accessibility":0,"queerSignage":1,"safety":5,"recommendedBusiness":0,"review":"This is my first time trying this restaurant and I loved it! The restaurant had a very cool theme and great service. I felt safe and respected."}
  ]
}
```

**Error Handling:**
- Possible 400 (invalid request)
  - Required parameter is missing: `Missing place_id.`
- Possible 500 (internal server error)
  - Response error message sent in plain text

---

## Reviews/New Endpoint

**Request Format:** `/reviews/new`

**Request Type:** POST

**Returned Data Format**: JSON

**Description:** Given valid form parameters, will enter the review into the database and return
the review if successful.

Form Parameters
- `userID`: ID of user posting review
- `placeID`: Google Places ID for the business to post a review
- `inclusiveLanguages`: user's response or empty if not given
- `neutralRestrooms`: user's response or empty if not given
- `queerBusinessPromotion`: user's response or empty if not given
- `accessibility`: user's response or empty if not given
- `queerSignage`: user's response or empty if not given
- `safety`: user's response or empty if not given
- `recommendedBusiness`: user's response or empty if not given
- `review`: user's response or empty if not given

**Example Request:** `/reviews/new`

**Example Response:**
```JSON
{
  "review": {
    "reviewsID": 1,
    "userID": 1,
    "placeID": "ChIJu9LYj-QUkFQRxb9K4D7e9bI",
    "createdAt": "2021 Mar 03 05:12:41.211 PDT",
    "inclusiveLanguages": 1,
    "neutralRestrooms": 1,
    "queerBusinessPromotion": 1,
    "accessibility": 0,
    "queerSignage": 1,
    "safety": 3,
    "recommendedBusiness": 0,
    "review": "This is my first time trying this restaurant and I loved it! The restaurant had a very cool theme and great service. I felt safe and respected."
  }
}
```

**Schema**
```Javascript
reviewsID: number                     // Unique ID that identifies a review
userID: number                        // Unique ID that identifies the user that wrote the review
placeID: string                       // A textual identifier that uniquely identifies a business
createdAt: string                     // Time stamp of when the reviews was written to the database
safety: number                        // The user's overall safety rating for this place. This is a whole number, ranging from 1 to 5.
review: string                        // The user's review

// the following responses take [yes/no/unsure] and should evaluate to [1/0/null] respectively
inclusiveLanguages: number            // Does this business use gender inclusive language?
neutralRestrooms: number              // Does this business offer gender neutral restrooms?
queerBusinessPromotion: number        // Does this business promote or associate with other queer businesses or events?
accessibility: number                 // Does this business make accessibility accommodations?
queerSignage: number                  // Does this business have welcoming queer signage?
recommendedBusiness: number           // Would you recommend this business to a queer friend?
```

**Error Handling:**
- Possible 400 (invalid request)
  - Required parameter is missing: `Missing userID or place_id.`
- Possible 500 (internal server error)
  - Response error message sent in plain text

---

## Search Endpoint

**Request Format:** `/search`

**Request Type:** POST

**Returned Data Format**: JSON

**Description:** Returns a call to Google Places API that retrieve local businesses relative to the provided
activity for the provided city.

Form Parameters
- `activity`: business activity type
- `city`: city where the business is located

**Example Request:** `/search`

**Example Response:**
```JSON
{
  "results" : [
    {
      "business_status" : "OPERATIONAL",
      "formatted_address" : "Seattle, WA 98164, United States",
      "geometry" : {
        "location" : {
          "lat" : 47.6063725,
          "lng" : -122.3318296
        },
        "viewport" : {
          "northeast" : {
            "lat" : 47.60767527989272,
            "lng" : -122.3305338701073
          },
          "southwest" : {
            "lat" : 47.60497562010728,
            "lng" : -122.3332335298927
          }
        }
      },
      "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
      "icon_background_color" : "#FF9E67",
      "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
      "name" : "Sally's restaurant",
      "place_id" : "ChIJrbsiOR5rkFQR-8FFgX-y9W4",
      "plus_code" : {
        "compound_code" : "JM49+F5 Seattle, Washington",
        "global_code" : "84VVJM49+F5"
      },
      "rating" : 4,
      "reference" : "ChIJrbsiOR5rkFQR-8FFgX-y9W4",
      "types" : [ "restaurant", "point_of_interest", "food", "establishment" ],
      "user_ratings_total" : 4
    }
  ]
}
```

**Schema**
```Javascript
business_status: string                // Indicates the operational status of the place, if it is a business. If no data exists, business_status is not returned. (ie. OPERATIONAL)
formatted_address: string              // A string containing the human-readable address of this place.
geometry: object                       // Contains the location and viewport for the location. (ie. longitude, latitude)
name: string                           // Contains the human-readable name for the returned result. For establishment results, this is usually the canonicalized business name.
place_id: string                       // A textual identifier that uniquely identifies a place
rating: number                         // Contains the place's rating, from 1.0 to 5.0, based on aggregated user reviews
types: array                           // Contains an array of feature types describing the given result (ie. restaurant, club, hotel)
user_rating_total: number              // The total number of reviews, with or without text, for this place
```

**Error Handling:**
- Possible 400 (invalid request)
  - Required parameter is missing: `Missing activity and/or city`
- Possible 500 (internal server error)
  - Response error message sent in plain text

---

## States Endpoint

**Request Format:** `/states`

**Request Type:** POST

**Returned Data Format**: JSON

**Description:** Retrieves an object of all states in the database for the given country.

Form Parameters
- `country`: name of the country in which the states are located

**Example Request:** `/states`

**Example Response:**
```JSON
{"states":
  [
    {"name":"Acre"},
    {"name":"Alagoas"},
    {"name":"Amapá"},
    {"name":"Amazonas"},
    {"name":"Bahia"},
    {"name":"Ceará"},
    {"name":"São Paulo"},
    {"name":"Tocantins"}
  ]
}
```

**Error Handling:**
- Possible 400 (invalid request)
  - Required parameter is missing: `Missing country`
- Possible 500 (internal server error)
  - Response error message sent in plain te
