<style>
@import'../Registration/registration.css';
</style>
<template>
<div id="register">
    <div class="container">
       
            
        <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-4">
                 <div class="panel panel-default">
                <form>
                    <div class="form-group">
                        <input class="form-control" type="text" name="username" v-model="uname" placeholder="Username" />
                    </div>
                     <div class="form-group">
                        <input class="form-control" type="email" name="email" v-model="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="tel" name="mob" v-model="mob" placeholder="Contact" />
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" v-model="pass" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" v-model="cpass" placeholder="Confirm Password" />
                    </div>
                            <button class="btn btn-success" type="button" v-on:click='register'>Register</button>
                </form>
            </div>
        </div>
    </div>

        </div>
</div>
</template>

<script src="../Registration/registration.js">

</script>