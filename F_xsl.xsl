<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="user">
    <html>
    	<head>
    		<meta viewport="width=device-width, initial-scale=1"/>
    		<style>
    			*{
    			font-size: 20px;
				margin:0;
				padding: 0;
				box-sizing:border-box;
				}

    			.container{
    			width: 60vw;
    			display: flex;
    			flex-direction: column;
    			margin: auto;
    			}
    			.item{
    			margin: 0.5em 1em;
    			padding: .2em 1em;
    			border-radius: .5em;
    			background-color: #ebecef;
    			display: inline-block;
    			}
    			.taskHeading{
    			font-size:1.2em;
    			width: 60%;
    			float:left;
    			}
    			.dateTime{
    			font-size: 0.8em;
    			text-align:right;
    			width: 40%;
    			height:100%;
    			float:right;
    			}
    			
    			.firstLine{
    			display: block;
    			padding: 0 0 0.5em 0;
    			}
    			.firstLine::after{
				content:"";
				display:block;
				clear:both;
				}
				.desc{
				font-size: 0.85em;
				padding-bottom:.5em;
				}
				.tagCat{
				width:30%;
				text-align:right;
				font-size:0.7em;
				float:right;
				}
				.tagCat::after{
				content:"";
				display:block;
				clear:both;
				}
				.tags{
				background-color:#f56291;
				color:#ebecef;
				float:right;
				}
				.category{
				float:left;
				background-color:#07e6a0;
				}
				.tags,.category{
				font-size:inherit;
				padding: 0.1em 0.3em;
				display:inline;
				border-radius:0.8em;
				}
    		</style>
    	</head>
      <body>
      	<div class="container">
        <xsl:for-each select="chore">
        <div class="item">
        	<div class="firstLine">
          <h3 class="taskHeading"> 
          	<xsl:value-of select="heading"/>
          </h3>
          <p class="dateTime">
          	<xsl:value-of select="time/hour"/>:<xsl:value-of select="time/minute"/>
          	&#160;
          	<xsl:value-of select="date/day"/>/<xsl:value-of select="date/month"/>/<xsl:value-of select="date/year" />
          </p>
          </div>
          <p class="desc">
          	<xsl:value-of select="description"/>
          </p>
          	<p class="tagCat">
          		<div class="category">
          	<xsl:value-of select="category"/>
          	</div>
          	&#160;
          	<div class="tags">
          	<xsl:value-of select="tags"/>
          	</div>
          	</p>
        </div>
        </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
