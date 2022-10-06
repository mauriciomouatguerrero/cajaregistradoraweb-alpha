<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
      
      <style type="text/css">
        .paginador_index ul {
           float: right;
           display: inline;
           padding: 3px 3px;
        }
        .paginador_index ul li {
           float:left;
           margin: 2px 3px;
           list-style-type: none;
           border: 1px dotted #999999;
           background-color:# ADADAD;
           font-weight: bolder;
           font-size: 14px;
           padding: 2px 1px;
           
        }
        .paginador_index ul li a {
           padding: 5px 15px;
/*            border:1px solid #FF0000; */
        }
        .paginador_index ul li a:link {
           color: #000000;
           background-color: #FFFFFF;
        }
        .paginador_index ul li a:hover {
           color: #FFFFFF;
           background-color: #9C9C9C;
        }
      </style>
            
      <div class="paginador_index">         
         <ul>
           <li id="li_0"><a href="#">1</a></li>
           <li id="li_1"><a href="#">2</a></li>
           <li id="li_2"><a href="#">3</a></li>
         </ul>   
      </div>
      