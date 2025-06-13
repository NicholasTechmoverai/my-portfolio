import image1 from "./assets/image.png"
import image2 from "./assets/WhatsApp Image 2025-04-22 at 10.33.20_3167e298.jpg"
import image3 from "./assets/WhatsApp Image 2025-04-22 at 10.36.09_801e5b4b.jpg"
import image4 from "./assets/kevin-canlas-QYHehJ9Iovs-unsplash.jpg"
import image5 from "./assets/setup.jpg"

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
        title: "Vue Music Player",
        url: "",
        description:
            "A sleek music streaming interface with real-time playlist syncing using Vue 3 and WebSocket.",
        images: [
            {
                url: "https://picsum.photos/id/1015/800/450",
                caption: "Dashboard view with album carousel",
                credit: "Photo by Artist A",
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
                url: "https://picsum.photos/id/1016/800/450",
                caption: "Playlist details page",
                credit: "Photo by Artist B",
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
                url: "https://picsum.photos/id/1018/800/450",
                caption: "Admin login screen",
                credit: "Photo by Admin Dev",
                lng: ['vue3.js', 'tailwindCss', 'js'],
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
                url: "https://picsum.photos/id/1020/800/450",
                caption: "User management panel",
                credit: "Photo by Admin Dev",
                lng: ['vue3.js', 'tailwindCss', 'js'],
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
                url: "https://picsum.photos/id/1022/800/450",
                caption: "Workout selection screen",
                credit: "Photo by Fitness Dev",
                lng: ['python', 'socket.io', 'mysql'],
                visit: "#",
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
                url: "https://picsum.photos/id/1023/800/450",
                caption: "Weekly progress charts",
                credit: "Photo by WorkNest",
                lng: ['js', 'HTML5', 'CSS', 'socket.io', "REST apis"],
                visit: "#",
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
        title: "E-commerce CMS",
        url: "",
        description: "Headless CMS for online stores with Stripe integration.",
        images: [
            {
                url: "https://picsum.photos/id/1027/800/450",
                caption: "Product management interface",
                credit: "Photo by E-commerce Dev",
                lng: ['vue3.js', 'tailwindCss', 'js'],
                visit: "#",
                code: `// Product schema definition
const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, min: 0 },
  inventory: { type: Number, default: 0 },
  variants: [{
    sku: String,
    options: Map
  }],
  createdAt: { type: Date, default: Date.now }
});

// GraphQL mutation
type Mutation {
  createProduct(input: ProductInput!): Product
    @adminRequired
    @validateInput
}`,
            },
            {
                url: "https://picsum.photos/id/1028/800/450",
                caption: "Stripe checkout integration",
                credit: "Photo by E-commerce Dev",
                lng: ['vue3.js', 'tailwindCss', 'js'],
                visit: "#",
                code: `// Serverless function for Stripe checkout
export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items.map(item => ({
      price: item.stripePriceId,
      quantity: item.quantity
    })),
    mode: 'payment',
    success_url: \`\${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}\`,
    cancel_url: \`\${req.headers.origin}/canceled\`,
  });

  res.json({ id: session.id });
};`,
            },
        ],
    },
];


