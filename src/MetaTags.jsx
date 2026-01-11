// SEO library to manage document head
import { Helmet } from 'react-helmet-async';

// Assets
import LittleLemonLogo from '../src/assets/Logo.png'

const MetaTags = () => {
  return (
    <Helmet>
      <title>Little Lemon Restaurant - Traditional Mediterranean with Modern Twist</title>
      <meta name="description" content="Little Lemon - Family-owned Mediterranean restaurant serving traditional recipes with a modern twist. Fresh ingredients, authentic flavors, contemporary presentation." />
      <meta name="keywords" content="Mediterranean restaurant, traditional recipes, modern Mediterranean, family restaurant, Little Lemon" />
      
      <meta property="og:title" content="Little Lemon Restaurant - Traditional Mediterranean with Modern Twist" />
      <meta property="og:description" content="Experience authentic Mediterranean flavors reimagined for today. Family recipes with contemporary flair." />
      <meta property="og:image" content={LittleLemonLogo} />
      <meta property="og:type" content="restaurant" />
    </Helmet>
  );
};

export default MetaTags;