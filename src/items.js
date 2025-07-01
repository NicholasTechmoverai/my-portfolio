import image1 from "./assets/image.png"
import image2 from "./assets/WhatsApp Image 2025-04-22 at 10.33.20_3167e298.jpg"
import image3 from "./assets/WhatsApp Image 2025-04-22 at 10.36.09_801e5b4b.jpg"
import image4 from "./assets/kevin-canlas-QYHehJ9Iovs-unsplash.jpg"
import image5 from "./assets/setup.jpg"
import injustify1 from "./assets/Screenshot 2025-07-01 135944.png"
import injustify2 from "./assets/Screenshot 2025-07-01 140120.png"
import injustify3 from "./assets/Screenshot 2025-07-01 140823.png"
import injustify4 from "./assets/Screenshot 2025-07-01 140359.png"
import fastApiHome from "./assets/fastapiAdmin.jpg"
import fastApiLogin from "./assets/FastapiAdminlogin.png"
import d3Book1 from "./assets/Screenshot 2025-07-01 172123.png"
import d3Book2 from "./assets/Screenshot 2025-07-01 172016.png"
import corrupt1 from "./assets/corrupt.jpeg"
import corrupt2 from "./assets/corrupt2.webp"
import firework1 from "./assets/Screenshot 2025-07-01 174611.png"
import firework2 from "./assets/Screenshot 2025-07-01 174533.png"
import chiefchef1 from "./assets/Screenshot 2025-07-01 180043.png"
import chiefchef2 from "./assets/Screenshot 2025-07-01 180052.png"
import chiefchef3 from "./assets/Screenshot 2025-07-01 180106.png"
import chiefchef4 from "./assets/Screenshot 2025-07-01 180144.png"
import SideBar1 from "./assets/Screenshot 2025-07-01 182403.png"
import SideBar2 from "./assets/Screenshot 2025-07-01 182424.png"
import Blogg1 from "./assets/Screenshot 2025-07-01 182317.png"
import blogg2_1 from "./assets/Screenshot 2025-07-01 184315.png"
import blogg2_2 from "./assets/Screenshot 2025-07-01 184335.png"

export const images = [
  {
    id: 456,
    img: "https://images.unsplash.com/photo-1745690665873-b5239161c17b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    title: "The Lion's Spirit",
    description: "Fearless, powerful, and born to lead — the spirit of a true lion.",
    location: "Savannah Plains"
  },
  {
    id: 457,
    img: image1,
    title: "Silent Strength",
    description: "Rooted in humility, driven by silent strength and action.",
    location: "Mountain Retreat"
  },
  {
    id: 458,
    img: image5,
    title: "Visionary Leader",
    description: "Leading not by force, but by inspiring trust, vision, and unity.",
    location: "Urban Skyline"
  },
  {
    id: 459,
    img: image3,
    title: "Limitless Potential",
    description: "A relentless spirit always chasing growth, wisdom, and new heights.",
    location: "Skyward Heights"
  },
  {
    id: 460,
    img: "https://images.unsplash.com/photo-1642083139428-9ee5fa423c46?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Creative Mind",
    description: "Where imagination meets execution to create the extraordinary.",
    location: "Studio Lab"
  },
  {
    id: 461,
    img: image2,
    title: "Focused Determination",
    description: "Precision and purpose in every endeavor, every day.",
    location: "Training Ground"
  },
  {
    id: 462,
    img: image4,
    title: "Elegant Confidence",
    description: "Grace under pressure, confidence without arrogance.",
    location: "Modern Suite"
  },
  // {
  //     id: 463,
  //     img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  //     title: "Joyful Expression",
  //     description: "Happiness amplified through genuine connection.",
  //     location: "Festival Grounds"
  // },
];

