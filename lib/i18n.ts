export type Language = 'en' | 'zh'

export const translations = {
  en: {
    nav: {
      product: 'Product',
      architecture: 'Architecture',
      skills: 'Skills',
      developers: 'Developers',
      demos: 'Demos',
      useCases: 'Use Cases',
      resources: 'Resources',
      team: 'Team',
      roadmap: 'Roadmap',
      contact: 'Contact',
      apiPortal: 'API Portal',
      getStarted: 'Request Demo',
      menu: 'Menu',
    },
    hero: {
      eyebrow: 'ISACAI / VLAClaw',
      title: 'Skill-Orchestrated Embodied AI for ROS2 Robots',
      subtitle:
        'VLAClaw connects OpenClaw intelligence with ROS2-enabled robots through rosbridge, enabling voice interaction, visual perception, validated skill execution, and closed-loop embodied control.',
      coreLine:
        'We do not let AI directly drive motors. We let AI orchestrate validated robot skills.',
      ctaPrimary: 'Explore Architecture',
      ctaSecondary: 'View Skill API',
      ctaTertiary: 'Contact Us',
      ctaApiPortal: 'Open API Portal',
      tags: ['OpenClaw Runtime', 'ROS2 / rosbridge', 'Raspberry Pi 5 Gateway', 'VLM / LLM Skill Planning'],
      metrics: [
        { value: '9090', label: 'rosbridge WebSocket endpoint' },
        { value: 'Skill', label: 'AI output boundary' },
        { value: 'ROS2', label: 'stable execution layer' },
        { value: 'Closed loop', label: 'sensor-to-skill feedback' },
      ],
      flow: [
        'Voice / Text / Camera',
        'OpenClaw Agent Runtime',
        'Skill Planner + Server',
        'rosbridge WebSocket',
        'ROS2 Robot Controller',
        'Robot Dog / Arm / Display',
      ],
    },
    entries: {
      eyebrow: 'Choose Your Entry',
      title: 'Start from the question you care about.',
      description:
        'The homepage is now a gateway. Investors, developers, labs, and customers should not need to read one long page from top to bottom.',
      cards: [
        {
          title: 'Platform',
          href: '/platform',
          description: 'Product positioning, architecture, safety boundary, validation plan, and roadmap.',
          cta: 'Explore Platform',
        },
        {
          title: 'Developers',
          href: '/developers',
          description: 'API portal, rosbridge examples, Skill API, skills.yaml, workflow, and engineering notes.',
          cta: 'Open Developer Entry',
        },
        {
          title: 'Solutions',
          href: '/solutions',
          description: 'Use cases, demo scenarios, pilot packages, education, exhibition, and OEM integration paths.',
          cta: 'View Solutions',
        },
        {
          title: 'Company',
          href: '/company',
          description: 'Team, interdisciplinary capability, research background, and reliability-first roadmap.',
          cta: 'Meet the Team',
        },
        {
          title: 'Contact',
          href: '/contact',
          description: 'Choose technical integration, research collaboration, or product pilot deployment.',
          cta: 'Start Conversation',
        },
      ],
    },
    problem: {
      eyebrow: 'Problem',
      title: 'Robots are still controlled like tools, not agents.',
      description:
        'Traditional upper-computer software answers how humans remotely control robots. Embodied AI needs perception, reasoning, validated skills, and feedback-aware execution.',
      cards: [
        {
          title: 'Manual upper-computer control',
          description:
            'Most robot dashboards still send buttons, gait parameters, and one-shot commands without task context or autonomous planning.',
        },
        {
          title: 'Fragmented ROS2 interfaces',
          description:
            'Powerful ROS2 topics, services, custom messages, and action groups are hard for ordinary app developers and AI agents to consume directly.',
        },
        {
          title: 'Unsafe direct AI-to-motor control',
          description:
            'Letting VLA or LLM systems output joint angles, PWM, torque, or servo IDs creates unclear safety boundaries on real hardware.',
        },
        {
          title: 'Missing closed-loop feedback',
          description:
            'Camera, IMU, radar, odometry, and status topics exist, but traditional remote-control software rarely turns them into agent observations.',
        },
      ],
    },
    insight: {
      eyebrow: 'Product Insight',
      title: 'Not a ROS2 replacement. An intelligent upper-computer layer above ROS2.',
      description:
        'VLAClaw keeps stable motion inside robot-side ROS2 nodes while adding an OpenClaw layer for observation, planning, skill validation, and execution monitoring.',
      traditional: {
        title: 'Traditional upper computer',
        items: ['Manual button control', 'Single command at a time', 'Little task memory', 'No visual reasoning', 'Direct parameter tweaking', 'Hard to extend as an agent'],
      },
      vlaclaw: {
        title: 'VLAClaw intelligent upper computer',
        items: ['Language + vision + robot state', 'Multi-step skill planning', 'Sensor feedback loop', 'Skill-based execution', 'rosbridge integration', 'Reusable robot capability library'],
      },
    },
    validation: {
      eyebrow: 'Build Stage',
      title: 'Software-first validation before hardware-heavy scaling.',
      description:
        'At the current startup stage, the website should make the engineering path visible: what can be tested in software, what must be verified on real robots, and how each milestone reduces deployment risk.',
      labels: { goal: 'Goal', evidence: 'Evidence', next: 'Next' },
      cards: [
        {
          title: 'Interface validation',
          promise: 'Prove that OpenClaw can connect to ROS2 robots through rosbridge.',
          evidence: 'WebSocket endpoint, JSON pub/sub examples, sensor topics, and command templates.',
          next: 'Validate against robot-side rosbridge_server and platform-specific topic names.',
        },
        {
          title: 'Skill abstraction',
          promise: 'Turn scattered actions into an AI-callable capability layer.',
          evidence: 'skills.yaml schema, action-group mapping, parameter limits, and execution feedback.',
          next: 'Register 5-8 core skills first: stop, stand, walk, turn, sit_wave, status, camera, IMU.',
        },
        {
          title: 'Safety boundary',
          promise: 'Keep model output at the skill layer rather than raw motor control.',
          evidence: 'Skill Server checks speed, duration, robot posture, IMU stability, and emergency stop.',
          next: 'Test refusal behavior and recovery flow on repeated unsafe commands.',
        },
        {
          title: 'Demo readiness',
          promise: 'Create credible demos even before productized hardware.',
          evidence: 'Voice greeting, visual interaction, safe action group, and developer integration workflows.',
          next: 'Replace schematic visuals with real robot footage as prototypes mature.',
        },
      ],
    },
    workProof: {
      eyebrow: 'Engineering Work',
      title: 'The current asset is not only a concept page. It is an infrastructure build-out.',
      description:
        'Before productized hardware is ready, ISACAI is making the platform credible through software surfaces, integration contracts, developer portals, schemas, workflows, and bilingual product documentation.',
      portal: {
        title: 'Internal API Portal',
        url: 'http://isacai.space',
        description:
          'A companion API website for internal development, robot-agent integration, skill interfaces, and team-side documentation.',
        cta: 'Open isacai.space',
      },
      cards: [
        {
          title: 'Company product website',
          status: 'Public narrative layer',
          detail: 'Explains ISACAI, VLAClaw, product positioning, safety philosophy, roadmap, team, and cooperation paths.',
        },
        {
          title: 'Developer API website',
          status: 'Internal platform layer',
          detail: 'Supports internal developers with API-oriented documentation and a clearer path from robot capability to agent integration.',
        },
        {
          title: 'Skill schema and examples',
          status: 'Execution contract',
          detail: 'Defines how action groups, motion commands, sensor reads, and interaction behaviors become validated robot skills.',
        },
        {
          title: 'rosbridge integration design',
          status: 'Robot connectivity layer',
          detail: 'Documents WebSocket JSON patterns for ROS2 topic subscription, command publishing, and future service calls.',
        },
        {
          title: 'Demo workflow library',
          status: 'Pilot preparation',
          detail: 'Frames voice greeting, visual interaction, safe patrol, and developer integration as repeatable demo workflows.',
        },
        {
          title: 'Bilingual product materials',
          status: 'Fundraising and partnership asset',
          detail: 'Makes the project understandable to investors, labs, robot teams, education customers, and Hong Kong / mainland partners.',
        },
      ],
    },
    solution: {
      eyebrow: 'Solution',
      title: 'VLAClaw turns the upper computer into an embodied agent layer.',
      description:
        'OpenClaw observes sensor topics, reasons with VLM/LLM models, selects validated skills, sends commands through rosbridge, and replans from execution feedback.',
      loop: ['Observe', 'Understand', 'Plan', 'Select Skill', 'Execute', 'Monitor', 'Replan'],
      pillars: [
        {
          title: 'Perception In',
          description: 'Subscribe to camera, IMU, radar, odometry, and robot status topics as agent observations.',
          items: ['/usb_cam/image_raw', '/imu_raw', '/odom', '/scan', '/puppy_control/status'],
        },
        {
          title: 'Intelligence Core',
          description: 'Use OpenClaw, VLM, LLM, memory, and safety rules to convert user intent into a skill plan.',
          items: ['ASR / wake word', 'VLM scene understanding', 'LLM task planning', 'Skill selection', 'Context memory'],
        },
        {
          title: 'Skill Execution Out',
          description: 'Call bounded robot skills that are validated before ROS2 lower controllers execute motion.',
          items: ['walk_forward()', 'turn_left()', 'stop()', 'sit_wave()', 'return_home()'],
        },
      ],
    },
    workflow: {
      eyebrow: 'Integration Workflow',
      title: 'A practical path from an existing ROS2 robot to an OpenClaw-controlled demo.',
      description:
        'This is the implementation story customers and developers need: VLAClaw does not require replacing the robot controller. It maps existing robot capabilities into observations and validated skills.',
      steps: [
        {
          title: 'Audit robot interfaces',
          description: 'List ROS2 topics, services, action groups, sensor streams, and safety commands already available on the robot.',
          artifact: 'Topic map + control checklist',
        },
        {
          title: 'Enable rosbridge',
          description: 'Run rosbridge_websocket on the robot and expose a stable WebSocket endpoint for upper-computer access.',
          artifact: 'ws://robot_ip:9090 connection',
        },
        {
          title: 'Map observations',
          description: 'Normalize camera, IMU, radar, odometry, and status topics into OpenClaw-readable observation channels.',
          artifact: 'Observation adapter',
        },
        {
          title: 'Register skills',
          description: 'Convert motion commands, action groups, services, and interaction behaviors into skills with parameters and limits.',
          artifact: 'skills.yaml + registry',
        },
        {
          title: 'Run bounded demos',
          description: 'Start with single-command and short workflow demos before moving to multi-step planning.',
          artifact: 'Voice greeting / safe patrol demo',
        },
        {
          title: 'Measure and harden',
          description: 'Log latency, success rate, refusal behavior, recovery path, and feedback quality before deployment.',
          artifact: 'Mission logs + safety report',
        },
      ],
    },
    compatibility: {
      eyebrow: 'Compatibility',
      title: 'Designed for ROS2 robots first, then extended across embodiments.',
      description:
        'The platform is strongest where the robot already exposes ROS2 topics or can bridge its controller into a small set of commands, sensors, and status messages.',
      groups: [
        {
          name: 'Robot bodies',
          items: [
            { label: 'Quadruped robot dog', status: 'Primary MVP', note: 'Locomotion, action groups, camera, IMU, greeting demos.' },
            { label: 'Robotic arm / gripper', status: 'Planned extension', note: 'Skill schema supports grasp, release, pose, and vision-guided actions.' },
            { label: 'Interactive display robot', status: 'Ready to model', note: 'Expression display and speech skills can be integrated as non-motion skills.' },
          ],
        },
        {
          name: 'Control interfaces',
          items: [
            { label: 'ROS2 topic publish / subscribe', status: 'Core path', note: 'Sensor observation and motion command surface.' },
            { label: 'ROS2 service call', status: 'Supported pattern', note: 'Useful for buzzer, mode switching, action triggering, and status queries.' },
            { label: 'Action group files', status: 'Skill source', note: '.d6a or platform-specific motion files become validated semantic skills.' },
          ],
        },
        {
          name: 'Compute placement',
          items: [
            { label: 'Raspberry Pi 5 gateway', status: 'Edge target', note: 'Handles connection, lightweight preprocessing, skill dispatch, and local services.' },
            { label: 'Laptop / workstation host', status: 'Development target', note: 'Preferred for coding, debugging, OpenClaw iteration, and visual inspection.' },
            { label: 'Cloud model fallback', status: 'Optional', note: 'Used for heavier VLM/LLM reasoning, long-context planning, and report generation.' },
          ],
        },
      ],
    },
    architecture: {
      eyebrow: 'System Architecture',
      title: 'OpenClaw x rosbridge x ROS2, separated for safety and deployability.',
      description:
        'The architecture separates intelligence, communication, and real-time execution so developers can build robot agents without installing ROS2 on every host.',
      note: 'AI selects validated skills. Real-time motion control stays inside robot-side ROS2 nodes.',
      layers: [
        {
          title: 'Human Interaction',
          description: 'Voice command, text instruction, web dashboard, and developer API.',
          items: ['Voice / ASR', 'Text tasks', 'Web console', 'Developer API'],
        },
        {
          title: 'OpenClaw / VLAClaw Upper Computer',
          description: 'Agent runtime for multimodal understanding, planning, memory, and safety validation.',
          items: ['VLM / LLM planner', 'Skill registry', 'Safety validator', 'Execution monitor'],
        },
        {
          title: 'ROS2 Bridge Layer',
          description: 'rosbridge_websocket exposes ROS2 pub/sub and services over WebSocket JSON.',
          items: ['ws://robot_ip:9090', 'Topic publish / subscribe', 'Service call', 'Cross-platform host'],
        },
        {
          title: 'Robot Lower Computer',
          description: 'Robot-side ROS2 nodes handle sensors, action groups, motors, servos, displays, and arms.',
          items: ['puppy_control', 'ros_robot_controller', 'usb_cam', 'IMU / odom / motors'],
        },
      ],
      observation: {
        title: 'Observation In',
        lines: ['Camera topic -> rosbridge -> OpenClaw perception', 'IMU / odom / radar -> rosbridge -> state estimation'],
      },
      command: {
        title: 'Command Out',
        lines: ['OpenClaw skill decision -> Skill Server', 'Validated skill -> rosbridge -> ROS2 control -> robot execution'],
      },
    },
    philosophy: {
      eyebrow: 'Safety Philosophy',
      title: 'Skill-based control, not unsafe motor-level generation.',
      description:
        'VLAClaw treats action groups, ROS2 commands, services, and navigation behaviors as semantic robot skills. The model chooses skills and parameters, not raw actuator values.',
      direct: {
        title: 'Direct AI-to-Motor Control',
        items: ['Outputs joint angles / PWM / torque', 'Hard to verify on real hardware', 'Unclear failure recovery', 'High risk for quadruped balance', 'Difficult to reuse action groups'],
      },
      skill: {
        title: 'VLAClaw Skill-Based Control',
        items: ['Outputs validated skill calls', 'Skill Server checks parameters', 'ROS2 controller executes stable motion', 'Sensor feedback supports recovery', 'Action groups become reusable capabilities'],
      },
    },
    skills: {
      eyebrow: 'Skill Library',
      title: 'From robot actions to AI-callable skills.',
      description:
        'A PuppyPi-style action group such as sit_wave.d6a can become a semantic skill that OpenClaw can call from natural language while Skill Server enforces safety conditions.',
      categories: [
        {
          name: 'Quadruped Locomotion',
          skills: [
            { name: 'stand_up()', detail: 'Recover to a stable standing posture.', safety: 'Requires no active motion.' },
            { name: 'walk_forward(distance, speed)', detail: 'Move forward with bounded distance and speed.', safety: 'Speed and obstacle checks.' },
            { name: 'turn_left(angle)', detail: 'Rotate with a validated angle range.', safety: 'IMU stability monitored.' },
          ],
        },
        {
          name: 'Action Group Skills',
          skills: [
            { name: 'sit_wave()', detail: 'Play sit_wave.d6a for greeting.', safety: 'Requires stable ground and not walking.' },
            { name: 'bow()', detail: 'Run a pre-authored bow action group.', safety: 'Only from safe posture.' },
            { name: 'dance()', detail: 'Sequence validated action groups.', safety: 'Interruptible by stop.' },
          ],
        },
        {
          name: 'Perception Skills',
          skills: [
            { name: 'get_camera_frame()', detail: 'Read the current camera observation.', safety: 'Read-only.' },
            { name: 'detect_person()', detail: 'Run visual detection on camera frames.', safety: 'No motion side effects.' },
            { name: 'read_imu_state()', detail: 'Estimate stability and motion state.', safety: 'Used before movement.' },
          ],
        },
        {
          name: 'Interaction Skills',
          skills: [
            { name: 'listen_command()', detail: 'Capture voice command for OpenClaw.', safety: 'Wake-word gated.' },
            { name: 'display_expression(emotion)', detail: 'Show expression on a robot display.', safety: 'Allowed during stationary or slow motion.' },
            { name: 'greet_user()', detail: 'Speak, wave, and show a friendly expression.', safety: 'Skill chain validated step by step.' },
          ],
        },
      ],
      yamlTitle: 'skills.yaml example',
      yamlLines: [
        'sit_wave:',
        '  type: action_group',
        '  file: sit_wave.d6a',
        '  description: Robot sits and waves one front leg.',
        '  duration: 5.3',
        '  safety:',
        '    requires_stable_ground: true',
        '    allow_while_walking: false',
        '',
        'walk_forward:',
        '  type: locomotion',
        '  description: Move forward for a given duration and speed.',
        '  parameters:',
        '    duration: { type: number, min: 0.1, max: 5.0 }',
        '    speed: { type: number, min: 0.05, max: 0.4 }',
      ],
      planTitle: 'Natural language to skill plan',
      planLines: ['User: "Come over and say hello."', 'Plan:', '  1. detect_person()', '  2. walk_forward(duration=2.0, speed=0.25)', '  3. stop()', '  4. sit_wave()', '  5. display_expression("happy")'],
    },
    developer: {
      eyebrow: 'Developer API',
      title: 'Developer-friendly ROS2 integration through WebSocket JSON.',
      description:
        'VLAClaw exposes example rosbridge and skill-call patterns so developers can subscribe to robot observations and invoke bounded behaviors without a full ROS2 host setup.',
      portal: {
        title: 'API Portal for internal development',
        description:
          'The platform is paired with an API website for team documentation, robot-agent interfaces, skill calls, integration notes, and future SDK access.',
        url: 'http://isacai.space',
        cta: 'Open API Portal',
      },
      endpointLabel: 'WebSocket endpoint',
      endpoint: 'ws://robot_ip:9090',
      note: 'Example interface. Topic names and message schemas are customizable per robot platform.',
      snippets: [
        {
          title: 'Subscribe IMU',
          lines: ['{', '  "op": "subscribe",', '  "topic": "/imu_raw",', '  "type": "sensor_msgs/Imu"', '}'],
        },
        {
          title: 'Subscribe Camera',
          lines: ['{', '  "op": "subscribe",', '  "topic": "/usb_cam/image_raw",', '  "type": "sensor_msgs/Image"', '}'],
        },
        {
          title: 'Publish Motion',
          lines: ['{', '  "op": "publish",', '  "topic": "/puppy_control",', '  "msg": {', '    "action": "walk_forward",', '    "duration": 1.5,', '    "speed": 0.2', '  }', '}'],
        },
        {
          title: 'Call Skill',
          lines: ['{', '  "skill": "sit_wave",', '  "params": { "repeat_count": 1 },', '  "safety_check": true', '}'],
        },
      ],
      pythonTitle: 'Python WebSocket client sketch',
      pythonLines: ['import json, websocket', '', 'ws = websocket.create_connection("ws://robot_ip:9090")', 'ws.send(json.dumps({', '    "op": "subscribe",', '    "topic": "/imu_raw",', '    "type": "sensor_msgs/Imu"', '}))', '', 'ws.send(json.dumps({', '    "skill": "sit_wave",', '    "params": {},', '    "safety_check": True', '}))'],
      ctas: ['View API Docs', 'Request SDK Access', 'Discuss Integration'],
    },
    demos: {
      eyebrow: 'Demo Scenarios',
      title: 'Input -> reasoning -> skill -> ROS2 execution -> feedback.',
      description:
        'Demos are framed as reliable workflows, not claims of full autonomy. Each behavior remains bounded by skills and robot-side controllers.',
      cards: [
        {
          title: 'Voice Greeting',
          input: 'User says: "Come over and say hello."',
          reasoning: 'OpenClaw decomposes the command into locomotion, stop, greeting, and expression steps.',
          skills: 'walk_forward -> stop -> sit_wave -> display_expression("happy")',
          result: 'Robot moves, greets, reports completion, and keeps IMU status monitored.',
        },
        {
          title: 'Visual Interaction',
          input: 'Camera detects a person approaching.',
          reasoning: 'VLM confirms the person, planner selects a non-contact greeting behavior.',
          skills: 'detect_person -> greet_user -> sit_wave',
          result: 'Robot waves and shows a welcome expression without direct motor-level generation.',
        },
        {
          title: 'Safe Patrol',
          input: 'User asks: "Inspect the front area."',
          reasoning: 'Planner chains route movement, camera capture, scene summary, and return behavior.',
          skills: 'move_forward -> capture_image -> analyze_scene -> return_home',
          result: 'A short mission log is produced with execution state and fallback handling.',
        },
        {
          title: 'Developer Integration',
          input: 'Developer connects through WebSocket JSON.',
          reasoning: 'Host subscribes to observations and invokes registered skills from an external app.',
          skills: 'subscribe topics -> call skill API -> monitor status',
          result: 'A robot demo can be built without installing ROS2 on the host machine.',
        },
      ],
    },
    modules: {
      eyebrow: 'Product Modules',
      title: 'A product matrix for robot-side embodied intelligence.',
      description:
        'VLAClaw is a platform stack rather than a single remote-control page. Each module has a clear role in the upper-computer agent layer.',
      cards: [
        { title: 'OpenClaw Runtime', description: 'Agent loop, tool calling, task planning, context memory, and cloud fallback.', tags: ['VLM / LLM', 'Memory', 'Planner'] },
        { title: 'ROSBridge Adapter', description: 'WebSocket client for ROS2 topic pub/sub, service calls, and JSON serialization.', tags: ['rosbridge', '9090', 'JSON'] },
        { title: 'Perception Hub', description: 'Camera, IMU, radar, odometry, and status streams normalized as observations.', tags: ['Camera', 'IMU', 'Odom'] },
        { title: 'Skill Server', description: 'Skill registry, parameter validation, execution dispatch, and feedback tracking.', tags: ['Registry', 'Safety', 'Status'] },
        { title: 'ActionGroup Manager', description: 'Converts authored action groups such as sit_wave.d6a into callable robot skills.', tags: ['.d6a', 'Actions', 'Reuse'] },
        { title: 'Safety Guard', description: 'Speed limits, posture checks, emergency stop, and repeated-command filtering.', tags: ['Limits', 'E-stop', 'Recovery'] },
      ],
    },
    useCases: {
      eyebrow: 'Use Cases',
      title: 'Built for labs, developers, OEM partners, and embodied AI demos.',
      description:
        'The platform starts with robot dog MVP workflows and expands toward arms, displays, navigation, and multi-embodiment systems.',
      labels: { problem: 'Problem', solution: 'VLAClaw', outcome: 'Outcome' },
      cards: [
        { title: 'Robotics Education', problem: 'Students need a practical bridge between ROS2, VLA, and robot control.', solution: 'Use VLAClaw as a lab platform for topics, skills, and agent workflows.', outcome: 'Faster teaching demos and reproducible student projects.' },
        { title: 'Embodied AI Research', problem: 'Researchers need real robot feedback without hand-building every interface.', solution: 'Expose observations and skills through stable APIs for VLA/VLM/LLM experiments.', outcome: 'Closed-loop experiments with clear safety boundaries.' },
        { title: 'Exhibition Interaction', problem: 'Demo robots need reliable greeting, voice, expression, and staged behavior.', solution: 'Chain validated skills for voice-first interactions and visual greetings.', outcome: 'More credible live demos with bounded recovery.' },
        { title: 'Inspection Prototype', problem: 'Low-cost patrol demos need camera, IMU, and status feedback.', solution: 'Use sensor-aware skills for movement, scene capture, report, and return-home flows.', outcome: 'A practical prototype before industrial hardening.' },
        { title: 'Robot OEM Integration', problem: 'Manufacturers need AI features without rewriting the robot control stack.', solution: 'Keep ROS2 lower control and add an upper-computer agent gateway.', outcome: 'A clearer path from remote control to AI-enabled products.' },
        { title: 'Developer Platform', problem: 'App developers want robot access without maintaining full ROS2 environments.', solution: 'Use WebSocket JSON and the Skill API as the integration surface.', outcome: 'Faster prototypes across Windows, Linux, and macOS hosts.' },
      ],
    },
    offerings: {
      eyebrow: 'Pilot Offers',
      title: 'Concrete collaboration packages for an early-stage embodied AI startup.',
      description:
        'Instead of pretending the platform is already a mass-produced hardware product, ISACAI can offer focused pilot packages that convert real robot capabilities into working embodied AI demos.',
      cards: [
        {
          title: 'ROS2 Robot Integration Sprint',
          ideal: 'For labs or robot teams with an existing ROS2 robot.',
          includes: ['Interface audit', 'rosbridge setup', 'first 5 skills', 'sensor subscription demo', 'integration report'],
          outcome: 'A robot can be controlled through the VLAClaw skill layer instead of a manual-only upper computer.',
        },
        {
          title: 'Education Demo Kit',
          ideal: 'For universities and AI/robotics courses.',
          includes: ['Skill library template', 'developer API examples', 'lecture-ready architecture diagrams', 'voice command demo plan', 'student project topics'],
          outcome: 'A course or workshop can teach ROS2, OpenClaw, VLA, and skill orchestration with one coherent story.',
        },
        {
          title: 'Exhibition Interaction Prototype',
          ideal: 'For showrooms, startup events, and innovation demos.',
          includes: ['Voice greeting script', 'action-group skills', 'display expression flow', 'operator safety panel', 'demo runbook'],
          outcome: 'A reliable staged interaction that communicates embodied AI without overclaiming full autonomy.',
        },
      ],
    },
    resources: {
      eyebrow: 'Resources',
      title: 'Engineering notes that make the platform feel reproducible.',
      description:
        'The website should become a living product and research surface, not only a landing page. These article tracks are ready for real posts and demo logs.',
      cards: [
        { category: 'Engineering Note', title: 'How rosbridge makes ROS2 robots accessible to AI agents', summary: 'A practical guide to WebSocket JSON, topic subscription, and service calls.' },
        { category: 'Demo Log', title: 'Turning sit_wave.d6a into an OpenClaw skill', summary: 'How authored action groups become semantic, validated robot capabilities.' },
        { category: 'Research Note', title: 'Why VLA robots need skill-level control instead of direct joint prediction', summary: 'A reliability-first argument for bounded robot skill orchestration.' },
      ],
    },
    team: {
      eyebrow: 'Team',
      title: 'A cross-disciplinary team for AI, robotics, communications, hardware, and product.',
      description:
        'The company story is strongest when it shows the mix required to build reliable embodied systems: perception, control, edge computing, networks, and deployment strategy.',
      capabilities: ['AI & Computer Vision', 'Robotics Control', 'Wireless Communication', 'FPGA / Edge Acceleration', 'Product Strategy', 'Cloud-Edge Systems'],
      members: [
        { name: 'Dr. Zelin Li', role: 'Founder / AI & Vision', value: 'Leads OpenClaw agent integration, VLA/VLM workflows, visual perception, and skill planning.', background: 'City University of Hong Kong' },
        { name: 'Zhuoheng Ran', role: 'FPGA / Edge Engineer', value: 'Builds acceleration and edge-computing foundations for robot-side deployments.', background: 'City University of Hong Kong' },
        { name: 'Dr. Hao Guo', role: 'Hardware Architect', value: 'Connects chip design, sensors, control boards, and embedded hardware decisions.', background: 'City University of Hong Kong' },
        { name: 'Ms. Yajun Wang', role: 'Product & Finance', value: 'Shapes product strategy, deployment priorities, finance, and partnership motion.', background: 'CMHK / Product Strategy' },
        { name: 'Dr. Xinran Zhao', role: 'Communication Architect', value: 'Designs low-latency networking, ad-hoc communication, and robot connectivity.', background: 'City University of Hong Kong' },
        { name: 'Prof. Huiming Chen', role: 'Scientific Advisor', value: 'Guides cloud-edge collaboration, reliability thinking, and research direction.', background: 'USTB' },
        { name: 'Dr. Chenwei Wang', role: 'AI Scientist', value: 'Supports computer vision, fuzzy perception, imaging algorithms, and embodied AI research.', background: 'Hong Kong Polytechnic University' },
      ],
      affiliations: 'Academic and ecosystem background',
    },
    roadmap: {
      eyebrow: 'Roadmap',
      title: 'Reliability-first roadmap from voice MVP to multi-robot orchestration.',
      description:
        'The roadmap is intentionally staged: build safe single-robot skills first, then add perception, recovery, navigation, and multi-embodiment orchestration.',
      phases: [
        { phase: 'Phase 1', title: 'Voice Command MVP', status: 'Current', items: ['5-8 core skills', 'voice command', 'rosbridge connection', 'manual safety stop'] },
        { phase: 'Phase 2', title: 'Skill Registry and Developer API', status: 'Next', items: ['skills.yaml', 'Skill Server', 'Python / JS SDK', 'developer docs'] },
        { phase: 'Phase 3', title: 'Multimodal Perception', status: 'Planned', items: ['camera topic', 'VLM image understanding', 'IMU monitoring', 'person / obstacle detection'] },
        { phase: 'Phase 4', title: 'Workflow Automation', status: 'Planned', items: ['multi-step tasks', 'failure retry', 'mission logging', 'state-aware replanning'] },
        { phase: 'Phase 5', title: 'Multi-Robot and Multi-Embodiment', status: 'Future', items: ['robot dog + arm + display', 'shared skill registry', 'cloud-edge orchestration'] },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Clear answers for customers, developers, and investors.',
      description:
        'A richer startup website should proactively answer the questions people will ask when the product is still moving from prototype to pilot.',
      items: [
        {
          question: 'Is VLAClaw a robot controller?',
          answer: 'No. VLAClaw is an intelligent upper-computer and skill orchestration layer. Robot-side ROS2 nodes remain responsible for real-time motion and hardware control.',
        },
        {
          question: 'Does the AI directly output motor commands?',
          answer: 'No. The model outputs skill choices and bounded parameters. Skill Server validates the command before ROS2 executes the underlying action.',
        },
        {
          question: 'Do developers need to install ROS2 on the host?',
          answer: 'Not for the primary integration path. The host can connect through rosbridge WebSocket and JSON messages while the robot runs ROS2.',
        },
        {
          question: 'What can be shown before final hardware is ready?',
          answer: 'The architecture, Skill API, rosbridge examples, action-group mapping, developer workflows, and software demos can be shown first. Real robot footage can be added as prototypes mature.',
        },
        {
          question: 'Which robots are easiest to support?',
          answer: 'ROS2-enabled quadruped robots are the first target. Any robot with stable command interfaces, sensor topics, and emergency stop behavior is a candidate for integration.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Three paths to work with ISACAI.',
      description:
        'Whether you are integrating a ROS2 robot, building a research demo, or exploring product deployment, the next step should be clear.',
      channels: [
        { title: 'Technical Integration', description: 'For robot manufacturers, labs, and developers connecting ROS2 robots to VLAClaw.', cta: 'Request Technical Discussion' },
        { title: 'Research Collaboration', description: 'For universities and embodied AI teams working on VLA, OpenClaw, skill learning, and closed-loop planning.', cta: 'Explore Research Collaboration' },
        { title: 'Product / Pilot Deployment', description: 'For education, exhibition, demo, and OEM partners who need a deployable robot experience.', cta: 'Contact Partnership Team' },
      ],
      form: {
        name: 'Name',
        organization: 'Organization',
        email: 'Email',
        interest: 'Interest type',
        message: 'Message',
        submit: 'Prepare Inquiry',
      },
      email: 'contact@gettingrice.com',
    },
    footer: {
      title: 'ISACAI / VLAClaw',
      subtitle: 'OpenClaw-powered upper-computer platform for ROS2 robots.',
      stackLabel: 'Core stack',
      stack: ['OpenClaw', 'ROS2', 'rosbridge', 'Raspberry Pi 5', 'Skill Server', 'VLM / LLM'],
      copyright: '© 2026 Hong Kong GettingRice Artificial Intelligence Limited. All rights reserved.',
    },
  },
  zh: {
    nav: {
      product: '产品',
      architecture: '架构',
      skills: '技能',
      developers: '开发者',
      demos: '演示',
      useCases: '场景',
      resources: '资源',
      team: '团队',
      roadmap: '路线图',
      contact: '联系',
      apiPortal: 'API 站',
      getStarted: '预约演示',
      menu: '菜单',
    },
    hero: {
      eyebrow: 'ISACAI / VLAClaw',
      title: '让 ROS2 机器人拥有可编排的具身智能',
      subtitle:
        'VLAClaw 基于 OpenClaw 构建智能上位机系统，通过 rosbridge 连接四足机器人、机械臂与交互设备，将语音、视觉、状态感知和机器人技能编排为稳定可靠的任务闭环。',
      coreLine:
        '我们不让大模型直接控制电机，而是让大模型选择经过验证的机器人技能。',
      ctaPrimary: '查看系统架构',
      ctaSecondary: '查看 Skill API',
      ctaTertiary: '联系我们',
      ctaApiPortal: '打开 API 站',
      tags: ['OpenClaw Runtime', 'ROS2 / rosbridge', 'Raspberry Pi 5 网关', 'VLM / LLM 技能规划'],
      metrics: [
        { value: '9090', label: 'rosbridge WebSocket 端口' },
        { value: 'Skill', label: 'AI 输出边界' },
        { value: 'ROS2', label: '稳定执行层' },
        { value: '闭环', label: '感知到技能反馈' },
      ],
      flow: [
        '语音 / 文本 / 摄像头',
        'OpenClaw 智能体运行时',
        'Skill Planner + Server',
        'rosbridge WebSocket',
        'ROS2 机器人控制器',
        '机器狗 / 机械臂 / 显示屏',
      ],
    },
    entries: {
      eyebrow: '选择入口',
      title: '从你关心的问题进入，而不是从头读到尾。',
      description:
        '首页现在是入口网关。投资人、开发者、实验室和客户不应该像读 Word 文档一样从上往下拖。',
      cards: [
        {
          title: 'Platform',
          href: '/platform',
          description: '产品定位、系统架构、安全边界、验证计划和路线图。',
          cta: '查看平台',
        },
        {
          title: 'Developers',
          href: '/developers',
          description: 'API Portal、rosbridge 示例、Skill API、skills.yaml、接入流程和工程笔记。',
          cta: '进入开发者入口',
        },
        {
          title: 'Solutions',
          href: '/solutions',
          description: '应用场景、演示流程、试点合作包、教育、展厅和 OEM 接入路径。',
          cta: '查看解决方案',
        },
        {
          title: 'Company',
          href: '/company',
          description: '团队、跨学科能力、研究背景和可靠性优先路线图。',
          cta: '了解团队',
        },
        {
          title: 'Contact',
          href: '/contact',
          description: '选择技术接入、科研合作或产品试点部署。',
          cta: '开始沟通',
        },
      ],
    },
    problem: {
      eyebrow: '问题',
      title: '机器人已经能被遥控，但还没有真正被智能体安全调用。',
      description:
        '传统上位机解决的是人如何遥控机器人。具身智能需要的是感知、推理、经过验证的技能，以及带反馈的可靠执行。',
      cards: [
        {
          title: '上位机仍像遥控器',
          description:
            '多数机器人控制台仍然只是发送按钮、步态参数和一次性动作，缺少任务上下文和自主规划。',
        },
        {
          title: 'ROS2 接口割裂',
          description:
            'ROS2 topic、service、自定义消息和动作组很强，但普通应用开发者和 AI agent 不容易直接使用。',
        },
        {
          title: 'AI 直控电机风险高',
          description:
            '让 VLA 或 LLM 输出关节角、PWM、力矩或舵机 ID，会让真实硬件的安全边界变得不清晰。',
        },
        {
          title: '感知与执行缺少闭环',
          description:
            '摄像头、IMU、雷达、里程计和状态话题虽然存在，但传统遥控软件很少把它们变成智能体 observation。',
        },
      ],
    },
    insight: {
      eyebrow: '产品洞察',
      title: '不是替代 ROS2，而是在 ROS2 之上构建智能上位机。',
      description:
        'VLAClaw 保留机器人端 ROS2 节点的稳定运动控制，同时增加 OpenClaw 层来负责感知、规划、技能校验和执行监控。',
      traditional: {
        title: '传统上位机',
        items: ['人工按钮控制', '一次一个命令', '几乎没有任务记忆', '缺少视觉理解', '直接调节参数', '难扩展成智能体'],
      },
      vlaclaw: {
        title: 'VLAClaw 智能上位机',
        items: ['语言 + 视觉 + 机器人状态', '多步技能规划', '传感器反馈闭环', '技能级执行', 'rosbridge 集成', '可复用机器人能力库'],
      },
    },
    validation: {
      eyebrow: '建设阶段',
      title: '先做软件与接口验证，再进入重硬件规模化。',
      description:
        '创业早期没有成熟实物并不可怕，关键是把工程路径讲清楚：哪些能力可以先用软件验证，哪些必须上真实机器人验证，每个里程碑如何降低部署风险。',
      labels: { goal: '目标', evidence: '证据', next: '下一步' },
      cards: [
        {
          title: '接口验证',
          promise: '证明 OpenClaw 可以通过 rosbridge 接入 ROS2 机器人。',
          evidence: 'WebSocket 端点、JSON 发布订阅示例、传感器 topic 和控制模板。',
          next: '在机器人端 rosbridge_server 和平台真实 topic 名称上验证。',
        },
        {
          title: '技能抽象',
          promise: '把分散动作变成 AI 可调用的能力层。',
          evidence: 'skills.yaml schema、动作组映射、参数限制和执行反馈。',
          next: '优先注册 5-8 个核心技能：stop、stand、walk、turn、sit_wave、status、camera、IMU。',
        },
        {
          title: '安全边界',
          promise: '让模型输出停留在 skill 层，而不是底层电机控制层。',
          evidence: 'Skill Server 检查速度、时长、机器人姿态、IMU 稳定性和急停。',
          next: '测试不安全指令的拒绝行为和恢复流程。',
        },
        {
          title: '演示就绪',
          promise: '即使硬件尚未产品化，也能做可信的演示路径。',
          evidence: '语音问候、视觉互动、安全动作组和开发者接入工作流。',
          next: '随着原型成熟，用真实机器人视频替换架构示意视觉。',
        },
      ],
    },
    workProof: {
      eyebrow: '工程工作量',
      title: '当前资产不只是一个概念页，而是一套平台基础设施的搭建。',
      description:
        '在产品化硬件成熟之前，ISACAI 先通过软件界面、接口契约、开发者 API 站、schema、工作流和中英文产品材料来建立可信度。',
      portal: {
        title: '内部 API Portal',
        url: 'http://isacai.space',
        description:
          '配套的 API 网站，用于内部开发、机器人智能体接入、skill 接口说明和团队侧文档沉淀。',
        cta: '打开 isacai.space',
      },
      cards: [
        {
          title: '公司产品官网',
          status: '公开叙事层',
          detail: '讲清 ISACAI、VLAClaw、产品定位、安全哲学、路线图、团队和合作路径。',
        },
        {
          title: '开发者 API 网站',
          status: '内部平台层',
          detail: '支持内部开发者查看 API 文档，推动机器人能力到智能体接入的工程路径。',
        },
        {
          title: 'Skill schema 与示例',
          status: '执行契约',
          detail: '定义动作组、运动命令、传感器读取和交互行为如何变成可验证 robot skills。',
        },
        {
          title: 'rosbridge 接入设计',
          status: '机器人连接层',
          detail: '沉淀 ROS2 topic 订阅、控制命令发布和未来 service 调用的 WebSocket JSON 模式。',
        },
        {
          title: 'Demo workflow 库',
          status: '试点准备',
          detail: '把语音问候、视觉互动、安全巡检和开发者接入组织成可复用的演示工作流。',
        },
        {
          title: '中英文产品材料',
          status: '融资与合作资产',
          detail: '让投资人、实验室、机器人团队、教育客户和香港/内地合作方都能看懂项目。',
        },
      ],
    },
    solution: {
      eyebrow: '方案',
      title: 'VLAClaw 将传统上位机升级为具身智能体层。',
      description:
        'OpenClaw 读取传感器话题，结合 VLM/LLM 完成推理，选择经过验证的技能，通过 rosbridge 下发，并根据执行反馈重新规划。',
      loop: ['观察', '理解', '规划', '选择技能', '执行', '监控', '重规划'],
      pillars: [
        {
          title: 'Perception In',
          description: '订阅摄像头、IMU、雷达、里程计和机器人状态话题，将其作为智能体 observation。',
          items: ['/usb_cam/image_raw', '/imu_raw', '/odom', '/scan', '/puppy_control/status'],
        },
        {
          title: 'Intelligence Core',
          description: '使用 OpenClaw、VLM、LLM、记忆和安全规则，把用户意图转成技能计划。',
          items: ['ASR / 唤醒词', 'VLM 场景理解', 'LLM 任务规划', '技能选择', '上下文记忆'],
        },
        {
          title: 'Skill Execution Out',
          description: '调用有边界的机器人技能，经过 Skill Server 校验后由 ROS2 下位机执行动作。',
          items: ['walk_forward()', 'turn_left()', 'stop()', 'sit_wave()', 'return_home()'],
        },
      ],
    },
    workflow: {
      eyebrow: '接入流程',
      title: '从已有 ROS2 机器人，到 OpenClaw 控制 demo 的实际路径。',
      description:
        '这是客户和开发者最需要看到的实现故事：VLAClaw 不要求替换机器人控制器，而是把已有机器人能力映射成 observation 和经过验证的 skills。',
      steps: [
        {
          title: '盘点机器人接口',
          description: '列出机器人已有 ROS2 topic、service、动作组、传感器流和安全指令。',
          artifact: 'Topic map + control checklist',
        },
        {
          title: '启用 rosbridge',
          description: '在机器人端运行 rosbridge_websocket，暴露稳定的 WebSocket 上位机接入口。',
          artifact: 'ws://robot_ip:9090 连接',
        },
        {
          title: '映射 observations',
          description: '把摄像头、IMU、雷达、里程计和状态 topic 规范化成 OpenClaw 可读取的 observation。',
          artifact: 'Observation adapter',
        },
        {
          title: '注册 skills',
          description: '将运动命令、动作组、service 和交互行为转换成带参数和限制的 skills。',
          artifact: 'skills.yaml + registry',
        },
        {
          title: '运行有边界 demo',
          description: '先从单指令和短工作流演示开始，再进入多步任务规划。',
          artifact: '语音问候 / 安全巡检 demo',
        },
        {
          title: '测量与加固',
          description: '记录延迟、成功率、拒绝行为、恢复路径和反馈质量，再进入部署。',
          artifact: 'Mission logs + safety report',
        },
      ],
    },
    compatibility: {
      eyebrow: '兼容性',
      title: '优先面向 ROS2 机器人，再扩展到更多具身形态。',
      description:
        '平台最适合已有 ROS2 topic，或能够把控制器桥接成少量命令、传感器和状态消息的机器人。',
      groups: [
        {
          name: '机器人形态',
          items: [
            { label: '四足机器狗', status: '核心 MVP', note: '行走、动作组、摄像头、IMU、问候演示。' },
            { label: '机械臂 / 夹爪', status: '规划扩展', note: 'Skill schema 可支持抓取、释放、位姿和视觉引导动作。' },
            { label: '交互显示机器人', status: '可先建模', note: '表情显示和语音技能可以作为非运动技能接入。' },
          ],
        },
        {
          name: '控制接口',
          items: [
            { label: 'ROS2 topic 发布 / 订阅', status: '核心路径', note: '用于传感器 observation 和运动命令。' },
            { label: 'ROS2 service call', status: '支持模式', note: '适合蜂鸣器、模式切换、动作触发和状态查询。' },
            { label: '动作组文件', status: '技能来源', note: '.d6a 或平台自定义动作文件可以变成语义化 skill。' },
          ],
        },
        {
          name: '计算部署',
          items: [
            { label: 'Raspberry Pi 5 网关', status: '边缘目标', note: '负责连接、轻量预处理、技能调度和本地服务。' },
            { label: '笔记本 / 工作站', status: '开发目标', note: '更适合编码、调试、OpenClaw 迭代和视觉检查。' },
            { label: '云端模型回退', status: '可选', note: '用于更重的 VLM/LLM 推理、长上下文规划和报告生成。' },
          ],
        },
      ],
    },
    architecture: {
      eyebrow: '系统架构',
      title: 'OpenClaw x rosbridge x ROS2：为了安全和部署而分层。',
      description:
        '架构将智能、通信和实时执行分开，使开发者无需在每台主机安装完整 ROS2，也能构建机器人智能体。',
      note: 'AI 只负责选择经过验证的技能，实时运动控制仍由机器人端 ROS2 节点执行。',
      layers: [
        {
          title: 'Human Interaction',
          description: '语音命令、文本指令、Web 控制台和开发者 API。',
          items: ['语音 / ASR', '文本任务', 'Web Console', 'Developer API'],
        },
        {
          title: 'OpenClaw / VLAClaw 上位机',
          description: '智能体运行时，负责多模态理解、规划、记忆和安全校验。',
          items: ['VLM / LLM planner', 'Skill registry', 'Safety validator', 'Execution monitor'],
        },
        {
          title: 'ROS2 Bridge Layer',
          description: 'rosbridge_websocket 通过 WebSocket JSON 暴露 ROS2 发布、订阅和服务调用。',
          items: ['ws://robot_ip:9090', 'Topic 发布 / 订阅', 'Service 调用', '跨平台上位机'],
        },
        {
          title: 'Robot Lower Computer',
          description: '机器人端 ROS2 节点负责传感器、动作组、电机、舵机、显示屏和机械臂。',
          items: ['puppy_control', 'ros_robot_controller', 'usb_cam', 'IMU / odom / motors'],
        },
      ],
      observation: {
        title: 'Observation In',
        lines: ['摄像头 topic -> rosbridge -> OpenClaw 视觉感知', 'IMU / odom / radar -> rosbridge -> 状态估计'],
      },
      command: {
        title: 'Command Out',
        lines: ['OpenClaw 技能决策 -> Skill Server', '经验证技能 -> rosbridge -> ROS2 控制 -> 机器人执行'],
      },
    },
    philosophy: {
      eyebrow: '安全哲学',
      title: '技能级控制，而不是危险的电机级生成。',
      description:
        'VLAClaw 将动作组、ROS2 命令、service 和导航行为抽象成语义化 robot skills。模型选择技能和参数，而不是生成底层执行器数值。',
      direct: {
        title: 'AI 直接控制电机',
        items: ['输出关节角 / PWM / 力矩', '真实硬件上难验证', '失败恢复不清晰', '四足平衡风险高', '动作组能力难复用'],
      },
      skill: {
        title: 'VLAClaw 技能级控制',
        items: ['输出经验证的 skill call', 'Skill Server 检查参数', 'ROS2 控制器执行稳定动作', '传感器反馈支持恢复', '动作组变成可复用能力'],
      },
    },
    skills: {
      eyebrow: '技能库',
      title: '从机器人动作组，到 AI 可调用的 skills。',
      description:
        'PuppyPi 风格的动作组，例如 sit_wave.d6a，可以变成语义化 skill，由 OpenClaw 从自然语言调用，同时由 Skill Server 执行安全约束。',
      categories: [
        {
          name: '四足运动',
          skills: [
            { name: 'stand_up()', detail: '恢复到稳定站立姿态。', safety: '要求没有正在执行的运动。' },
            { name: 'walk_forward(distance, speed)', detail: '以有边界的距离和速度向前移动。', safety: '速度限制与障碍检查。' },
            { name: 'turn_left(angle)', detail: '在安全角度范围内左转。', safety: '监控 IMU 稳定性。' },
          ],
        },
        {
          name: '动作组技能',
          skills: [
            { name: 'sit_wave()', detail: '播放 sit_wave.d6a，用于问候。', safety: '要求地面稳定且机器人没有行走。' },
            { name: 'bow()', detail: '执行预先编辑好的鞠躬动作组。', safety: '只允许从安全姿态开始。' },
            { name: 'dance()', detail: '顺序播放经过验证的动作组。', safety: '可被 stop 中断。' },
          ],
        },
        {
          name: '感知技能',
          skills: [
            { name: 'get_camera_frame()', detail: '读取当前摄像头观察。', safety: '只读操作。' },
            { name: 'detect_person()', detail: '对摄像头画面运行人员检测。', safety: '不产生运动副作用。' },
            { name: 'read_imu_state()', detail: '估计稳定性和运动状态。', safety: '运动前优先调用。' },
          ],
        },
        {
          name: '交互技能',
          skills: [
            { name: 'listen_command()', detail: '采集语音命令给 OpenClaw。', safety: '由唤醒词触发。' },
            { name: 'display_expression(emotion)', detail: '在机器人显示屏上展示表情。', safety: '静止或低速运动时允许。' },
            { name: 'greet_user()', detail: '语音、招手和表情组合问候。', safety: '逐步校验技能链。' },
          ],
        },
      ],
      yamlTitle: 'skills.yaml 示例',
      yamlLines: [
        'sit_wave:',
        '  type: action_group',
        '  file: sit_wave.d6a',
        '  description: Robot sits and waves one front leg.',
        '  duration: 5.3',
        '  safety:',
        '    requires_stable_ground: true',
        '    allow_while_walking: false',
        '',
        'walk_forward:',
        '  type: locomotion',
        '  description: Move forward for a given duration and speed.',
        '  parameters:',
        '    duration: { type: number, min: 0.1, max: 5.0 }',
        '    speed: { type: number, min: 0.05, max: 0.4 }',
      ],
      planTitle: '自然语言到技能计划',
      planLines: ['User: "走到我面前，然后向我打招呼。"', 'Plan:', '  1. detect_person()', '  2. walk_forward(duration=2.0, speed=0.25)', '  3. stop()', '  4. sit_wave()', '  5. display_expression("happy")'],
    },
    developer: {
      eyebrow: '开发者接口',
      title: '通过 WebSocket JSON 接入 ROS2 机器人。',
      description:
        'VLAClaw 提供 rosbridge 和 skill call 示例，让开发者无需完整 ROS2 主机环境，也能订阅机器人 observation 并调用有边界的行为。',
      portal: {
        title: '面向内部开发的 API Portal',
        description:
          '平台配套 API 网站，用于团队文档、机器人智能体接口、skill 调用、接入笔记和未来 SDK access。',
        url: 'http://isacai.space',
        cta: '打开 API Portal',
      },
      endpointLabel: 'WebSocket 端点',
      endpoint: 'ws://robot_ip:9090',
      note: '示例接口。真实 topic 名称和消息结构可以按机器人平台定制。',
      snippets: [
        {
          title: '订阅 IMU',
          lines: ['{', '  "op": "subscribe",', '  "topic": "/imu_raw",', '  "type": "sensor_msgs/Imu"', '}'],
        },
        {
          title: '订阅摄像头',
          lines: ['{', '  "op": "subscribe",', '  "topic": "/usb_cam/image_raw",', '  "type": "sensor_msgs/Image"', '}'],
        },
        {
          title: '发布运动',
          lines: ['{', '  "op": "publish",', '  "topic": "/puppy_control",', '  "msg": {', '    "action": "walk_forward",', '    "duration": 1.5,', '    "speed": 0.2', '  }', '}'],
        },
        {
          title: '调用技能',
          lines: ['{', '  "skill": "sit_wave",', '  "params": { "repeat_count": 1 },', '  "safety_check": true', '}'],
        },
      ],
      pythonTitle: 'Python WebSocket client 草图',
      pythonLines: ['import json, websocket', '', 'ws = websocket.create_connection("ws://robot_ip:9090")', 'ws.send(json.dumps({', '    "op": "subscribe",', '    "topic": "/imu_raw",', '    "type": "sensor_msgs/Imu"', '}))', '', 'ws.send(json.dumps({', '    "skill": "sit_wave",', '    "params": {},', '    "safety_check": True', '}))'],
      ctas: ['查看 API 文档', '申请 SDK Access', '讨论接入方案'],
    },
    demos: {
      eyebrow: '演示场景',
      title: 'Input -> Reasoning -> Skill -> ROS2 Execution -> Feedback。',
      description:
        '演示被设计成可靠工作流，而不是夸大成完全自主。每个行为都被限制在技能和机器人端控制器边界内。',
      cards: [
        {
          title: '语音问候',
          input: '用户说：“走过来打个招呼。”',
          reasoning: 'OpenClaw 将命令分解为行走、停止、问候和表情步骤。',
          skills: 'walk_forward -> stop -> sit_wave -> display_expression("happy")',
          result: '机器人移动、问候、返回完成状态，并持续监控 IMU。',
        },
        {
          title: '视觉互动',
          input: '摄像头检测到有人靠近。',
          reasoning: 'VLM 确认人员，planner 选择非接触式问候行为。',
          skills: 'detect_person -> greet_user -> sit_wave',
          result: '机器人招手并显示欢迎表情，不生成底层电机指令。',
        },
        {
          title: '安全巡检',
          input: '用户说：“去前面看一下。”',
          reasoning: 'Planner 串联移动、拍照、场景总结和返回行为。',
          skills: 'move_forward -> capture_image -> analyze_scene -> return_home',
          result: '生成短任务日志，包含执行状态和失败兜底。',
        },
        {
          title: '开发者接入',
          input: '开发者通过 WebSocket JSON 连接。',
          reasoning: '主机订阅 observation，并从外部应用调用注册技能。',
          skills: 'subscribe topics -> call skill API -> monitor status',
          result: '不安装完整 ROS2，也能快速搭建机器人 demo。',
        },
      ],
    },
    modules: {
      eyebrow: '产品模块',
      title: '面向机器人具身智能的产品矩阵。',
      description:
        'VLAClaw 不是单个遥控页面，而是一套平台栈。每个模块都对应智能上位机层中的明确角色。',
      cards: [
        { title: 'OpenClaw Runtime', description: '智能体循环、工具调用、任务规划、上下文记忆和云端回退。', tags: ['VLM / LLM', 'Memory', 'Planner'] },
        { title: 'ROSBridge Adapter', description: '面向 ROS2 topic 发布订阅、service 调用和 JSON 序列化的 WebSocket client。', tags: ['rosbridge', '9090', 'JSON'] },
        { title: 'Perception Hub', description: '将摄像头、IMU、雷达、里程计和状态流统一成 observation。', tags: ['Camera', 'IMU', 'Odom'] },
        { title: 'Skill Server', description: '技能注册表、参数校验、执行调度和反馈跟踪。', tags: ['Registry', 'Safety', 'Status'] },
        { title: 'ActionGroup Manager', description: '把 sit_wave.d6a 这类动作组转换为可调用机器人技能。', tags: ['.d6a', 'Actions', 'Reuse'] },
        { title: 'Safety Guard', description: '速度限制、姿态检查、急停和重复命令过滤。', tags: ['Limits', 'E-stop', 'Recovery'] },
      ],
    },
    useCases: {
      eyebrow: '应用场景',
      title: '面向实验室、开发者、OEM 合作方和具身智能演示。',
      description:
        '平台从机器狗 MVP 工作流开始，逐步扩展到机械臂、显示屏、导航和多具身系统。',
      labels: { problem: '问题', solution: 'VLAClaw', outcome: '结果' },
      cards: [
        { title: '机器人教学平台', problem: '学生需要把 ROS2、VLA 和机器人控制真正连起来。', solution: '用 VLAClaw 做 topic、skill 和 agent workflow 实验平台。', outcome: '更快完成教学 demo 和可复现实验项目。' },
        { title: '具身智能科研', problem: '研究者需要真实机器人反馈，但不想手写所有接口。', solution: '用稳定 API 暴露 observation 和 skills，支持 VLA/VLM/LLM 实验。', outcome: '带清晰安全边界的闭环实验。' },
        { title: '展厅互动', problem: '展示机器人需要可靠的问候、语音、表情和舞台化行为。', solution: '用经过验证的技能链完成语音互动和视觉问候。', outcome: '更可信的现场 demo 和有边界的恢复能力。' },
        { title: '巡检原型', problem: '低成本巡检 demo 需要摄像头、IMU 和状态反馈。', solution: '使用感知技能完成移动、场景拍摄、报告和返回。', outcome: '工业强化前的可行原型。' },
        { title: '机器人 OEM 接入', problem: '厂商想增加 AI 能力，但不想重写机器人控制栈。', solution: '保留 ROS2 下位机控制，增加智能上位机网关。', outcome: '从遥控产品到 AI 产品的清晰升级路径。' },
        { title: '开发者平台', problem: '应用开发者想接机器人，但不想维护完整 ROS2 环境。', solution: '以 WebSocket JSON 和 Skill API 作为集成表面。', outcome: '在 Windows、Linux、macOS 上更快做原型。' },
      ],
    },
    offerings: {
      eyebrow: '试点合作',
      title: '适合早期具身智能创业团队的具体合作包。',
      description:
        '不要假装平台已经是量产硬件产品。ISACAI 现阶段更适合提供聚焦的试点合作，把真实机器人能力转成可运行的具身智能 demo。',
      cards: [
        {
          title: 'ROS2 Robot Integration Sprint',
          ideal: '适合已有 ROS2 机器人的实验室或机器人团队。',
          includes: ['接口盘点', 'rosbridge 配置', '首批 5 个 skills', '传感器订阅 demo', '接入报告'],
          outcome: '机器人可以通过 VLAClaw skill 层控制，而不再只依赖人工遥控上位机。',
        },
        {
          title: 'Education Demo Kit',
          ideal: '适合高校和 AI / 机器人课程。',
          includes: ['技能库模板', 'Developer API 示例', '可用于教学的架构图', '语音命令 demo 方案', '学生项目题目'],
          outcome: '一套课程或 workshop 可以连贯讲清 ROS2、OpenClaw、VLA 和技能编排。',
        },
        {
          title: 'Exhibition Interaction Prototype',
          ideal: '适合展厅、创业赛事和创新展示。',
          includes: ['语音问候脚本', '动作组 skills', '表情显示流程', '操作员安全面板', '演示 runbook'],
          outcome: '做出稳定的舞台化互动，不夸大完全自主，也能讲清具身智能价值。',
        },
      ],
    },
    resources: {
      eyebrow: '资源',
      title: '让平台可复现的工程笔记。',
      description:
        '公司官网应该成为持续的产品和研究入口，而不只是 landing page。以下栏目已经为真实文章和 demo log 预留。',
      cards: [
        { category: '工程笔记', title: 'rosbridge 如何让 AI agent 接入 ROS2 机器人', summary: '讲清 WebSocket JSON、topic 订阅和 service 调用的实践路径。' },
        { category: 'Demo Log', title: '把 sit_wave.d6a 转换成 OpenClaw skill', summary: '说明动作组如何变成语义化、可验证的机器人能力。' },
        { category: 'Research Note', title: '为什么 VLA 机器人需要 skill-level control', summary: '从可靠性角度解释为什么不应直接预测关节或舵机参数。' },
      ],
    },
    team: {
      eyebrow: '团队',
      title: '连接 AI、机器人、通信、硬件和产品的跨学科团队。',
      description:
        '这个公司故事最强的地方，是团队覆盖了可靠具身系统需要的关键能力：感知、控制、边缘计算、网络和部署策略。',
      capabilities: ['AI & 计算机视觉', '机器人控制', '无线通信', 'FPGA / 边缘加速', '产品策略', '云边协同系统'],
      members: [
        { name: '李泽霖 博士', role: 'Founder / AI & Vision', value: '负责 OpenClaw agent 集成、VLA/VLM 工作流、视觉感知和技能规划。', background: '香港城市大学' },
        { name: '冉卓恒', role: 'FPGA / Edge Engineer', value: '构建机器人侧部署所需的硬件加速和边缘计算基础。', background: '香港城市大学' },
        { name: '郭浩 博士', role: 'Hardware Architect', value: '连接芯片设计、传感器、控制板和嵌入式硬件决策。', background: '香港城市大学' },
        { name: '王亚君 女士', role: 'Product & Finance', value: '负责产品策略、部署优先级、财务和合作路径。', background: 'CMHK / Product Strategy' },
        { name: '赵欣然 博士', role: 'Communication Architect', value: '负责低时延网络、自组网通信和机器人连接稳定性。', background: '香港城市大学' },
        { name: '陈辉铭 教授', role: 'Scientific Advisor', value: '指导云边协同、可靠性思路和研究路线。', background: '北京科技大学' },
        { name: '王陈炜 博士', role: 'AI Scientist', value: '支持计算机视觉、模糊感知、图像算法和具身智能研究。', background: '香港理工大学' },
      ],
      affiliations: '学术与生态背景',
    },
    roadmap: {
      eyebrow: '路线图',
      title: '从语音 MVP 到多机器人编排的可靠性优先路线。',
      description:
        '路线图刻意分阶段推进：先把单机器人技能做安全，再加入感知、恢复、导航和多具身编排。',
      phases: [
        { phase: 'Phase 1', title: 'Voice Command MVP', status: '当前', items: ['5-8 个核心技能', '语音命令', 'rosbridge 连接', '手动安全停止'] },
        { phase: 'Phase 2', title: 'Skill Registry and Developer API', status: '下一步', items: ['skills.yaml', 'Skill Server', 'Python / JS SDK', '开发者文档'] },
        { phase: 'Phase 3', title: 'Multimodal Perception', status: '规划中', items: ['camera topic', 'VLM 图像理解', 'IMU 监控', '人员 / 障碍检测'] },
        { phase: 'Phase 4', title: 'Workflow Automation', status: '规划中', items: ['多步任务', '失败重试', 'mission logging', '状态感知重规划'] },
        { phase: 'Phase 5', title: 'Multi-Robot and Multi-Embodiment', status: '未来', items: ['机器狗 + 机械臂 + 显示屏', '共享技能注册表', '云边协同编排'] },
      ],
    },
    faq: {
      eyebrow: '常见问题',
      title: '给客户、开发者和投资人的清晰回答。',
      description:
        '创业官网内容要厚，就要主动回答外界会问的问题，尤其是在产品仍处于从原型到试点的阶段。',
      items: [
        {
          question: 'VLAClaw 是机器人控制器吗？',
          answer: '不是。VLAClaw 是智能上位机和技能编排层。机器人端 ROS2 节点仍然负责实时运动和硬件控制。',
        },
        {
          question: 'AI 会直接输出电机命令吗？',
          answer: '不会。模型输出的是技能选择和有边界的参数。Skill Server 校验之后，再由 ROS2 执行底层动作。',
        },
        {
          question: '开发者必须在上位机安装 ROS2 吗？',
          answer: '核心接入路径不需要。上位机可以通过 rosbridge WebSocket 和 JSON 消息连接，ROS2 运行在机器人端。',
        },
        {
          question: '最终硬件未成熟前，网站可以展示什么？',
          answer: '可以先展示架构、Skill API、rosbridge 示例、动作组映射、开发者工作流和软件 demo。随着原型成熟，再补真实机器人视频。',
        },
        {
          question: '最容易支持哪些机器人？',
          answer: '第一目标是 ROS2 四足机器人。只要机器人有稳定命令接口、传感器 topic 和急停行为，都可以评估接入。',
        },
      ],
    },
    contact: {
      eyebrow: '联系',
      title: '和 ISACAI 合作的三条路径。',
      description:
        '无论你是在接入 ROS2 机器人、搭建科研 demo，还是探索产品部署，下一步都应该清楚。',
      channels: [
        { title: 'Technical Integration', description: '面向机器人厂商、实验室和开发者，把 ROS2 机器人接入 VLAClaw。', cta: '预约技术讨论' },
        { title: 'Research Collaboration', description: '面向高校和具身智能团队，合作 VLA、OpenClaw、skill learning 和闭环规划。', cta: '探索科研合作' },
        { title: 'Product / Pilot Deployment', description: '面向教育、展厅、演示和 OEM 合作方，部署可运行的机器人体验。', cta: '联系合作团队' },
      ],
      form: {
        name: '姓名',
        organization: '机构',
        email: '邮箱',
        interest: '兴趣类型',
        message: '留言',
        submit: '准备咨询',
      },
      email: 'contact@gettingrice.com',
    },
    footer: {
      title: 'ISACAI / VLAClaw',
      subtitle: '面向 ROS2 机器人的 OpenClaw 智能上位机平台。',
      stackLabel: '核心技术栈',
      stack: ['OpenClaw', 'ROS2', 'rosbridge', 'Raspberry Pi 5', 'Skill Server', 'VLM / LLM'],
      copyright: '© 2026 香港得米人工智能有限公司 版权所有',
    },
  },
}

export function getTranslation(lang: Language) {
  return translations[lang]
}
