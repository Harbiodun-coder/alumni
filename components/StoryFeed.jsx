// components/StoryFeed.js

import Image from 'next/image'; // Import Image for optimized image loading
import { FaPlus } from 'react-icons/fa'; // Import specific icons as needed

const StoryFeed = () => {
  return (
    <div className="col-md-8 col-lg-6 vstack gap-4">

      {/* Story START */}
      <div className="flex gap-2 mb-n3">
        <div className="relative">
          <div className="card border border-2 border-dashed h-150px px-4 px-sm-5 shadow-none flex items-center justify-center text-center">
            <div>
              <a className="stretched-link btn btn-light rounded-full icon-md" href="#!">
                <FaPlus />
              </a>
              <h6 className="mt-2 mb-0 text-sm">Post a Story</h6>
            </div>
          </div>
        </div>

        {/* Stories */}
        <div id="stories" className="storiesWrapper stories-square stories user-icon carousel scroll-enable"></div>
      </div>
      {/* Story END */}

      {/* Share feed START */}
      <div className="card card-body">
        <div className="flex mb-3">
          {/* Avatar */}
          <div className="avatar avatar-xs me-2">
            <a href="#">
              <Image className="avatar-img rounded-full" src="/assets/images/avatar/03.jpg" alt="" width={40} height={40} />
            </a>
          </div>
          {/* Post input */}
          <form className="w-full">
            <textarea className="form-control pe-4 border-0" rows="2" placeholder="Share your thoughts..."></textarea>
          </form>
        </div>
        {/* Share feed toolbar START */}
        <ul className="nav nav-pills nav-stack text-sm font-normal">
          <li className="nav-item">
            <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto">
              <i className="bi bi-image-fill text-success pe-2"></i> Photo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionVideo">
              <i className="bi bi-camera-reels-fill text-info pe-2"></i> Video
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link bg-light py-1 px-2 mb-0" data-bs-toggle="modal" data-bs-target="#modalCreateEvents">
              <i className="bi bi-calendar2-event-fill text-danger pe-2"></i> Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#modalCreateFeed">
              <i className="bi bi-emoji-smile-fill text-warning pe-2"></i> Feeling / Activity
            </a>
          </li>
          <li className="nav-item dropdown ms-lg-auto">
            <a className="nav-link bg-light py-1 px-2 mb-0" href="#" id="feedActionShare" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots"></i>
            </a>
            {/* Dropdown menu */}
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
              <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2"></i> Create a poll</a></li>
              <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i> Ask a question </a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2"></i> Help</a></li>
            </ul>
          </li>
        </ul>
        {/* Share feed toolbar END */}
      </div>
      {/* Share feed END */}

      {/* Card feed item START */}
      <div className="card">
        {/* Card header START */}
        <div className="card-header border-0 pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Avatar */}
              <div className="avatar avatar-story me-2">
                <a href="#">
                  <Image className="avatar-img rounded-full" src="/assets/images/avatar/04.jpg" alt="" width={40} height={40} />
                </a>
              </div>
              {/* Info */}
              <div>
                <div className="nav nav-divider">
                  <h6 className="nav-item card-title mb-0">
                    <a href="#">Bonu Samuel</a>
                  </h6>
                  <span className="nav-item text-sm">2hr</span>
                </div>
                <p className="mb-0 text-sm">Web Developer at LASU</p>
              </div>
            </div>
            {/* Card feed action dropdown START */}
            <div className="dropdown">
              <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-three-dots"></i>
              </a>
              {/* Card feed action dropdown menu */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2"></i> Save post</a></li>
                <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2"></i> Unfollow Bonu Samuel</a></li>
                <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2"></i> Hide post</a></li>
                <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2"></i> Block</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2"></i> Report post</a></li>
              </ul>
            </div>
            {/* Card feed action dropdown END */}
          </div>
        </div>
        {/* Card header END */}
        {/* Card body START */}
        <div className="card-body">
          <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
          {/* Card img */}
          <Image className="card-img" src="/assets/images/post/3by2/01.jpg" alt="Post" width={600} height={400} />
          {/* Feed react START */}
          <ul className="nav nav-stack py-3 text-sm">
            <li className="nav-item">
              <a className="nav-link active" href="#!" data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true" data-bs-custom-class="tooltip-text-start" data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford">
                <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!"><i className="bi bi-chat-fill pe-1"></i>Comments (12)</a>
            </li>
            {/* Card share action START */}
            <li className="nav-item dropdown ms-sm-auto">
              <a className="nav-link mb-0" href="#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
              </a>
              {/* Card share action dropdown menu */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
                <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2"></i> Send via Direct Message</a></li>
                <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2"></i> Add to collection</a></li>
              </ul>
            </li>
            {/* Card share action END */}
          </ul>
          {/* Feed react END */}
          {/* Comment Input START */}
          <form className="mt-4">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Add a comment..." />
              <button className="btn btn-primary" type="submit">Post</button>
            </div>
          </form>
          {/* Comment Input END */}
          {/* Comment List START */}
          <div className="comment-list mt-3">
            <div className="comment">
              <div className="d-flex align-items-start mb-3">
                <div className="avatar avatar-xs me-2">
                  <Image className="avatar-img rounded-full" src="/assets/images/avatar/02.jpg" alt="" width={30} height={30} />
                </div>
                <div className="comment-body">
                  <p><strong>Jane Doe</strong>: This is fantastic news! Congratulations!</p>
                  <small className="text-muted">1hr ago</small>
                </div>
              </div>
            </div>
            {/* More comments can be added here */}
          </div>
          {/* Comment List END */}
        </div>
        {/* Card body END */}
      </div>
      {/* Card feed item END */}
    </div>
  );
};

export default StoryFeed;
