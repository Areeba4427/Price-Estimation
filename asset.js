const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

});


function slider_change() {

    for (let i = 1; i < 9; i++) {
        if (this.id == "range" + i) {
            document.getElementById("value" + i).value = this.value;
        }
    }

}


function value_change() {

    for (let i = 1; i < 9; i++) {
        var slide = document.getElementById("range" + i);
        if (this.id == "value" + i) {


            if (parseInt(this.value) > parseInt(slide.max)) {

                this.value = slide.max;
                slide.value = slide.max;
            }
            else {
                slide.value = this.value;

            }

        }
    }

}

function total_calculation(){

    
}

function dynamic_div() {
    if (this.id == 'range1' || this.id == "value1") {
        document.getElementById("location_number").textContent = this.value;
        var total_price = parseInt(this.value) * 150;
        document.getElementById("location_price").textContent = formatter.format(total_price);
    }
    else if (this.id == "range2" || this.id == "value2") {
        document.getElementById("station_number").textContent = this.value;
        var total_price = parseInt(this.value) * 49;
        document.getElementById("station_price").textContent = formatter.format(total_price);
    }

    else if (this.id == "range3" || this.id == "value3") {

        document.getElementById("cloud_check").checked = true;

        var cloud = document.getElementById("cloud_div");
        if ($("#cloud_div").find("label").length !== 0) {

            while (cloud.firstChild) {
                cloud.removeChild(cloud.lastChild);
            }
        }


        var div_new = document.createElement("label");
        div_new.textContent = "Cloud Backup - PC x ";

        var inner_div = document.createElement("span");
        inner_div.textContent = this.value;
        inner_div.setAttribute("id", "cloud_number");
        inner_div.setAttribute("class", "quantity");
        div_new.appendChild(inner_div);

        var price = document.createElement("label");
        price.setAttribute("class", "bold");
        price.setAttribute("id", "cloud_price");
        price.textContent = formatter.format(parseInt(this.value) * 12);

        cloud.appendChild(div_new);
        cloud.appendChild(price);
        cloud.classList.remove("invisible");

        if (this.value == 0) {
            if ($("#cloud_div").find("label").length !== 0) {

                while (cloud.firstChild) {
                    cloud.removeChild(cloud.lastChild);
                }
            }
            cloud.classList.add("invisible");
        }
       
    }


    else if (this.id == "range4" || this.id == "value4") {

        document.getElementById("disk_check").checked = true;

        var disk = document.getElementById("disk_div");

        if ($("#disk_div").find("label").length !== 0) {

            while (disk.firstChild) {
                disk.removeChild(disk.lastChild);
            }
        }


        var div_new = document.createElement("label");
        div_new.textContent = "Encryption - PC x ";

        var inner_div = document.createElement("span");
        inner_div.textContent = this.value;
        inner_div.setAttribute("id", "disk_number");
        inner_div.setAttribute("class", "quantity");
        div_new.appendChild(inner_div);

        var price = document.createElement("label");
        price.setAttribute("class", "bold");
        price.setAttribute("id", "disk_price");
        price.textContent = formatter.format(parseInt(this.value) * 9);

        disk.appendChild(div_new);
        disk.appendChild(price);
        disk.classList.remove("invisible");
        if (this.value == 0) {
            if ($("#disk_div").find("label").length !== 0) {

                while (disk.firstChild) {
                    disk.removeChild(disk.lastChild);
                }
            }
            disk.classList.add("invisible");
        }
       
    }


    
    else if (this.id == "range5" || this.id == "value5") {

        document.getElementById("server_number").textContent = this.value;
        var total_price = parseInt(this.value) * 250;
        document.getElementById("server_price").textContent = formatter.format(total_price);
    }



    else if (this.id == "range6" || this.id == "value6") {

        document.getElementById("cloud_check_2").checked = true;

        var cloud2 = document.getElementById("cloud_div_2");
    
        if ($("#cloud_div_2").find("label").length !== 0) {

            while (cloud2.firstChild) {
                cloud2.removeChild(cloud2.lastChild);
            }
        }


        var div_new = document.createElement("label");
        div_new.textContent = "Cloud Backup - Server x ";

        var inner_div = document.createElement("span");
        inner_div.textContent = this.value;
        inner_div.setAttribute("id", "cloud2_number");
        inner_div.setAttribute("class", "quantity");
        div_new.appendChild(inner_div);

        var price = document.createElement("label");
        price.setAttribute("class", "bold");
        price.setAttribute("id", "cloud2_price");
        price.textContent = formatter.format(parseInt(this.value) * 100);

        cloud2.appendChild(div_new);
        cloud2.appendChild(price);
        cloud2.classList.remove("invisible");

        if (this.value == 0) {
            if ($("#cloud_div_2").find("label").length !== 0) {

                while (cloud2.firstChild) {
                    cloud2.removeChild(cloud2.lastChild);
                }
            }
            cloud2.classList.add("invisible");
        }

    }

     else if (this.id == "range7" || this.id == "value7") {


        var mobile = document.getElementById("mobile");
    
        if ($("#mobile").find("label").length !== 0) {

            while (mobile.firstChild) {
                mobile.removeChild(mobile.lastChild);
            }
        }


        var div_new = document.createElement("label");
        div_new.textContent = "Mobile Devices x ";

        var inner_div = document.createElement("span");
        inner_div.textContent = this.value;
        inner_div.setAttribute("id", "mobile_number");
        inner_div.setAttribute("class", "quantity");
        div_new.appendChild(inner_div);

        var price = document.createElement("label");
        price.setAttribute("class", "bold");
        price.setAttribute("id", "mobile_price");
        price.textContent = formatter.format(parseInt(this.value) * 10);

        mobile.appendChild(div_new);
        mobile.appendChild(price);
        mobile.classList.remove("invisible");
        
        if (this.value == 0) {
            if ($("#mobile").find("label").length !== 0) {

                while (mobile.firstChild) {
                    mobile.removeChild(mobile.lastChild);
                }
            }
            mobile.classList.add("invisible");
        }
     }


     else {

        var bit = document.getElementById("bitstream");
    
        if ($("#bitstream").find("label").length !== 0) {

            while (bit.firstChild) {
                bit.removeChild(bit.lastChild);
            }
        }


        var div_new = document.createElement("label");
        div_new.textContent = "BMRD Users x ";

        var inner_div = document.createElement("span");
        inner_div.textContent = this.value;
        inner_div.setAttribute("id", "bit_number");
        inner_div.setAttribute("class", "quantity");
        div_new.appendChild(inner_div);

        var price = document.createElement("label");
        price.setAttribute("class", "bold");
        price.setAttribute("id", "bit_price");
        price.textContent = formatter.format(parseInt(this.value) * 9);

        bit.appendChild(div_new);
        bit.appendChild(price);
        bit.classList.remove("invisible");
        
        if (this.value == 0) {
            if ($("#bitstream").find("label").length !== 0) {

                while (bit.firstChild) {
                    bit.removeChild(bit.lastChild);
                }
            }
            bit.classList.add("invisible");
        }

     }

     total_calculation();
}
document.querySelectorAll('[id^="range"]').forEach(element => element.addEventListener("input", slider_change));
document.querySelectorAll('[id^="value"]').forEach(element => element.addEventListener("change", value_change));


document.querySelectorAll('[id^="range"]').forEach(element => element.addEventListener("input", dynamic_div));
document.querySelectorAll('[id^="value"]').forEach(element => element.addEventListener("change", dynamic_div));

