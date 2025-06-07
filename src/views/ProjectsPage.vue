<template>
  <section class="space-y-16 p-5">
    <div class="p-3 bg-primary border border-gray-200 dark:border-gray-500 text-white rounded-lg">
      My projects on both front end and backend from 2022 - Date.now()!
    </div>

    <div v-for="(project, index) in projects" :key="index"
      class="custom-scroll max-w-[1024px] w-full overflow-x-hidden mx-auto px-4 sticky top-0 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-500 rounded-2xl shadow-lg p-6 mb-6 transition-all duration-500 ease-in-out"
      :class="[
        openedSlide === index
          ? 'z-[100] fixed md:inset-0 inset-x-0 bottom-0 top-10 md:top-1/2  md:transform  md:-translate-y-1/2 md:scale-105 md:max-w-[90%] md:max-h-[90vh] border-2 overflow-auto'
          : 'z-0',
      ]">
      <div class="mb-6 relative">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
          {{ project.title }}
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mt-2 text-base sm:text-lg">
          {{ project.description }}
        </p>
        <button @click="activateThisProject(index)"
          class="absolute top-0.5 right-0.5 border-1 outline-0 cursor-pointer text-2xl text-green-400 px-2 rounded hover:bg-gray-600 hover:border-gray-400 border-gray-600">
          <ion-icon :name="openedSlide === index ? 'close-outline' : 'trending-up-outline'"></ion-icon>
        </button>
      </div>

      <div class="relative">
        <div class="overflow-hidden rounded-2xl shadow-md">
          <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide[index] * 100}%)` }">
            <div v-for="(img, i) in project.images" :key="i"
              class="min-w-full grid md:grid-cols-2 gap-6 items-start justify-center px-2 py-4">
              <!-- Image Section -->
              <div>
                <img :src="img.url" :alt="img.caption" class="w-full h-60 sm:h-80 md:h-96 object-cover rounded-lg" />
                <div class="p-4 bg-white dark:bg-gray-800 mt-2 rounded-md">
                  <p class="text-sm text-gray-700 dark:text-gray-300">
                    {{ img.caption }}
                  </p>
                  <p class="text-xs text-gray-500">{{ img.credit }} <span
                      class="px-2 mx-1 rounded-lg border border-gray-600" v-for="lg in img.lng">{{ lg }}</span></p>
                </div>
              </div>

              <!-- Code Section -->
              <div
                class="bg-gray-900 text-green-400 p-4 rounded-lg font-mono overflow-auto shadow-md h-[230px] md:h-[100%]">
                <div class="flex justify-between items-center mb-3 text-sm">
                  <a href="#" class="text-blue-400 hover:underline flex items-center gap-1">
                    <ion-icon name="open-outline"></ion-icon> Visit
                  </a>
                  <button @click="copyToClipboard(img.code)"
                    class="text-yellow-400 hover:underline flex items-center gap-1">
                    <ion-icon name="copy-outline"></ion-icon> Copy
                  </button>
                </div>
                <pre class="custom-scroll max-h-[400px] overflow-y-auto text-sm leading-relaxed whitespace-pre-wrap">
<code>{{ img.code }}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Dots -->
        <div class="flex justify-center gap-3 mt-4 absolute bottom-0 left-1/2 md:relative md:left-0">
          <button v-for="(img, i) in project.images" :key="i" @click="setSlide(index, i)"
            class="w-4 h-4 rounded-full focus:outline-none transition-colors cursor-pointer" :class="currentSlide[index] === i
              ? 'bg-blue-600/70 hover:bg-blue-600/100'
              : 'bg-gray-400/70 hover:bg-purple-400'
              " aria-label="Slide dot"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  pre code {
    font-size: 0.85rem;
  }
}

@media (max-width: 640px) {
  h2 {
    font-size: 1.5rem;
  }

  .carousel img {
    height: 250px;
  }
}

.custom-scroll {
  scrollbar-color: #404042 transparent;
}

.custom-scroll::-webkit-scrollbar {
  width: 3px !important;
  height: 3px !important;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #9030c8;
  border-radius: 6px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
</style>

<script setup>
import { ref, onMounted } from "vue";

const currentSlide = ref([]);

const openedSlide = ref(null);

const activateThisProject = (index) => {
  if (openedSlide.value === index) {
    openedSlide.value = null;
  } else {
    openedSlide.value = index;
  }
};

onMounted(() => {
  // Ensure all slide indices are initialized
  currentSlide.value = projects.map(() => 0);
});

const setSlide = (projectIndex, slideIndex) => {
  currentSlide.value[projectIndex] = slideIndex;
};

const copyToClipboard = async (code) => {
  try {
    await navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

const projects = [
  {
    title: "Vue Music Player",
    description:
      "A sleek music streaming interface with real-time playlist syncing using Vue 3 and WebSocket.",
    images: [
      {
        url: "https://picsum.photos/id/1015/800/450",
        caption: "Dashboard view with album carousel",
        credit: "Photo by Artist A",
        lng: ['vue3.js', 'tailwindCss', 'js'],
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
    title: "FastAPI Admin Dashboard",
    description:
      "An admin interface to manage users, downloads, and playlist entries with SQLAdmin.",
    images: [
      {
        url: "https://picsum.photos/id/1018/800/450",
        caption: "Admin login screen",
        credit: "Photo by Admin Dev",
        lng: ['vue3.js', 'tailwindCss', 'js'],
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
    title: "WorkNest",
    description:
      "Job seek website build with javascript,python,myql,html and Css",
    images: [
      {
        url: "https://picsum.photos/id/1022/800/450",
        caption: "Workout selection screen",
        credit: "Photo by Fitness Dev",
        lng: ['vue3.js', 'tailwindCss', 'js'],
        lng: ['python', 'socket.io', 'mysql'],
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
    title: "Python Data Visualization Toolkit",
    description: "Interactive data visualization library for financial analytics.",
    images: [
      {
        url: "https://picsum.photos/id/1025/800/450",
        caption: "Stock price correlation matrix",
        credit: "Photo by Data Team",
        lng: ['vue3.js', 'tailwindCss', 'js'],
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
    title: "E-commerce CMS",
    description: "Headless CMS for online stores with Stripe integration.",
    images: [
      {
        url: "https://picsum.photos/id/1027/800/450",
        caption: "Product management interface",
        credit: "Photo by E-commerce Dev",
        lng: ['vue3.js', 'tailwindCss', 'js'],
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
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}
</style>
