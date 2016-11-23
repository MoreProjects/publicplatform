import React from 'react';
import './PublicBusinessContainer.less';

import PublicCommonHeader from '../PublicCommonHeader';
import PublicCommonSidebar from '../PublicCommonSidebar';
import PublicBusinessContent from '../PublicBusinessContent';

const PublicBusinessContainer = React.createClass({
    /**

     *
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <PublicCommonHeader />
                <PublicCommonSidebar />
                <PublicBusinessContent />
            </div>
        );
    }
});

export default PublicBusinessContainer;