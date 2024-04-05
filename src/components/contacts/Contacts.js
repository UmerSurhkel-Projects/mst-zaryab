import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Contact = (props) => {
    const highlightMatches = (text, query) => {
        // Ensure query is defined before attempting to replace
        if (query) {
            // Escape special characters in the query to prevent regex errors
            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // Create a regular expression to match the query globally and case-insensitively
            const regex = new RegExp(`(${escapedQuery})`, 'gi');
            // Replace the matching words with a highlighted version
            return text.replace(regex, '<span class="highlight">$1</span>');
        } else {
            // Return the original text if query is not defined
            return text;
        }
    };

    return (
        <div className="sidebar-body" id="chatsidebar">
            <ul className="user-list">
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-away">
                            {props.image ? (
                                <img src={props.image} className="rounded-circle" alt="image" />
                            ) : (
                                <Skeleton width={40} height={40} />
                            )}
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5 dangerouslySetInnerHTML={{ __html: props.name ? highlightMatches(props.name, props.searchQuery) : '<span class="highlight"><Skeleton /></span>' }}></h5>
                            {/* Render the title with highlighted matching words */}
                            <p dangerouslySetInnerHTML={{ __html: props.title ? highlightMatches(props.title, props.searchQuery) : '<span class="highlight"><Skeleton /></span>' }}></p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">{props.time}</small>
                            <div className="new-message-count">{props.notification}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Contact;