export const projects = [
  {
    id: 456,
    title: "INJUSTIFY (music manipulater website)",
    url: "",
    description:
      "A sleek music streaming interface with real-time playlist syncing using Vue 3 and WebSocket,Youtube video downloading and song lyrics searching.",
    images: [
      {
        url: injustify1,
        caption: "Homepage wit search funcitonality and suggestions",
        credit: "credit:",
        lng: ['vue3.js', 'tailwindCss', 'js'],
        visit: "#",
        code: `<template>
  <div class="carousel">
    <div v-for="(album, index) in albums" 
         :key="index"
         class="album-card">
      <img :src="album.cover" />
      <h3>{{ album.title }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const albums = ref([
  { cover: '/covers/album1.jpg', title: 'Summer Vibes' },
  { cover: '/covers/album2.jpg', title: 'Chill Lounge' }
]);
`,
      },
      {
        url: injustify3,
        caption: "Youtube mix/playlist downloader",
        credit: "credit:",
        lng: ['yielding', 'streaming download', 'fastAPi', 'yt_dlp'],
        visit: "#",
        code: `// WebSocket real-time sync
const socket = new WebSocket('wss://api.musicapp.com/ws');

socket.onmessage = ({ data }) => {
  const update = JSON.parse(data);
  if (update.type === 'PLAYLIST_UPDATE') {
    store.commit('updatePlaylist', update.payload);
  }
};

function sharePlaylist(playlistId) {
  socket.send(JSON.stringify({
    action: 'SHARE_PLAYLIST',
    playlistId
  }));
}`,
      },
      {
        url: injustify2,
        caption: "Injustify download page",
        credit: "credit:",
        lng: ['vue3.js', 'js', 'axio', 'pinia'],
        visit: "#",
        code: `// WebSocket real-time sync
const socket = new WebSocket('wss://api.musicapp.com/ws');

socket.onmessage = ({ data }) => {
  const update = JSON.parse(data);
  if (update.type === 'PLAYLIST_UPDATE') {
    store.commit('updatePlaylist', update.payload);
  }
};

function sharePlaylist(playlistId) {
  socket.send(JSON.stringify({
    action: 'SHARE_PLAYLIST',
    playlistId
  }));
}`,
      },
      {
        url: injustify4,
        caption: "music player Cards",
        credit: "credit:",
        lng: ['vue3.js', 'tailwindCss', 'js'],
        visit: "#",
        code: `// WebSocket real-time sync
const socket = new WebSocket('wss://api.musicapp.com/ws');

socket.onmessage = ({ data }) => {
  const update = JSON.parse(data);
  if (update.type === 'PLAYLIST_UPDATE') {
    store.commit('updatePlaylist', update.payload);
  }
};

function sharePlaylist(playlistId) {
  socket.send(JSON.stringify({
    action: 'SHARE_PLAYLIST',
    playlistId
  }));
}`,
      },
    ],
  },
  {
    id: 456,
    title: "FastAPI Admin Dashboard",
    url: "",
    description:
      "An admin interface to manage users, downloads, and playlist entries with SQLAdmin.",
    images: [
      {
        url: fastApiHome,
        caption: "Admin User management panel",
        credit: "credit",
        lng: ['fastApi', 'tortoiseOrms', 'python'],
        visit: "#",
        code: `from sqladmin import ModelView
from models import User

class UserAdmin(ModelView, model=User):
    column_list = [User.id, User.email]
    can_create = True
    can_edit = True
    name_plural = "Users"
    page_size = 25

# In FastAPI setup
admin = Admin(app, engine)
admin.add_view(UserAdmin)`,
      },
      {
        url: fastApiLogin,
        caption: "Admin Login pannel",
        credit: "Photo by Admin Dev",
        lng: ['fastApi', 'tortoiseOrms', 'python'],
        visit: "#",
        code: `// Custom user search component
const searchUsers = async (query) => {
  const response = await adminApi.get('/users', {
    params: { 
      search: query,
      limit: 50,
      sort: 'last_login:desc' 
    }
  });
  return response.data.users;
};

<AdminSearch 
  :search-fn="searchUsers"
  result-key="email"
  @select="showUserDetails"
/>`,
      },
    ],
  },
  {
    id: 457,
    title: "WorkNest",
    url: "",
    description:
      "Job seek website build with javascript,python,myql,html and Css",
    images: [
      {
        url: corrupt1,
        caption: "Workout selection screen",
        credit: "credit:",
        lng: ['python', 'flask', 'socket.io', 'mysql'],
        visit: "https://github.com/NicholasTechmoverai/WORKNEST",
        code: `@socketio.on('updatemydetails')
def updatemydetails(data):
    print("Updating...")

    formone = data.get('formone')
    formtwo = data.get('formtwo')
    lastform = data.get('lastform')
    
    try:
        # Form One personal data
        useremail = formone.get('userEmail')
        print("My Email:" ,useremail)
        mycursor.execute('SELECT id FROM worknestusers WHERE email = %s', (useremail,))
        userinid = mycursor.fetchone()
        print("HERE IS NY ID ::",userinid)
        if userinid:
            if formone :
            
                userid = userinid[0]
                userimage = formone.get('filePath')
                print("user image is :", userimage)
                userphone = formone.get('userPhone')
                userdob = formone.get('dob')
                usergender = formone.get('selectedGender')
                selectedLanguages = ','.join(formone.get('selectedLanguages', []))
                
            if formtwo:
                # Form Two data
                usercountry = formtwo.get('myCountry')
                usercity = formtwo.get('city')
                userinterests = ','.join(formtwo.get('myInterests', []))
                userskills = ','.join(formtwo.get('mySkills', []))
                userlinkedin = formtwo.get('myLinkedIn')
                userwhatsapp = formtwo.get('myWhatsApp')
                userfacebook = formtwo.get('myFacebook')
                usertiktok = formtwo.get('myTikTok')
                
                user_info_sql = """
                    UPDATE worknestusers SET
                        profile_pic = %s, phone = %s, birthdate = %s, gender = %s,
                        userLanguages = %s, country = %s, city = %s,
                        intrest = %s, linkedinUrl = %s,
                        whatsappUrl = %s, facebookUrl = %s, tiktokUrl = %s
                    WHERE id = %s
                """

                user_info_values = (
                    userimage, userphone, userdob, usergender, 
                    json.dumps(selectedLanguages),  # Convert to JSON string
                    usercountry, usercity,json.dumps(userinterests), userlinkedin, 
                    userwhatsapp, userfacebook, usertiktok, userid
                )

                mycursor.execute(user_info_sql, user_info_values)
                mydb.commit()
                emit('userinfoupdate',{'profile':userimage,'phone':userphone, 'dob':userdob, 'gender':usergender},room = userinid)
                print("Personal info saved!")
               
            if lastform:
                    # Loop through institutions, organizations, and projects
                    userinstitutions = lastform.get('institutionData', [])
                    userorganisations = lastform.get('organisationData', [])
                    userprojects = lastform.get('projectsData', [])

                    # Initialize lists to store data
                    institutions_data = []
                    organisations_data = []
                    projects_data = []

                    for institution in userinstitutions:
                        inst_name = institution.get('university')
                        startd = institution.get('from')
                        endd = institution.get('to')
                        achieve = institution.get('achievements')
                        
                        startd = startd if startd else None
                        endd = endd if endd else None

                        institutions_data.append({
                            'name': inst_name,
                            'start': startd,
                            'end': endd,
                            'achievements': achieve
                        })


                    for organization in userorganisations:
                        org_name = organization.get('organization')
                        orgstartd = organization.get('from')
                        orgendd = organization.get('to')
                        position = organization.get('position')
                        
                        orgstartd = startd if startd else None
                        orgendd = endd if endd else None
                        
                        organisations_data.append({
                            'name': org_name,
                            'start': orgstartd,
                            'end': orgendd,
                            'position': position
                        })

                    for project in userprojects:
                        prjct_name = project.get('projectName')
                        desc = project.get('description')
                        projects_data.append({
                            'name': prjct_name,
                            'description': desc
                        })

                    # Check if there's any data collected
                    if institutions_data or organisations_data or projects_data:
                   

                        for skills in userskills:
                            skills_sql = """
                            INSERT INTO  worknestusersskills (user_id, skills)
                            VALUES (%s, %s)
                            """
                            skills_values = (
                                userid,
                                skills,
                            )
                            mycursor.execute(skills_sql, skills_values)
                            mydb.commit()     
                            
                        for project in userprojects:
                            project_sql = """
                            INSERT INTO worknestusersbackground (user_id, projectname, description)
                            VALUES (%s, %s, %s)
                            """
                            project_values = (
                                userid, 
                                project.get('projectName'),
                                project.get('description')
                            )
                            mycursor.execute(project_sql, project_values)
                            mydb.commit()
                        
                        print("set one complete..........")
                        # Insert institution data
                        for institution in userinstitutions:
                            institution_sql = """
                            INSERT INTO worknestusersbackground (user_id, university, start_date, end_date, achievements)
                            VALUES (%s, %s, %s, %s, %s)
                            """
                            institution_values = (
                                userid,
                                institution.get('university'),
                                institution.get('from'),
                                institution.get('to'),
                                institution.get('achievements')
                            )
                            mycursor.execute(institution_sql, institution_values)
                            mydb.commit()
                            

                        for organization in userorganisations:
                            organization_sql = """
                            INSERT INTO worknestusersbackground (user_id, organisation, start_date, end_date, position)
                            VALUES (%s, %s, %s, %s, %s)
                            """
                            organization_values = (
                                userid,
                                organization.get('organization'),
                                organization.get('from'),
                                organization.get('to'),
                                organization.get('position')
                            )
                            mycursor.execute(organization_sql, organization_values)
                            
                        mydb.commit()    
                        print("Details updated successfully.")
                    
                    else:
                        print("institution info not found!!!!!")
            else:
                print("user not found")
                return "User not found"

    except Exception as err:
        mydb.rollback()
        print("Error:", err)

`,
      },
      {
        url: corrupt2,
        caption: "Weekly progress charts",
        credit: "WorkNest:",
        lng: ['js', 'HTML5', 'CSS', 'socket.io', "REST apis"],
        visit: "https://github.com/NicholasTechmoverai/WORKNEST",
        code: `  <!--JOB INPUT FORM-->
<form id="myjobinfo">
  <div class="postajob">
    <h2>Post a Job</h2>
    <div class="jobphold">
      <h3>About Category</h3>
      <div class="jobtrack">
        <div class="updown">
          <label for="jobcompany">Name of Company<span class="required">*</span></label>
          <input type="text" id="jobcompany" name="jobcompany" placeholder="e.g. WorkNest">
        </div>
        
        <div class="updown">
          <label for="joblink">Company Link</label>
          <input type="text" id="joblink" name="joblink" placeholder="www.example.com">
        </div>

        <div class="updown">
          <div id="logohold"><img src="" alt="Logo Preview" id="imagePreviewImg"></div>
          <p>Logo<span class="required">*</span></p>
          <div class="logonameholder">
            <div id="logoname">e.g.logo.png</div><span> <label for="joblogo">Upload<ion-icon name="arrow-up-outline"></ion-icon></label></span>
            <input type="file" id="joblogo" name="joblogo">
          </div>
         
        </div>
      </div>

      <div class="jobprofdesc">
        <div class="jobprofile">
          <div class="updown">
            <label for="jobtype">Job position<span class="required">*</span></label>
            <input type="text" id="jobprofile" name="jobprofile" placeholder="e.g. manager , e.g. secretary">
          </div>
          <div class="updown">
            <label for="jobcat">Job Category<span class="required">*</span></label>
            <input type="text" id="jobcat" name="jobcat" placeholder="Engineering , programmer , lawyer , Graphics designer">
          </div>
        </div>
  
        <div class="jobdesc">
          <div class="updown">
            <label for="jobdescription">Job Description<span class="required">*</span></label>
            <textarea id="jobdescription" name="jobdescription"></textarea>
          </div>
        </div>
      </div>

      <div class="jobrequirements">
        <p>Job Requirements<span class="required">*</span></p>
        <div class="editor-container">
          <p id="editt"  title="Edit and style your job requirements here.">Edit:</p>
            <div class="toolbar">
              <button type="button" onclick="execCommand('undo', this)"><ion-icon name="arrow-undo-outline"></ion-icon>Undo</button>
              <button type="button" onclick="execCommand('redo', this)"><ion-icon name="arrow-redo-outline"></ion-icon>Redo</button>
                <button type="button" onclick="execCommand('bold', this)"><b>B</b></button>
                <button type="button" onclick="execCommand('italic', this)"><i>I</i></button>
                <button type="button" onclick="execCommand('underline', this)"><u>U</u></button>
                <button type="button" onclick="execCommand('insertUnorderedList', this)">• List</button>
                <button type="button" onclick="execCommand('insertOrderedList', this)">1. List</button>
                <button type="button" onclick="execCommand('justifyLeft', this)">Left Align</button>
                <button type="button" onclick="execCommand('justifyCenter', this)">Center Align</button>
                <button type="button" onclick="execCommand('justifyRight', this)">Right Align</button>
                <button type="button" onclick="execCommand('strikeThrough', this)">Strikethrough</button>
                <button type="button" onclick="execCommand('justifyFull', this)">Justify</button>
                <button type="button" onclick="execCommand('indent', this)">Indent</button>
                <button type="button" onclick="execCommand('outdent', this)">Outdent</button>
                <button type="button" onclick="execCommand('createLink', this)">Insert Link</button>
                <button type="button" onclick="execCommand('insertImage', this)">Insert Image</button>
                <button type="button" onclick="execCommand('foreColor', this)">Text Color</button>
                <button type="button" onclick="execCommand('backColor', this)">Highlight</button>
                <button type="button" onclick="execCommand('subscript', this)">Subscript</button>
                <button type="button" onclick="execCommand('superscript', this)">Superscript</button>                  
                <button type="button" onclick="execCommand('removeFormat', this)">Clear Formatting</button>
                <input type="file" id="fileInput" onchange="handleFileUpload(event)">
              
            </div>`,
      },
    ],
  },
  {
    id: 458,
    title: "Python Data Visualization Toolkit",
    url: "",
    description: "Interactive data visualization library for financial analytics.",
    images: [
      {
        url: "https://picsum.photos/id/1025/800/450",
        caption: "Stock price correlation matrix",
        credit: "Photo by Data Team",
        lng: ['vue3.js', 'tailwindCss', 'js'],
        visit: "#",
        code: `import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

def plot_correlation(df):
    corr = df.corr()
    mask = np.triu(np.ones_like(corr, dtype=bool))
    sns.heatmap(corr, mask=mask, annot=True, cmap='coolwarm')
    plt.title('Stock Price Correlation Matrix')
    plt.show()`,
      },
      {
        url: "https://picsum.photos/id/1026/800/450",
        caption: "Time series forecasting",
        credit: "Photo by Data Team",
        lng: ['vue3.js', 'tailwindCss', 'js'],
        visit: "#",
        code: `from statsmodels.tsa.arima.model import ARIMA
import matplotlib.pyplot as plt

def forecast_prices(series, steps=30):
    model = ARIMA(series, order=(5,1,0))
    model_fit = model.fit()
    forecast = model_fit.forecast(steps=steps)
    
    plt.plot(series, label='Historical')
    plt.plot(forecast, label='Forecast')
    plt.legend()
    plt.title('Stock Price Forecast')
    plt.show()
    return forecast`,
      },
    ],
  },
  {
    id: 459,
    title: "3D Book",
    url: "https://bct-book.netlify.app/",
    description: "An animated book that flips pages",
    images: [
      {
        url: d3Book1,
        caption: "3d book functioning",
        credit: "credit:",
        lng: ['css', 'html', 'js'],
        visit: "https://bct-book.netlify.app/",
        code: `let pages = Array.from(document.querySelectorAll('.book-page'));
let currentZIndex = 10;

// Update pages array on initialization
function updatePagesArray() {
    pages = Array.from(document.querySelectorAll('.book-page'));
}

pages.forEach((page, index) => {
    page.addEventListener('click', () => flipPage(index));
});

function flipPage(index) {
    const page = pages[index];
    const innerContent = page.querySelector('.book-inner-c'); 


    if (page.style.transform !== 'rotateY(-150deg)') {
        page.style.transform = 'rotateY(-150deg)';
        page.style.zIndex = currentZIndex++;
        
        setTimeout(() => {
            innerContent.style.opacity = '0';
        }, 100);

    } else {
        page.style.transform = 'rotateY(0deg)';
        page.style.zIndex = currentZIndex++;
        
        setTimeout(() => {
            innerContent.style.opacity = '1';
        }, 100);

       
    }
}

// Handle page addition
const addPageButton = document.getElementById('add-pen');
const pagesContainer = document.getElementById('book-inside');`,
      },
      {
        url: d3Book2,
        caption: "Html structure ",
        credit: "credit:",
        lng: ['Html', 'css', 'js'],
        visit: "https://github.com/NicholasTechmoverai/bct-book/",
        code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BCT-3D</title>
    <link rel="stylesheet" href="./statics/css/style.css">
    <link rel="stylesheet" href="./statics/css/icons/icons.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.6/lottie.min.js"></script>

</head>
<body>
    <div id="identity">
        <a href="https://wa.me/+254741540233?text=Hello," id="name-link">Nicholas</a>
    </div>
    
        <div id="the-table">
        <div id="book-container">
            <div id="book-spine">
                <span class="spine-title">The Great Adventure</span>
                <span class="spine-author">by John Doe</span>
                <img src="publisher-logo.png" alt="Publisher Logo" class="spine-logo">
            </div>
            <div id="book-back" >END
                <div id="book-by">
                    by;Nicholas Kariuki
                    <div id="social-media">
                        <div id="icon-whatsapp"></div>                      
                        <div id="icon-facebook"></div>
                        <div id="icon-instagram"></div>
                        <div id="icon-github"></div>
                    </div>
                </div>
            </div>
            <div id="book-inside">
                <div class="book-page" id="edit-page">
                    <div class="book-inner-c">
                        <div id="add-pen" title="click here to add a new page"></div>
                        <div class="page-footer">
                            <span class="page-number">5</span>
                            <span class="page-date" class="user-edit">April 16, 2027</span>
                            <span class="page-author" class="user-edit"></span>
                            <div class="nextpage"></div>
                        </div>
                        <div class="page-content">
                            <div class="userprofile">
                                <img src="./statics/files/806533.png" alt="User Profile">
                                <p class="user-edit"></p>
                            </div>
                            <h1 class="user-edit"></h1>
                            <p class="user-edit"></p>
                            
                        </div>
                    </div>
                </div>
                <div class="book-page">
                    <div class="book-inner-c">
                        <div class="page-footer">
                            <span class="page-number">4</span>
                            <span class="page-date">April 16, 2027</span>
                            <span class="page-author">mm Doe</span>
                            <div class="nextpage"></div>
                        </div>
                        <div class="page-content">
                            <div class="userprofile">
                                <img src="./statics/files/806533.png" alt="User Profile">
                            </div>
                            <h1>The Great Adventure</h1>
                            <p>Welcome to The Great Adventure!</p>
                            
                        </div>
                    </div>
                </div>
                <div class="book-page">
                    <div class="book-inner-c">
                        <div class="page-footer">
                            <span class="page-number">3</span>
                            <span class="page-date">April 16, 2027</span>
                            <span class="page-author">mm Doe</span>
                            <div class="nextpage"></div>
                        </div>
                        <div class="page-content">
                            <div class="userprofile">
                                <img src="./statics/files/806533.png" alt="User Profile">
                            </div>
                            <h1>The Great Adventure</h1>
                            <p>Welcome to The Great Adventure!</p>
                            
                        </div>
                    </div>
                </div>
                <div class="book-page">
                    <div class="book-inner-c">
                        <div class="page-footer">
                            <span class="page-number">2</span>
                            <span class="page-date">April 16, 2027</span>
                            <span class="page-author">mm Doe</span>
                            <div class="nextpage"></div>
                        </div>
                        <div class="page-content">
                            <div class="userprofile">
                                <p>John Doe<br>sc201/3031/2023<br>Student</p>
                            </div>
                            <h1>The Great Adventure</h1>
                            <p>Welcome to The Great Adventure!</p>
                            
                        </div>
                    </div>
                </div>
                <div class="book-page">
                    <div class="book-inner-c">
                        <div class="page-footer">
                            <span class="page-number">1</span>
                            <span class="page-date">April 16, 2027</span>
                            <span class="page-author">mm Doe</span>
                            <div class="nextpage"></div>
                        </div>
                        <div class="page-content">
                            <div class="userprofile">
                                <img src="./statics/files/806533.png" alt="User Profile">
                                <p>John Doe<br>sc201/3031/2023<br>Student</p>
                            </div>
                            <h1>The Great Adventure</h1>
                            <p>Welcome to The Great Adventure!</p>

                        </div>
                    </div>
                </div>
                <div id="book-frontt" class="book-page">
                    <div class="book-inner-c">
                       <h2> STRAIGHT FLASH</h2> 
                       <p>BCT <br>2024/2025</p>
                       <div id="flipPage"></div>
                        <div id="playicon-c"></div>
                        <div class="nextpage"></div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    
   
    <script src="./statics/js/script.js"></script>
    <script src="./statics/js/myicons.js"></script>
</body>
</html>
`,
      },
    ],
  },
  {
    id: 460,
    title: "congratulations fireworks",
    url: "https://success-fireworks.netlify.app/",
    description: "An animated conglatulating fireworks that pops up and affected by gravity",
    images: [
      {
        url: firework1,
        caption: "Them fireworks",
        credit: "credit:",
        lng: ['css', 'html', 'js'],
        visit: "https://github.com/NicholasTechmoverai/fireworks",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fireworks Effect</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #000;
        }

        canvas {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <canvas id="fireworksCanvas"></canvas>

    <script>
        function fireworks() {
            const canvas = document.getElementById("fireworksCanvas");
            const ctx = canvas.getContext("2d");

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const colors = ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"];
            const gravity = 0.1;
            const maxParticles = 150;
            let particles = [];

            // Initialize particles
            function createParticles(x, y) {
                for (let i = 0; i < maxParticles; i++) {
                    particles.push({
                        x: x,
                        y: y,
                        radius: Math.random() * 4 + 1,
                        dx: (Math.random() - 0.5) * 6,
                        dy: Math.random() * -4 - 2,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        life: 100,
                    });
                }
            }

            // Draw particles
            function drawParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle, index) => {
                    ctx.fillStyle = particle.color;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                    ctx.fill();

                    // Update particle position
                    particle.x += particle.dx;
                    particle.y += particle.dy;
                    particle.dy += gravity;
                    particle.life--;

                    // Remove dead particles
                    if (particle.life <= 0) {
                        particles.splice(index, 1);
                    }
                });

                requestAnimationFrame(drawParticles);
            }

            // Trigger fireworks on mouse click
            canvas.addEventListener("click", (event) => {
                const x = event.clientX;
                const y = event.clientY;
                createParticles(x, y);
            });

            // Trigger fireworks periodically
            setInterval(() => {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height / 2;
                createParticles(x, y);
            }, 500);

            drawParticles();
        }

        // Start fireworks effect
        fireworks();

        // Adjust canvas size on window resize
        window.addEventListener("resize", () => {
            const canvas = document.getElementById("fireworksCanvas");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    </script>
</body>
</html>`,
      },
      {
        url: firework2,
        caption: "in action ",
        credit: "credit:",
        lng: ['Html', 'css', 'js'],
        visit: "https://github.com/NicholasTechmoverai/fireworks",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fireworks Effect</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #000;
        }

        canvas {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <canvas id="fireworksCanvas"></canvas>

    <script>
        function fireworks() {
            const canvas = document.getElementById("fireworksCanvas");
            const ctx = canvas.getContext("2d");

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const colors = ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"];
            const gravity = 0.1;
            const maxParticles = 150;
            let particles = [];

            // Initialize particles
            function createParticles(x, y) {
                for (let i = 0; i < maxParticles; i++) {
                    particles.push({
                        x: x,
                        y: y,
                        radius: Math.random() * 4 + 1,
                        dx: (Math.random() - 0.5) * 6,
                        dy: Math.random() * -4 - 2,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        life: 100,
                    });
                }
            }

            // Draw particles
            function drawParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach((particle, index) => {
                    ctx.fillStyle = particle.color;
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                    ctx.fill();

                    // Update particle position
                    particle.x += particle.dx;
                    particle.y += particle.dy;
                    particle.dy += gravity;
                    particle.life--;

                    // Remove dead particles
                    if (particle.life <= 0) {
                        particles.splice(index, 1);
                    }
                });

                requestAnimationFrame(drawParticles);
            }

            // Trigger fireworks on mouse click
            canvas.addEventListener("click", (event) => {
                const x = event.clientX;
                const y = event.clientY;
                createParticles(x, y);
            });

            // Trigger fireworks periodically
            setInterval(() => {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height / 2;
                createParticles(x, y);
            }, 500);

            drawParticles();
        }

        // Start fireworks effect
        fireworks();

        // Adjust canvas size on window resize
        window.addEventListener("resize", () => {
            const canvas = document.getElementById("fireworksCanvas");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    </script>
</body>
</html>`,
      },
    ],
  },
  {
    id: 461,
    title: "ChiefChef",
    url: "https://chiefchef.netlify.app/",
    description: "A simple ui with simple meal cards",
    images: [
      {
        url: chiefchef2,
        caption: "login section",
        credit: "credit:",
        lng: ['Html', 'css', 'js'],
        visit: "https://github.com/NicholasTechmoverai/chiefchef",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChiefChef</title>
    <link rel="stylesheet" href="../static/css/chef-splash.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.6/lottie.min.js"></script>
</head>
<body>
    <div id="chiefchef-splash">
        <div class="chiefchef-name">
            <h1>ChiefChef</h1>
            <p>Elevate your dining experience</p>
        </div>
        <img src="../static/files/chef-1.png" alt="" srcset="">
        <div id="spinner">
            <ion-icon name="refresh-circle-outline"></ion-icon>
        </div>
    </div>
    <div id="chiefchef-tutorial">
        <div id="describer-hold">
            <div class="tutorial-step">
                <ion-icon name="star-outline"></ion-icon>
                <h3>Choose your dish</h3>
                <p>Pick a dish from our menu</p>
            </div>
    
            <div class="tutorial-step active-tutorial">
                <ion-icon name="person-circle-outline"></ion-icon>
                <h3>Fill your order</h3>
                <p>Enter your order details</p>
            </div>
    
            <div class="tutorial-step">
                <ion-icon name="card-outline"></ion-icon>
                <h3>Pay securely</h3>
                <p>Pay with your credit or debit card</p>
            </div>
        </div>
        <div id="tutorial-desc">
            <p>Our chef's creations are now available for everyone to try,<br>
            Find the best recipe that The world can provide...</p>
        </div>
        <button id="next-tutorial">Next <ion-icon name="arrow-forward-outline"></ion-icon></button>
    </div>
    <div id="chiefchef-login">
        <img src="../static/files/chef-1.png" alt="" srcset="">
        <div class="chiefchef-name">
            <h1>ChiefChef</h1>
            <p>Elevate your dining experience</p>
        </div>
        <div id="login-container">
            <form id="login-form">
                <div class="inline"><ion-icon name="mail"></ion-icon> <input type="email" id="useremail" placeholder="chiefchef@gmail.com"></div>
                <div class="inline"><ion-icon name="lock-closed"></ion-icon><input type="password" id="password" placeholder="xxxxxxx"></div>
                <div id="remember-me">
                    <input type="checkbox" id="remember-me-checkbox">
                    <label for="remember-me-checkbox">Remember me?</label>
                    <a href="#">CyptPass?</a>
                </div>
                <button type="button" id="btn-login">Login</button>
            </form>
            <button type="button" id="btn-register">Register</button>
            <div class="line-with-text">
                <hr>
                <span>or sign up with</span>
                <hr>
            </div>
            <div class="social-media-icons">
                <div class="facebook"><ion-icon name="logo-facebook"></ion-icon></div>
                <div class="google"><ion-icon name="logo-google"></ion-icon></div>
                <div class="instagram"><ion-icon name="logo-instagram"></ion-icon></div>
                <div class="twitter"><ion-icon name="logo-twitter"></ion-icon></div>
            </div>
        </div>
    </div>
    <div id="chiefchef-homepage">
        <div id="chiefchef-homepage-header">
            <div id="chiefchef-homepage-header-inn">
                <p>
                    Hi <span class="userlogged-name"> Shahdi</span>! <br>What are cooking today?
                </p>
                <button id="notifications-btn">
                    <ion-icon name="notifications-outline"></ion-icon>
                    <span class="notification-count">3</span>
                </button>
            </div>
            <div id="chiefchef-homepage-search">
                <ion-icon name="search-outline"></ion-icon>
                <input type="text" id="search-input" placeholder="Search for dishes">
            </div>
        </div>
        <div id="popular-category">
            <h2>Popular Category</h2>
            <div id="popular-meal">
                <div class="mealnames">pizza</div>
                <div class="mealnames">Burger</div>
                <div class="mealnames">Chicken</div>
                <div class="mealnames">pasta</div>
                <div class="mealnames">Smocha</div>
                <div class="mealnames">Chapati</div>
                <div class="mealnames">Ugali</div>
            </div>
        </div>`,
      },
      {
        url: chiefchef1,
        caption: "splash screen",
        credit: "credit:",
        lng: ['css', 'html', 'js'],
        visit: "https://github.com/NicholasTechmoverai/chiefchef",
        code: `var homepagetabs = ['chiefchef-homepage', 'chiefchef-fav', 'chiefchef-profile', 'chiefchef-reel','chiefchef-add-recipe'];

function changetabs(thistab, element) {
    console.log(thistab, element);  

    if (element !== undefined) {  // Ensure element is passed
        
        // Reset all navigation items
        document.querySelectorAll('.navigation-item').forEach(nav => {
            nav.style.color = 'white';
            nav.style.padding = '4px'; 
            nav.style.boxSizing = ''; 
        });

        // Switch case for specific elements
        switch (element) {
            case 0:
                document.querySelectorAll('.btn-add-recipe').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 1:
                document.querySelectorAll('.btn-gohome').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 2: 
                document.querySelectorAll('.btn-gofav').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 3:
                document.querySelectorAll('.btn-goreel').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 4:
                document.querySelectorAll('.btn-goprofile').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            default:
                console.error('Tab not found');
                break;
        }

    } else {
        console.error('Element not passed correctly');
    }
`,
      },
      {
        url: chiefchef3,
        caption: "Main page content",
        credit: "credit:",
        lng: ['Html', 'css', 'js'],
        visit: "https://github.com/NicholasTechmoverai/chiefchef",
        code: `var homepagetabs = ['chiefchef-homepage', 'chiefchef-fav', 'chiefchef-profile', 'chiefchef-reel','chiefchef-add-recipe'];

function changetabs(thistab, element) {
    console.log(thistab, element);  

    if (element !== undefined) {  // Ensure element is passed
        
        // Reset all navigation items
        document.querySelectorAll('.navigation-item').forEach(nav => {
            nav.style.color = 'white';
            nav.style.padding = '4px'; 
            nav.style.boxSizing = ''; 
        });

        // Switch case for specific elements
        switch (element) {
            case 0:
                document.querySelectorAll('.btn-add-recipe').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 1:
                document.querySelectorAll('.btn-gohome').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 2: 
                document.querySelectorAll('.btn-gofav').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 3:
                document.querySelectorAll('.btn-goreel').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 4:
                document.querySelectorAll('.btn-goprofile').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            default:
                console.error('Tab not found');
                break;
        }

    } else {
        console.error('Element not passed correctly');
    }
`,
      },
      {
        url: chiefchef4,
        caption: "Reels section ",
        credit: "credit:",
        lng: ['Html', 'css', 'js'],
        visit: "https://github.com/NicholasTechmoverai/chiefchef",
        code: `var homepagetabs = ['chiefchef-homepage', 'chiefchef-fav', 'chiefchef-profile', 'chiefchef-reel','chiefchef-add-recipe'];

function changetabs(thistab, element) {
    console.log(thistab, element);  

    if (element !== undefined) {  // Ensure element is passed
        
        // Reset all navigation items
        document.querySelectorAll('.navigation-item').forEach(nav => {
            nav.style.color = 'white';
            nav.style.padding = '4px'; 
            nav.style.boxSizing = ''; 
        });

        // Switch case for specific elements
        switch (element) {
            case 0:
                document.querySelectorAll('.btn-add-recipe').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 1:
                document.querySelectorAll('.btn-gohome').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 2: 
                document.querySelectorAll('.btn-gofav').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 3:
                document.querySelectorAll('.btn-goreel').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            case 4:
                document.querySelectorAll('.btn-goprofile').forEach(btn => {
                    btn.style.padding = '4px';
                    btn.style.color = 'green';
                    btn.style.boxSizing = 'border-box';
                });
                break;
                
            default:
                console.error('Tab not found');
                break;
        }

    } else {
        console.error('Element not passed correctly');
    }
`,
      },
    ],
  },
  {
    id: 462,
    title: "SideBar Sample",
    url: "https://terra-sidebar.netlify.app/",
    description: "A modern sidebar sample",
    images: [
      {
        url: SideBar1,
        caption: "3d book functioning",
        credit: "credit:",
        lng: ['css', 'html', 'js'],
        visit: "https://bct-book.netlify.app/",
        code: '404',
      },
      {
        url: SideBar2,
        caption: "Html structure ",
        credit: "credit:",
        lng: ['Html', 'css', 'js'],
        visit: "https://github.com/NicholasTechmoverai/bct-book/",
        code: '404',
      },
    ],
  },
  {
    id: 463,
    title: 'blogg 1',
    url: "https://nicholastechmoverai.github.io/sylvestorblog/",
    description: "single page sample blog",
    images: [
      {
        url: Blogg1,
        caption: "single page sample blog",
        credit: "credit:",
        lng: ['css', 'html', 'js'],
        visit: "https://github.com/NicholasTechmoverai/sylvestorblog/",
        code: `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@sylvestor.portfolio</title>
    <link rel="shortcut icon" href="./download.jpeg" type="image/x-icon">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <section id="home">
    </section>
    <div id="toogle-icon">
        <ion-icon name="grid-outline"></ion-icon>
        <div id="topid">
            <div class="inline" id="useremail"><ion-icon name="mail-outline"></ion-icon>sylvestermuuo2@gmail.com</div>
            <div class="inline" id="username"><ion-icon name="person-outline"></ion-icon>Sylvester Muuo</div>
        </div>
    </div>
    <div id="toggle-list">
        <div><a href="#home"><ion-icon name="receipt-outline"></ion-icon> My Info</a></div>
        <div><a href="#my-proffesion"><ion-icon name="diamond-outline"></ion-icon> My Profession</a></div>
        <div><a href="#myskills"><ion-icon name="bag-add-outline"></ion-icon> My Skills</a></div>
        <div><a href="#mygallery"><ion-icon name="images-outline"></ion-icon> My Gallery</a></div>
    </div>
    <section id="myinfo">
        <div id="user-info">
            <div class="inline" id="useremail">Software Developer | AI Specialist</div>
            <img id="userimg" src="./download.jpeg" alt="" srcset="">
            <div class="user-info-socials">
                <div class="inline" id="useremail"><ion-icon name="mail-outline"></ion-icon><p>sylvestermuuo2@gmail.com</p></div>
                <div class="inline" id="username"><ion-icon name="person-outline"></ion-icon>Sylvester Muuo</div>
            </div>
            <div class="reachme-out">
                <div id="callmenow" class="callmenow"><ion-icon name="call-outline"></ion-icon>Call Me</div>
                <div id="watsappmenow"  class="watsappmenow"><ion-icon name="logo-whatsapp"></ion-icon>Whatsapp</div>
            </div>
        </div>
    </section>
    <div id="about-me">
        <p>
            I am a passionate and dedicated computer science student with a strong foundation in programming, web development, and artificial intelligence. With a curiosity-driven mindset, I love solving complex problems and exploring new technologies that push the boundaries of what’s possible. My experience spans multiple programming languages and frameworks, and I am always eager to learn and grow in fields such as cybersecurity, machine learning, and cloud computing.
        </p>
        <div id="aboutme-education">
            <img src="./image.png" alt="" srcset="">
            BCT <br>
            2nd year

        </div>
    </div>

    <section id="callme">

    </section>
   
    <section id="myskills">
        <h3>My Skills</h3>
        <div class="user-skills-store">
            <div class="user-skill-header">Programming Languages:</div>
            <div class="user-skill-item">Python</div>
            <div class="user-skill-item">Java</div>
            <div class="user-skill-item">C++</div>
            <div class="user-skill-item">JavaScript</div>
        </div>
    
        <div class="user-skills-store">
            <div class="user-skill-header">Web Development:</div>
            <div class="user-skill-item">HTML</div>
            <div class="user-skill-item">CSS</div>
            <div class="user-skill-item">JavaScript</div>
            <div class="user-skill-item">React</div>
            <div class="user-skill-item">Flask</div>
        </div>
    
        <div class="user-skills-store">
            <div class="user-skill-header">Database Management:</div>
            <div class="user-skill-item">MySQL</div>
            <div class="user-skill-item">MongoDB</div>
            <div class="user-skill-item">PostgreSQL</div>
        </div>
    
        <div class="user-skills-store">
            <div class="user-skill-header">Version Control:</div>
            <div class="user-skill-item">Git</div>
            <div class="user-skill-item">GitHub</div>
        </div>
    
        <div class="user-skills-store">
            <div class="user-skill-header">Machine Learning & AI:</div>
            <div class="user-skill-item">TensorFlow</div>
            <div class="user-skill-item">Scikit-learn</div>
            <div class="user-skill-item">Keras</div>
        </div>
    
        <div class="user-skills-store">
            <div class="user-skill-header">Cybersecurity:</div>
            <div class="user-skill-item">Network Security</div>
            <div class="user-skill-item">Cryptography</div>
            <div class="user-skill-item">Threat Detection</div>
        </div>
    
        <div class="user-skills-store">
            <div class="user-skill-header">Cloud Computing:</div>
            <div class="user-skill-item">AWS</div>
            <div class="user-skill-item">Google Cloud</div>
            <div class="user-skill-item">Docker</div>
        </div>
    
        <div class="user-skills-store">
            <div class="user-skill-header">Mobile App Development:</div>
            <div class="user-skill-item">Android</div>
            <div class="user-skill-item">Flutter</div>
        </div>
    
        <div class="user-skills-store">
            <div class="user-skill-header">Agile Methodologies:</div>
            <div class="user-skill-item">Scrum</div>
            <div class="user-skill-item">Kanban</div>
        </div>
    
        <div class="user-skills-store">
            <div class="user-skill-header">Problem-Solving:</div>
            <div class="user-skill-item">Data Structures</div>
            <div class="user-skill-item">Algorithms</div>
            <div class="user-skill-item">Competitive Programming</div>
        </div>
    </section>
    
    <section id="my-proffesion">
        <h3>My Proffesion</h3>
        <ul></ul>
            <li>
                <strong>Software Developer</strong>, Tech Corp (2021 - Present)
                <p>Developed and maintained web applications, led a team of 5 developers on multiple projects.</p>
            </li>
            <li>
                <strong>AI Research Assistant</strong>, University of ABC (2019 - 2021)
                <p>Conducted research in AI for environmental impact, developing models for climate change prediction.</p>
            </li>
        </ul>
    </section>

    <section id="mygallery">
        <h3>My Gallery</h3>
        <div class="image-store">
            <div class="card-container">
                <!-- Card 1 -->
                <div class="card">
                    <img src="./download.jpeg" alt="Image 1">
                    <div class="card-content">
                        <h3 class="card-title">First Place in National Hackathon</h3>
                        <p class="card-description">Awarded first place for developing an innovative AI-powered solution, bringing recognition and pride to the school.</p>
                        <div class="card-info">
                           
                        </div>
                    </div>
                </div>
        
                <!-- Card 2 -->
                <div class="card">
                    <img src="./sv1.jpeg" alt="Image 2">
                    <div class="card-content">
                        <h3 class="card-title">Champion of University Coding Competition</h3>
                        <p class="card-description">Secured the top position for creating an advanced web application, earning accolades and bringing honor to the university.</p>                        
                        <div class="card-info">
                           
                        </div>
                    </div>
                </div>
        
                <!-- Card 3 -->
                <div class="card">
                    <img src="./sv2.jpeg" alt="Image 3">
                    <div class="card-content">
                        <h3 class="card-title">Winner of Annual Robotics Challenge</h3>
                        <p class="card-description">Recognized for designing an autonomous robot, achieving the highest score and earning a prestigious award for the school.</p>
                        <div class="card-info">
                            
                        </div>
                    </div>
                </div>

                 <!-- Card 3 -->
                 <div class="card">
                    <img src="./sv4.jpeg" alt="Image 3">
                    <div class="card-content">
                        <h3 class="card-title">Top Innovator at Tech Symposium</h3>
                        <p class="card-description">Developed a groundbreaking mobile app, winning the innovation award and bringing significant recognition to the institution.</p>
                        <div class="card-info">
                           
                        </div>
                    </div>
                </div>
        
                <!-- Card 4 -->
                <div class="card">
                    <img src="./sv3.jpg" alt="Image 4">
                    <div class="card-content">
                        <h3 class="card-title">Best Project Award in Science Fair</h3>
                        <p class="card-description">Honored for presenting a sustainable energy project, winning the best project award and representing the school at the national level.</p>
                        <div class="card-info">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="reachme-out">
        <div id="callmenow" class="callmenow"><ion-icon name="call-outline"></ion-icon>Call Me</div>
        <div id="watsappmenow" class="watsappmenow"><ion-icon name="logo-whatsapp"></ion-icon>Whatsapp</div>
    </div>
    <div id="footer">
        <p>Portfolio by, <span id="nicholas_name">Kariuki Nicholas</span> $ <span id="nicholas_name">Sylvester Muuo</span><br>For one;<br> <a href="tel:+254741540233">Call</a>|<a href="https://wa.me/254741540233/?text=Greetings,%20Kariuki%20Nicholas
            ">Whatsapp</a>
        </p>
        <img src="./image.png" alt="">
    </div>
    <!--END-->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="./script.js"></script>
</body>
</html>
`,
      },
    ],
  },
  {
    id: 464,
    title: "blogg 2",
    url: "https://nicholastechmoverai.github.io/carol_blog/",
    description: "single page sample blog",
    images: [
      {
        url: blogg2_1,
        caption: "single page sample blog",
        credit: "credit:",
        lng: ['css', 'html', 'js'],
        visit: "https://github.com/NicholasTechmoverai/carol_blog",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Karol</title>
    <link rel="stylesheet" href="./styel.css">
</head>
<body>
    <nav>
        <button id="toogle-btn">toogle#</button>
        <div id="nav-content">
            
            <div id="nav-buttons">
                <div class="single-heart"></div>
                <button id="go-home"> Home</button>
                <button id="about-me">About Me</button>
                <button id="my-services"> Services</button>
                <button id="my-gallery"> Gallery</button>
                <button id="contact-me"> Contact Me</button>
            </div>   
        </div>
    </nav>
    <div class="body-content">
        <div class="wave-container"> <div class="wave"></div></div>
        <div id="user-mouthing-holder">      
            <div class="printcontent">
                <div class="heart-wave">
                    <div class="heart"></div>
                    <div class="heart"></div>
                    <div class="heart"></div>
                    <div class="heart"></div>
                    <div class="heart"></div>
                </div>
               
                <p> <h4>Hi! I'm <span class="name">Karol,</span></h4><br> <h6>a<span id="proffesion"> Professional Nurse</span> </h6> Import data from Google Chrome
                    Import bookmarks, passwords, history, and other browser data from Google Chrome
                    Import browsing data at each browser launch
                    Always have access to your recent browsing data each time you browsing on Microsoft Edge</p>
                    <div class="buttons">
                        <button>Hire Me</button>
                        <button> <a href="tel:0723110575">Contact Me</a></button>
                    </div>
                   <!--<div class="animate___animated animate_bounce animate_infinite">animate_flip</div>-->
            </div>
            
            <div id="profile"> 
                <svg width="50" height="50" id="top-border">
                    <path d="M 0 50 L 0 0 L 50 0" stroke="green" stroke-width="10" fill="transparent" />
                </svg>
            <img src="./nurse2.jpeg" alt="profile pic">
            <svg width="500" height="50" id="bottom-border">
                <path d="M 0 50 L 0 0 L 50 0" stroke="green" stroke-width="10" fill="transparent" />
            </svg>
        </div>
            </div>
            <div class="moreaboutme">
                <span class="name"><h3>About me</h3></span>
                <p>I'm Caroline Wangari Gathogo, <span class="name">A Proffesional Nurse</span> <br> Professional Nurse</span> </h6> Import data from Google Chrome
                    Import bookmarks, passwords, history, and other browser data from Google Chrome
                    Import browsing data at each browser launch
                    Always have access to your recent browsing data each time you browsing on Microsoft Edge</p>

                    <div class="userspecs-exper">
                        <div class="experience">
                            <div><div class="name">Experience</div>0+ years</div>
                            <div><div class="name">Availability</div>24/7</div>
                            <div><div class="name">Age</div>18</div>
                            <div><div class="name">Languages</div>English,Swahili</div>
                            <div><div class="name">Country</div>Kenya</div>
                            <div><div class="name">Surved Clients</div>200+</div>
                            <div><div class="name">Phone</div>+254723110575</div>
                            <div><div class="name">Degree</div>C1</div>
                        </div>
                        <div class="specialisation">
                            <div class="updown">
                               <p class="name">Survival</p>
                               <div class="backg">
                                <div class="rateb"></div>
                               </div>
                            </div>
                            <div class="updown">
                                <p class="name">Getting okay</p>
                                <div class="backg">
                                 <div class="rateb"></div>
                                </div>
                             </div>
                             
                             <div class="updown">
                                <p class="name">Other diseases</p>
                                <div class="backg">
                                 <div class="rateb"></div>
                                </div>
                             </div>
                             <div class="updown">
                                <p class="name">Unconciousness</p>
                                <div class="backg">
                                 <div class="rateb"></div>
                                </div>
                             </div>
                             <div class="updown">
                                <p class="name">Death</p>
                                <div class="backg">
                                 <div class="rateb"></div>
                                </div>
                             </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button>Hire Me</button>
                        <button> <a href="tel:0723110575">Contact Me</a></button>
                    </div>
            </div>
            <div class="myservices">
                <div class="name"><h2>Services</h2></div>
                <div class="allservices">
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    <div class="serviceholder">None <div class="effectloader"></div></div>
                    
                </div>
               
            </div>
            <div class="outercontactme">
                <h2 class="name">Contact Me</h2>
                <div class="contactme">
                    <div class="callsclick">
                        <div class="contact onede">
                            <p> <span class="name"> Mobile Me</span><br><a href="tel:0724022369">0724011369</a><br><a href="tel:0723110575">0723110575</a></p>
                        </div>
                        <div class="mail onede">
                            <p><span class="name">Email</span><br><a href="mailto:Karolina105wangari@gmail.com">Karolina105wangari@gmail.com</a></p>
                        </div>
                        <div class="location onede">
                            <p> <span class="name">location</span> <br><a href="">Nakuru</a></p>
                        </div>
                       
                        <div class="website onede">
                            <p><span class="name">Website</span> <br><a href="www.Karol.web.co.ke">www.Karol.web.co.ke</a></p>
                        </div>
                    </div>
                    <div class="sendmeinfo">
                        <div id="topinfo">
                           <p>Send Me A Message</p>
                           <div class="social-icons"></div>
                        </div>
                        <div class="sender-info">
                            <form action="" method="post">
                                <div id="input-sender-contact">
                                    <div>
                                        <label for="sender-name">Name:</label>
                                        <input type="text" id="sender-name">
                                    </div>
                                   <div>
                                    <label for="sender-contact">Phone:</label>
                                    <input type="number" name="sender-contact" id="sender-contact">
                                   </div>
                                </div>
                                <textarea name="sender-message" id="sender-message" rows="5" placeholder="Text your message here!..."></textarea>    <br>
                                <button type="submit">Send</button>
                            </form>
                            <div class="buttons">
                                <button>Hire Me</button>
                                <button> <a href="tel:0723110575">Contact Me</a></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="outer-gallery">
                <h2 class="name">Gallery</h2>
                <div class="gallery">
                    <div class="image-holder"><img src="./nurse3.jpeg" alt=""></div>
                    <div class="image-holder"><img src="./nurse1.jpeg" alt=""></div>
                    <div class="image-holder"><img src="./nurse2.jpeg" alt=""></div>
                    <div class="image-holder"><img src="./nurse4.jpeg" alt=""></div>
                    <div class="image-holder"><img src="./nurrse6.jpeg" alt=""></div>
                    <div class="image-holder"><img src="./nurse7.jpeg" alt=""></div>
                    <div class="image-holder"><img src="./heart-wave.jpeg" alt=""></div>
                    <div class="image-holder"><img src="./heartwAVE.jpg" alt=""></div>
                </div>
            </div>
        <footer>
            <p> @ Karol, Scroll for next slide > <br>
                Web By Nicholas Kariuki <br>
                for one <a href="tel:0741540233">Call</a>|<a href="mail to:Kariuki12nicholas@gmail.com">Mail</a>
            </p>
        </footer>  
    </div>
    <script>
        const a = document.querySelector('#user-mouthing-holder');
        const b = document.querySelector('.moreaboutme');
        const c = document.querySelector('.myservices');
        const d = document.querySelector('.outercontactme');
        const e = document.querySelector('.outer-gallery')
        document.getElementById('go-home').addEventListener('click',()=>{
           a.style.display = 'flex';
           b.style.display = 'none';
           c.style.display = 'none';
           d.style.display = 'none';
           e.style.display = 'none';
        })
        document.getElementById('about-me').addEventListener('click',()=>{
            b.style.display = 'flex';
            a.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
         })
         document.getElementById('my-services').addEventListener('click',()=>{
            c.style.display = 'flex';
            b.style.display = 'none';
            a.style.display = 'none';
            d.style.display = 'none';
            e.style.display = 'none';
         })
         document.getElementById('my-gallery').addEventListener('click',()=>{
            e.style.display = 'flex';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
            a.style.display = 'none';
         })
         document.getElementById('contact-me').addEventListener('click',()=>{
            d.style.display = 'flex';
            b.style.display = 'none';
            c.style.display = 'none';
            a.style.display = 'none';
            e.style.display = 'none';
         })
    </script>
    <script>
        const nav = document.querySelector('#nav-content');
        const body_content = document.querySelector('.body-content');
        const toggle_btn = document.getElementById('toogle-btn');
        
        toggle_btn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event bubbling to body
            body_content.classList.add('body-content-active');
            
            // Toggle nav visibility
            if (nav.style.height === "100%") {
                nav.style.height = "0";
                setTimeout(() => {
                    nav.style.opacity = '0';
                }, 450);
                setTimeout(() => {
                    body_content.classList.remove('body-content-active');
                }, 200);
            } else {
                nav.style.height = "100%";
                nav.style.opacity = '1';
            }
        });
    
        // Click outside to close navigation
        document.addEventListener('click', (event) => {
            if (nav.style.opacity === '1' && !nav.contains(event.target) && event.target !== toggle_btn) {
                nav.style.height = "0";
                setTimeout(() => {
                    nav.style.opacity = '0';
                }, 450);
                setTimeout(() => {
                    body_content.classList.remove('body-content-active');
                }, 150);
            }
        });
    </script>
    
     </body>
    </div>
   
</html>`,
      },
      {
        url: blogg2_2,
        caption: "single page sample blog",
        credit: "credit:",
        lng: ['Html', 'css', 'js'],
        visit: "https://github.com/NicholasTechmoverai/carol_blog",
        code: `
body{
    background-color: rgb(16, 18, 28);
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
}

#nav-content{
    display: flex;
    min-width: 120px;
    position: fixed;
    left: 0%;
    top: 0%;
    bottom: 0%;
    height: 100vh;
    background-color: rgb(1, 1, 14);
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
    z-index: 300;
    
}
#nav-buttons{
    display: flex;
    margin: auto;
    flex-direction: column;
    width: 100%;

}
#nav-content #nav-buttons button{
    width: 100%;
    cursor: pointer;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 15px;
    color: white;
    background-color: rgb(12, 12, 12);
    border: 1px solid transparent;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    text-align: start;
    padding: 2px 7px;
    
}
#nav-content #nav-buttons button:hover{
   background:linear-gradient(to right, rgb(7, 12, 22) ,green );
}
.body-content{
    display: flex;
    flex-direction: column;
    margin-left: 160px;
}

