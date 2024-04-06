interface Prize {
  description: string;
  image: string;
}

interface Rewards {
  title: string;
  descriptions: string[];
  images: string[];
  variant?: 'first' | 'second' | 'third';
}

const newReward = (
  title: string,
  descriptions: string[],
  images: string[],
  variant?: 'first' | 'second' | 'third'
) => ({
  title,
  descriptions,
  images,
  variant,
});

export const TOP_PRIZES = [
  newReward('1st Overall', ['4x HHKB Keyboards', 'CoCalc Credits'], ['hhkb.png'], 'first'),
  newReward('2nd Overall', ['4x Polulu Robots', 'CoCalc Credits'], ['polulu.png'], 'second'),
  newReward('3rd Overall', ['4x RC Drones', 'CoCalc Credits'], ['drone.png'], 'third'),
];

export const PRIZES = [
  newReward('Best Solo Hack', ['Wireless Earbuds', '1Password Swag Bag'], ['earbuds.png']),
  newReward('Best Duo Hack', ['2x $50 Fan-Fan Gift Cards'], ['fanfan.png']),
  newReward('Best Beginner Hack', ['4x Squishmallows', 'Desmos Swag Bag'], ['squishmallow.png']),
  newReward('Track: Lost at Sea', ['4x Amazon Echo Pop'], ['echopop.png']),
  newReward('Track: X Marks the Spot', ['4x Anker Speaker'], ['anker.png']),
  newReward('Track: All Hands on Deck', ['4x Wireless Charging Desk Lamp'], ['lamp.jpg']),
  newReward("Track: Captain's Classroom", ['4x Portable Power Bank'], ['powerbank.jpg']),
];
