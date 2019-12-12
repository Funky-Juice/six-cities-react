import {Fragment} from 'react';

class ReviewsForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLocked: true,
      reviewText: ``,
      rating: 0
    };

    this._handleTextChange = this._handleTextChange.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);

    this.ratingInputs = [
      {id: 5, value: `perfect`},
      {id: 4, value: `good`},
      {id: 3, value: `not bad`},
      {id: 2, value: `badly`},
      {id: 1, value: `terribly`}
    ];
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  _handleTextChange(evt) {
    this.setState({reviewText: evt.target.value});
  }

  _handleRatingChange(evt) {
    this.setState({rating: evt.target.value});
  }

  _renderForm() {
    return <>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>

        <div className="reviews__rating-form form__rating">
          {this.ratingInputs.map((it) =>
            <Fragment key={it.id}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={it.id}
                id={`${it.id}-stars`}
                type="radio"
                onChange={this._handleRatingChange}
              ></input>
              <label
                htmlFor={`${it.id}-stars`}
                className="reviews__rating-label form__rating-label"
                title={it.value}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          )}
        </div>

        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this._handleTextChange}
        ></textarea>

        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>

          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={this.state.isLocked}
          >Submit
          </button>
        </div>
      </form>
    </>;
  }

  render() {
    return this._renderForm();
  }
}

export default ReviewsForm;