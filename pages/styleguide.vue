<script lang="ts" setup>
const { showAlert } = useAlert()

showAlert('This is a Warning alert', 'warning')
</script>

<template>
  <section class="layout--demo">
    <header>
      <h3>Base UI layer</h3>
      <menu>
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </menu>
    </header>
    <aside>
      <section>
        <h4>Nav</h4>
        <nav>
          <li><a href="#elements"><Icon name="mdi:atom"/> Elements</a></li>
          <li><a href="#components"><Icon name="material-symbols:settings-input-component-outline"/> Components</a></li>
          <li><a href="#variables"><Icon name="lucide:variable"/> Variables</a></li>
        </nav>
      </section>
    </aside>
    <main>
      <p id="elements"><strong>Elements</strong></p>
      <h1>Heading 1 - Consectetur Pharetra Tristique Sit Egestas</h1>
      <h2>Heading 2 - Ridiculus Aenean Etiam Tristique Inceptos</h2>
      <h3>Heading 3 - Mattis Ridiculus Justo Vehicula Vestibulum</h3>
      <h4>Heading 4 - Pellentesque Ridiculus Dapibus Pharetra Quam</h4>
      <h5>Heading 5 - Ligula Tellus Bibendum Cras Dolor</h5>
      <h6>Heading 6 - Pharetra Condimentum Egestas Lorem Etiam</h6>
      <hr>
      <p class="lead">
        Paragraph Lead - Maecenas faucibus mollis interdum. <strong>Aenean eu leo quam.</strong> Pellentesque ornare sem
        lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris <a href="#">condimentum
          nibh</a>, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean
        eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis
        euismod.
      </p>
      <p>
        Paragraph - Maecenas faucibus mollis interdum. <strong>Aenean eu leo quam</strong>. Pellentesque ornare sem
        lacinia quam venenatis vestibulum. <em>Fusce dapibus, tellus ac cursus commodo</em>, tortor mauris <a
          href="#">condimentum nibh</a>, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis
        ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem
        malesuada magna mollis euismod.
      </p>
      <p>
        <small>Paragraph - Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis
          euismod.</small>
      </p>
      
      <hr>
      <ul>
        <li>Dolor Ligula Vulputate Adipiscing Malesuada</li>
        <li>Inceptos Porta Mollis Ridiculus Sit</li>
        <li>Amet Cursus Lorem Ipsum Vehicula</li>
      </ul>
      <ol>
        <li>Dolor Ligula Vulputate Adipiscing Malesuada</li>
        <li>Inceptos Porta Mollis Ridiculus Sit</li>
        <li>Amet Cursus Lorem Ipsum Vehicula</li>
      </ol>
      <hr>
      <menu>
        <li><a href="#">Home</a></li>
        <li><a href="#">Bibendum</a></li>
        <li><a href="#">Ligula</a></li>
        <li class="active"><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </menu>
      <hr>
      <label for="">
        Ornare Tristique
      </label>
      <input type="text" placeholder="Commodo Amet Ultricies Pharetra">

      <label for="">
        Justo
      </label>
      <input type="text" class="input--error" value="Fringilla Parturient Sollicitudin Cras">
      <p>
        <small>Fusce Vulputate Vestibulum Purus</small>
      </p>

      <label for="">
        Nullam Lorem
      </label>
      <input type="text" disabled value="Dapibus Condimentum Sit">


      <label for="">
        Consectetur 
      </label>
      <input type="date">

      <label for="">
        Nibh
      </label>
      <input type="number" value="23">

      <label for="">
        Nullam
      </label>
      <input type="file" value="23">


      <hr>

      <label for="">
        Nibh
      </label>
      <select>
        <option value="">Default</option>
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
      </select>

      <select disabled>
        <option value="">Default</option>
        <option value="1" selected>Value 1</option>
        <option value="2">Value 2</option>
      </select>

      <select multiple>
        <option value="">Default</option>
        <option value="1">Value 1</option>
        <option value="2" selected>Value 2</option>
      </select>


      <hr>

      <label for="">
        Nibh
      </label>
      <textarea rows="3" placeholder="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."></textarea>

      <hr>

      <div>
        <input id="check1" type="checkbox">
        <label for="check1"> Sit Inceptos </label>
      </div>
      
      <div>
        <input id="check2" type="checkbox" checked>
        <label for="check2"> Egestas Mollis </label>
      </div>
      
      <div>
        <input id="radio1" name="radio" type="radio">
        <label for="radio1"> Cras Tortor </label>
      </div>

      <div>
        <input id="radio2" name="radio" type="radio" checked>
        <label for="radio2"> Cras Bibendum </label>
      </div>

      <hr>

      <div>
        <label for="volume">Volume</label>
        <input type="range" id="volume" name="volume" min="0" max="11">
      </div>

      <hr>

      <button>
        Cursus
      </button>

      <button>
        <AppIcon icon="🍉" /> Inceptos
      </button>

      <button disabled>
        Tellus Dolor
      </button>

      <hr>

      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
            <td>Value 3</td>
            <td>Value 2</td>
            <td>Value 3</td>
            <td>
              <button>
                <AppIcon icon="🍀" /> Inceptos
              </button>
              <button>
                <AppIcon icon="🍎" />
              </button>
            </td>
          </tr>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
            <td>Value 3</td>
            <td>Value 2</td>
            <td>Value 3</td>
            <td>
              <button>
                <AppIcon icon="🌈" /> Inceptos
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <hr>

      <details>
        <summary>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </summary>
        <article>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </article>
      </details>

      <hr>
      
      <figure>
        <img src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/ngts_web_st_insideguide_lausanne_14_hr.jpg?w=1600&h=900" alt="Trulli" style="width:100%">
        <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
      </figure>

      <hr>
      <hr>
      <p id="components"><strong>Components</strong></p>
      
      <AppAlert/>
      <hr>
      <AppButton>
        <AppIcon icon="🍎" />
      </AppButton>
      <AppButton type="success">
        Success
      </AppButton>
      <AppButton type="warning">
        Warning
      </AppButton>
      <AppButton type="error">
        Error
      </AppButton>
      <AppButton type="primary">
        Info
      </AppButton>
      <hr>
      <AppCard>
        <h2>Card</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.
        </p>
        <AppButton>
          Inceptos
        </AppButton>
      </AppCard>
      <hr>
      <AppRow columns="1fr 1fr 1fr">
        <AppCard>
          <h2>Card</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.
          </p>
          <AppButton>
            Inceptos
          </AppButton>
        </AppCard>
        <AppCard>
          <h2>Card</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.
          </p>
          <AppButton >
            Inceptos
          </AppButton>
        </AppCard>
        <AppCard>
          <h2>Card</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.
          </p>
          <AppButton>
            Inceptos
          </AppButton>
        </AppCard>
      </AppRow>
    </main>
    <footer class="footer--default">
      <p><small>© {{ new Date().getFullYear() }} wgr SA - <strong>Base UI layer</strong></small></p>
    </footer>
  </section>
</template>