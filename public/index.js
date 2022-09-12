window.onload = function(){ 
    var newEntryButton = document.getElementById("new-entry-button");
    var xOutButton = document.getElementsByClassName("modal-close-button")[0];
    var modalCancelBtn = document.getElementsByClassName("modal-cancel-btn")[0];
    var createEntryBtn = document.getElementsByClassName("modal-accept-btn")[0]; //Button to insert the entry into the document
    var blogPostContainer = document.getElementsByClassName("blog-feed")[0]; //Blog feed container containing all of the blog posts
    var h = document.querySelectorAll(".hidden");
    
    newEntryButton.onclick = function() { // Event listener for when new entry button is clicked
    
        for(var i = 0; i < h.length; i++){
            h[i].classList.remove("hidden");
        }
    
        document.getElementById("title-input").value = "";
        document.getElementById("date-input").value = "";
        document.getElementById("time-input").value = "";
        document.getElementById("blog-text-input").value = "";
    
    };
    
    xOutButton.onclick = function() { //Event listener for when the X out button is clicked in the modal
        
        document.getElementById("modal-backdrop").classList.add("hidden");
        document.getElementById("create-entry-modal").classList.add("hidden");
        document.getElementById("title-input").value = "";
        document.getElementById("date-input").value = "";
        document.getElementById("time-input").value = "";
        document.getElementById("blog-text-input").value = "";
    }
    
    modalCancelBtn.onclick = function() { //Event listener for when the cancel button is clicked in the modal
     
        document.getElementById("modal-backdrop").classList.add("hidden");
        document.getElementById("create-entry-modal").classList.add("hidden");
        document.getElementById("title-input").value = "";
        document.getElementById("date-input").value = "";
        document.getElementById("time-input").value = "";
        document.getElementById("blog-text-input").value = "";
    }
    

    //Object template for a new blog entry (for storage in the json file 'blog-data.json')

    const BlogPost = function(title, date, time, context){
        this.BLOGTITLE = title;
        this.BLOGDATE = date;
        this.BLOGTIME = time;
        this.BLOGCTXT = context;
    }


    createEntryBtn.onclick = function() { //Event listener for when the create entry button is clicked in the modal
    
        if(document.getElementById("title-input").value === "" || document.getElementById("date-input").value === "" || document.getElementById("time-input").value === "" || document.getElementById("blog-text-input").value === "") {
            window.alert("You must enter information in all fields! Please try again.")
        }
    
        else {
    
            var newBlogPost = document.createElement('div');
            newBlogPost.classList.add("blog-entry");
    
            var entryDiv = document.createElement('div');
            entryDiv.classList.add("entry-info");
            newBlogPost.appendChild(entryDiv);
    
            var infoList = document.createElement('ul');
            infoList.classList.add("entry-info.ul");
            entryDiv.appendChild(infoList);
    
            var entryTitle = document.createElement('li');
            entryTitle.classList.add("entry-info.li");
            infoList.appendChild(entryTitle);
    
            var titleText = document.createElement('h2');
            titleText.classList.add("entry-list.h2");
            entryTitle.appendChild(titleText);
    
            var tText = document.getElementById("title-input").value;
            var tt = document.createTextNode(tText);
            titleText.appendChild(tt);
    
            var entryTime = document.createElement('li');
            entryTime.classList.add("date-time");
            infoList.appendChild(entryTime);
    
            var timeText = document.createElement('h3');
            timeText.classList.add("date-time.h3");
            entryTime.appendChild(timeText);
                        
            var qText = document.getElementById("time-input").value;
            var qq = document.createTextNode(qText);
            timeText.appendChild(qq);
    
            var entryDate = document.createElement('li');
            entryDate.classList.add("date-spec");
            infoList.appendChild(entryDate);
    
            var dateText = document.createElement('h3');
            dateText.classList.add("date-spec.h3");
            entryDate.appendChild(dateText);
    
            var dText = document.getElementById("date-input").value;
            var dd = document.createTextNode(dText);
            dateText.appendChild(dd);
    
            //Inserting the blog post data here
            var blogContentEntry = document.createElement('div');
            blogContentEntry.classList.add("entry-content");
            newBlogPost.appendChild(blogContentEntry);
    
            var blogText = document.createElement('p');
            blogContentEntry.appendChild(blogText);
    
            var blogUserInput = document.getElementById("blog-text-input").value;
            var ii = document.createTextNode(blogUserInput);
            blogText.appendChild(ii);
    
            blogPostContainer.appendChild(newBlogPost); //Adding blog post to feed
    
            /*
            * Saving blog post data to a JSON file here
            */
            
            //Declare new object
            
    
    
            //Insert data into JSON file
                                    //blogEntries.push(blog_obj);
    
            //Close the modal after the information is inserted
            // document.getElementById("modal-backdrop").classList.add("hidden");
            // document.getElementById("create-entry-modal").classList.add("hidden");

            document.getElementById("modal-backdrop").classList.add("hidden");
            document.getElementById("create-entry-modal").classList.add("hidden");
            document.getElementById("title-input").value = "";
            document.getElementById("date-input").value = "";
            document.getElementById("time-input").value = "";
            document.getElementById("blog-text-input").value = "";
        }
    
    
    }
};


