import React from 'react';
import './PublicContainer.less';

import PublicCommonHeader from '../PublicCommonHeader';
import PublicCommonSidebar from '../PublicCommonSidebar';
import PublicContent from '../PublicContent';

const PublicContainer = React.createClass({
    /**

     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <PublicCommonHeader />
                <PublicCommonSidebar />
                <PublicContent />
            </div>
        );
    }
});

export default PublicContainer;