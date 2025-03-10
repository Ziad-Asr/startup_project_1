import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const blogPosts = [
  {
    id: 'mastering-jump-shot',
    title: 'Mastering the Perfect Jump Shot',
    category: 'Tips & Tricks',
    readTime: '5 min read',
    image: 'photo-1546519638-68e109498ffc',
    author: 'Coach Thompson',
    date: 'March 15, 2024',
    content: `
      <div class="prose prose-lg prose-invert">
        <p>The jump shot is one of the most fundamental skills in basketball, yet it's one that many players struggle to perfect. In this comprehensive guide, we'll break down the key elements of a successful jump shot and provide you with professional tips to enhance your shooting technique.</p>
        
        <h2>The Foundation: Proper Form</h2>
        <p>Before you even think about jumping, your shooting form needs to be solid. Start with your feet shoulder-width apart, knees slightly bent, and the ball held at chest level. Your shooting hand should be directly behind the ball, with your guide hand on the side.</p>
        
        <h2>The Release</h2>
        <p>As you rise for your shot, focus on a smooth, upward motion. Release the ball at the peak of your jump, ensuring your follow-through resembles a swan neck - your shooting hand should look like it's reaching into a cookie jar.</p>
        
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Releasing the ball on the way up or down instead of at the peak</li>
          <li>Poor balance due to improper foot placement</li>
          <li>Inconsistent release point</li>
          <li>Failing to follow through</li>
        </ul>
        
        <h2>Practice Drills</h2>
        <p>Incorporate these drills into your daily practice routine:</p>
        <ul>
          <li>Form shooting from close range (100 shots)</li>
          <li>Catch and shoot from multiple spots (50 shots per spot)</li>
          <li>Jump shot after dribble (50 shots)</li>
        </ul>
      </div>
    `
  },
  {
    id: 'pro-series-launch',
    title: 'New Pro Series Launch Event',
    category: 'News',
    readTime: '3 min read',
    image: 'photo-1544919982-b61976f0ba43',
    author: 'Sarah Chen',
    date: 'March 12, 2024',
    content: `
      <div class="prose prose-lg prose-invert">
        <p>EliteHoops is proud to announce the launch of our new Professional Series basketballs, featuring advanced grip technology and premium materials designed for elite performance.</p>
        
        <h2>Revolutionary Design</h2>
        <p>Our new Pro Series incorporates cutting-edge materials and manufacturing techniques to deliver unparalleled performance on the court. The advanced micro-texture surface provides exceptional grip in all conditions, while the perfectly balanced core ensures consistent flight and bounce.</p>
        
        <h2>Professional Endorsements</h2>
        <p>Leading professional players have already praised the new Pro Series for its superior feel and performance. "This ball feels different - in a good way. The grip is incredible, and the consistency of the bounce gives me complete confidence in my game," says professional player Marcus Williams.</p>
      </div>
    `
  },
  {
    id: 'basketball-care-guide',
    title: 'Basketball Care Guide',
    category: 'Maintenance',
    readTime: '4 min read',
    image: 'photo-1587280501635-68a0e82cd5ff',
    author: 'Mike Rodriguez',
    date: 'March 10, 2024',
    content: `
      <div class="prose prose-lg prose-invert">
        <p>Proper basketball maintenance is crucial for extending the life of your ball and maintaining its performance. Learn the essential care tips from our experts.</p>
        
        <h2>Daily Care Routine</h2>
        <p>After each use, wipe down your basketball with a slightly damp cloth to remove dirt and sweat. Store in a cool, dry place away from direct sunlight.</p>
        
        <h2>Pressure Maintenance</h2>
        <p>Check the ball's pressure weekly. The recommended pressure is 7.5 to 8.5 PSI for indoor basketballs and 8.0 to 9.0 PSI for outdoor balls.</p>
        
        <h2>Surface Cleaning</h2>
        <p>For deeper cleaning, use a mild soap solution and a soft brush to gently clean the surface. Avoid harsh chemicals that can damage the ball's material.</p>
      </div>
    `
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <PageTransition>
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white mb-8">Post Not Found</h1>
            <Link to="/blog" className="text-[#CC73F8] hover:text-[#D68DF9]">← Back to Blog</Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="text-[#CC73F8] hover:text-[#D68DF9] mb-8 inline-block">
              ← Back to Blog
            </Link>
            
            <article>
              <img
                src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=1920&q=80`}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg mb-8"
              />
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-[#CC73F8]">{post.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{post.readTime}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{post.date}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              <p className="text-gray-400 mb-8">By {post.author}</p>
              
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}