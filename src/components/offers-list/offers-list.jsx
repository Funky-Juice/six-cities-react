import {PureComponent} from 'react';

import {offerPropTypes} from '../../prop-types/prop-types';
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
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default OffersList;
