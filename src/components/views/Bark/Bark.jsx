import './bark.css';

const Bark = ({ bark }) => {
  return (
    <>
      <article className="bark" id={'bark-' + bark._id}>
        <img src={bark._creator.avatar} className="bark-avatar" />
        <div className="bark-body">
          <div className="bark-user">
            <a href="#">
              <span className="bark-name" data-ignore-onclick>
                {bark._creator.name}
              </span>
            </a>
            <span className="bark-username">@{bark._creator.userName}</span>
          </div>
          <p className="bark-message">{bark.message}</p>
          {/* <If condition={bark.image != null}>
            <img className="bark-img" src={bark.image} />
          </If> */}
          <div className="bark-footer">
            <a
              className={bark.liked ? 'like-icon liked' : 'like-icon'}
              data-ignore-onclick
            >
              <i className="bi bi-heart-fill"> </i> {bark.likeCounter}
            </a>

            <a className="reply-icon" data-ignore-onclick>
              <i className="bi bi-reply-fill"> </i> {bark.replys}
            </a>
          </div>
        </div>
        <div id={'bark-detail-' + bark._id} />
      </article>
    </>
  );
};

export default Bark;