#user-mouthing-holder{
    margin: auto;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    height: 100vh;
    padding-right: 40px;
   
}
#user-mouthing-holder #proffesion,
.name{
  color: green;
  font-weight: bold;
  font-size: 24px;

}
.printcontent{
    overflow-wrap: break-word;
    margin: auto;
}
.printcontent h4,
.printcontent h6{
   
    margin: 0;
}
 .buttons button{
    background-color: green;
    text-decoration: none;
    color: white;
    border: none;
    cursor: pointer;
    
}
 .buttons a{
    text-decoration: none;
    color: white;
}
#profile{
    height: 350px;
    min-width: 200px;
    overflow: hidden;
    object-fit: fill;
    margin: auto;
    margin-left: 15px;
}
#profile img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: bounce 200ms linear infinite alternate;
    -webkit-animation: bounce 200ms linear infinite alternate;
    scale: 1.1;
    margin-left: 40px;
}
footer{
   position: fixed;
    display: flex;
    align-items: center;
    font-family: monospace;
    font-size: 10px;
    margin-left: 30%;
    bottom: 0%;
    text-align: center;
}
@keyframes bounce{
    to{translate: 0 2px;}
}


@keyframes slide {
    0% {
        transform: rotate(0deg);
        margin-bottom: 0px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
}
    50% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        margin-bottom: 10px;
}
90%{
    transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        margin-bottom: 0px;
}
    100% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        margin-bottom: 0px;
}
}
.buttons button{
     animation: slide 6s infinite;
     -webkit-animation: slide 6s infinite;
}

