import React from 'react'
import { Link } from 'gatsby'

import Image from './Image'
import './PostCard.css'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  date,
  ...props
}) => (
  <Link to={slug} className={`PostCard ${className}`}>
    {featuredImage && (
      <div className="PostCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="PostCard--Content">
      <div className="PostCard--Category">
        {categories && categories.map(cat => cat.category).join(', ')}
      </div>
      {title && <h3 className="PostCard--Title">{title}</h3>}

      {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
      {date && (
        <small className="PostCard--Date">
          <time
            className="SinglePost--Meta--Date"
            itemProp="dateCreated pubdate datePublished"
            dateTime={date}
          >
            {date}
          </time>
        </small>
      )}
    </div>
  </Link>
)

export default PostCard
