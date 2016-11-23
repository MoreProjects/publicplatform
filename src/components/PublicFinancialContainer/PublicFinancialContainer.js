import React from 'react';
import './PublicFinancialContainer.less';

import PublicCommonHeader from '../PublicCommonHeader';
import PublicCommonSidebar from '../PublicCommonSidebar';
import PublicFinancialContent from '../PublicFinancialContent';

const PublicFinancialContainer = React.createClass({
    /**

     *
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <PublicCommonHeader />
                <PublicCommonSidebar />
                <PublicFinancialContent />
            </div>
        );
    }
});

export default PublicFinancialContainer;