import React from 'react';
import { Controller } from "react-hook-form";
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { RadioGroup } from '@mui/material';

export function ReviewAnswers() {

}

export default function ReviewInputRating({ name, control, label }) {

  const [inclusiveLanguage, setInclusiveLanguage] = React.useState('1');
  const [genderNeutral, setGenderNeutral] = React.useState('1');
  const [queerPromotion, setQueerPromotion] = React.useState('1');
  const [accessibility, setAccessibility] = React.useState('1');
  const [signage, setSignage] = React.useState('1');
  const [safety, setSafety] = React.useState('1');
  const [queerFriend, setQueerFriend] = React.useState('1');

  const handleInclusiveLanguageChange = (event) => {
    setInclusiveLanguage(event.target.value);
  }

  const handleGenderNeutralChange = (event) => {
    setGenderNeutral(event.target.value);
  }

  const handleQueerPromotionChange = (event) => {
    setQueerPromotion(event.target.value);
  }

  const handleAccessibilityChange = (event) => {
    setAccessibility(event.target.value);
  }

  const handleSignageChange = (event) => {
    setSignage(event.target.value);
  }

  const handleSafetyChange = (event) => {
    setSafety(event.target.value);
  }

  const handleQueerFriendChange = (event) => {
    setQueerFriend(event.target.value);
  }

  return (
    /* <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        // TODO: double check that this is sufficient for a <Rating> component
        <Rating onChange={onChange} value={value} name="half-rating" defaultValue={2.5} precision={0.5} />
      )}
      /> */
    <div>
      <FormControl>
        <FormLabel id="inclusive-language">Do they use gender-inclusive language?</FormLabel>
        <RadioGroup
          aria-labelledby="inclusive-language"
          defaultValue="1"
          name="inclusive-language-group"
          onChange={handleInclusiveLanguageChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="Yes" />
          <FormControlLabel value="0" control={<Radio />} label="No" />
          <FormControlLabel value="null" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="gender-neutral-restrooms">Do they offer gender-neutral restrooms?</FormLabel>
        <RadioGroup
          aria-labelledby="gender-neutral-restrooms"
          defaultValue="1"
          name="gender-neutral-group"
          onChange={handleGenderNeutralChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="Yes" />
          <FormControlLabel value="0" control={<Radio />} label="No" />
          <FormControlLabel value="null" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="queer-promotion">Do they promote or associate with other queer businesses/events?</FormLabel>
        <RadioGroup
          aria-labelledby="queer-promotion"
          defaultValue="1"
          name="queer-promotion-group"
          onChange={handleQueerPromotionChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="Yes" />
          <FormControlLabel value="0" control={<Radio />} label="No" />
          <FormControlLabel value="null" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="accessibility">Do they offer accessibility accommodations?</FormLabel>
        <RadioGroup
          aria-labelledby="accessibility"
          defaultValue="1"
          name="accessibility-group"
          onChange={handleAccessibilityChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="Yes" />
          <FormControlLabel value="0" control={<Radio />} label="No" />
          <FormControlLabel value="null" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="signage">Do they have welcoming queer signage?</FormLabel>
        <RadioGroup
          aria-labelledby="signage"
          defaultValue="1"
          name="signage-group"
          onChange={handleSignageChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="Yes" />
          <FormControlLabel value="0" control={<Radio />} label="No" />
          <FormControlLabel value="null" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="safety">As a queer person, how safe did you feel at this business?</FormLabel>
        <RadioGroup
          aria-labelledby="safety"
          defaultValue="5"
          name="safety-group"
          onChange={handleSafetyChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="Very Unsafe" />
          <FormControlLabel value="2" control={<Radio />} label="Unsafe" />
          <FormControlLabel value="3" control={<Radio />} label="Neither or Unsure" />
          <FormControlLabel value="4" control={<Radio />} label="Safe" />
          <FormControlLabel value="5" control={<Radio />} label="Very Safe" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="queer-friend">Would you recommend the business to a queer friend?</FormLabel>
        <RadioGroup
          aria-labelledby="queer-friend"
          defaultValue="1"
          name="queer-friend-group"
          onChange={handleQueerFriendChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="Yes" />
          <FormControlLabel value="0" control={<Radio />} label="No" />
          <FormControlLabel value="null" control={<Radio />} label="Unsure" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}