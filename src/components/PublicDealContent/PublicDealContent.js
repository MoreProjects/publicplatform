import React from 'react';
import './PublicDealContent.less';

const PublicDealContent = React.createClass({
    /**

     *
     * @returns
     */
    render () {
        return (
            <div id="content" className="p-dealcontent content">
                <div className="panel panel-success" data-sortable-id="form-wysiwyg-2">
                    <div className="panel-heading">
                        <h4 className="panel-title">资产交易</h4>
                    </div>
                    <div className="panel-body">
                        <div className="note note-info">
                            <h4>温馨提示:</h4>
                            <ul>
                                <li>1、为了保证您的信息能顺利通过我们的审核，请将信息的真实情况尽可能全面的发布出来！</li>
                                <li>2、根据我们的长期跟踪统计，信息完整度越高，越容易获得目标客户的关注！</li>
                                <li>3、信息完整度越高，将在我们的平台搜索结果排序靠前、获得推荐机会、以及享受增值服务试用机会！</li>
                            </ul>
                        </div>

                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="col-md-3 control-label">信息标题</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="举例：广东省某食品公司生产项目股权融资10万-2000万" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">所在地区</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">交易类别</label>
                                <div className="col-md-9">
                                    <select className="form-control">
                                        <option>线上</option>
                                        <option>线下</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">交易方式：</label>
                                <div className="col-md-9">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        拍卖
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        协议
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        竞价
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        招标
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">转让范围：</label>
                                <div className="col-md-9">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        整体
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        部分
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">资产股价</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">转让价格</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">截止时间</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">所属行业</label>
                                <div className="col-md-9">
                                    <select className="form-control">
                                        <option>高息技术产业</option>
                                        <option>制造业</option>
                                        <option>零售业</option>
                                        <option>服务业</option>
                                        <option>林业</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group has-feedback">
                                <label className="col-md-3 control-label">资产概括</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" placeholder="" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-group has-feedback">
                                <label className="col-md-3 control-label">其他备注</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" placeholder="" rows="5"></textarea>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-3 control-label">标签：</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">缩略图：</label>
                                <div className="col-md-2">
                                    <div className="row fileupload-buttonbar">
                                        <div className="col-md-7">
                                            <span className="btn btn-success fileinput-button">
                                                <i className="fa fa-plus"></i>
                                                <span>&nbsp;立即上传</span>
                                                <input type="file" name="file" ref="input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <label className="col-md-7 control-label text-left" ref="showfilename" >注：图片大小1M以内</label>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">商业计划书：</label>
                                <div className="col-md-2">
                                    <div className="row fileupload-buttonbar">
                                        <div className="col-md-7">
                                            <span className="btn btn-success fileinput-button">
                                                <i className="fa fa-plus"></i>
                                                <span>&nbsp;立即上传</span>
                                                <input type="file" name="file" ref="input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <label className="col-md-7 control-label text-left" ref="showfilename" >注：附件大小2M以内</label>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">路演PPT：</label>
                                <div className="col-md-2">
                                    <div className="row fileupload-buttonbar">
                                        <div className="col-md-7">
                                            <span className="btn btn-success fileinput-button">
                                                <i className="fa fa-plus"></i>
                                                <span>&nbsp;立即上传</span>
                                                <input type="file" name="file" ref="input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <label className="col-md-7 control-label text-left" ref="showfilename" >注：附件大小2M以内</label>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">其他附件：</label>
                                <div className="col-md-2">
                                    <div className="row fileupload-buttonbar">
                                        <div className="col-md-7">
                                            <span className="btn btn-success fileinput-button">
                                                <i className="fa fa-plus"></i>
                                                <span>&nbsp;立即上传</span>
                                                <input type="file" name="file" ref="input" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <label className="col-md-7 control-label text-left" ref="showfilename" >注：附件大小2M以内</label>
                            </div>
                            <div className="form-group">
                                &nbsp;
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">&nbsp;</label>
                                <div className="col-md-9">
                                    <button type="submit" className="btn btn-sm btn-success m-r-10">立即发布项目信息</button>
                                    <button type="submit" className="btn btn-sm btn-amber m-r-20">预 览</button>
                                    <button type="submit" className="btn btn-sm btn-link">保存暂不发布</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

export default PublicDealContent;