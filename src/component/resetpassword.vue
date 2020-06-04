<template>
    <div>
        <div class="form">
                <div class="note">
                    <p>Reset Your Password!!!</p>
                </div>

                <div class="form-content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" v-model="post.username" placeholder="Enter Username"
                               class="form-control"/>
                            </div>
                            <div class="error" v-if="!$v.post.username.required" style="color:red">
                                username required!!!</div>

                            <div class="form-group">
                               <input type="text" v-model="post.phone" placeholder="Enter Phone Number"
                               class="form-control"/>
                            </div>
                            
                            <div class="error" v-if="$v.post.phone.$invalid" style="color:red">
                                Enter 10 digit phone number!!!</div>
                                <div class="error" v-if="!($v.post.phone.minLength<10||
                                $v.post.phone.maxLength>10)" style="color:red">
                                this field is required!!!</div>

                            <div class="form-group">
                                <input type="text" v-model="post.password" placeholder="enter password" 
                                class="form-control"/>
                            </div>
                            
                            <div class="error" v-if="!$v.post.password.required" style="color:red">
                                password required!!!</div>
                            <div class="form-group">
                                <input type="text" v-model="post.cnf_password" placeholder="enter confirm password" 
                                class="form-control"/>
                                <div class="error" v-if="!$v.post.cnf_password.sameAsPassword" style="color:red">
                                password must be identical!!!</div>
                            </div>
                        </div>
                    </div>   
                    <button type="button" class="btnSubmit" @click="reset()">Submit</button>
                </div>
            </div>
    </div>
</template>

<script>
import { required, minLength, between, sameAs, maxLength } from 'vuelidate/lib/validators';
export default {
    data(){
        return{
            post:{
                username:'',
                phone:'',
                password:'',
                cnf_password:''
            },
            created_user:'',
            created_phone:''
        }
    },
    validations:{
        post:{
            phone:{
            required,
            minLength:minLength(10),
            maxLength:maxLength(10)
            },
            password:{
                required,
                minLength:minLength(4)
            },
            cnf_password: {
                sameAsPassword: sameAs('password')
            },
            username:{
                required
            }
        }
    },
    methods:{
        reset(){
            
                 //delete the previous data
                let urir="http://localhost:4000/posts/delete";
                this.axios.delete(urir,this.post).then((c)=>{
                    console.log('deleted',this.post.phone);
                });
 
                //save the newone
                let uri="http://localhost:4000/posts/add";
                this.axios.post(uri,this.post).then((c)=>{
                    console.log('added successfully!!!');
                });
                
                this.$router.push({name:'login'});
            }
        }
    }

</script>
<style scoped>
.note
{
    text-align: center;
    height: 80px;
    background: -webkit-linear-gradient(left, #0072ff, #8811c5);
    color: #fff;
    font-weight: bold;
    line-height: 80px;
}
.form-content
{
    padding: 5%;
    border: 1px solid #ced4da;
    margin-bottom: 2%;
}
.form-control{
    border-radius:1.5rem;
}
.btnSubmit
{
    border:none;
    border-radius:1.5rem;
    padding: 1%;
    width: 20%;
    cursor: pointer;
    background: #0062cc;
    color: #fff;
}
</style>