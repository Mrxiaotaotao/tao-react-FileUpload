import React, { Component } from 'react';
import FileUpload from './FileUpload.jsx'

class FU extends Component {
    render() {
        const options={
            baseUrl         :'/manage/product/upload.do',
            fileFieldName   : "upload_file",
            dataType        : 'json',
            chooseAndUpload : true ,
            uploadSuccess   : (res) => {
                this.props.onSuccess(res.data)
            },
            uploadError     : (err) => {
                this.props.onError(err.message || "上传失败")
            }
        }
        /*Use FileUpload with options*/
        /*Set two dom with ref*/
        return (
            <FileUpload options={options}>
                <button ref="chooseAndUpload" className='btn bt-default'>上传图片</button>
            </FileUpload>
        )	        
    }
}

export default FU;