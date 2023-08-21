import React, { useState } from 'react'
import { TitleLg } from '../Title'
import { FiSearch } from "react-icons/fi";
import { BsArrowUp , BsThreeDotsVertical, BsDownload , BsPlusLg} from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { FcFolder } from "react-icons/fc";
import {filesandfolders} from "../../data/data";

export default function ToolsAndTips() {
  const [checkedCount,setCheckedCount] = useState(false);
  const [data,setData] = useState(filesandfolders);

  const handleCheckboxChange = (index) => {
        const updatedFilesAndFolders = [...data];
        updatedFilesAndFolders[index].checked = !updatedFilesAndFolders[index].checked;
        setData(updatedFilesAndFolders);
        
        const anyChecked = updatedFilesAndFolders.some(item => item.checked);
        setCheckedCount(anyChecked);
    }
    const handleHeaderCheckboxChange = () => {
        const newCheckedStatus = !checkedCount;
        setCheckedCount(newCheckedStatus);

        const updatedData = filesandfolders.map(item => ({
            ...item,
            checked: newCheckedStatus,
          }));
          setData(updatedData);
    };
   
  const dateOutput = (dateData) => {
      const date = new Date(dateData);
      const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      return  formattedDate; 
  }
  return (
    <div className='tools-and-tips-maindiv'>
         <div className='title'>
               <TitleLg title='tools & tips'/>
                 <p className='title-description'>
                     Use this area to upload files you wish to share with your users.
                     You can manage who has access to your files and what they can do,
                     such as view & download, upload items and more.   
                 </p>
         </div>

         <div className='table-container'>
                 <div className='file-table-header'>
                       {/*Header Title*/}
                       <div className='table-title'>
                            <div className='left-header'>
                                <p>Files & Folders</p>
                            </div>

                            <div className='right-header'>
                                {checkedCount ? (
                                    <button className='download'>
                                    <span className='download-icon'><BsDownload size={20}/></span>
                                    Download
                                    </button>
                                ):(
                                    <div className='search'>
                                       <i className='search-icon'><FiSearch /></i>
                                       <button className='addfiles-btn'>+ File</button>
                                       <div className='mobileview-select-btn'>
                                            <BsThreeDotsVertical/>
                                       </div>                                       
                                    </div>
                                )}
                            </div>
                       </div>
                       {/*Header Row*/}
                       <div className='header-row'>
                            <label className='header-checkbox'>
                                <input type='checkbox'
                                 checked={checkedCount} 
                                 onChange={() => handleHeaderCheckboxChange()}
                                 />
                                <span className='checkmark'></span>            
                            </label>
                            <p className='header-item-name'>Item name <BsArrowUp/></p>
                               <div className='header-row-right' style={{opacity: checkedCount ? "0":"1"}}>
                                    <p className='header-last-update'>Last updated</p>
                                    <p className='header-views'>Views</p>
                                    <p className='header-favorite'>Favorite</p>
                                    <p className='header-contributors'>Contributors</p>
                                    <button> <BiMenuAltLeft size={25}/></button>
                               </div>
                               <button className='mobile-addfile-btn'><span><BsPlusLg/></span></button>
            
                       </div>
                 </div>

                 {/*Table Datas*/}
                 {
                    data.map((item,index)=>(
                         <div className='data-row-container' key={item.id}>
                               <label className='data-checkbox'>
                               <input type='checkbox' 
                                checked={item.checked} 
                                onChange={() => handleCheckboxChange(index)}/>
                                   <span className='checkmark'></span>            
                               </label>

                               <div className='item-title'>
                                     <FcFolder className='folder-icon'/>
                                     <div className='item-name'>
                                            <p className='name'>{item.title}</p>
                                            <p className='mobileview-details'>{item.views} views , {dateOutput(item.updated)} </p>
                                            <p className="item">{item.item} items</p>
                                     </div>
                                     
                                     <div className='value'>
                                           <p className='update'>{dateOutput(item.updated)}</p>
                                           <p className='view'>{item.views}</p>
                                           <p className='favorite'>{item.favorite}</p>
                                           <p className='contributor'>{item.contributor}</p>
                                           <button className='value-menu'><BsThreeDotsVertical/></button>
                                     </div>
                               </div>
                         </div>
                    ))
                 }
         </div>
    </div>
  )
}
