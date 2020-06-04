<template>
    <div>
        <div class="form">
                <div class="note">
                    <p>Registration for new!!!</p>
                </div>

                <div class="form-content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="User Name *" value=""
                                v-model="post.username"/>
                            </div>
                            <div class="error" v-if="!$v.post.username.required" style="color:red">
                                this field is required!!!</div>
                                
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Phone Number *" value=""
                                v-model="post.phone"/>
                            </div>
                            
                            <div class="error" v-if="$v.post.phone.$invalid" style="color:red">
                                Enter 10 digit phone number!!!</div>
                                <div class="error" v-if="!($v.post.phone.minLength<10||
                                $v.post.phone.maxLength>10)" style="color:red">
                                this field is required!!!</div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Password *" value=""
                                v-model="post.password"/>
                            </div>
                            <div class="error" v-if="!$v.post.password.required" style="color:red">
                                this field is required!!!</div>
                                
                            <div class="form-group">
                                <input type="text" class="form-control" 
                                placeholder="Confirm Password *" 
                                value=""
                                v-model="post.cnf_password"/>
                            </div>
                            <div class="error" v-if="!$v.post.cnf_password.sameAsPassword" style="color:red">
                                Passwords must be identical.</div>
                                
                        </div>
                    </div>   
                    <button type="button" class="btnSubmit" @click="navigate()">Submit</button>
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
            }
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
        navigate(){
            //console.log(this.post.username);
            if(this.post.phone.length==10){
            let uri="http://localhost:4000/posts/add"
            this.axios.post(uri,this.post).then((c)=>{
            });
            this.$router.push({name:'login'});
            }
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