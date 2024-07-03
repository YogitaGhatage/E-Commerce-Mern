import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to GhatageShop',
    description: 'We sell the best products for you',
    keywords: 'electronics, buy electronics, best electronics',
};

export default Meta