@keyframes typing{
    from{
        width: 0;
    }
    to{
        width: 100%;
    }
}

.moreaboutme{
    padding: 20px;
    font-size: 18px;
    padding-left: 20px;
    height: 100vh;
    padding-right: 40px;
    margin: auto;
    display: none;
    flex-direction: column;
}
.moreaboutme .buttons{
    margin: auto;
    margin-top: 80px;
}
.contactme .buttons button{
 width: fit-content;
 margin: auto;
 margin-top: 100px;
}
.printcontent h4{
    max-width: 150px;
    overflow: hidden;
    border-right:  2px solid orange;
    white-space: nowrap;
    animation: typing 4s steps(40,end) infinite;
    -webkit-animation: typing 4s steps(40,end) infinite;
}
.experience{
    display:  grid;
    grid-template-columns: auto auto;
    gap: 30px ;
    margin-right: 10%;
}
.experience >div{
    display: flex;
    align-items: center;
    border-bottom:  1px solid green;
    min-width:200px ;
    padding-right: 20px;
}
.experience .name{
    margin-right: 25px;
    border-bottom: 1px solid red;
}
.userspecs-exper{
    display: flex;
}
.updown{
    margin: 0;
    display: flex;
    flex-direction: column;
}
.backg{
    margin-top: -20px;
    min-width: 250px;
    width: auto;
    height: 10px;
    background-color: rgba(3, 2, 2, 0.435);
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    overflow: hidden;
    
}
.rateb{
    background-color: rgb(6, 97, 6);
    height: 100%;
    width: 75%;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
}
.specialisation :nth-child(1) .rateb{
    width: 20%;
}
.specialisation :nth-child(2) .rateb{
    width: 80%;
}
.specialisation :nth-child(3) .rateb{
    width: 90%;
}
.specialisation :nth-child(4) .rateb{
    width: 75%;
}
.specialisation :nth-child(5) .rateb{
    width: 20%;
    background-color: red;
}

