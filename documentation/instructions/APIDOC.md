# Travelo-Hey! API Documentation

The Travelo-Hey! API provides an interface between the front-end portion of Travelo-Hey! and the database and Google API calls.

___


## Endpoint

**Request Format:** `/`

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns five random businesses.

**Example Request:** `/`

**Example Response:**
```JSON
{
  "html_attributions": [],
  "result": {
    "item1": {
      "formatted_address": "2865 Eastlake Ave E, Seattle, WA 98102, USA",
      "formatted_phone_number": "(206) 466-6171",
      "name": "Little Water Cantina",
      "photos": [
        {
          "height": 617,
          "html_attributions": [
            "\u003ca href=\"https://maps.google.com/maps/contrib/110413365097082725645\"\u003eLittle Water Cantina\u003c/a\u003e"
          ],
          "photo_reference": "Aap_uED3jRtd1YEehkRxX3HQL0P_StShYw-XIWxbThiEgwMoVv4xHNkBzt3bD_TW0drFSvcT6SxIgl26nO2qXVmuzF8mPrhEPl0TKK8A5fPRK6s-sMQfkdq-_uQq6q0gqQTQqtOmXQV_pNl5QxvtJpqJqgpNOJWxNexuGNPIc5tAo4Quvgc4",
          "width": 1095
        }
      ],
      "place_id": "ChIJu9LYj-QUkFQRxb9K4D7e9bI",
      "rating": 4,
      "reviews": [
        {
          "author_name": "Kimberly Pham",
          "author_url": "https://www.google.com/maps/contrib/109479845758910778779/reviews",
          "language": "en",
          "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GjuC6lgfkqb46Z8huNLYs4dnyu0x05Lfco4Pw63cDM=s128-c0x00000000-cc-rp-mo-ba6",
          "rating": 5,
          "relative_time_description": "in the last week",
          "text": "Love the fact that this place has wonderful outdoor seatings with an incredible cozy family vibe. The indoor setting seems to be pretty cool and comfortable, especially by the bar. We love the food here. Everything we had is delicious and fresh. We consider this a hidden gem in the Eastlake area. No reservation is accepted but usually, plenty of tables are available. No parking garage/ only street parking.",
          "time": 1651442641
        }
      ],
      "types": [
        "night_club",
        "bar",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "user_ratings_total": 632,
      "website": "http://www.littlewatercantina.com/",
      "equality_rating": 3.1,
      "equality_ratings_total": 328
    }
  },
  "status": "OK"
}
```

**Error Handling:**
- Possible 500 (internal server error)
  - Response error message sent in plain text

---


## Endpoint

**Request Format:** `/business`

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns the Travelo-Hey! reviews and the country safety values for the business
that matches the `place_id` given.

**Example Request:** `/business/?place_id=ChIJu9LYj-QUkFQRxb9K4D7e9bI&form_addr=2865 Eastlake Ave E, Seattle, WA 98102, USA`

**Example Response:**
```JSON
{
  "reviews": [
    {
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
  ],
  "country": [
    {
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
  ]
}

```

**Error Handling:**
- Possible 400 (invalid request)
    - Required parameter is missing: `Missing ID and/or address.`
- Possible 500 (internal server error)
    - Response error message sent in plain text

---


## Endpoint

**Request Format:** `/country`

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns the country details for the given country.

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
- 400 (invalid request)
  - Required parameter is missing: `Missing name.`
  - Country does not exist: `That country couldn't be located.`
- 500 (internal server error)
  - Response error message sent in plain text

---


## Endpoint

**Request Format:** `/reviews/new`

**Request Type:** POST

**Returned Data Format**: JSON

**Description:** Given valid form parameters, will enter the review into the database and return
the review if successful.

Form Parameters
- userID: ID of user posting review
- placeID: Google Places ID for the business to post a review
- inclusiveLanguages: user's response or empty if not given
- neutralRestrooms: user's response or empty if not given
- queerBusinessPromotion: user's response or empty if not given
- accessibility: user's response or empty if not given
- queerSignage: user's response or empty if not given
- safety: user's response or empty if not given
- recommendedBusiness: user's response or empty if not given
- review: user's response or empty if not given

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

**Error Handling:**
- 400 (invalid request)
  - Required parameter is missing: `Missing parameter(s).`
- 403 (forbidden)
  - If attempting to manually access endpoint without sending POST request
  - Response error message sent in plain text: `Not Authorized`
- 500 (internal server error)
  - Response error message sent in plain text
