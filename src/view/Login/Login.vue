<style>
@import'../Login/login.css';
</style>
<template>
<div id="login">
    <div class="container">
        <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-4">
                <form>
                    <div class="form-group">
                        <input class="form-control" type="text" name="username" v-model="uname" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" v-model="pass" placeholder="Password" />
                    </div>
                            <button class="btn btn-warning" type="button" v-on:click='login'>Signup</button>
                </form>
            </div>
        </div>
    </div>

</div>
</template>

<script src="../Login/login.js">

</script>
