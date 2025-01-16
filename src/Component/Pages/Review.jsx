

import "../CSS/Review.css";

const Review = (prop) => {
  const { detail } = prop;
  const formattedDate = new Date(detail.date).toLocaleDateString(); 

  return (
    <div className="review-container">
      <div className="review-card">
        <h3 className="reviewer-name">{detail.reviewerName}</h3>
        <p className="reviewer-email">{detail.reviewerEmail}</p>
        <p className="review-comment">{detail.comment}</p>
        <div className="review-footer">
          <div className="review-rating">
            {"⭐".repeat(detail.rating)}
          </div>
          <div className="review-date">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
