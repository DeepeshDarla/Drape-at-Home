const menu=document.querySelector('.menu');
const mobile=document.querySelector('.mobile-nav');
if(menu&&mobile){menu.addEventListener('click',()=>{mobile.classList.toggle('open');menu.setAttribute('aria-expanded',mobile.classList.contains('open'));});mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')))}

document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const expanded=btn.getAttribute('aria-expanded')==='true';
    const panel=document.getElementById(btn.getAttribute('aria-controls'));
    btn.setAttribute('aria-expanded',String(!expanded));
    if(panel){panel.classList.toggle('is-open',!expanded);}
  });
});

const preferredDate=document.getElementById('preferred-date');
if(preferredDate){preferredDate.min=new Date().toISOString().split('T')[0];}

const homeVisitForm=document.getElementById('home-visit-form');
const formNotice=document.getElementById('form-notice');
if(homeVisitForm){
  homeVisitForm.addEventListener('submit',function(e){
    e.preventDefault();
    const btn=homeVisitForm.querySelector('button[type="submit"]');
    const originalBtnText=btn?btn.textContent:'';
    if(btn){btn.disabled=true;btn.textContent='SENDING...';}
    const body=new URLSearchParams(new FormData(homeVisitForm)).toString();
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body})
      .then(function(res){
        if(!res.ok){throw new Error('Submit failed');}
        homeVisitForm.hidden=true;
        if(formNotice){formNotice.textContent="Thanks! We've received your enquiry and will contact you shortly to arrange your home visit.";}
      })
      .catch(function(){
        if(btn){btn.disabled=false;btn.textContent=originalBtnText;}
        if(formNotice){formNotice.textContent='Something went wrong sending that. Please try again, or message us directly on WhatsApp below.';}
      });
  });
}
