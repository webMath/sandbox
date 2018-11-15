[Exploratoria]( http://exploratoria.github.io ) &raquo; [Sandbox]( http://exploratoria.github.io/sandbox/ ) &raquo; [Sandbox]( http://exploratoria.github.io/sandbox/sandbox/ ) &raquo; 
[version-manage-v-0-1-0 Read Me]( index.html )
===

<span style=display:none; >[You are now in GitHub source code view - click here to view Read Me file as a web page]( http://exploratoria.github.io/sandbox/sandbox/version-manage/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view Read Me file as source code' onclick=window.location.href='https://github.com/exploratoria/sandbox/tree/gh-pages/sandbox/version-manage/'; />

<iframe id=ifr src="iframe-site-show-buttons-version-manage-v-0-1-1.html" width=100% height=500px style="border: 0px solid; overflow: hidden; " ></iframe>  

## Concept

### Mission  
<!-- a statement of a rationale, applicable now as well as in the future -->

* To demonstrate a simple yet comprehensive versioning system
* Uses short URLs that point to long URLs
* Easy to access current 'build' - public facing - and 'dev' - under current development - versions
	* Uses ./dev/index.html and ./build/index.html files to point to current versions
	* The index.html files need to be updated manually
	* The index.html files do pass through location.hash data
* No need to know Git in order to browse versions
* All versions are potentially runnable
* GitHub versioning is maintained
	* Unless move is from one repo to another. In which case perhaps a note in a txt file is used to indicate the previous locations of the project
* Follows [semantic versioning]( http://semver.org/ )
* If the app requires more than two or three files then the files should be in folders named according to the semantic versioning

* Files copied using the OS do not carry forward the git history of the file
* Each version - copied using the OS - is accompanied in Git only by the changes made to that version 
* The Git clone command operates on entire repositories


### Vision  
<!--  a descriptive picture of a desired future state -->

## Issues

* Iframe not displaying properly on FF

## Notes

Some notes covering the background of managing versions

### URL Issues

Users and web site managers want to have a short simple URLs that never change to call up apps.

On the other hand, developers may want long meaningful names that update with every new revision.

### Solution

Use the trick that browsers automatically look for a file named index.html after a directory name.

Long URLs can cause problems. The technique used here to avoid long URLs is to have short URLa such as these examples:

* www.example.com/app/latest
* www.example.com/app/build
* www.example.com/app/dev

which auto-magically go to:

* www.example.com/app/latest/index.html
* www.example.com/app/build/index.html
* www.example.com/app/dev/index.html

These files - using

`window.location.href = '../very-long-tedious-folder-name/more-folders/very-long-file-name.html' + location.hash;

can be made to redirect to the long URL intended files:

* www.example.com/app/very-long-tedious-folder-name/more-folders/very-long-file-name.html
* www.example.com/app/very-long-tedious-folder-name/more-folders/very-long-file-name-v-1.1.1.html
* www.example.com/app/very-long-tedious-folder-name/more-folders/very-long-file-name-v-1.1.5.html  

Every time a developer creates a new revision that users or other web pages should see then the developer must update the short URL so it points to the correct file or revision.

This structure has makes no stipulation as to where the long URL files or folders are kept. The long URLs may be adjacent to the short URLs or far away.

### GitHub History Issues

The Github revision system is set up to deal with entire repositories. This works well with larg project with daily or regular interval builds.
It is less satisfactory when a repo has many small projects each being revised in varying schedules

### Solution

We are trying out the Semantic Versioning system of the v1.1.1 format (with files saved as, for example, -v-1-1-1.html).

When a new revision is needed, the previous revision should be copied and renamed.

For example, a series might look like this:

* file-v-0.1.0.html
* file-v-0.1.1.html
* file-v-0.1.2.html

As long as the files are in the same folder they wee created in, they should each point to their own revision history. 
In file-v-0-1-1.html you will only see the edits for file-v-0-1-1.html.
In order to see the whole history you will need to inspect each file individually.

### Managing Revisions Issues

You run an app. It just works. And that's great.

It's almost like magic

But the chances are that app too quite a while to develop and there were many issues along the way.

That photo of the supermodel may be gorgeous, but it gives no indication of the huge time and effort that went into v=creating that image.

Similarly great apps do just appear but require much labor and thought in order to reach fruition.

How can we show that great apps start often start as tine 'hello world' projects. How can you see that apps like mighty oak trees grow from tiny acorns.

### Solution
 
Keep working revisions of apps from the first few lines - and all the way through the project.

GitHub and revision control systems are grea at keeping source code around.

Few humans can look at source code and visualize the app in operation. The only proper method is to keep source code and working versions all the way throught the project.

When this happens, you are able to see and feel a project going from inception to maturity. And chances are you can see the many many failures it took to achieve success.



## Road Map