// ROOT
var root = document.querySelector(':root');

// POST
var form = document.querySelector('.create-post');
var feedsList = document.querySelector('.feeds');

// LIKE POST
const like = document.querySelectorAll('.heart');

// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item')
// PROFILE
const profileNotification = document.querySelector('#profile-notifications');
const profiles = document.querySelector('#profiles');
const profile = document.querySelector('.profiles-section');
// const profileCards = document.querySelectorAll('.profiles-card');
const profileSearch = document.querySelector('#profile-search');
const profDelete = document.querySelectorAll('.btn-delete');

// CREATE PROFILE
const createProfileBtn = document.querySelector('#create-profile');
const profileModel = document.querySelector('.create-profile');
const photo = document.querySelector('#photo');
const imgInp = document.querySelector('#imgInp');

const pName = document.querySelector('.f-input #name')
const pEmail = document.querySelector('.f-input #email')
const personalStatement = document.querySelector('.f-input #personal-statement')

const submitBtn = document.querySelector('#submit-profile')

// THEME
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colors = document.querySelectorAll('.choose-color span');
const backgrounds = document.querySelectorAll('.choose-bg div');

// ===================== SIDEBAR ====================//

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none'
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block'
            document.querySelector('#notifications .notification-count').
            style.display = 'none'
        }
    })
})

// ===================== PROFILE ====================//

// Profile Search
const searchProfile = () => {
    const val = profileSearch.value.toLowerCase();
    profile.forEach(item => {
        let name = item.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })

}
profileSearch.addEventListener('keyup',searchProfile )

profileNotification.addEventListener('click', () => {
    profiles.style.boxShadow = '0 0 16px var(--color-primary)';
    setTimeout(() => {
        profiles.style.boxShadow = 'none';
    }, 2000)
})



// ===================== THEME CUSTOMIZATION ====================//
// opens model
const openThemeModel = () => {
    themeModel.style.display = 'grid'
}

// closing model
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none'
    }
}
themeModel.addEventListener('click', closeThemeModel);
theme.addEventListener('click', openThemeModel)

// ===================== FONTS ====================//
// remove active class from all font items
const changeActiveFont = () => {
    fontSizes.forEach(font => {
        font.classList.remove('active')
    })
}

fontSizes.forEach(font => {
    font.addEventListener('click', () => {
        changeActiveFont();
        font.classList.add('active');
    })
})

fontSizes.forEach(size => {
    let fontSize;

    size.addEventListener('click', () => {
        if (size.classList.contains('font-size-1')) {
            size.classList.add('active')
            fontSize = '10px'
            root.style.setProperty('--sticky-top-left', '86px')
            root.style.setProperty('--sticky-top-right', '86px')
    
        } else if(size.classList.contains('font-size-2')){
            size.classList.add('active')
            fontSize = '13px'
            root.style.setProperty('--sticky-top-left', '86px')
            root.style.setProperty('--sticky-top-right', '-112px')
    
        } else if(size.classList.contains('font-size-3')){
            size.classList.add('active')
            fontSize = '16px'
            root.style.setProperty('--sticky-top-left', '-32px')
            root.style.setProperty('--sticky-top-right', '-272px')
    
        } else if(size.classList.contains('font-size-4')){
            size.classList.add('active')
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left', '-80px')
            root.style.setProperty('--sticky-top-right', '-400px')
    
        } else if(size.classList.contains('font-size-5')){
            size.classList.add('active')
            fontSize = '22px'
            root.style.setProperty('--sticky-top-left', '-192px')
            root.style.setProperty('--sticky-top-right', '-560px')
        }

        // change font size of root element
        document.querySelector('html').style.fontSize = fontSize;
    })

})


// ===================== COLORS ====================//
// remove active class from all color items
const changeActiveColor = () => {
    colors.forEach(color => {
        color.classList.remove('active')
    })
}

colors.forEach(color => {
    color.addEventListener('click', () => {
        changeActiveColor();
        color.classList.add('active');
    })
})