.circle{
    background-color: rgb(60, 4, 4);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    display:list-item;
    justify-content: space-around;
   
    
}
.circle .one{
    width: 3px;
    height: 10px;
    background-color: aqua;
    margin: 4px;
   
}
.heart-wave hr{
    background-color: aqua;
    color: aquamarine;
    height: 5px;
    break-inside: auto;
}
.myservices{
    display: none;
    flex-direction: column;
}
.allservices{
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    padding-left: 5px;
    height: 100vh;
    padding-right: 40px;
}
.serviceholder{
    flex-grow: 1;
    flex-basis: 150;
    min-width: 200px;
    background-color: rgba(1, 1, 1, 0.57);
    height: 200px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    color: green;
}
.effectloader{
    width: 10px;
    height: 100%;
    background-color: white;
    position: absolute;
    filter: blur(13px);
    -webkit-filter: blur(13px);
    animation: left2right 2s linear infinite;
    -webkit-animation: left2right 2s linear infinite;
}

@keyframes left2right{
  0%{
    left: -50%;
  }
  10%{
    left: -10%;
  }
  100%{
    left: 100%;
  }
}

.line-container-90 {
    position: relative;
    width: 50px;
    height: 50px;
}

.line-part-horizontal {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 5px;
    background-color: black;
}

