import React from 'react';
import './PublicContent.less';

const PublicContent = React.createClass({
    /**

     * 
     * @returns
     */
    render () {
        return (
            <div id="content" className="p-content content">
                <div className="panel panel-success" data-sortable-id="form-wysiwyg-2">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="widget widget-stats bg-pink">
                                <div className="stats-icon"><i className="material-icons">desktop_windows</i></div>
                                <div className="stats-info">
                                    <h4>消息</h4>
                                    <p>3,291,922</p>	
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="widget widget-stats bg-orange">
                                <div className="stats-icon"><i className="material-icons">phonelink_erase</i></div>
                                <div className="stats-info">
                                    <h4>新增会员数</h4>
                                    <p>20.44%</p>	
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="widget widget-stats bg-grey-600">
                                <div className="stats-icon"><i className="material-icons">people_outline</i></div>
                                <div className="stats-info">
                                    <h4>会员总数</h4>
                                    <p>1,291,922</p>	
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-success" data-sortable-id="form-wysiwyg-2">
                    <div className="slimScrollDiv" >
                        <div className="" data-scrollbar="true" data-init="true" >
                            <ul className="media-list media-list-with-divider media-messaging">
                                <li></li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">系统消息</h5>
                                        <p>您的密码即将过期！</p>
                                    </div>
                                </li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">管理员消息</h5>
                                        <p>当前会员数已经超过1,000,000</p>
                                    </div>
                                </li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">用户消息</h5>
                                        <p>您已获得VIP权限！</p>
                                    </div>
                                </li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">管理员消息</h5>
                                        <p>收到5个用户反馈！</p>
                                    </div>
                                </li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">系统消息</h5>
                                        <p>账户余额不足</p>
                                    </div>
                                </li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">管理员消息</h5>
                                        <p>账户余额已经超过1,000,000,000</p>
                                    </div>
                                </li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">系统消息</h5>
                                        <p>您的账户存在风险，请完善个人资料</p>
                                    </div>
                                </li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">系统消息</h5>
                                        <p>无</p>
                                    </div>
                                </li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">系统消息</h5>
                                        <p>当前访问人次数已经超过5亿</p>
                                    </div>
                                </li>
                                <li className="media media-sm">
                                    <div className="media-body">
                                        <h5 className="media-heading">管理员消息</h5>
                                        <p>系统修复</p>
                                    </div>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default PublicContent;