colors.forEach(item => {

    item.addEventListener('click', () => {
        if (item.classList.contains('color-1')) {
            item.classList.add('active')
            root.style.setProperty('--color-primary', 'hsl(252, 75%, 60%)')
    
        } else if(item.classList.contains('color-2')){
            item.classList.add('active')
            root.style.setProperty('--color-primary', 'hsl(52, 75%, 60%)')
    
        } else if(item.classList.contains('color-3')){
            item.classList.add('active')
            root.style.setProperty('--color-primary', 'hsl(352, 75%, 60%)')
    
        } else if(item.classList.contains('color-4')){
            item.classList.add('active')
            root.style.setProperty('--color-primary', 'hsl(152, 75%, 60%)')
    
        } else if(item.classList.contains('color-5')){
            item.classList.add('active')
            root.style.setProperty('--color-primary', 'hsl(202, 75%, 60%)')
        }

    })

})


// ===================== BACKGROUND ====================//
// remove active class from all background items
const changeActiveBackground = () => {
    backgrounds.forEach(bg => {
        bg.classList.remove('active')
    })
}

backgrounds.forEach(bg => {
    bg.addEventListener('click', () => {
        changeActiveBackground();
        bg.classList.add('active');
    })
})


let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

backgrounds.forEach(item => {

    item.addEventListener('click', () => {
        if (item.classList.contains('bg-1')) {
            item.classList.add('active')
            window.location.reload();
            
    
        } else if(item.classList.contains('bg-2')){
            item.classList.add('active')
            darkColorLightness = '95%'
            whiteColorLightness = '22%'
            lightColorLightness = '15%'

            changeBg();

    
        } else if(item.classList.contains('bg-3')){
            item.classList.add('active')
            darkColorLightness = '95%'
            whiteColorLightness = '10%'
            lightColorLightness = '0%'

            changeBg();
    
        }

    })

})



// ===================== POST ====================== //


//Adding Items
form.addEventListener('submit', addPost)


//Add Post
function addPost(e){
    e.preventDefault();

    //Get input value
    var newPost = document.querySelector('#create-post').value;

    //Create new div and deleteBtn  element
    var feed = document.createElement('div');
    var head = document.createElement('div');

    var user = document.createElement('div');
    var profilePicture = document.createElement('div');
    var img = document.createElement('img');

    var info = document.createElement('div');
    var name = document.createElement('h3');
    var locTime = document.createElement('small');
    var postMenu = document.createElement('span');
    var menuIcon = document.createElement('i');

    var caption = document.createElement('div');

    var actionButton = document.createElement('div'); 
    var interactionButton = document.createElement('div');
    var postMenu = document.createElement('span');
    var heartIcon = document.createElement('i');
    var commentIcon = document.createElement('i');  
    var shareIcon = document.createElement('i');

    var bookmark = document.createElement('div');
    var bookmarkIconSpan = document.createElement('span');
    var bookmarkIcon = document.createElement('i');  

    var viewComment = document.createElement('div');
    
    //Add className
    feed.className = 'feed'
    head.className = 'head'
    user.className = 'user'
    profilePicture.className = 'profile-picture'
    info.className = 'info'
    postMenu.className = 'edit'
    menuIcon.className = 'bx bx-menu'
    caption.className = 'caption'
    actionButton.className = 'action-button'
    interactionButton.className = 'interaction-button'
    heartIcon.className = 'bx bx-heart heart'
    commentIcon.className = 'bx bx-comment'
    shareIcon.className = 'bx bx-share'
    bookmark.className = 'bookmark'
    bookmarkIconSpan.className = ''
    bookmarkIcon.className = 'bx bx-bookmark'
    viewComment.className = 'text-muted comment'
    
    //Add text node
    if (newPost == "") {
        alert("Please, write your post")
    } else {
        img.setAttribute('src', '/public/images/testimonials-1.jpg')
        profilePicture.appendChild(img);
        name.textContent ='Scott McAllister';
        locTime.textContent = ``;
        info.appendChild(name)
        info.appendChild(locTime)

        postMenu.appendChild(menuIcon)
        user.appendChild(profilePicture)
        user.appendChild(info)

        interactionButton.appendChild(document.createElement('span').appendChild(heartIcon))
        interactionButton.appendChild(document.createElement('span').appendChild(commentIcon))
        interactionButton.appendChild(document.createElement('span').appendChild(shareIcon))

        bookmarkIconSpan.appendChild(bookmarkIcon)
        bookmark.appendChild(bookmarkIconSpan)

        actionButton.appendChild(interactionButton)
        actionButton.appendChild(bookmarkIconSpan)

        viewComment.textContent = 'View All Comments'

        caption.appendChild(document.createTextNode(newPost));
        

        //Append the content to the head
        head.appendChild(user)
        head.appendChild(postMenu)

        //append the head to the feed
        feed.appendChild(head)
        feed.appendChild(caption)
        feed.appendChild(actionButton)
        feed.appendChild(viewComment)

        //append the feed to the feedsList
        feedsList.appendChild(feed);
    }
    
    
}