.line-part-vertical {
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 50px;
    background-color: black;
}
.svg-container {
    margin-top: 20px;
}

.heart-wave {
    display: flex;
}

.heart {
    position: relative;
    width: 50px;
    height:50px;
    background-color: red;
    margin: 0 15px;
    transform: rotate(-45deg);
    animation: heartbeat 1.5s infinite;
}

.heart::before,
.heart::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
}

.heart::before {
    top: -25px;
    left: 0;
}

.heart::after {
    top: 0;
    left: 25px;
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1) rotate(-45deg);
    }
    25% {
        transform: scale(1.1) rotate(-45deg);
    }
    50% {
        transform: scale(0.9) rotate(-45deg);
    }
    75% {
        transform: scale(1.1) rotate(-45deg);
    }
}

/* Add delays to create the wave effect */
.heart:nth-child(1) {
    animation-delay: 0s;
}

.heart:nth-child(2) {
    animation-delay: 0.2s;
}

.heart:nth-child(3) {
    animation-delay: 0.4s;
}

.heart:nth-child(4) {
    animation-delay: 0.6s;
}

.heart:nth-child(5) {
    animation-delay: 0.8s;
}

.ekg {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: black;
    overflow: hidden;
}
.wave-container{
    position: fixed;
    width: 100%;
    margin-top: 100px;
    margin-bottom: -100px;
    overflow-x: hidden;
    height: 30px;
}
.wave {
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%;
    height: 2px;
    background: none;
    border-left: 0.5px solid lime;
    animation: ekg 2s infinite;
    z-index: 123;
    -webkit-animation: ekg 2s infinite;
}

