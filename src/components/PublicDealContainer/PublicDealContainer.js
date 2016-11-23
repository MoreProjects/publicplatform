import React from 'react';
import './PublicDealContainer.less';

import PublicCommonHeader from '../PublicCommonHeader';
import PublicCommonSidebar from '../PublicCommonSidebar';
import PublicDealContent from '../PublicDealContent';

const PublicDealContainer = React.createClass({
    /**

     *
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <PublicCommonHeader />
                <PublicCommonSidebar />
                <PublicDealContent />
            </div>
        );
    }
});

export default PublicDealContainer;