// ============Like Post =================//
like.forEach(item => {
    item.addEventListener('click', () => {
        if(item.classList.contains('bx-heart')){
            item.setAttribute('class', 'bx bxs-heart heart')
            item.style.color = 'red'
        } else if(item.classList.contains('bxs-heart')){
            item.setAttribute('class', 'bx bx-heart heart')
            item.style.color = 'var(--color-dark)'
        }
    })
    
})

// ===================== CREATE PROFILE ====================== //

// opens model
const openProfileModel = () => {
    profileModel.style.display = 'grid'
}

// closing model
const closeProfileModel = (e) => {
    if(e.target.classList.contains('create-profile')){
        profileModel.style.display = 'none'
    }
}
profileModel.addEventListener('click', closeProfileModel);
createProfileBtn.addEventListener('click', openProfileModel)


// Upload Photo
imgInp.addEventListener('change', () => {
    const [file] =  imgInp.files
    if(file){
        photo.src = URL.createObjectURL(file)
    }
})

// Add Profile


const addProfile = (e) => {
    e.preventDefault();

    //Get input value
    var newProfileImage = photo.getAttribute('src');
    var newProfileName = pName.value;
    // var newProfileEmail = pEmail.value;
    var newProfileStatement = personalStatement.value;


    var profileContent = document.createElement('div');
    var profileCard = document.createElement('div');
    var profilePhoto = document.createElement('div');
    var profImage = document.createElement('img');
    var profileBody = document.createElement('div');
    var profileBodyHead = document.createElement('div');
    var profileActionButtons = document.createElement('div');
    var editSpan = document.createElement('span');
    var deleteSpan = document.createElement('span');
    var editIcon = document.createElement('i');
    var deleteIcon = document.createElement('i');
    var profName = document.createElement('h5');
    var profStatement = document.createElement('p');

    //Add className
    // profileContent.className = 'profiles-section'
    profileCard.className = 'profile-card'
    profilePhoto.className = 'profile-picture'
    profileBody.className = 'profile-body'
    profileBodyHead.className = 'profile-body-head'
    profileActionButtons.className = 'profile-action-btns'
    editIcon.className = 'bx bx-edit'
    deleteIcon.className = 'bx bx-trash btn-delete'
    profStatement.className = 'text-muted'

    if(newProfileName == ""){
        alert("Please fill the whole form")
    } else{
        profImage.setAttribute('src', newProfileImage);
        profilePhoto.appendChild(profImage);

        profName.textContent = newProfileName;
        profStatement.textContent = newProfileStatement;

        editSpan.appendChild(editIcon)
        deleteSpan.appendChild(deleteIcon)
        profileActionButtons.appendChild(editSpan)
        profileActionButtons.appendChild(deleteSpan)

        profileBodyHead.appendChild(profName)
        profileBodyHead.appendChild(profileActionButtons)

        profileBody.appendChild(profileBodyHead)
        profileBody.appendChild(profStatement)

        profileCard.appendChild(profilePhoto)
        profileCard.appendChild(profileBody)

        // profileContent.appendChild(profileCard)
        profile.appendChild(profileCard);

        profileModel.style.display = 'none'

    }
}
submitBtn.addEventListener('click', addProfile);

// Remove Profile
profDelete.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete')) {
            if (confirm('Are you sure?')) {
                var span = e.target.parentElement
                var actionButton = span.parentElement
                var bodyHead = actionButton.parentElement
                var body = bodyHead.parentElement
                var card = body.parentElement
                profile.removeChild(card) 
            }
        }
    })
})