@keyframes ekg {
    0% {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -o-transform: translateX(100%);
}
    100% {
        transform: translateX(0%);
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -ms-transform: translateX(0%);
        -o-transform: translateX(0%);
}
}

.wave::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: none;
    border: 1px solid lime;
    border-radius: 50%;
    box-shadow: 10px 0 0 10px lime;
    animation: draw-wave 3s infinite;
}

@keyframes draw-wave {
    0% {
        left: 0;
        top: 0;
        width: 0;
        height: 0;
        border-radius: 0;
        box-shadow: none;
        background-color: green;
    }
    10% {
        left: 0;
        top: 50%;
        width: 20%;
        height: 2px;
        border-radius: 0;
        box-shadow: none;
        background: green; 
   }
    20% {
        left: 20%;
        top: 50%;
        width: 0;
        height: 0;
        border-radius: 0;
        box-shadow: none;
        background: green; 
    }
    30% {
        left: 20%;
        top: 0%;
        width: 0;
        height: 0;
        border-radius: 0;
        box-shadow: 0 0 0 2px lime;
    }
    40% {
        left: 20%;
        top: 0%;
        width: 5%;
        height: 100%;
        border-radius: 0;
        box-shadow: 0 0 0 2px lime;
    }
    50% {
        left: 25%;
        top: 50%;
        width: 0;
        height: 0;
        border-radius: 0;
        box-shadow: 0 0 0 2px lime;
    }
    60% {
        left: 25%;
        top: 50%;
        width: 20%;
        height: 2px;
        border-radius: 0;
        box-shadow: 0 0 0 2px lime;
    }
    100% {
        left: 100%;
        top: 50%;
        width: 0;
        height: 50%;
        border-radius: 0;
        box-shadow: 0 0 0 2px lime;
    }
}
#bottom-border{
    z-index: 1000000000;
    rotate: 180deg;
    z-index: 1000000000000;
}
.single-heart {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: green;
    transform: rotate(-45deg);
    animation: one-heartbeat 1.5s infinite;
    margin: auto;
    margin-bottom: 100px;
}

.single-heart::before,
.single-heart::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: green;
}

.single-heart::before {
    top: -27px;
    left: 0;
}

