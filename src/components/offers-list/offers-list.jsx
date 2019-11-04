import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offer: {}
    };
  }

  render() {
    return this._renderOffers(this.props.offers);
  }

  _renderOffers(offers) {
    return <section className="cities__places places">
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) =>
          <OfferCard
            key={`offer-${i}-${offer.price}`}
            offer={offer}
            showOffer={this._setOffer.bind(this, offer)}
            getOfferDetails={this._showOfferDetails}
          />
        )}
      </div>
    </section>;
  }

  _setOffer(offer) {
    this.setState(() => {
      return {offer};
    });
  }

  _showOfferDetails(id) {
    location.pathname = `offer-${id}`;
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Room`, `House`, `Hotel`]).isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    description: PropTypes.string,
    host: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
    }).isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired
  })).isRequired
};

export default OffersList;
