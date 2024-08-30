import { __ } from '@wordpress/i18n';
import { IoPeopleSharp,IoSparklesSharp,IoNewspaperSharp } from "react-icons/io5";

function Sidebar() {
    return (
        <div className="th-sidebar">
        <div className="sidebar-section">
            <div className="section">
                <div className="section-heading">
                <IoSparklesSharp></IoSparklesSharp>
                
                <h3>{__('Leave us a review', 'vayu-blocks')}</h3>
                </div>
                <p>{__('Show some love for Vayu Blocks by rating us and helping us grow more and do improvements.', 'vayu-blocks')}</p>
                <a href="https://wordpress.org/support/plugin/vayu-blocks/reviews/#new-post" target="_blank" className="sidebar-link">
                {__('Submit review', 'vayu-blocks')} 
                </a>
            </div>
        <hr />
        <div className="section">
            <div className="section-heading">

            <IoNewspaperSharp></IoNewspaperSharp>
            <h3>{__('Documentation', 'vayu-blocks')} </h3>
            </div>

            <p>{__('Go through the easy documentation to get familiar with Vayu Blocks and its Features.', 'vayu-blocks')}</p>
            <a href="https://themehunk.com/docs/vayu-blocks/" target="_blank" className="sidebar-link">
            {__('View Doc', 'vayu-blocks')} 
            </a>
        </div>
        <hr />
            <div className="section">
                <div className="section-heading">

                <IoPeopleSharp></IoPeopleSharp>

                <h3>{__('Support', 'vayu-blocks')}</h3>
                </div>
                <p>{__('Have a question, we are happy to help! Get in touch with our support team.', 'vayu-blocks')}</p>
                <a href="https://themehunk.com/contact-us/" target="_blank" className="sidebar-link">
                {__('Submit a Ticket', 'vayu-blocks')} 
                </a>
            </div>
        </div>
        </div>
    );
}

export default Sidebar;