.single-heart::after {
    content: "Nurse";
    top: 0;
    left: 27px;
}

@keyframes one-heartbeat {
    0%, 100% {
        transform: scale(1) rotate(-45deg);
    }
    25% {
        transform: scale(1.1) rotate(-45deg);
    }
    50% {
        transform: scale(0.9) rotate(-45deg);
    }
    75% {
        transform: scale(1.1) rotate(-45deg);
    }
}
.contactme{
    margin: auto;
    font-size: 18px;
    display: flex;
    justify-content: space-around;
}
.callsclick{
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70vh;
    margin-right: 30px;
}
.callsclick a{
    text-decoration: none;
    color: gray;
}
.outercontactme{
    height: 100vh;
    width: 100%;
    overflow: hidden;
}
.sendmeinfo{
    display: flex;
    flex-direction: column;
    align-items: center;
   
    text-align: center;
}

#input-sender-contact{
    display: flex;
    flex-direction: row;
}
#input-sender-contact input{
    background-color: rgba(0, 0, 0, 0.594);
    min-width: 200px;
    padding: 3px;
    padding-left: 80px;
    color: white;
    box-sizing: border-box;
    outline: none;
    border: none;
    height: 25px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
   
}
#input-sender-contact label{
    margin-left: 20px;
    margin-right: -59px;
    z-index: 1000;
    color: rgb(91, 89, 89);
    font-weight: bold;
}
.sender-info textarea{
    width: 100%;
    margin-top: 50px;
    resize: vertical;
    max-height: 130px;
    min-height: 100px;
    background-color:rgba(0, 0, 0, 0.594);
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    outline: none;
    border: none;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
}
#topinfo{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.social-icons{
    min-width: 130px;
    height: 25px;
    background-color: black;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}
.sender-info button{
    width: 78px;
    background-color: green;
    color: rgb(205, 190, 190);
    font-weight: bolder;
    font-family: monospace;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}
.sender-info button:hover{
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border: 1px solid aqua;
}
.outercontactme{
    display: none;
}
.outer-gallery{
    display: none;
    flex-direction: column;
}
.gallery{
    display: flex;
    
    flex-wrap: wrap;
}
.image-holder{
    width: 350px;
    height: 250px;
   
    overflow: hidden;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    margin: 10px;
    flex-basis: 200;
    flex-grow: 1;
    background-color: rgba(0, 106, 21, 0.278);
    

}
.image-holder img{
    margin: auto;
    width: 100%;
    height: auto;
    max-height: 450px;
    object-fit: fill;
}
#toogle-btn{
    position: fixed;
    display: none;
    top: 2%;
    opacity: 1;
    z-index: 1784576;
    cursor: pointer;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}

@media (max-width: 990px) {
    #toogle-btn{
        opacity: 1;
         display: block;
         z-index: 1000;
         background-color: green;
     }
     #nav-content{
         display: flex;
         position: fixed;
         left: 0%;
         top: 0%;
         bottom: 0%;
         height: 0;
         background-color: rgb(1, 1, 14);
         margin: auto;
         padding: 20px;
         box-sizing: border-box;
         z-index: 300;
         opacity: 0;
         transition: height 0.5s ease;
         -webkit-transition: height 0.5s ease;
         -moz-transition: height 0.5s ease;
         -ms-transition: height 0.5s ease;
         -o-transition: height 0.5s ease;
     }
 
     .body-content{
         margin-left: 0px;
         transition: margin-left 0.5s ease;
         -webkit-transition: margin-left 0.5s ease;
         -moz-transition: margin-left 0.5s ease;
         -ms-transition: margin-left 0.5s ease;
         -o-transition: margin-left 0.5s ease;
 
 }
     .body-content-active{
         margin-left: 160px;
     }
     #user-mouthing-holder{
         flex-direction: column;
         width: 100%;
         padding: 10px;
         box-sizing: border-box;
         overflow: hidden;
     }
     #profile{
         width: 90%;
     }
 
     .wave-container{
         margin-top: 0;
         position: fixed;
         top: 2%;
         width: 90%;
         overflow-y: hidden;
     }

     .heart-wave{
         transform: scale(0.5);
         -webkit-transform: scale(0.5);
         -moz-transform: scale(0.5);
         -ms-transform: scale(0.5);
         -o-transform: scale(0.5);
 }
 .moreaboutme{
    flex-direction: column;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    height: fit-content;
}
.userspecs-exper{
    flex-direction: column;
}
.specialisation .backg{
    width: 70%;
   
}
.userspecs-exper .experience{
    transform: scale(0.7);
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -o-transform: scale(0.7);
    margin-left: 0;
    padding-left: 0;
    width: 60%;
}
.outercontactme{
   overflow: visible;
   padding: 5px;
   box-sizing: border-box;
   flex-direction: column;
}
.contactme{
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 0;
   padding: 0;
}
.sender-info textarea{
   width: 95%;
   margin-left: 0;
}
.sendmeinfo{
    margin-top: 20%;
    background-color: rgb(20, 22, 35);
    padding: 20px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}
.sender-info #topinfo{
    width: 80%;
    justify-content: space-around;
}
#input-sender-contact input{
   width: 100%;
}

.callsclick{
   display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  height: fit-content;
  margin-right: 0px;
  
}
.onede{
   flex-grow: 1;
   flex-basis: 130px;
   margin-bottom: 0;
   background-color: rgb(20, 22, 35);
   height: fit-content;
   padding: 5px 10px;
   box-sizing: border-box;
   border-radius: 5px;
   -webkit-border-radius: 5px;
   -moz-border-radius: 5px;
   -ms-border-radius: 5px;
   -o-border-radius: 5px;
   overflow-wrap: break-word;
}

 #input-sender-contact >div{
     display: flex;
     flex-direction: row;
     margin-top: 10px;
 }
}

@media (max-width: 450px) {
    #toogle-btn{
        opacity: 1;
         display: block;
         z-index: 1000;
         background-color: green;
     }
     #nav-content{
         display: flex;
         position: fixed;
         left: 0%;
         top: 0%;
         bottom: 0%;
         height: 0;
         background-color: rgb(1, 1, 14);
         margin: auto;
         padding: 20px;
         box-sizing: border-box;
         z-index: 300;
         opacity: 0;
         transition: height 0.5s ease;
         -webkit-transition: height 0.5s ease;
         -moz-transition: height 0.5s ease;
         -ms-transition: height 0.5s ease;
         -o-transition: height 0.5s ease;
     }
 
     .body-content{
         margin-left: 0px;
         transition: margin-left 0.5s ease;
         -webkit-transition: margin-left 0.5s ease;
         -moz-transition: margin-left 0.5s ease;
         -ms-transition: margin-left 0.5s ease;
         -o-transition: margin-left 0.5s ease;
 
 }
     .body-content-active{
         margin-left: 160px;
     }
     #user-mouthing-holder{
         flex-direction: column;
         width: 100%;
         padding: 10px;
         box-sizing: border-box;
         overflow: hidden;
     }
     #profile{
         width: 90%;
     }
 
     .wave-container{
         margin-top: 0;
         position: fixed;
         top: 2%;
         width: 90%;
         overflow-y: hidden;
     }

     .heart-wave{
         transform: scale(0.5);
         -webkit-transform: scale(0.5);
         -moz-transform: scale(0.5);
         -ms-transform: scale(0.5);
         -o-transform: scale(0.5);
 }
 .moreaboutme{
    flex-direction: column;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    height: fit-content;
}
.userspecs-exper{
    flex-direction: column;
}
.specialisation .backg{
    width: 70%;
   
}
.userspecs-exper .experience{
    transform: scale(0.7);
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -o-transform: scale(0.7);
    margin-left: 0;
    padding-left: 0;
    width: 60%;
}
.outercontactme{
   overflow: visible;
   padding: 5px;
   box-sizing: border-box;
   flex-direction: column;
}
.contactme{
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 0;
   padding: 0;
}
.sender-info textarea{
   width: 100%;
   margin-left: 0;
}
.sendmeinfo{
    margin-top: 20%;
    background-color: rgb(20, 22, 35);
    padding: 0;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}


.callsclick{
   display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  height: fit-content;
  margin-right: 0px;
}
.onede{
   flex-grow: 1;
   flex-basis: 130px;
   margin-bottom: 0;
   background-color: rgb(20, 22, 35);
   height: fit-content;
   padding: 5px 10px;
   box-sizing: border-box;
   border-radius: 5px;
   -webkit-border-radius: 5px;
   -moz-border-radius: 5px;
   -ms-border-radius: 5px;
   -o-border-radius: 5px;
   overflow-wrap: break-word;
}
.sendmeinfo  #topinfo{
  
   width: 95%;
}
#input-sender-contact{
    flex-direction: column;

}
#input-sender-contact >div{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}
}
`,
      }
    ],
  },
];


// {
//   id: 459,
//   title: "3D Book",
//   url: "https://bct-book.netlify.app/",
//   description: "An animated book that flips pages",
//   images: [
//     {
//       url: d3Book1,
//       caption: "3d book functioning",
//       credit: "credit:",
//       lng: ['css', 'html', 'js'],
//       visit: "https://bct-book.netlify.app/",
//       code:'',
//     },
//     {
//       url: d3Book2,
//       caption: "Html structure ",
//       credit: "credit:",
//       lng: ['Html', 'css', 'js'],
//       visit: "https://github.com/NicholasTechmoverai/bct-book/",
//       code: '',
//     },
//   ],
// },
