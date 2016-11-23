import React from 'react';
import './PublicProjectFinanceContent.less';

const PublicProjectFinanceContent = React.createClass({
    /**

     *
     * @returns
     */
    render () {
        return (
            <div id="content" className="p-projectfinancecontent content">
                <div className="panel panel-success" data-sortable-id="form-wysiwyg-2">
                    <div className="panel-heading">
                        <h4 className="panel-title">项目融资</h4>
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
                                <label className="col-md-3 control-label">融资主体</label>
                                <div className="col-md-9">
                                    <select className="form-control">
                                        <option>北京科技公司</option>
                                        <option>深圳科技公司</option>
                                        <option>上海科技公司</option>
                                        <option>广州科技公司</option>
                                        <option>苏州科技公司</option>
                                    </select>
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
                            <div className="form-group">
                                <label className="col-md-3 control-label">去年营业额：</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="0" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">企业当前净资产：</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="0" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">融资用途：</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">融资金额：</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">总投金额：</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">意向资金：</label>
                                <div className="col-md-9">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        不限
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        个人资金
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        企业资金
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        天使投资
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        其他资金
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        资产管理
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        保险公司
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        信托公司
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        证券公司
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        基金公司
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        商业银行
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        投资公司
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        金融租赁
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        担保公司
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        典当公司
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        小额贷款
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        PE投资
                                    </label>
                                    <label className="checkbox-inline">
                                        <input type="checkbox" name="" value="" />
                                        VC投资
                                    </label>
                                </div>
                            </div>
                            <div className="form-group has-success has-feedback">
                                <label className="col-md-3 control-label">融资方式：</label>
                                <div className="col-md-9">
                                    <label className="radio-inline">
                                        <input type="radio" name="optionsRadios" value="option1" />
                                        债权融资
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optionsRadios" value="option2" />
                                        股权融资
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optionsRadios" value="option2" />
                                        整体转让
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optionsRadios" value="option2" />
                                        其他融资
                                    </label>
                                </div>
                            </div>
                            <div className="form-group has-feedback">
                                <label className="col-md-3 control-label">可提供资料：</label>
                                <div className="col-md-9">
                                    <label className="radio-inline">
                                        <input type="radio" name="optionsRadios" value="option1" />
                                        商业/项目计划书
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optionsRadios" value="option2" />
                                        公司证件
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optionsRadios" value="option2" />
                                        相关财务资料
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optionsRadios" value="option2" />
                                        其他资料
                                    </label>
                                </div>
                            </div>
                            <div className="form-group has-feedback">
                                <label className="col-md-3 control-label">项目概述：</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" placeholder="" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-group has-feedback">
                                <label className="col-md-3 control-label">项目优势：</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" placeholder="" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-group has-feedback">
                                <label className="col-md-3 control-label">其他备注：</label>
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

export default PublicProjectFinanceContent;